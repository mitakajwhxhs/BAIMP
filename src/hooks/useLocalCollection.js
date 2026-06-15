import { useCallback, useEffect, useMemo, useState } from 'react'
import { getSupabase, hasSupabase } from '../lib/supabaseClient.js'
import { readStoredJson, writeStoredJson } from '../lib/storage.js'

const storageKey = (table) => `baimp-en-${table}`

const mergeRequiredFallback = (
  items,
  fallback,
  requiredIds = [],
  preferFallbackFields = [],
) => {
  if (!Array.isArray(items)) return items

  const fallbackById = new Map(fallback.map((item) => [item.id, item]))
  const mergedItems = preferFallbackFields.length
    ? items.map((item) => {
        const fallbackItem = fallbackById.get(item.id)
        if (!fallbackItem) return item

        const preferredValues = Object.fromEntries(
          preferFallbackFields
            .filter((field) => fallbackItem[field] !== undefined)
            .map((field) => [field, fallbackItem[field]]),
        )

        return { ...item, ...preferredValues }
      })
    : items

  if (!requiredIds.length) return mergedItems

  const itemIds = new Set(mergedItems.map((item) => item.id))
  const missingItems = fallback.filter(
    (item) => requiredIds.includes(item.id) && !itemIds.has(item.id),
  )

  return [...mergedItems, ...missingItems]
}

export function useLocalCollection(table, fallback = [], options = {}) {
  const remote = options.remote ?? hasSupabase
  const orderBy = options.orderBy
  const skipRemoteLoad = Boolean(options.skipRemoteLoad)
  const requiredFallbackIdsKey = (options.requiredFallbackIds || []).join('\u0000')
  const preferFallbackFieldsKey = (options.preferFallbackFields || []).join('\u0000')
  const [items, setItems] = useState(() => {
    const stored = readStoredJson(storageKey(table), fallback)
    return mergeRequiredFallback(
      stored,
      fallback,
      options.requiredFallbackIds,
      options.preferFallbackFields,
    )
  })
  const [loading, setLoading] = useState(Boolean(remote))
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    async function loadRemote() {
      if (!remote || skipRemoteLoad) {
        setLoading(false)
        return
      }

      setLoading(true)
      const sortedTables = ['trainers', 'courses', 'news', 'partners', 'certificates', 'testimonials']
      const orderColumn = orderBy || (sortedTables.includes(table) ? 'sort_order' : 'created_at')
      const ascending = orderColumn !== 'created_at'
      const supabase = await getSupabase()
      const { data, error: remoteError } = await supabase.from(table).select('*').order(orderColumn, { ascending })

      if (!active) return

      if (remoteError) {
        setError(remoteError.message)
      } else if (data) {
        setItems(
          mergeRequiredFallback(
            data,
            fallback,
            requiredFallbackIdsKey ? requiredFallbackIdsKey.split('\u0000') : [],
            preferFallbackFieldsKey ? preferFallbackFieldsKey.split('\u0000') : [],
          ),
        )
      }
      setLoading(false)
    }

    loadRemote()
    return () => {
      active = false
    }
  }, [
    fallback,
    orderBy,
    preferFallbackFieldsKey,
    requiredFallbackIdsKey,
    remote,
    skipRemoteLoad,
    table,
  ])

  useEffect(() => {
    writeStoredJson(storageKey(table), items)
  }, [items, table])

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const left = a.sort_order ?? 999
      const right = b.sort_order ?? 999
      return left - right
    })
  }, [items])

  const createItem = useCallback(
    async (item) => {
      const next = {
        id: item.id || crypto.randomUUID(),
        created_at: item.created_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...item,
      }

      if (remote) {
        const supabase = await getSupabase()
        const { data, error: remoteError } = await supabase
          .from(table)
          .insert(next)
          .select()
          .single()
        if (remoteError) throw remoteError
        setItems((current) => [...current, data])
        return data
      }

      setItems((current) => [...current, next])
      return next
    },
    [remote, table],
  )

  const updateItem = useCallback(
    async (id, patch) => {
      const nextPatch = { ...patch, updated_at: new Date().toISOString() }

      if (remote) {
        const supabase = await getSupabase()
        const { data, error: remoteError } = await supabase
          .from(table)
          .update(nextPatch)
          .eq('id', id)
          .select()
          .single()
        if (remoteError) throw remoteError
        setItems((current) => current.map((item) => (item.id === id ? data : item)))
        return data
      }

      setItems((current) =>
        current.map((item) => (item.id === id ? { ...item, ...nextPatch } : item)),
      )
      return nextPatch
    },
    [remote, table],
  )

  const deleteItem = useCallback(
    async (id) => {
      if (remote) {
        const supabase = await getSupabase()
        const { error: remoteError } = await supabase.from(table).delete().eq('id', id)
        if (remoteError) throw remoteError
      }
      setItems((current) => current.filter((item) => item.id !== id))
    },
    [remote, table],
  )

  return {
    items: sortedItems,
    rawItems: items,
    setItems,
    createItem,
    updateItem,
    deleteItem,
    loading,
    error,
  }
}

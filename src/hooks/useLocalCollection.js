import { useCallback, useEffect, useMemo, useState } from 'react'
import { hasSupabase, supabase } from '../lib/supabaseClient.js'

const storageKey = (table) => `baimp-en-${table}`

const mergeRequiredFallback = (items, fallback, requiredIds = []) => {
  if (!requiredIds.length || !Array.isArray(items)) return items

  const itemIds = new Set(items.map((item) => item.id))
  const missingItems = fallback.filter(
    (item) => requiredIds.includes(item.id) && !itemIds.has(item.id),
  )

  return [...items, ...missingItems]
}

export function useLocalCollection(table, fallback = [], options = {}) {
  const remote = options.remote ?? hasSupabase
  const [items, setItems] = useState(() => {
    const raw = localStorage.getItem(storageKey(table))
    const stored = raw ? JSON.parse(raw) : fallback
    return mergeRequiredFallback(stored, fallback, options.requiredFallbackIds)
  })
  const [loading, setLoading] = useState(Boolean(remote))
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    async function loadRemote() {
      if (!remote || options.skipRemoteLoad) return

      setLoading(true)
      const sortedTables = ['trainers', 'courses', 'news', 'partners', 'certificates', 'testimonials']
      const orderColumn = options.orderBy || (sortedTables.includes(table) ? 'sort_order' : 'created_at')
      const ascending = orderColumn !== 'created_at'
      const { data, error: remoteError } = await supabase.from(table).select('*').order(orderColumn, { ascending })

      if (!active) return

      if (remoteError) {
        setError(remoteError.message)
      } else if (data) {
        setItems(mergeRequiredFallback(data, fallback, options.requiredFallbackIds))
      }
      setLoading(false)
    }

    loadRemote()
    return () => {
      active = false
    }
  }, [fallback, options.orderBy, options.requiredFallbackIds, options.skipRemoteLoad, remote, table])

  useEffect(() => {
    localStorage.setItem(storageKey(table), JSON.stringify(items))
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

import { useCallback, useEffect, useState } from 'react'
import { siteContent } from '../data/siteContent.js'
import { getSupabase, hasSupabase } from '../lib/supabaseClient.js'
import { readStoredJson, writeStoredJson } from '../lib/storage.js'

const key = 'baimp-site-settings'
const retiredCommunityValue = ['E', 'A', 'A', 'P'].join('')

const mergeSettings = (saved) => {
  if (!saved || saved.language !== siteContent.language) return siteContent

  const merged = {
    ...siteContent,
    ...saved,
    contact: {
      ...siteContent.contact,
      ...saved.contact,
      address: siteContent.contact.address,
      mapQuery: siteContent.contact.mapQuery,
    },
  }

  return {
    ...merged,
    stats: (merged.stats || siteContent.stats)
      .filter((stat) => stat.label !== 'accredited trainings')
      .map((stat) => {
        if (
          stat.label === 'professional community' ||
          stat.label === 'people trained' ||
          String(stat.value).toUpperCase() === retiredCommunityValue
        ) {
          return { label: 'trained specialists', value: '100+' }
        }

        if (
          stat.label === 'trainers and specialists' &&
          ['8', '10'].includes(stat.value)
        ) {
          return { ...stat, value: '18' }
        }

        return stat
      }),
  }
}

export function useSiteSettings() {
  const [settings, setSettings] = useState(() =>
    mergeSettings(readStoredJson(key, siteContent)),
  )

  const saveSettings = useCallback((next) => {
    const sanitized = mergeSettings(next)
    setSettings(sanitized)
    writeStoredJson(key, sanitized)

    if (hasSupabase) {
      getSupabase()
        .then((supabase) =>
          supabase.from('site_settings').upsert({
            key: 'site_content',
            value: sanitized,
            is_public: true,
            updated_at: new Date().toISOString(),
          }),
        )
        .then(({ error }) => {
          if (error) console.error(error)
        })
        .catch((error) => console.error(error))
    }
  }, [])

  useEffect(() => {
    writeStoredJson(key, settings)
  }, [settings])

  useEffect(() => {
    let active = true

    async function loadRemoteSettings() {
      if (!hasSupabase) return

      const supabase = await getSupabase()
      const { data, error } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'site_content')
        .maybeSingle()

      if (!active || error || !data?.value) return
      setSettings(mergeSettings(data.value))
    }

    loadRemoteSettings()
    return () => {
      active = false
    }
  }, [])

  return { settings, saveSettings }
}

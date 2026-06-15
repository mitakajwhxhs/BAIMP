import { useCallback, useEffect, useState } from 'react'
import { siteContent } from '../data/siteContent.js'
import { getSupabase, hasSupabase } from '../lib/supabaseClient.js'
import { readStoredJson, writeStoredJson } from '../lib/storage.js'

const key = 'baimp-site-settings'

const mergeSettings = (saved) => {
  if (!saved || saved.language !== siteContent.language) return siteContent

  const merged = { ...siteContent, ...saved }
  const hasLegacyTrainerCount = merged.stats?.some(
    (stat) =>
      stat.label === 'trainers and specialists' && ['8', '10'].includes(stat.value),
  )

  if (!hasLegacyTrainerCount) return merged

  return {
    ...merged,
    stats: merged.stats.map((stat) =>
      stat.label === 'trainers and specialists' ? { ...stat, value: '18' } : stat,
    ),
  }
}

export function useSiteSettings() {
  const [settings, setSettings] = useState(() =>
    mergeSettings(readStoredJson(key, siteContent)),
  )

  const saveSettings = useCallback((next) => {
    setSettings(next)
    writeStoredJson(key, next)

    if (hasSupabase) {
      getSupabase()
        .then((supabase) =>
          supabase.from('site_settings').upsert({
            key: 'site_content',
            value: next,
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

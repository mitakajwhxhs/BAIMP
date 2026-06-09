import { useCallback, useEffect, useState } from 'react'
import { siteContent } from '../data/baimpData.js'
import { hasSupabase, supabase } from '../lib/supabaseClient.js'

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
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem(key)
    if (!saved) return siteContent

    return mergeSettings(JSON.parse(saved))
  })

  const saveSettings = useCallback((next) => {
    setSettings(next)
    localStorage.setItem(key, JSON.stringify(next))

    if (hasSupabase) {
      supabase
        .from('site_settings')
        .upsert({
          key: 'site_content',
          value: next,
          is_public: true,
          updated_at: new Date().toISOString(),
        })
        .then(({ error }) => {
          if (error) console.error(error)
        })
    }
  }, [])

  useEffect(() => {
    let active = true

    async function loadRemoteSettings() {
      if (!hasSupabase) return

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

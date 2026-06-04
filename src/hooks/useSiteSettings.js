import { useCallback, useEffect, useState } from 'react'
import { siteContent } from '../data/baimpData.js'
import { hasSupabase, supabase } from '../lib/supabaseClient.js'

const key = 'baimp-site-settings'

export function useSiteSettings() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem(key)
    return saved ? { ...siteContent, ...JSON.parse(saved) } : siteContent
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
      setSettings({ ...siteContent, ...data.value })
    }

    loadRemoteSettings()
    return () => {
      active = false
    }
  }, [])

  return { settings, saveSettings }
}

import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './languageContext.js'

function detectBrowserLanguage() {
  if (typeof navigator === 'undefined') return 'en'

  const preferences = navigator.languages?.length ? navigator.languages : [navigator.language]
  const firstSupported = preferences
    .map((language) => language?.toLowerCase())
    .find((language) => language?.startsWith('bg') || language?.startsWith('en'))

  return firstSupported?.startsWith('bg') ? 'bg' : 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(detectBrowserLanguage)

  useEffect(() => {
    const updateLanguage = () => setLanguage(detectBrowserLanguage())

    document.documentElement.lang = language
    window.addEventListener('languagechange', updateLanguage)

    return () => window.removeEventListener('languagechange', updateLanguage)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      isBulgarian: language === 'bg',
      select: (english, bulgarian) => (language === 'bg' ? bulgarian : english),
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

import { useEffect, useMemo } from 'react'
import { LanguageContext } from './languageContext.js'

export function LanguageProvider({ children }) {
  const language = 'en'

  useEffect(() => {
    document.documentElement.lang = 'en'
  }, [])

  const value = useMemo(
    () => ({
      language,
      isBulgarian: false,
      select: (english) => english,
    }),
    [],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

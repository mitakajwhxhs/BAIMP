import { SearchX } from 'lucide-react'
import { useLanguage } from '../../i18n/useLanguage.js'

export function EmptyState({ title, text }) {
  const { select } = useLanguage()
  const resolvedTitle = title || select('No results found', 'Няма намерени резултати')
  const resolvedText = text || select('Try a different search.', 'Опитайте с различно търсене.')

  return (
    <div className="card-soft flex flex-col items-center justify-center px-6 py-14 text-center">
      <SearchX className="mb-4 h-10 w-10 text-[#a9844c]" />
      <h3 className="text-xl font-semibold text-[#153b34]">{resolvedTitle}</h3>
      <p className="mt-2 max-w-md text-[#63736d]">{resolvedText}</p>
    </div>
  )
}

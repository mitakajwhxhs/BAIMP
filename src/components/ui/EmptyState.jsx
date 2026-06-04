import { SearchX } from 'lucide-react'

export function EmptyState({ title = 'Няма резултати', text = 'Опитайте с различно търсене.' }) {
  return (
    <div className="card-soft flex flex-col items-center justify-center px-6 py-14 text-center">
      <SearchX className="mb-4 h-10 w-10 text-[#a9844c]" />
      <h3 className="text-xl font-semibold text-[#153b34]">{title}</h3>
      <p className="mt-2 max-w-md text-[#63736d]">{text}</p>
    </div>
  )
}

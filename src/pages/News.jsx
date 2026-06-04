import { useMemo, useState } from 'react'
import { CalendarDays, Newspaper } from 'lucide-react'
import { Badge } from '../components/ui/Badge.jsx'
import { EmptyState } from '../components/ui/EmptyState.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { SearchField } from '../components/ui/SearchField.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useFilteredList } from '../hooks/useFilteredList.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { news } from '../data/baimpData.js'

const formatDate = (value) => {
  if (!value) return ''
  const date = new Date(`${value}T00:00:00`)
  if (Number.isNaN(date.getTime())) return value

  return date.toLocaleDateString('bg-BG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function News() {
  useDocumentTitle('Новини')
  const { items } = useLocalCollection('news', news)
  const [query, setQuery] = useState('')
  const published = useMemo(() => items.filter((item) => item.is_published), [items])
  const filtered = useFilteredList(published, query, ['title', 'summary', 'category', 'content'])

  return (
    <>
      <PageHero
        eyebrow="Новини"
        title="Актуални новини, събития и съобщения"
        text="Следете информация за обучения, семинари, професионални срещи и важни съобщения от БАИМП."
      >
        <div className="max-w-xl">
          <SearchField value={query} onChange={setQuery} placeholder="Търсене по тема, заглавие или категория" />
        </div>
      </PageHero>
      <section className="section-pad">
        <div className="container-page">
          {filtered.length ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {filtered.map((item) => (
                <article key={item.id} className="card-soft hover-lift group overflow-hidden">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="image-zoom aspect-[16/9] w-full bg-[#e8dfd2] object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <div className="grid gap-4 p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      {item.category ? <Badge>{item.category}</Badge> : null}
                      {item.date ? (
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#63736d]">
                          <CalendarDays className="h-4 w-4 text-[#a9844c]" />
                          {formatDate(item.date)}
                        </span>
                      ) : null}
                    </div>
                    <div>
                      <Newspaper className="mb-3 h-7 w-7 text-[#a9844c]" />
                      <h2 className="text-2xl font-semibold leading-tight text-[#153b34]">{item.title}</h2>
                      {item.summary ? <p className="mt-3 text-base leading-7 text-[#63736d]">{item.summary}</p> : null}
                    </div>
                    {item.content?.length ? (
                      <div className="grid gap-3 text-base leading-8 text-[#63736d]">
                        {item.content.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </>
  )
}

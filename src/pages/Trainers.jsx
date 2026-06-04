import { useMemo, useState } from 'react'
import { TrainerCard } from '../components/TrainerCard.jsx'
import { EmptyState } from '../components/ui/EmptyState.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { SearchField } from '../components/ui/SearchField.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useFilteredList } from '../hooks/useFilteredList.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { trainers } from '../data/baimpData.js'

export function Trainers() {
  useDocumentTitle('Обучители')
  const { items } = useLocalCollection('trainers', trainers)
  const [query, setQuery] = useState('')
  const published = useMemo(() => items.filter((trainer) => trainer.is_published), [items])
  const filtered = useFilteredList(published, query, ['name', 'title', 'city', 'specialties', 'topics'])

  return (
    <>
      <PageHero
        eyebrow="Обучители"
        title="Психолози, психотерапевти и преподаватели"
        text="Филтрирайте по име, специалност или град и разгледайте детайлните профили на специалистите."
      >
        <div className="max-w-xl">
          <SearchField value={query} onChange={setQuery} placeholder="Търсене по име, специалност или град" />
        </div>
      </PageHero>
      <section className="section-pad">
        <div className="container-page">
          {filtered.length ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {filtered.map((trainer) => (
                <TrainerCard key={trainer.id} trainer={trainer} />
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

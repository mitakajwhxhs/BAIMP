import { useMemo, useState } from 'react'
import { TrainerCard } from '../components/TrainerCard.jsx'
import { EmptyState } from '../components/ui/EmptyState.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { SearchField } from '../components/ui/SearchField.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useFilteredList } from '../hooks/useFilteredList.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { isPublicTrainer, trainerIds, trainers } from '../data/baimpData.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { getLocalizedData, localizeItems } from '../i18n/localizedData.js'

export function Trainers() {
  const { language, select } = useLanguage()
  useDocumentTitle(select('Trainers', 'Обучители'))
  const { items } = useLocalCollection('trainers', trainers, {
    remote: false,
    requiredFallbackIds: trainerIds,
  })
  const localizedData = getLocalizedData(language)
  const [query, setQuery] = useState('')
  const published = useMemo(
    () => localizeItems(items, localizedData.trainers, language).filter(isPublicTrainer),
    [items, language, localizedData.trainers],
  )
  const filtered = useFilteredList(published, query, ['name', 'title', 'city', 'specialties', 'topics'])

  return (
    <>
      <PageHero
        eyebrow={select('About Us', 'За нас')}
        title={select('Trainers', 'Обучители')}
        text={select(
          'Browse psychologists, psychotherapists and lecturers connected with the training environment of BAIMP.',
          'Разгледайте психолози, психотерапевти и преподаватели, свързани с обучителната среда на БАИМП.',
        )}
      >
        <div className="max-w-xl">
          <SearchField
            value={query}
            onChange={setQuery}
            placeholder={select('Search by name, specialty or city', 'Търсене по име, специалност или град')}
          />
        </div>
      </PageHero>
      <section className="section-pad section-finish">
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

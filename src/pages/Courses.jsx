import { useMemo, useState } from 'react'
import { BookingModal } from '../components/BookingModal.jsx'
import { CourseCard } from '../components/CourseCard.jsx'
import { EmptyState } from '../components/ui/EmptyState.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { SearchField } from '../components/ui/SearchField.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useFilteredList } from '../hooks/useFilteredList.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { courses } from '../data/baimpData.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { getLocalizedData, localizeItems } from '../i18n/localizedData.js'

export function Courses() {
  const { language, select } = useLanguage()
  useDocumentTitle(select('Courses', 'Курсове'))
  const { items } = useLocalCollection('courses', courses, { remote: false })
  const localizedData = getLocalizedData(language)
  const [query, setQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const published = useMemo(
    () => localizeItems(items, localizedData.courses, language).filter((course) => course.is_published),
    [items, language, localizedData.courses],
  )
  const filtered = useFilteredList(published, query, ['title', 'summary', 'duration', 'topics'])

  return (
    <>
      <PageHero
        eyebrow={select('Training', 'Обучение')}
        title={select('Certified courses for specialists', 'Сертифицирани курсове за специалисти')}
        text={select(
          'Programmes in counselling, psychotherapeutic skills and psychopathology with a practical focus.',
          'Програми за консултиране, психотерапевтични умения и психопатология с практическа насоченост.',
        )}
      >
        <div className="max-w-xl">
          <SearchField
            value={query}
            onChange={setQuery}
            placeholder={select(
              'Search by topic, title or duration',
              'Търсене по тема, заглавие или продължителност',
            )}
          />
        </div>
      </PageHero>
      <section className="section-pad section-finish">
        <div className="container-page grid gap-8">
          {filtered.length ? (
            filtered.map((course) => (
              <div key={course.id} className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                <CourseCard course={course} onQuickBook={setSelectedCourse} />
                <div className="premium-panel p-6">
                  <h2 className="text-2xl font-semibold text-[#153b34]">
                    {select('Main topics', 'Тематични направления')}
                  </h2>
                  <div className="mt-5 grid gap-3">
                    {course.topics.map((topic) => (
                      <p key={topic} className="rounded-md bg-[#ede4d6] px-4 py-3 text-base leading-7 text-[#2f5f55]">
                        {topic}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-3 text-base leading-8 text-[#63736d]">
                    {course.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
      <BookingModal open={Boolean(selectedCourse)} onClose={() => setSelectedCourse(null)} course={selectedCourse} />
    </>
  )
}

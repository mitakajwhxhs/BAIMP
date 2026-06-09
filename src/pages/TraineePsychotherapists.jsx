import { ArrowRight, UserRound } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Button } from '../components/ui/Button.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { SearchField } from '../components/ui/SearchField.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { traineeProfiles } from '../data/traineePsychotherapists.js'
import { traineeProfilesBg } from '../data/traineeProfilesDocument.bg.js'
import { slugify } from '../lib/slug.js'
import { useLanguage } from '../i18n/useLanguage.js'

const normalize = (value, language) => value.toLocaleLowerCase(language)

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

export function TraineePsychotherapists() {
  const { language, select } = useLanguage()
  const profiles = language === 'bg' ? traineeProfilesBg : traineeProfiles
  useDocumentTitle(select('Trainee Psychotherapists', 'Обучаващи се психотерапевти'))
  const [query, setQuery] = useState('')

  const filteredProfiles = useMemo(() => {
    const search = normalize(query.trim(), language)
    if (!search) return profiles

    return profiles.filter((profile) =>
      normalize([profile.name, profile.title, ...profile.paragraphs].join(' '), language).includes(search),
    )
  }, [language, profiles, query])

  return (
    <>
      <PageHero
        eyebrow={select('About Us', 'За нас')}
        title={select('Trainee Psychotherapists', 'Обучаващи се психотерапевти')}
        text={select(
          'Professional profiles and biographies of psychotherapists in training with the Bulgarian Association for Intermodal Psychotherapy.',
          'Професионални профили и биографии на обучаващите се психотерапевти към Българската асоциация по интермодална психотерапия.',
        )}
      >
        <div className="max-w-xl">
          <SearchField
            value={query}
            onChange={setQuery}
            placeholder={select(
              'Search by name or professional interest',
              'Търсене по име или професионален интерес',
            )}
          />
        </div>
      </PageHero>

      <MotionSection className="section-pad">
        <div className="container-page">
          <div className="max-w-md rounded-lg bg-[#153b34] p-6 text-white">
            <UserRound className="mb-4 h-8 w-8 text-[#d8b77a]" />
            <strong className="block text-4xl">{profiles.length}</strong>
            <span className="mt-2 block text-sm text-white/75">
              {select('detailed professional profiles', 'подробни професионални профила')}
            </span>
          </div>
        </div>
      </MotionSection>

      {filteredProfiles.length ? (
        <MotionSection className="section-pad section-finish bg-[#f3eadc]/55">
          <div className="container-page">
            <div className="mb-8 max-w-3xl">
              <p className="eyebrow">{select('Professional introductions', 'Професионално представяне')}</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#153b34]">
                {select('Trainee profiles', 'Профили на обучаващите се')}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#63736d]">
                {select(
                  'Open a profile to read the full professional introduction provided by the trainee.',
                  'Отворете профил, за да прочетете пълното професионално представяне.',
                )}
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {filteredProfiles.map((profile) => (
                <article key={profile.name} className="card-soft flex flex-col p-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#153b34] text-lg font-bold text-white">
                      {getInitials(profile.name)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <strong className="block text-xl text-[#153b34]">{profile.name}</strong>
                      <span className="mt-1 block text-sm leading-6 text-[#63736d]">{profile.title}</span>
                    </span>
                  </div>
                  <div className="mt-auto pt-6">
                    <Button
                      to={`/trainee-psychotherapists/${profile.slug || slugify(profile.name)}`}
                      variant="secondary"
                      icon={ArrowRight}
                    >
                      {select('Learn more', 'Научи повече')}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>
      ) : null}

      {!filteredProfiles.length ? (
        <section className="section-pad section-finish">
          <div className="container-page">
            <div className="premium-panel p-8 text-center">
              <UserRound className="mx-auto mb-4 h-9 w-9 text-[#a9844c]" />
              <h2 className="text-2xl font-semibold text-[#153b34]">
                {select('No matching trainees found', 'Няма намерени обучаващи се')}
              </h2>
              <p className="mt-3 text-base text-[#63736d]">
                {select(
                  'Try a different name or professional interest.',
                  'Опитайте с друго име или професионален интерес.',
                )}
              </p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}

import { MapPin, UsersRound } from 'lucide-react'
import { useMemo, useState } from 'react'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { SearchField } from '../components/ui/SearchField.jsx'
import { traineeGroups } from '../data/traineePsychotherapists.js'
import { traineeGroupsBg } from '../data/traineePsychotherapists.bg.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../i18n/useLanguage.js'

const normalize = (value, language) => value.toLocaleLowerCase(language)

export function Members() {
  const { language, select } = useLanguage()
  const groups = language === 'bg' ? traineeGroupsBg : traineeGroups
  const [query, setQuery] = useState('')
  useDocumentTitle(select('Members', 'Членове'))

  const filteredGroups = useMemo(() => {
    const search = normalize(query.trim(), language)
    if (!search) return groups

    return groups
      .map((group) => ({
        ...group,
        cohorts: group.cohorts
          .map((cohort) => ({
            ...cohort,
            names: cohort.names.filter((name) =>
              normalize(`${name} ${group.city} ${cohort.year}`, language).includes(search),
            ),
          }))
          .filter((cohort) => cohort.names.length),
      }))
      .filter((group) => group.cohorts.length)
  }, [groups, language, query])

  const totalMembers = groups.reduce(
    (total, group) =>
      total + group.cohorts.reduce((cityTotal, cohort) => cityTotal + cohort.names.length, 0),
    0,
  )

  return (
    <>
      <PageHero
        eyebrow={select('About Us', 'За нас')}
        title={select('Members', 'Членове')}
        text={select(
          'Members listed by city and year of participation in the training programme.',
          'Членове, подредени по град и година на участие в обучителната програма.',
        )}
      >
        <div className="max-w-xl">
          <SearchField
            value={query}
            onChange={setQuery}
            placeholder={select('Search by name, city or year', 'Търсене по име, град или година')}
          />
        </div>
      </PageHero>

      <MotionSection className="section-pad">
        <div className="container-page">
          <div className="max-w-md rounded-lg bg-[#153b34] p-6 text-white">
            <UsersRound className="mb-4 h-8 w-8 text-[#d8b77a]" />
            <strong className="block text-4xl">{totalMembers}</strong>
            <span className="mt-2 block text-sm text-white/75">
              {select('members in the published list', 'членове в публикувания списък')}
            </span>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad section-finish bg-[#f3eadc]/55">
        <div className="container-page">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">{select('Published list', 'Публикуван списък')}</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#153b34]">
              {select('Members by city', 'Членове по градове')}
            </h2>
          </div>

          {filteredGroups.length ? (
            <div className="grid gap-8">
              {filteredGroups.map((group) => (
                <section key={group.city} className="premium-panel p-6 lg:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ede4d6]">
                      <MapPin className="h-5 w-5 text-[#a9844c]" />
                    </span>
                    <h3 className="text-2xl font-semibold text-[#153b34]">{group.city}</h3>
                  </div>

                  <div className="grid gap-7 lg:grid-cols-2">
                    {group.cohorts.map((cohort) => (
                      <div
                        key={cohort.year}
                        className={
                          cohort.year === select('First year', 'Първа година')
                            ? 'lg:col-start-2'
                            : ''
                        }
                      >
                        <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#e2d5bf] pb-3">
                          <h4 className="text-lg font-semibold text-[#2f5f55]">{cohort.year}</h4>
                          <span className="rounded-full bg-[#ede4d6] px-3 py-1 text-xs font-bold text-[#526760]">
                            {cohort.names.length}
                          </span>
                        </div>
                        <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                          {cohort.names.map((name) => (
                            <li key={name} className="flex gap-3 text-sm leading-6 text-[#63736d]">
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a9844c]" />
                              {name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="premium-panel p-8 text-center">
              <UsersRound className="mx-auto mb-4 h-9 w-9 text-[#a9844c]" />
              <h2 className="text-2xl font-semibold text-[#153b34]">
                {select('No matching members found', 'Няма намерени членове')}
              </h2>
            </div>
          )}
        </div>
      </MotionSection>
    </>
  )
}

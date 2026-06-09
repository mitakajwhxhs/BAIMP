import { ArrowLeft, GraduationCap, UserRound } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { traineeProfiles } from '../data/traineePsychotherapists.js'
import { traineeProfilesBg } from '../data/traineeProfilesDocument.bg.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { slugify } from '../lib/slug.js'
import { useLanguage } from '../i18n/useLanguage.js'

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

export function TraineePsychotherapistProfile() {
  const { slug } = useParams()
  const { language, select } = useLanguage()
  const profiles = language === 'bg' ? traineeProfilesBg : traineeProfiles
  const profile = profiles.find((item) => (item.slug || slugify(item.name)) === slug)

  useDocumentTitle(profile?.name || select('Trainee Psychotherapist', 'Обучаващ се психотерапевт'))

  if (!profile) return <Navigate to="/404" replace />

  return (
    <>
      <PageHero eyebrow={select('Trainee Profile', 'Профил на обучаващ се')} title={profile.name} text={profile.title}>
        <Button to="/trainee-psychotherapists" variant="secondary" icon={ArrowLeft}>
          {select('Back to trainee profiles', 'Назад към профилите')}
        </Button>
      </PageHero>

      <MotionSection className="section-pad section-finish">
        <div className="container-page grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-soft p-7 text-center">
              <span className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#153b34] text-4xl font-bold text-white shadow-[0_18px_45px_rgba(21,59,52,0.2)]">
                {getInitials(profile.name)}
              </span>
              <h2 className="mt-6 text-2xl font-semibold text-[#153b34]">{profile.name}</h2>
              <p className="mt-3 text-base leading-7 text-[#63736d]">{profile.title}</p>
              <div className="mt-6 flex items-center justify-center gap-2 border-t border-[#e2d5bf] pt-5 text-sm font-semibold text-[#2f5f55]">
                <GraduationCap className="h-5 w-5 text-[#a9844c]" />
                {select('BAIMP trainee profile', 'Профил на обучаващ се към БАИМП')}
              </div>
            </div>
          </aside>

          <section className="premium-panel p-7 lg:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ede4d6]">
                <UserRound className="h-5 w-5 text-[#a9844c]" />
              </span>
              <h2 className="text-2xl font-semibold text-[#153b34]">{select('Biography', 'Биография')}</h2>
            </div>
            <div className="mt-6 grid gap-5 text-base leading-8 text-[#63736d]">
              {profile.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
      </MotionSection>
    </>
  )
}

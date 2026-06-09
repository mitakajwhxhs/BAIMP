import { Award, BookOpen, HeartHandshake, Users } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useSiteSettings } from '../hooks/useSiteSettings.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { localizeSettings } from '../i18n/localizedData.js'

export function About() {
  const { language, select } = useLanguage()
  useDocumentTitle(select('About Us', 'За нас'))
  const { settings: storedSettings } = useSiteSettings()
  const settings = localizeSettings(storedSettings, language)
  const values = [
    { title: select('Professional support', 'Професионална подкрепа'), icon: HeartHandshake },
    { title: select('Trainings and seminars', 'Обучения и семинари'), icon: BookOpen },
    { title: select('Certified community', 'Сертифицирана общност'), icon: Award },
    { title: select('Like-minded professionals', 'Съмишленици'), icon: Users },
  ]
  const pillars = [
    select('Training', 'Обучение'),
    select('Practice', 'Практика'),
    select('Supervision', 'Супервизия'),
  ]

  return (
    <>
      <PageHero
        eyebrow={select('About Us', 'За нас')}
        title={select(
          'BAIMP is a professional community with an intermodal perspective',
          'БАИМП е професионална общност с интермодален поглед',
        )}
        text={settings.aboutLead}
      />
      <MotionSection className="section-pad section-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow={select('Mission', 'Мисия')}
            title={select(
              'Knowledge, skills and resources for a fuller life',
              'Знания, умения и ресурси за пълноценен живот',
            )}
            text={settings.aboutText}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="card-soft hover-lift p-6">
                  <Icon className="mb-5 h-8 w-8 text-[#a9844c]" />
                  <h3 className="text-xl font-semibold text-[#153b34]">{value.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </MotionSection>
      <MotionSection className="section-pad section-finish">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {pillars.map((item) => (
            <div key={item} className="hover-lift rounded-lg border border-[#e5dac8] bg-[#fbf8f1] p-7 shadow-[0_12px_30px_rgba(21,59,52,0.06)]">
              <h3 className="text-2xl font-semibold text-[#153b34]">{item}</h3>
              <p className="mt-4 text-base leading-7 text-[#63736d]">
                {select(
                  'The intermodal approach emphasizes the flexible combination of methods, an ethical framework and conscious professional development.',
                  'Интермодалният подход поставя акцент върху гъвкавото съчетаване на методи, етичната рамка и осъзнатото професионално развитие.',
                )}
              </p>
            </div>
          ))}
        </div>
      </MotionSection>
    </>
  )
}

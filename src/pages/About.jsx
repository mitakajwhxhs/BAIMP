import { Award, BookOpen, HeartHandshake, Users } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useSiteSettings } from '../hooks/useSiteSettings.js'

const values = [
  { title: 'Професионална подкрепа', icon: HeartHandshake },
  { title: 'Обучения и семинари', icon: BookOpen },
  { title: 'Сертифицирана общност', icon: Award },
  { title: 'Съмишленици', icon: Users },
]

export function About() {
  useDocumentTitle('За нас')
  const { settings } = useSiteSettings()

  return (
    <>
      <PageHero eyebrow="За нас" title="БАИМП е професионална общност с интермодален поглед" text={settings.aboutLead} />
      <MotionSection className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Мисия"
            title="Знания, умения и ресурси за пълноценен живот"
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
      <MotionSection className="section-pad bg-white/85">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {['Обучение', 'Практика', 'Супервизия'].map((item) => (
            <div key={item} className="hover-lift rounded-lg border border-[#e5dac8] bg-[#fbf8f1] p-7 shadow-[0_12px_30px_rgba(21,59,52,0.06)]">
              <h3 className="text-2xl font-semibold text-[#153b34]">{item}</h3>
              <p className="mt-4 text-base leading-7 text-[#63736d]">
                Интермодалният подход поставя акцент върху гъвкавото съчетаване на методи, етичната рамка и осъзнатото професионално развитие.
              </p>
            </div>
          ))}
        </div>
      </MotionSection>
    </>
  )
}

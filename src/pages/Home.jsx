import { motion, useReducedMotion } from 'framer-motion'
import {
  CheckCircle2,
} from 'lucide-react'
import heroImage from '../assets/baimp-hero.png'
import { FAQAccordion } from '../components/ui/FAQAccordion.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useSiteSettings } from '../hooks/useSiteSettings.js'
import { faqItems, testimonials, whyChooseItems } from '../data/baimpData.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { getLocalizedData, localizeSettings } from '../i18n/localizedData.js'

export function Home() {
  const { language, select } = useLanguage()
  useDocumentTitle(select('Home', 'Начало'))
  const reduceMotion = useReducedMotion()
  const { settings: storedSettings } = useSiteSettings()
  const localizedData = getLocalizedData(language)
  const settings = localizeSettings(storedSettings, language)
  const testimonialItems = language === 'bg' ? localizedData.testimonials : testimonials
  const benefitItems = language === 'bg' ? localizedData.whyChooseItems : whyChooseItems
  const questions = language === 'bg' ? localizedData.faqItems : faqItems

  return (
    <>
      <section className="relative overflow-hidden bg-[#F4F2EE] text-white">
        <img
          src={heroImage}
          alt={select('Professional training environment', 'Професионална обучителна среда')}
          className={`hero-photo absolute inset-0 h-full w-full object-cover ${reduceMotion ? '' : 'animate-hero-zoom'}`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,59,52,0.86),rgba(47,95,85,0.62)_38%,rgba(20,32,28,0.22)_74%,rgba(248,245,238,0.16))]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-44 bg-[linear-gradient(90deg,#153b34,rgba(21,59,52,0.56)_50%,transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-52 bg-[linear-gradient(270deg,rgba(251,248,241,0.68),rgba(251,248,241,0.2)_48%,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(251,248,241,0.72),rgba(251,248,241,0.16)_58%,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(0deg,#F4F2EE,rgba(244,242,238,0.62)_42%,rgba(231,236,231,0.18)_72%,transparent)]" />
        <div className="container-page relative grid items-center py-10 sm:min-h-[620px] sm:py-16 lg:min-h-[640px]">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[21rem] sm:max-w-3xl"
          >
            <p className="mb-4 inline-flex rounded-md border border-white/25 bg-white/10 px-3 py-2 text-sm font-bold uppercase text-[#f1d4a4] shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur">
              {settings.shortName}
            </p>
            <h1 className="text-3xl font-semibold leading-[1.08] text-[#f8f5ee] drop-shadow-[0_5px_24px_rgba(0,0,0,0.18)] [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">
              {settings.heroTitle}
            </h1>
            <p className="mt-5 max-w-[21rem] text-base leading-8 text-[#eef3ee]/90 sm:max-w-2xl sm:text-xl">{settings.heroText}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-paper border-y border-[#ded3c4]/70 backdrop-blur">
        <div className="container-page grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {settings.stats.map((stat) => (
            <div key={stat.label} className="hover-lift rounded-lg border border-[#e5dac8] bg-[#fbf8f1] p-5 shadow-[0_12px_30px_rgba(21,59,52,0.06)]">
              <p className="text-3xl font-semibold text-[#153b34]">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-[#63736d]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <MotionSection className="section-pad section-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow={select('Why BAIMP', 'Защо БАИМП')}
            title={select(
              'A professional environment for therapists, consultants and specialists',
              'Професионална среда за терапевти, консултанти и специалисти',
            )}
            text={settings.aboutText}
          />
          <div className="grid gap-4">
            {benefitItems.map((item) => (
              <div key={item.title} className="card-soft flex gap-4 p-5">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#a9844c]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#153b34]">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#63736d]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad section-mist">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-[#a9844c]">
              {select('Testimonials', 'Мнения')}
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#153b34] sm:text-4xl">
              {select('Voices from the training environment', 'Гласове от обучителната среда')}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonialItems.filter((item) => item.is_published).map((item) => (
              <blockquote key={item.id} className="card-soft p-6 transition duration-300 hover:-translate-y-1 hover:border-[#3E7C67]">
                <p className="text-base leading-8 text-[#14201c]">"{item.quote}"</p>
                <footer className="mt-5 text-sm font-semibold text-[#3E7C67]">
                  {item.name}, {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad section-finish">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={select('Frequently asked questions', 'Често задавани въпроси')}
            text={select(
              'Essential information about applications, certificates and contact with the team.',
              'Основна информация за кандидатстване, сертификати и контакт с екипа.',
            )}
          />
          <FAQAccordion items={questions} />
        </div>
      </MotionSection>

    </>
  )
}

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Mail,
  MessageCircle,
  ShieldCheck,
  Users,
} from 'lucide-react'
import heroImage from '../assets/baimp-hero.png'
import { BookingModal } from '../components/BookingModal.jsx'
import { CourseCard } from '../components/CourseCard.jsx'
import { TrainerCard } from '../components/TrainerCard.jsx'
import { Button } from '../components/ui/Button.jsx'
import { FAQAccordion } from '../components/ui/FAQAccordion.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { useSiteSettings } from '../hooks/useSiteSettings.js'
import { certificates, courses, faqItems, testimonials, trainers, whyChooseItems } from '../data/baimpData.js'

export function Home() {
  useDocumentTitle('Начало')
  const reduceMotion = useReducedMotion()
  const { settings } = useSiteSettings()
  const { items: trainerItems } = useLocalCollection('trainers', trainers)
  const { items: courseItems } = useLocalCollection('courses', courses)
  const { items: certificateItems } = useLocalCollection('certificates', certificates)
  const { items: testimonialItems } = useLocalCollection('testimonials', testimonials)
  const [bookingTarget, setBookingTarget] = useState(null)

  const publishedTrainers = trainerItems.filter((trainer) => trainer.is_published)
  const featuredCourses = courseItems.filter((course) => course.is_published && course.is_featured)

  return (
    <>
      <section className="relative overflow-hidden bg-[#fbf8f1] text-white">
        <img
          src={heroImage}
          alt="Професионална обучителна среда"
          className={`hero-photo absolute inset-0 h-full w-full object-cover ${reduceMotion ? '' : 'animate-hero-zoom'}`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,59,52,0.86),rgba(47,95,85,0.62)_38%,rgba(20,32,28,0.22)_74%,rgba(248,245,238,0.16))]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-44 bg-[linear-gradient(90deg,#153b34,rgba(21,59,52,0.56)_50%,transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-52 bg-[linear-gradient(270deg,rgba(251,248,241,0.68),rgba(251,248,241,0.2)_48%,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(251,248,241,0.72),rgba(251,248,241,0.16)_58%,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#fbf8f1,rgba(251,248,241,0.4)_42%,rgba(21,59,52,0.05)_76%,transparent)]" />
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
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button to="/obuchiteli" variant="gold" icon={Users}>
                Виж обучителите
              </Button>
              <Button to="/zapisvane" variant="secondary" icon={CalendarCheck}>
                Запиши се онлайн
              </Button>
              <Button to="/kontakti" variant="ghost" icon={MessageCircle} className="!text-white hover:bg-white/10">
                Свържи се с нас
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#e5dac8] bg-white/80 backdrop-blur">
        <div className="container-page grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {settings.stats.map((stat) => (
            <div key={stat.label} className="hover-lift rounded-lg border border-[#e5dac8] bg-[#fbf8f1] p-5 shadow-[0_12px_30px_rgba(21,59,52,0.06)]">
              <p className="text-3xl font-semibold text-[#153b34]">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-[#63736d]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <MotionSection className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Защо БАИМП"
            title="Професионална среда за терапевти, консултанти и специалисти"
            text={settings.aboutText}
          />
          <div className="grid gap-4">
            {whyChooseItems.map((item) => (
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

      <MotionSection className="section-pad bg-[#ede4d6]">
        <div className="container-page">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Обучители"
              title="Специалисти с доказан опит"
              text="Представяме ви нашите обучители и психолози с клиничен, консултативен и обучителен профил."
            />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {publishedTrainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Обучения"
              title="Предстоящи курсове и сертифицирани програми"
              text="Практически обучения с теория, супервизия, реални казуси и професионална рамка."
            />
            <Button to="/kursove" variant="secondary" icon={ArrowRight}>
              Виж курсовете
            </Button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} onQuickBook={(target) => setBookingTarget({ course: target })} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad bg-white/85">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Доверие"
            title="Акредитации, членства и професионална легитимност"
            text="БАИМП представя обучения със сертификати, признати от Европейската асоциация по приложна психология."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {certificateItems
              .filter((certificate) => certificate.is_published)
              .slice(0, 3)
              .map((certificate) => (
              <div key={certificate.id} className="hover-lift rounded-lg border border-[#e5dac8] bg-[#fbf8f1] p-3 shadow-[0_12px_30px_rgba(21,59,52,0.06)]">
                <img
                  src={certificate.image_url}
                  alt={certificate.title}
                  className="image-zoom aspect-[4/3] rounded-md object-cover"
                  loading="lazy"
                />
                <p className="mt-3 text-sm font-bold text-[#153b34]">{certificate.title}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad bg-[linear-gradient(135deg,#153b34,#244b42_48%,#14201c)] text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-[#f1d4a4]">Мнения</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Гласове от обучителната среда</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonialItems.filter((item) => item.is_published).map((item) => (
              <blockquote key={item.id} className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                <p className="text-base leading-8 text-white/82">“{item.quote}”</p>
                <footer className="mt-5 text-sm font-semibold text-[#f1d4a4]">
                  {item.name}, {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Често задавани въпроси"
            text="Основна информация за кандидатстване, сертификати и контакт със специалистите."
          />
          <FAQAccordion items={faqItems} />
        </div>
      </MotionSection>

      <MotionSection className="bg-[#ede4d6] py-14">
        <div className="container-page">
          <div className="premium-panel grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <ShieldCheck className="mb-4 h-8 w-8 text-[#a9844c]" />
              <h2 className="text-3xl font-semibold text-[#153b34]">Готови ли сте за следващата професионална стъпка?</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#63736d]">
                Изпратете запитване за обучение, консултация или разговор с екипа на БАИМП.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/zapisvane" icon={CalendarCheck}>
                Онлайн записване
              </Button>
              <Button to="/kontakti" variant="secondary" icon={Mail}>
                Контакти
              </Button>
            </div>
          </div>
        </div>
      </MotionSection>

      <BookingModal
        open={Boolean(bookingTarget)}
        onClose={() => setBookingTarget(null)}
        trainer={bookingTarget?.name ? bookingTarget : null}
        course={bookingTarget?.course || null}
      />
    </>
  )
}

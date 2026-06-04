import { useMemo, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { CalendarCheck, MapPin } from 'lucide-react'
import { BookingModal } from '../components/BookingModal.jsx'
import { Badge } from '../components/ui/Badge.jsx'
import { Button } from '../components/ui/Button.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { trainers } from '../data/baimpData.js'

function DetailBlock({ title, items }) {
  if (!items?.length) return null
  return (
    <section className="premium-panel p-6">
      <h2 className="text-2xl font-semibold text-[#153b34]">{title}</h2>
      <ul className="mt-4 grid gap-3 text-base leading-7 text-[#63736d]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a9844c]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function TrainerProfile() {
  const { slug } = useParams()
  const { items } = useLocalCollection('trainers', trainers)
  const trainer = useMemo(() => items.find((item) => item.slug === slug && item.is_published), [items, slug])
  const [bookingOpen, setBookingOpen] = useState(false)

  useDocumentTitle(trainer?.name || 'Обучител')

  if (!trainer) return <Navigate to="/404" replace />

  return (
    <>
      <PageHero eyebrow="Профил на обучител" title={trainer.name} text={trainer.title}>
        <div className="flex flex-wrap items-center gap-3 text-[#2f5f55]">
          <span className="inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 text-sm font-semibold shadow-[0_8px_22px_rgba(21,59,52,0.08)]">
            <MapPin className="h-4 w-4 text-[#a9844c]" />
            {trainer.city}
          </span>
          <Button icon={CalendarCheck} onClick={() => setBookingOpen(true)}>
            Запиши час / обучение
          </Button>
        </div>
      </PageHero>
      <MotionSection className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-soft hover-lift overflow-hidden">
              <img src={trainer.image_url} alt={trainer.name} className="image-zoom aspect-[4/5] w-full bg-[#e8dfd2] object-contain" />
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {trainer.badges.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <div className="grid gap-6">
            <section className="premium-panel p-6">
              <h2 className="text-2xl font-semibold text-[#153b34]">Биография</h2>
              <div className="mt-4 grid gap-4 text-base leading-8 text-[#63736d]">
                {trainer.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
            <DetailBlock title="Образование" items={trainer.education} />
            <DetailBlock title="Квалификации" items={trainer.qualifications} />
            <DetailBlock title="Опит" items={trainer.experience} />
            <DetailBlock title="Теми на работа" items={trainer.topics} />
            <DetailBlock title="Членства" items={trainer.memberships} />
          </div>
        </div>
      </MotionSection>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} trainer={trainer} />
    </>
  )
}

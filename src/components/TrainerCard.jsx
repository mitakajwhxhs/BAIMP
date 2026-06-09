import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button.jsx'
import { useLanguage } from '../i18n/useLanguage.js'

export function TrainerCard({ trainer }) {
  const { select } = useLanguage()

  return (
    <article className="card-soft hover-lift group flex h-full flex-col overflow-hidden">
      <div className="aspect-square overflow-hidden bg-[#ede4d6]">
        <img
          src={trainer.image_url}
          alt={trainer.name}
          className="image-zoom h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col items-center px-5 py-6 text-center">
        <h3 className="text-xl font-semibold leading-snug text-[#153b34]">{trainer.name}</h3>
        <p className="mt-4 text-base leading-6 text-[#63736d]">{trainer.title}</p>
        <div className="mt-auto pt-6">
          <Button to={`/trainers/${trainer.slug}`} variant="secondary" icon={ArrowRight}>
            {select('Learn more', 'Научи повече')}
          </Button>
        </div>
      </div>
    </article>
  )
}

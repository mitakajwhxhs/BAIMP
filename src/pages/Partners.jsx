import { ExternalLink } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero.jsx'
import { Button } from '../components/ui/Button.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { partners } from '../data/baimpData.js'

export function Partners() {
  useDocumentTitle('Партньори')
  const { items } = useLocalCollection('partners', partners)

  return (
    <>
      <PageHero
        eyebrow="Партньори"
        title="Професионални партньорства и признание"
        text="Място за официални партньори, членства и организации, които подкрепят обучителната и професионална среда на БАИМП."
      />
      <MotionSection className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {items
            .filter((partner) => partner.is_published)
            .map((partner) => (
              <article key={partner.id} className="card-soft hover-lift p-6">
                <p className="text-sm font-bold uppercase text-[#a9844c]">{partner.type}</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#153b34]">{partner.name}</h2>
                <p className="mt-4 text-base leading-7 text-[#63736d]">{partner.description}</p>
                <Button href={partner.website} variant="secondary" icon={ExternalLink} className="mt-6">
                  Уебсайт
                </Button>
              </article>
            ))}
        </div>
      </MotionSection>
    </>
  )
}

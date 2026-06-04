import { ShieldCheck } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { certificates } from '../data/baimpData.js'

export function Certificates() {
  useDocumentTitle('Сертификати и акредитации')
  const { items } = useLocalCollection('certificates', certificates)

  return (
    <>
      <PageHero
        eyebrow="Сертификати"
        title="Акредитации и професионално признание"
        text="Сертификати за обученията на БАИМП, представени с признание от Европейската асоциация по приложна психология."
      />
      <MotionSection className="section-pad">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {items
            .filter((certificate) => certificate.is_published)
            .map((certificate) => (
              <article key={certificate.id} className="card-soft hover-lift group overflow-hidden">
                <img src={certificate.image_url} alt={certificate.title} className="image-zoom aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <ShieldCheck className="mb-4 h-7 w-7 text-[#a9844c]" />
                  <h2 className="text-xl font-semibold text-[#153b34]">{certificate.title}</h2>
                  <p className="mt-3 text-sm font-semibold text-[#63736d]">{certificate.issuer}</p>
                  <p className="mt-2 text-sm text-[#2f5f55]">Валиден до: {certificate.valid_until}</p>
                </div>
              </article>
            ))}
        </div>
      </MotionSection>
    </>
  )
}

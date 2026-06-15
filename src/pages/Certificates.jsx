import { ShieldCheck } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { certificates } from '../data/baimpData.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { getLocalizedData, localizeItems } from '../i18n/localizedData.js'

export function Certificates() {
  const { language, select } = useLanguage()
  useDocumentTitle(select('BAIMP Certificates', 'Сертификати от БАИМП'))
  const { items } = useLocalCollection('certificates', certificates, {
    remote: false,
    preferFallbackFields: ['image_url', 'issuer'],
  })
  const localizedData = getLocalizedData(language)
  const localizedItems = localizeItems(items, localizedData.certificates, language)

  return (
    <>
      <PageHero
        eyebrow={select('Certificates', 'Сертификати')}
        title={select('Certificates issued by BAIMP', 'Сертификати, издадени от БАИМП')}
        text={select(
          'Certificates issued for BAIMP training programmes.',
          'Сертификати, издадени за обучителните програми на БАИМП.',
        )}
      />
      <MotionSection className="section-pad section-finish">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {localizedItems
            .filter((certificate) => certificate.is_published)
            .map((certificate) => (
              <article key={certificate.id} className="card-soft hover-lift group overflow-hidden">
                <div className="flex aspect-[4/3] items-center justify-center bg-[#ede4d6]">
                  <div className="text-center">
                    <ShieldCheck className="mx-auto h-16 w-16 text-[#a9844c]" />
                    <p className="mt-4 text-lg font-bold tracking-[0.18em] text-[#153b34]">BAIMP</p>
                    <p className="mt-2 text-sm font-semibold text-[#63736d]">
                      {select('Training certificate', 'Сертификат за обучение')}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <ShieldCheck className="mb-4 h-7 w-7 text-[#a9844c]" />
                  <h2 className="text-xl font-semibold text-[#153b34]">{certificate.title}</h2>
                  <p className="mt-3 text-sm font-semibold text-[#63736d]">{certificate.issuer}</p>
                  <p className="mt-2 text-sm text-[#2f5f55]">
                    {select('Valid until', 'Валиден до')}: {certificate.valid_until}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </MotionSection>
    </>
  )
}

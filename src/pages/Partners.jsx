import { ExternalLink } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero.jsx'
import { Button } from '../components/ui/Button.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { partners, retiredPartnerIds } from '../data/baimpData.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { getLocalizedData, localizeItems } from '../i18n/localizedData.js'

export function Partners() {
  const { language, select } = useLanguage()
  useDocumentTitle(select('Partners', 'Партньори'))
  const { items } = useLocalCollection('partners', partners, {
    remote: false,
    removedIds: retiredPartnerIds,
  })
  const localizedData = getLocalizedData(language)
  const localizedItems = localizeItems(items, localizedData.partners, language)

  return (
    <>
      <PageHero
        eyebrow={select('Partners', 'Партньори')}
        title={select('Professional partnerships and recognition', 'Професионални партньорства и признание')}
        text={select(
          'A place for official partners, memberships and organizations that support the training and professional environment of BAIMP.',
          'Място за официални партньори, членства и организации, които подкрепят обучителната и професионалната среда на БАИМП.',
        )}
      />
      <MotionSection className="section-pad section-finish">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {localizedItems
            .filter((partner) => partner.is_published)
            .map((partner) => (
              <article key={partner.id} className="card-soft hover-lift p-6">
                <p className="text-sm font-bold uppercase text-[#a9844c]">{partner.type}</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#153b34]">{partner.name}</h2>
                <p className="mt-4 text-base leading-7 text-[#63736d]">{partner.description}</p>
                <Button href={partner.website} variant="secondary" icon={ExternalLink} className="mt-6">
                  {select('Website', 'Уебсайт')}
                </Button>
              </article>
            ))}
        </div>
      </MotionSection>
    </>
  )
}

import { Newspaper } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../i18n/useLanguage.js'

export function News() {
  const { select } = useLanguage()
  useDocumentTitle(select('News', 'Новини'))

  return (
    <>
      <PageHero
        eyebrow={select('News', 'Новини')}
        title={select('News', 'Новини')}
        text={select(
          'Updates, events and announcements from BAIMP will be published here.',
          'Тук ще бъдат публикувани актуализации, събития и съобщения от БАИМП.',
        )}
      />
      <MotionSection className="section-pad section-finish">
        <div className="container-page">
          <div className="premium-panel max-w-2xl p-8">
            <Newspaper className="mb-5 h-9 w-9 text-[#a9844c]" />
            <h2 className="text-2xl font-semibold text-[#153b34]">
              {select('Coming soon.', 'Очаквайте скоро.')}
            </h2>
          </div>
        </div>
      </MotionSection>
    </>
  )
}

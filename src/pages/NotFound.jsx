import { Home, Search } from 'lucide-react'
import { Button } from '../components/ui/Button.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../i18n/useLanguage.js'

export function NotFound() {
  const { select } = useLanguage()
  useDocumentTitle('404')

  return (
    <section className="section-finish grid min-h-[70svh] place-items-center px-5 py-20 text-center">
      <div className="premium-panel max-w-xl p-8">
        <Search className="mx-auto mb-6 h-12 w-12 text-[#a9844c]" />
        <p className="text-sm font-bold uppercase text-[#a9844c]">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#153b34]">
          {select('Page not found', 'Страницата не е намерена')}
        </h1>
        <p className="mt-4 text-lg leading-8 text-[#63736d]">
          {select(
            'The address may have changed or the content may have been moved.',
            'Адресът може да е променен или съдържанието да е преместено.',
          )}
        </p>
        <Button to="/" icon={Home} className="mt-8">
          {select('Back to home', 'Към началната страница')}
        </Button>
      </div>
    </section>
  )
}

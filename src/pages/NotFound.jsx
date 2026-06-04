import { Home, Search } from 'lucide-react'
import { Button } from '../components/ui/Button.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export function NotFound() {
  useDocumentTitle('404')

  return (
    <section className="grid min-h-[70svh] place-items-center bg-[linear-gradient(135deg,#eef3ee,#fbf8f1_52%,#ede4d6)] px-5 py-20 text-center">
      <div className="premium-panel max-w-xl p-8">
        <Search className="mx-auto mb-6 h-12 w-12 text-[#a9844c]" />
        <p className="text-sm font-bold uppercase text-[#a9844c]">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#153b34]">Страницата не е намерена</h1>
        <p className="mt-4 text-lg leading-8 text-[#63736d]">
          Адресът може да е променен или съдържанието да е преместено.
        </p>
        <Button to="/" icon={Home} className="mt-8">
          Към началото
        </Button>
      </div>
    </section>
  )
}

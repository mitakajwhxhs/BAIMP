import { FileText, Scale, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../i18n/useLanguage.js'

export function Documents() {
  const { select } = useLanguage()
  useDocumentTitle(select('Documents', 'Документи'))
  const documents = {
    statute: {
      title: select('Statute', 'Устав'),
      text: select(
        'The Constitution and Articles of Association governing BAIMP objectives, membership and organisational structure.',
        'Уставът, който урежда целите, членството и организационната структура на БАИМП.',
      ),
      icon: FileText,
    },
    ethics: {
      title: select('Code of Ethics', 'Етичен кодекс'),
      text: select(
        'The ethical principles, professional responsibilities and standards of conduct of the association.',
        'Етичните принципи, професионалните отговорности и стандартите за поведение на асоциацията.',
      ),
      icon: Scale,
    },
    rights: {
      title: select('Rights and Non-discrimination Policy', 'Политика за права и недискриминация'),
      text: select(
        'The BAIMP declaration on equal rights, fair treatment, accessibility and protection from discrimination.',
        'Декларацията на БАИМП за равни права, справедливо отношение, достъпност и защита от дискриминация.',
      ),
      icon: ShieldCheck,
    },
  }

  return (
    <>
      <PageHero
        eyebrow={select('Documents', 'Документи')}
        title={select('Official documents', 'Официални документи')}
        text={select(
          'This section collects the formal documents of the Bulgarian Association for Intermodal Psychotherapy.',
          'Тази секция събира официалните документи на Българската асоциация по интермодална психотерапия.',
        )}
      />
      <MotionSection className="section-pad section-finish">
        <div className="container-page grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <DocumentLink to="/documents/statute" document={documents.statute} />
          <DocumentLink to="/documents/code-of-ethics" document={documents.ethics} />
          <DocumentLink to="/documents/rights-and-non-discrimination-policy" document={documents.rights} />
        </div>
      </MotionSection>
    </>
  )
}

function DocumentLink({ to, document }) {
  const Icon = document.icon

  return (
    <Link to={to} className="card-soft hover-lift p-7">
      <Icon className="mb-5 h-8 w-8 text-[#a9844c]" />
      <h2 className="text-2xl font-semibold text-[#153b34]">{document.title}</h2>
      <p className="mt-4 text-base leading-7 text-[#63736d]">{document.text}</p>
    </Link>
  )
}

import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../i18n/useLanguage.js'

export function TrainingOverview() {
  const { select } = useLanguage()
  useDocumentTitle(select('Training', 'Обучение'))
  const trainingLinks = [
    {
      title: select('Psychotherapy Programme', 'Психотерапевтична програма'),
      text: select(
        'The four-year professional programme, its required hours, clinical practice, supervision and assessment.',
        'Четиригодишната професионална програма, задължителните часове, клиничната практика, супервизията и оценяването.',
      ),
      to: '/training/psychotherapy-program',
      icon: GraduationCap,
    },
    {
      title: select('Courses', 'Курсове'),
      text: select(
        'Practical courses in counselling, psychotherapeutic skills and psychopathology for specialists.',
        'Практически курсове по консултиране, психотерапевтични умения и психопатология за специалисти.',
      ),
      to: '/courses',
      icon: BookOpen,
    },
  ]

  return (
    <>
      <PageHero
        eyebrow={select('Training', 'Обучение')}
        title={select(
          'Professional training in intermodal psychotherapy',
          'Професионално обучение по интермодална психотерапия',
        )}
        text={select(
          'BAIMP offers structured training formats that combine theory, practice, supervision and an ethical professional framework.',
          'БАИМП предлага структурирани формати, които съчетават теория, практика, супервизия и етична професионална рамка.',
        )}
      />
      <MotionSection className="section-pad section-finish">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {trainingLinks.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.to} to={item.to} className="card-soft hover-lift group p-7">
                <Icon className="mb-5 h-8 w-8 text-[#a9844c]" />
                <h2 className="text-2xl font-semibold text-[#153b34]">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-[#63736d]">{item.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2f5f55]">
                  {select('Open page', 'Отвори страницата')}
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
        <div className="container-page mt-8">
          <Button to="/courses" variant="secondary" icon={ArrowRight}>
            {select('View all courses', 'Виж всички курсове')}
          </Button>
        </div>
      </MotionSection>
    </>
  )
}

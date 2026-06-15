import { ArrowLeft } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { courseDetails } from '../data/courseDetails.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

function CourseContent({ content }) {
  return (
    <div className="grid gap-9">
      {content.subtitle ? (
        <p className="rounded-md bg-[#ede4d6] px-5 py-4 text-lg font-semibold leading-7 text-[#153b34]">
          {content.subtitle}
        </p>
      ) : null}

      <div className="grid gap-5 text-base leading-8 text-[#526760]">
        {content.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {content.sections.map((section) => (
        <section key={section.title} className="grid gap-5">
          <h2 className="text-2xl font-semibold leading-tight text-[#153b34]">
            {section.title}
          </h2>

          {section.items ? (
            <ul className="grid gap-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-md bg-[#ede4d6] px-4 py-3 text-base leading-7 text-[#2f5f55]"
                >
                  <span aria-hidden="true" className="font-semibold text-[#8b6f3d]">
                    {section.listStyle === 'check' ? '✓' : '•'}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {section.paragraphs ? (
            <div className="grid gap-4 text-base leading-8 text-[#526760]">
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    section.emphasisFirst && index === 0
                      ? 'font-semibold text-[#2f5f55]'
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
        </section>
      ))}
    </div>
  )
}

export function CourseDetail() {
  const { slug } = useParams()
  const course = courseDetails.find((item) => item.slug === slug)
  const title = course?.title.en.replace(/^[a-c]\)\s*/i, '') || 'Course'

  useDocumentTitle(title)

  if (!course) return <Navigate to="/404" replace />

  return (
    <>
      <PageHero
        eyebrow="Specialized course"
        title={title}
        text="Complete programme information, practical focus and intended participants."
      >
        <Button to="/courses" variant="secondary" icon={ArrowLeft}>
          Back to all courses
        </Button>
      </PageHero>

      <section className="section-pad section-finish">
        <div className="container-page">
          <article className="premium-panel mx-auto max-w-5xl p-6 sm:p-9 lg:p-12">
            <CourseContent content={course.content.en} />
          </article>
        </div>
      </section>
    </>
  )
}

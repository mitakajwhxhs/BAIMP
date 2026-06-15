import { ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '../components/ui/Button.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { courseDetails } from '../data/courseDetails.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export function Courses() {
  useDocumentTitle('Courses')

  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Specialized training courses"
        text="Explore each course below and open its dedicated page for the complete programme, learning outcomes and participant information."
      />

      <section className="section-pad section-finish">
        <div className="container-page grid gap-7">
          {courseDetails.map((course) => {
            const content = course.content.en

            return (
              <article
                key={course.id}
                className="premium-panel grid overflow-hidden lg:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="flex min-h-64 flex-col justify-between bg-[#153b34] p-7 text-white sm:p-9">
                  <BookOpen className="h-9 w-9 text-[#d8b77a]" />
                  <h2 className="mt-12 text-3xl font-semibold leading-tight">
                    {course.title.en.replace(/^[a-c]\)\s*/i, '')}
                  </h2>
                </div>

                <div className="flex flex-col p-7 sm:p-9">
                  {content.subtitle ? (
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#a9844c]">
                      {content.subtitle}
                    </p>
                  ) : null}
                  <p className="text-base leading-8 text-[#526760]">{content.intro[0]}</p>
                  <div className="mt-7">
                    <Button
                      to={`/courses/${course.slug}`}
                      variant="secondary"
                      icon={ArrowRight}
                    >
                      Read full course information
                    </Button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

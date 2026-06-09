import { CalendarCheck, Clock, GraduationCap } from 'lucide-react'
import { Button } from './ui/Button.jsx'
import { Badge } from './ui/Badge.jsx'
import { useLanguage } from '../i18n/useLanguage.js'

export function CourseCard({ course, onQuickBook }) {
  const { select } = useLanguage()

  return (
    <article className="card-soft hover-lift group flex h-full flex-col overflow-hidden">
      <div className="grid gap-5 p-5 sm:grid-cols-[1fr_150px]">
        <div>
          <Badge>{course.eyebrow}</Badge>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#153b34]">{course.title}</h3>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-lg border border-[#e5dac8] bg-white">
          <img src={course.image_url} alt={course.title} className="image-zoom h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
      <div className="mt-auto border-t border-[#e5dac8] bg-[#fbf8f1]/70 p-5">
        <div className="mb-5 grid gap-3 text-sm font-semibold text-[#2f5f55] sm:grid-cols-2">
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#a9844c]" />
            {course.duration}
          </span>
          <span className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-[#a9844c]" />
            {course.certificate}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => onQuickBook?.(course)} icon={CalendarCheck}>
            {select('Apply', 'Запиши се')}
          </Button>
          <Button to="/courses" variant="secondary">
            {select('Details', 'Детайли')}
          </Button>
        </div>
      </div>
    </article>
  )
}

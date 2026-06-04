import { AdminResourcePage } from './AdminResourcePage.jsx'
import { courses } from '../data/baimpData.js'

const fields = [
  { name: 'title', label: 'Заглавие' },
  { name: 'slug', label: 'Slug' },
  { name: 'eyebrow', label: 'Категория', defaultValue: 'Обучителен практически курс' },
  { name: 'duration', label: 'Продължителност' },
  { name: 'format', label: 'Формат' },
  { name: 'certificate', label: 'Сертификат' },
  { name: 'image_url', label: 'Изображение / сертификат URL', type: 'image' },
  { name: 'summary', label: 'Кратко описание', type: 'textarea' },
  { name: 'description', label: 'Описание (параграфи по един ред)', type: 'array' },
  { name: 'topics', label: 'Теми (по един ред)', type: 'array' },
  { name: 'sort_order', label: 'Подредба', type: 'number', defaultValue: 99 },
  { name: 'is_featured', label: 'Показвай на началната', type: 'checkbox', defaultValue: true },
  { name: 'is_published', label: 'Публикуван', type: 'checkbox', defaultValue: true },
]

export function AdminCourses() {
  return (
    <AdminResourcePage
      title="Курсове и обучения"
      description="Управление на обучителните програми, описания, теми, изображения и статус на публикуване."
      table="courses"
      fallback={courses}
      fields={fields}
      imageBucket="course-assets"
    />
  )
}

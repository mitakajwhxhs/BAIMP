import { AdminResourcePage } from './AdminResourcePage.jsx'
import { testimonials } from '../data/baimpData.js'

const fields = [
  { name: 'name', label: 'Име' },
  { name: 'role', label: 'Роля' },
  { name: 'quote', label: 'Мнение', type: 'textarea' },
  { name: 'sort_order', label: 'Подредба', type: 'number', defaultValue: 99 },
  { name: 'is_published', label: 'Публикувано', type: 'checkbox', defaultValue: true },
]

export function AdminTestimonials() {
  return (
    <AdminResourcePage
      title="Мнения"
      description="Редакция на testimonials секцията на началната страница."
      table="testimonials"
      fallback={testimonials}
      fields={fields}
    />
  )
}

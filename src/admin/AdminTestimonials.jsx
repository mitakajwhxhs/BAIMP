import { AdminResourcePage } from './AdminResourcePage.jsx'
import { testimonials } from '../data/baimpData.js'

const fields = [
  { name: 'name', label: 'Name' },
  { name: 'role', label: 'Role' },
  { name: 'quote', label: 'Testimonial', type: 'textarea' },
  { name: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 99 },
  { name: 'is_published', label: 'Published', type: 'checkbox', defaultValue: true },
]

export function AdminTestimonials() {
  return (
    <AdminResourcePage
      title="Testimonials"
      description="Edit the testimonials section on the home page."
      table="testimonials"
      fallback={testimonials}
      fields={fields}
    />
  )
}

import { AdminResourcePage } from './AdminResourcePage.jsx'
import { partners } from '../data/baimpData.js'

const fields = [
  { name: 'name', label: 'Name' },
  { name: 'type', label: 'Type' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'website', label: 'Website' },
  { name: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 99 },
  { name: 'is_published', label: 'Published', type: 'checkbox', defaultValue: true },
]

export function AdminPartners() {
  return (
    <AdminResourcePage
      title="Partners"
      description="Add, edit and publish partners and professional organizations."
      table="partners"
      fallback={partners}
      fields={fields}
    />
  )
}

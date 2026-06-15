import { AdminResourcePage } from './AdminResourcePage.jsx'
import { certificates } from '../data/baimpData.js'

const fields = [
  { name: 'title', label: 'Title' },
  { name: 'issuer', label: 'Issuer' },
  { name: 'valid_until', label: 'Valid until' },
  { name: 'image_url', label: 'Image URL', type: 'image' },
  { name: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 99 },
  { name: 'is_published', label: 'Published', type: 'checkbox', defaultValue: true },
]

export function AdminCertificates() {
  return (
    <AdminResourcePage
      title="BAIMP certificates"
      description="Manage certificates issued for BAIMP training programmes."
      table="certificates"
      fallback={certificates}
      fields={fields}
      imageBucket="certificates"
      collectionOptions={{ preferFallbackFields: ['image_url', 'issuer'] }}
    />
  )
}

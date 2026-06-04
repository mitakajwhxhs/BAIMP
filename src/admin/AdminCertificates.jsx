import { AdminResourcePage } from './AdminResourcePage.jsx'
import { certificates } from '../data/baimpData.js'

const fields = [
  { name: 'title', label: 'Заглавие' },
  { name: 'issuer', label: 'Издател' },
  { name: 'valid_until', label: 'Валиден до' },
  { name: 'image_url', label: 'Изображение URL', type: 'image' },
  { name: 'sort_order', label: 'Подредба', type: 'number', defaultValue: 99 },
  { name: 'is_published', label: 'Публикуван', type: 'checkbox', defaultValue: true },
]

export function AdminCertificates() {
  return (
    <AdminResourcePage
      title="Сертификати и акредитации"
      description="Управление на сертификати, акредитации, изображения и валидност."
      table="certificates"
      fallback={certificates}
      fields={fields}
      imageBucket="certificates"
    />
  )
}

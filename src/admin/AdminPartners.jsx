import { AdminResourcePage } from './AdminResourcePage.jsx'
import { partners } from '../data/baimpData.js'

const fields = [
  { name: 'name', label: 'Име' },
  { name: 'type', label: 'Тип' },
  { name: 'description', label: 'Описание', type: 'textarea' },
  { name: 'website', label: 'Уебсайт' },
  { name: 'sort_order', label: 'Подредба', type: 'number', defaultValue: 99 },
  { name: 'is_published', label: 'Публикуван', type: 'checkbox', defaultValue: true },
]

export function AdminPartners() {
  return (
    <AdminResourcePage
      title="Партньори"
      description="Добавяне, редакция и публикуване на партньори и професионални организации."
      table="partners"
      fallback={partners}
      fields={fields}
    />
  )
}

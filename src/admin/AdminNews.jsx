import { AdminResourcePage } from './AdminResourcePage.jsx'
import { news } from '../data/baimpData.js'

const fields = [
  { name: 'title', label: 'Заглавие' },
  { name: 'slug', label: 'Slug' },
  { name: 'category', label: 'Категория' },
  { name: 'date', label: 'Дата', type: 'date' },
  { name: 'image_url', label: 'Изображение URL', type: 'image' },
  { name: 'summary', label: 'Кратко описание', type: 'textarea' },
  { name: 'content', label: 'Съдържание (параграфи по един на ред)', type: 'array' },
  { name: 'sort_order', label: 'Подредба', type: 'number', defaultValue: 99 },
  { name: 'is_featured', label: 'Показвай на начална страница', type: 'checkbox', defaultValue: true },
  { name: 'is_published', label: 'Публикувана', type: 'checkbox', defaultValue: true },
]

export function AdminNews() {
  return (
    <AdminResourcePage
      title="Новини"
      description="Добавяне, редакция, изображения, съдържание и видимост на новините."
      table="news"
      fallback={news}
      fields={fields}
      imageBucket="news-assets"
    />
  )
}

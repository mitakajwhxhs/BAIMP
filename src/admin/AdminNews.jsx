import { AdminResourcePage } from './AdminResourcePage.jsx'
import { news } from '../data/baimpData.js'

const fields = [
  { name: 'title', label: 'Title' },
  { name: 'slug', label: 'Slug' },
  { name: 'category', label: 'Category' },
  { name: 'date', label: 'Date', type: 'date' },
  { name: 'image_url', label: 'Image URL', type: 'image' },
  { name: 'summary', label: 'Short description', type: 'textarea' },
  { name: 'content', label: 'Content (one paragraph per line)', type: 'array' },
  { name: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 99 },
  { name: 'is_featured', label: 'Show on home page', type: 'checkbox', defaultValue: true },
  { name: 'is_published', label: 'Published', type: 'checkbox', defaultValue: true },
]

export function AdminNews() {
  return (
    <AdminResourcePage
      title="News"
      description="Add and edit news, images, content and visibility."
      table="news"
      fallback={news}
      fields={fields}
      imageBucket="news-assets"
    />
  )
}

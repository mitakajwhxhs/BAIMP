import { AdminResourcePage } from './AdminResourcePage.jsx'
import { courses } from '../data/baimpData.js'

const fields = [
  { name: 'title', label: 'Title' },
  { name: 'slug', label: 'Slug' },
  { name: 'eyebrow', label: 'Category', defaultValue: 'Practical training course' },
  { name: 'duration', label: 'Duration' },
  { name: 'format', label: 'Format' },
  { name: 'certificate', label: 'Certificate' },
  { name: 'image_url', label: 'Image / certificate URL', type: 'image' },
  { name: 'summary', label: 'Short description', type: 'textarea' },
  { name: 'description', label: 'Description (one paragraph per line)', type: 'array' },
  { name: 'topics', label: 'Topics (one per line)', type: 'array' },
  { name: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 99 },
  { name: 'is_featured', label: 'Show on home page', type: 'checkbox', defaultValue: true },
  { name: 'is_published', label: 'Published', type: 'checkbox', defaultValue: true },
]

export function AdminCourses() {
  return (
    <AdminResourcePage
      title="Courses and training"
      description="Manage training programmes, descriptions, topics, images and publication status."
      table="courses"
      fallback={courses}
      fields={fields}
      imageBucket="course-assets"
    />
  )
}

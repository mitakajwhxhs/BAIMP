import { AdminResourcePage } from './AdminResourcePage.jsx'
import { trainerIds, trainers } from '../data/baimpData.js'

const fields = [
  { name: 'name', label: 'Име' },
  { name: 'slug', label: 'Slug' },
  { name: 'title', label: 'Титла' },
  { name: 'city', label: 'Град' },
  { name: 'image_url', label: 'Снимка URL / Supabase Storage URL', type: 'image' },
  { name: 'specialties', label: 'Специалности (по един ред)', type: 'array' },
  { name: 'badges', label: 'Badges / квалификации (по един ред)', type: 'array' },
  { name: 'short_bio', label: 'Кратко описание', type: 'textarea' },
  { name: 'bio', label: 'Биография (параграфи по един ред)', type: 'array' },
  { name: 'education', label: 'Образование (по един ред)', type: 'array' },
  { name: 'qualifications', label: 'Квалификации (по един ред)', type: 'array' },
  { name: 'experience', label: 'Опит (по един ред)', type: 'array' },
  { name: 'topics', label: 'Теми на работа (по един ред)', type: 'array' },
  { name: 'memberships', label: 'Членства (по един ред)', type: 'array' },
  { name: 'sort_order', label: 'Подредба', type: 'number', defaultValue: 99 },
  { name: 'is_featured', label: 'Избран обучител', type: 'checkbox' },
  { name: 'is_published', label: 'Публикуван', type: 'checkbox', defaultValue: true },
]

export function AdminTrainers() {
  return (
    <AdminResourcePage
      title="Обучители"
      description="Добавяне, редакция, снимки, биографии, специалности, квалификации, опит, членства и видимост."
      table="trainers"
      fallback={trainers}
      fields={fields}
      imageBucket="trainer-photos"
      collectionOptions={{ requiredFallbackIds: trainerIds }}
    />
  )
}

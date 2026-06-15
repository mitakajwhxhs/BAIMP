import { AdminResourcePage } from './AdminResourcePage.jsx'
import { trainerIds, trainers } from '../data/baimpData.js'

const fields = [
  { name: 'name', label: 'Name' },
  { name: 'slug', label: 'Slug' },
  { name: 'title', label: 'Title' },
  { name: 'city', label: 'City' },
  { name: 'image_url', label: 'Photo URL / Supabase Storage URL', type: 'image' },
  { name: 'specialties', label: 'Specialties (one per line)', type: 'array' },
  { name: 'badges', label: 'Badges / qualifications (one per line)', type: 'array' },
  { name: 'short_bio', label: 'Short description', type: 'textarea' },
  { name: 'bio', label: 'Biography (one paragraph per line)', type: 'array' },
  { name: 'education', label: 'Education (one per line)', type: 'array' },
  { name: 'qualifications', label: 'Qualifications (one per line)', type: 'array' },
  { name: 'experience', label: 'Experience (one per line)', type: 'array' },
  { name: 'topics', label: 'Areas of work (one per line)', type: 'array' },
  { name: 'memberships', label: 'Memberships (one per line)', type: 'array' },
  { name: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 99 },
  { name: 'is_featured', label: 'Featured trainer', type: 'checkbox' },
  { name: 'is_published', label: 'Published', type: 'checkbox', defaultValue: true },
]

export function AdminTrainers() {
  return (
    <AdminResourcePage
      title="Trainers"
      description="Manage trainers, photos, biographies, specialties, qualifications, experience, memberships and visibility."
      table="trainers"
      fallback={trainers}
      fields={fields}
      imageBucket="trainer-photos"
      collectionOptions={{
        requiredFallbackIds: trainerIds,
        preferFallbackFields: ['image_url'],
      }}
    />
  )
}

import { getSupabase, hasSupabase } from './supabaseClient.js'

export function readStoredJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    localStorage.removeItem(key)
    return fallback
  }
}

export function writeStoredJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('The image could not be read.'))
    reader.readAsDataURL(file)
  })

export async function uploadPublicFile(bucket, file, folder = '') {
  if (!file) return null

  if (!hasSupabase) {
    if (file.size > 2 * 1024 * 1024) {
      throw new Error('In local mode, uploaded images must be smaller than 2 MB.')
    }
    return fileToDataUrl(file)
  }

  const cleanName = file.name
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/^-|-$/g, '')
  const path = `${folder}${Date.now()}-${cleanName}`
  const supabase = await getSupabase()
  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: '3600',
    upsert: true,
  })

  if (error) throw error
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl
}

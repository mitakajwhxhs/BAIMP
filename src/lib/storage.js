import { hasSupabase, supabase } from './supabaseClient.js'

export async function uploadPublicFile(bucket, file, folder = '') {
  if (!file) return null

  if (!hasSupabase) {
    return URL.createObjectURL(file)
  }

  const cleanName = file.name
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/^-|-$/g, '')
  const path = `${folder}${Date.now()}-${cleanName}`
  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: '3600',
    upsert: true,
  })

  if (error) throw error
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl
}

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const hasSupabase = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = hasSupabase
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null

export const publicStorageUrl = (bucket, path) => {
  if (!supabase || !path) return path
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl
}

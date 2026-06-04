import { useState } from 'react'
import { Lock, LogIn } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { hasSupabase, supabase } from '../lib/supabaseClient.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export function AdminLogin() {
  useDocumentTitle('Admin login')
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const submit = async (event) => {
    event.preventDefault()
    setError('')

    if (!form.email || !form.password) {
      setError('Въведете email и парола.')
      return
    }

    setLoading(true)
    try {
      if (hasSupabase) {
        const { error: signInError } = await supabase.auth.signInWithPassword(form)
        if (signInError) throw signInError
      }
      localStorage.setItem('baimp-admin-session', 'true')
      navigate(location.state?.from || '/admin', { replace: true })
    } catch (loginError) {
      setError(loginError.message || 'Неуспешен вход.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#173c35] px-5 py-12">
      <form onSubmit={submit} className="w-full max-w-md rounded-lg bg-[#fbf8f1] p-6 shadow-2xl sm:p-8">
        <Lock className="mb-5 h-10 w-10 text-[#bd9560]" />
        <h1 className="text-3xl font-semibold text-[#173c35]">Login за администратор</h1>
        <p className="mt-3 text-sm leading-6 text-[#66736f]">Защитена зона за управление на съдържанието.</p>
        {error ? <p className="mt-5 rounded-md bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p> : null}
        <div className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
            Email
            <input
              className="field"
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
            Парола
            <input
              className="field"
              type="password"
              value={form.password}
              onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
            />
          </label>
          <Button type="submit" icon={LogIn} disabled={loading} className="w-full">
            {loading ? 'Вход...' : 'Вход'}
          </Button>
        </div>
      </form>
    </main>
  )
}

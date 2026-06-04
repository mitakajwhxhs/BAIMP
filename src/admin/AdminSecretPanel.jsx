import { useEffect, useState } from 'react'
import { Lock, LogIn } from 'lucide-react'
import { Button } from '../components/ui/Button.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

const sessionKey = 'baimp-admin-secret-session'

export function AdminSecretPanel({ children }) {
  useDocumentTitle('Admin panel')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem(sessionKey) === 'true')
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD

  useEffect(() => {
    const handleLogout = () => setIsAuthenticated(false)

    window.addEventListener('baimp-admin-logout', handleLogout)
    return () => window.removeEventListener('baimp-admin-logout', handleLogout)
  }, [])

  const submit = (event) => {
    event.preventDefault()
    setError('')

    if (!adminPassword) {
      setError('Липсва VITE_ADMIN_PASSWORD в .env файла.')
      return
    }

    if (password !== adminPassword) {
      setError('Грешна парола.')
      return
    }

    localStorage.setItem(sessionKey, 'true')
    setPassword('')
    setIsAuthenticated(true)
  }

  if (isAuthenticated) return children

  return (
    <main className="grid min-h-screen place-items-center bg-[#173c35] px-5 py-12">
      <form onSubmit={submit} className="w-full max-w-md rounded-lg bg-[#fbf8f1] p-6 shadow-2xl sm:p-8">
        <Lock className="mb-5 h-10 w-10 text-[#bd9560]" />
        <h1 className="text-3xl font-semibold text-[#173c35]">Скрит админ панел</h1>
        <p className="mt-3 text-sm leading-6 text-[#66736f]">
          Въведете администраторската парола, за да получите достъп.
        </p>
        {error ? <p className="mt-5 rounded-md bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p> : null}
        <label className="mt-6 grid gap-2 text-sm font-semibold text-[#173c35]">
          Парола
          <input
            className="field"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <Button type="submit" icon={LogIn} className="mt-5 w-full">
          Вход
        </Button>
      </form>
    </main>
  )
}

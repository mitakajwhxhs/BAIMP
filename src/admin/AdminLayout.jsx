import { ExternalLink, LogOut, Menu } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const links = [
  { path: '', label: 'Преглед', end: true },
  { path: 'news', label: 'Новини' },
  { path: 'trainers', label: 'Обучители' },
  { path: 'courses', label: 'Курсове' },
  { path: 'bookings', label: 'Заявки' },
  { path: 'partners', label: 'Партньори' },
  { path: 'certificates', label: 'Сертификати' },
  { path: 'testimonials', label: 'Мнения' },
  { path: 'settings', label: 'Настройки на сайта' },
]

const linkClass = ({ isActive }) =>
  `flex items-center justify-between rounded-md px-4 py-3 text-sm font-semibold transition ${
    isActive
      ? 'bg-[#173c35] text-white shadow-[0_10px_26px_rgba(23,60,53,0.2)]'
      : 'text-[#566861] hover:bg-[#f4ede2] hover:text-[#173c35]'
  }`

export function AdminLayout({ basePath = '/admin-secret-panel', logoutPath = '/admin-secret-panel' }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const normalizedBasePath = basePath.replace(/\/$/, '')

  const logout = () => {
    localStorage.removeItem('baimp-admin-secret-session')
    localStorage.removeItem('baimp-admin-session')
    window.dispatchEvent(new Event('baimp-admin-logout'))
    navigate(logoutPath)
  }

  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <header className="sticky top-0 z-40 border-b border-[#d8c7a9] bg-[#173c35] text-white shadow-[0_16px_40px_rgba(23,60,53,0.18)]">
        <div className="container-page flex min-h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="focus-ring rounded-md border border-white/20 bg-white/10 p-2 text-white lg:hidden"
              onClick={() => setOpen((current) => !current)}
              aria-label="Админ меню"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <p className="text-sm font-bold uppercase text-[#f1d4a4]">БАИМП</p>
              <h1 className="text-2xl font-semibold">Админ панел</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring hidden items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/18 sm:inline-flex"
            >
              <ExternalLink className="h-4 w-4" />
              Виж сайта
            </a>
            <button
              type="button"
              onClick={logout}
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-[#173c35] transition hover:bg-[#f4ede2]"
            >
              <LogOut className="h-4 w-4" />
              Изход
            </button>
          </div>
        </div>
      </header>
      <div className="container-page grid gap-6 py-6 lg:grid-cols-[280px_1fr]">
        <aside className={`${open ? 'block' : 'hidden'} lg:block`}>
          <nav className="sticky top-28 grid gap-2 rounded-lg border border-[#d8c7a9] bg-white p-3 shadow-[0_18px_50px_rgba(23,60,53,0.08)]">
            <div className="border-b border-[#eadfce] px-3 py-3">
              <p className="text-xs font-bold uppercase text-[#bd9560]">Редакция</p>
              <p className="mt-1 text-sm leading-6 text-[#66736f]">Изберете секция и редактирайте съдържанието директно.</p>
            </div>
            {links.map((link) => (
              <NavLink
                key={link.path || 'dashboard'}
                to={link.path ? `${normalizedBasePath}/${link.path}` : normalizedBasePath}
                end={link.end}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
                <span className="h-2 w-2 rounded-full bg-current opacity-35" />
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

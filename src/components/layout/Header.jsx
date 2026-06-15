import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useSiteSettings } from '../../hooks/useSiteSettings.js'
import { useLanguage } from '../../i18n/useLanguage.js'

const getNavItems = (select) => [
  { label: select('Home', 'Начало'), to: '/' },
  {
    label: select('About Us', 'За нас'),
    to: '/about',
    dropdown: [
      { label: select('Trainers', 'Обучители'), to: '/trainers' },
      { label: select('Trainee Psychotherapists', 'Обучаващи се психотерапевти'), to: '/trainee-psychotherapists' },
      { label: select('Members', 'Членове'), to: '/members' },
    ],
  },
  {
    label: select('Training', 'Обучение'),
    to: '/training',
    dropdown: [
      {
        label: select('Psychotherapy Programme', 'Психотерапевтична програма'),
        to: '/training/psychotherapy-program',
      },
      { label: select('Courses', 'Курсове'), to: '/courses' },
    ],
  },
  {
    label: select('Documents', 'Документи'),
    to: '/documents',
    dropdown: [
      { label: select('Statute', 'Устав'), to: '/documents/statute' },
      { label: select('Code of Ethics', 'Етичен кодекс'), to: '/documents/code-of-ethics' },
      {
        label: select('Rights and Non-discrimination Policy', 'Политика за права и недискриминация'),
        to: '/documents/rights-and-non-discrimination-policy',
      },
    ],
  },
  { label: select('News', 'Новини'), to: '/news' },
  { label: select('Privacy and Policy', 'Поверителност'), to: '/privacy-policy' },
]

const navClass = (active) =>
  `inline-flex min-h-10 items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition duration-300 ${
    active
      ? 'bg-[#ede4d6] text-[#153b34] shadow-[inset_0_0_0_1px_rgba(196,164,103,0.24)]'
      : 'text-[#526760] hover:bg-[#f3eadc] hover:text-[#153b34]'
  }`

function HeaderLogo({ settings }) {
  return (
    <Link
      to="/"
      className="focus-ring group inline-flex shrink-0 items-center rounded-lg bg-[#fbf8f1]/80 p-1 transition duration-300 hover:-translate-y-0.5 hover:bg-[#ede4d6]"
      aria-label={settings.organization}
    >
      <img
        src="/images/baimp-logo.webp"
        alt={settings.shortName}
        className="brand-logo-mark h-14 w-14 object-contain transition duration-300 group-hover:scale-105"
      />
    </Link>
  )
}

function DropdownItem({ item }) {
  return (
    <Link
      to={item.to}
      className="block rounded-md px-3 py-3 text-sm font-semibold text-[#526760] transition duration-300 hover:bg-[#f3eadc] hover:text-[#153b34]"
    >
      {item.label}
    </Link>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileGroup, setOpenMobileGroup] = useState(null)
  const { settings } = useSiteSettings()
  const { select } = useLanguage()
  const navItems = getNavItems(select)
  const { pathname } = useLocation()

  const isActiveGroup = (item) => {
    if (pathname === item.to) return true
    return item.dropdown?.some((child) => pathname === child.to || pathname.startsWith(`${child.to}/`))
  }

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setOpenMobileGroup(null)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dac8]/80 bg-[#fbf8f1]/92 shadow-[0_10px_30px_rgba(21,59,52,0.06)] backdrop-blur-xl">
      <div className="container-page flex min-h-20 items-center gap-4">
        <HeaderLogo settings={settings} />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex"
          aria-label={select('Main navigation', 'Основна навигация')}
        >
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.to} className="group relative">
                <Link to={item.to} className={navClass(isActiveGroup(item))}>
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full w-72 translate-y-3 rounded-lg border border-[#e2d5bf] bg-white/95 p-2 opacity-0 shadow-[0_24px_65px_rgba(21,59,52,0.14)] backdrop-blur-xl transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.dropdown.map((child) => (
                    <DropdownItem key={child.to} item={child} />
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => navClass(isActive)}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="mobile-menu-control ml-auto">
          <button
            type="button"
            className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-md border border-[#153b34] bg-[#153b34] text-white shadow-[0_12px_28px_rgba(21,59,52,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f5f55]"
            aria-label={select('Menu', 'Меню')}
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="border-t border-[#e5dac8] bg-[#fbf8f1]/97 shadow-[0_22px_45px_rgba(21,59,52,0.08)] backdrop-blur-xl xl:hidden"
          >
            <div className="container-page grid gap-3 py-5">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.to} className="rounded-lg border border-[#e2d5bf] bg-white/90 p-2">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-lg font-semibold text-[#153b34]"
                      onClick={() => setOpenMobileGroup((current) => (current === item.to ? null : item.to))}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 text-[#a9844c] transition duration-300 ${
                          openMobileGroup === item.to ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openMobileGroup === item.to ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-2 px-2 pb-2 pt-1">
                            <NavLink
                              to={item.to}
                              onClick={closeMobileMenu}
                              className="rounded-md bg-[#fbf8f1] px-4 py-3 text-base font-semibold text-[#2f5f55]"
                            >
                              {select('Overview', 'Преглед')}
                            </NavLink>
                            {item.dropdown.map((child) => (
                              <NavLink
                                key={child.to}
                                to={child.to}
                                onClick={closeMobileMenu}
                                className="rounded-md bg-[#ede4d6] px-4 py-3 text-base font-semibold text-[#153b34]"
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `whitespace-nowrap rounded-lg px-4 py-4 text-lg font-semibold ${
                        isActive
                          ? 'bg-[#2f5f55] text-white shadow-[0_12px_30px_rgba(21,59,52,0.18)]'
                          : 'bg-white text-[#153b34]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { courses, trainers } from '../../data/baimpData.js'
import { useSiteSettings } from '../../hooks/useSiteSettings.js'
import { Button } from '../ui/Button.jsx'
import { BrandFacebookIcon, BrandInstagramIcon } from '../ui/SocialIcons.jsx'

const navItems = [
  { label: 'Начало', to: '/' },
  { label: 'За нас', to: '/za-nas' },
  { label: 'Партньори', to: '/partnyori' },
  { label: 'Сертификати', to: '/sertifikati' },
  { label: 'Новини', to: '/novini' },
  { label: 'Контакти', to: '/kontakti' },
]

const navClass = ({ isActive }) =>
  `whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition duration-300 ${
    isActive
      ? 'bg-[#ede4d6] text-[#153b34] shadow-[inset_0_0_0_1px_rgba(196,164,103,0.24)]'
      : 'text-[#526760] hover:bg-[#f3eadc] hover:text-[#153b34]'
  }`

function HeaderLogo({ settings }) {
  return (
    <Link
      to="/"
      className="focus-ring group inline-flex shrink-0 rounded-lg bg-white/75 p-1 shadow-[0_10px_28px_rgba(21,59,52,0.1)] ring-1 ring-[#e2d5bf] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
      aria-label={settings.organization}
    >
      <img
        src="/images/baimp-logo.webp"
        alt={settings.shortName}
        className="h-12 w-12 rounded-md bg-transparent object-contain transition duration-300 group-hover:scale-105"
      />
    </Link>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-transparent transition duration-300 hover:-translate-y-0.5 hover:bg-[#ede4d6]"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { settings } = useSiteSettings()

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dac8]/80 bg-[#fbf8f1]/90 shadow-[0_10px_30px_rgba(21,59,52,0.06)] backdrop-blur-xl">
      <div className="container-page flex min-h-20 items-center gap-4">
        <HeaderLogo settings={settings} />

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex" aria-label="Основна навигация">
          {navItems.slice(0, 2).map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}

          <div className="group relative">
            <NavLink to="/obuchiteli" className={navClass}>
              <span className="inline-flex items-center gap-1 whitespace-nowrap">
                Обучители <ChevronDown className="h-4 w-4" />
              </span>
            </NavLink>
            <div className="invisible absolute left-0 top-full w-80 translate-y-3 rounded-lg border border-[#e2d5bf] bg-white/95 p-2 opacity-0 shadow-[0_24px_65px_rgba(21,59,52,0.14)] backdrop-blur-xl transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {trainers.slice(0, 6).map((trainer) => (
                <Link
                  key={trainer.id}
                  to={`/obuchiteli/${trainer.slug}`}
                  className="flex rounded-md px-3 py-2 text-sm font-medium text-[#526760] transition duration-300 hover:bg-[#f3eadc] hover:text-[#153b34]"
                >
                  {trainer.name}
                </Link>
              ))}
              <Link
                to="/obuchiteli"
                className="mt-1 flex rounded-md px-3 py-2 text-sm font-bold text-[#2f5f55] transition duration-300 hover:bg-[#f3eadc]"
              >
                Всички обучители
              </Link>
            </div>
          </div>

          <div className="group relative">
            <NavLink to="/kursove" className={navClass}>
              <span className="inline-flex items-center gap-1 whitespace-nowrap">
                Курсове <ChevronDown className="h-4 w-4" />
              </span>
            </NavLink>
            <div className="invisible absolute left-0 top-full w-96 translate-y-3 rounded-lg border border-[#e2d5bf] bg-white/95 p-2 opacity-0 shadow-[0_24px_65px_rgba(21,59,52,0.14)] backdrop-blur-xl transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to="/kursove"
                  className="block rounded-md px-3 py-3 transition duration-300 hover:bg-[#f3eadc]"
                >
                  <span className="block text-sm font-bold text-[#153b34]">{course.title}</span>
                  <span className="mt-1 block text-xs text-[#63736d]">{course.duration}</span>
                </Link>
              ))}
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-2 xl:flex">
          <Button to="/zapisvane" icon={CalendarCheck} className="min-h-10 px-4 py-2 animate-calm-glow">
            Записване
          </Button>
          <SocialLink href={settings.contact.facebook} label="Facebook">
            <BrandFacebookIcon className="h-6 w-6" />
          </SocialLink>
          <SocialLink href={settings.contact.instagram} label="Instagram">
            <BrandInstagramIcon className="h-6 w-6" />
          </SocialLink>
        </div>

        <div className="mobile-menu-control">
          <button
            type="button"
            className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-md border border-[#153b34] bg-[#153b34] text-white shadow-[0_12px_28px_rgba(21,59,52,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f5f55]"
            aria-label="Меню"
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
          className="border-t border-[#e5dac8] bg-[#fbf8f1]/95 shadow-[0_22px_45px_rgba(21,59,52,0.08)] backdrop-blur-xl xl:hidden"
        >
          <div className="container-page grid gap-3 py-5">
            {[...navItems, { label: 'Обучители', to: '/obuchiteli' }, { label: 'Курсове', to: '/kursove' }].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-lg px-4 py-4 text-lg font-semibold ${
                    isActive ? 'bg-[#2f5f55] text-white shadow-[0_12px_30px_rgba(21,59,52,0.18)]' : 'bg-white text-[#153b34]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="grid gap-2 rounded-lg border border-[#e2d5bf] bg-white/90 p-3">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to="/kursove"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md bg-[#ede4d6] px-4 py-3 text-base font-semibold text-[#153b34]"
                >
                  {course.title}
                </Link>
              ))}
            </div>
            <a
              href={`tel:${settings.contact.phone.replace(/\s/g, '')}`}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#c4a467] px-5 py-3 text-base font-semibold text-white shadow-[0_14px_34px_rgba(196,164,103,0.26)] transition hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              {settings.contact.phone}
            </a>
            <div className="flex justify-center gap-3">
              <SocialLink href={settings.contact.facebook} label="Facebook">
                <BrandFacebookIcon className="h-7 w-7" />
              </SocialLink>
              <SocialLink href={settings.contact.instagram} label="Instagram">
                <BrandInstagramIcon className="h-7 w-7" />
              </SocialLink>
            </div>
          </div>
        </motion.div>
      ) : null}
      </AnimatePresence>
    </header>
  )
}

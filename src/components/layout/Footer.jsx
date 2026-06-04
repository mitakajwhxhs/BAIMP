import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSiteSettings } from '../../hooks/useSiteSettings.js'
import { FacebookIcon, InstagramIcon } from '../ui/SocialIcons.jsx'

export function Footer() {
  const { settings } = useSiteSettings()
  const contact = settings.contact

  return (
    <footer className="border-t border-[#d9ccba] bg-[linear-gradient(135deg,#153b34,#203f39_48%,#14201c)] text-white">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-white/90 bg-[url('/images/baimp-logo.webp')] bg-contain bg-center bg-no-repeat p-1 text-sm font-bold text-transparent shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
              БА
            </span>
            <span className="max-w-xs text-lg font-semibold leading-6">{settings.organization}</span>
          </Link>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">{settings.aboutText}</p>
        </div>
        <div>
          <h3 className="mb-4 text-base font-semibold">Навигация</h3>
          <div className="grid gap-3 text-sm text-white/75">
            <Link className="hover:text-white" to="/za-nas">
              За нас
            </Link>
            <Link className="hover:text-white" to="/obuchiteli">
              Обучители
            </Link>
            <Link className="hover:text-white" to="/kursove">
              Курсове
            </Link>
            <Link className="hover:text-white" to="/novini">
              Новини
            </Link>
            <Link className="hover:text-white" to="/zapisvane">
              Онлайн записване
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-base font-semibold">Контакти</h3>
          <div className="space-y-3 text-sm text-white/75">
            <p className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#c4a467]" />
              {contact.address}
            </p>
            <a className="flex gap-3 hover:text-white" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
              <Phone className="h-5 w-5 shrink-0 text-[#c4a467]" />
              {contact.phone}
            </a>
            <a className="flex gap-3 hover:text-white" href={`mailto:${contact.email}`}>
              <Mail className="h-5 w-5 shrink-0 text-[#c4a467]" />
              {contact.email}
            </a>
            <div className="flex gap-2 pt-2">
              <a
                className="focus-ring rounded-md border border-white/15 p-2 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                href={contact.facebook}
                target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                className="focus-ring rounded-md border border-white/15 p-2 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="container-page text-sm text-white/55">
          <span>COPYRIGHT © 2020. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

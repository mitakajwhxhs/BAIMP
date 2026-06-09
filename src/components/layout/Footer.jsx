import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSiteSettings } from '../../hooks/useSiteSettings.js'
import { useLanguage } from '../../i18n/useLanguage.js'
import { localizeSettings } from '../../i18n/localizedData.js'
import { FacebookIcon, InstagramIcon } from '../ui/SocialIcons.jsx'

export function Footer() {
  const { settings: storedSettings } = useSiteSettings()
  const { language, select } = useLanguage()
  const settings = localizeSettings(storedSettings, language)
  const contact = settings.contact

  return (
    <footer className="footer-soft text-white">
      <div className="footer-content container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-sm font-bold text-[#f1d4a4] shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
              BA
            </span>
            <span className="max-w-xs text-lg font-semibold leading-6">{settings.organization}</span>
          </Link>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">{settings.aboutText}</p>
        </div>
        <div>
          <h3 className="mb-4 text-base font-semibold">{select('Navigation', 'Навигация')}</h3>
          <div className="grid gap-3 text-sm text-white/75">
            <Link className="hover:text-white" to="/about">
              {select('About Us', 'За нас')}
            </Link>
            <Link className="hover:text-white" to="/trainers">
              {select('Trainers', 'Обучители')}
            </Link>
            <Link className="hover:text-white" to="/training">
              {select('Training', 'Обучение')}
            </Link>
            <Link className="hover:text-white" to="/documents">
              {select('Documents', 'Документи')}
            </Link>
            <Link className="hover:text-white" to="/news">
              {select('News', 'Новини')}
            </Link>
            <Link className="hover:text-white" to="/privacy-policy">
              {select('Privacy and Policy', 'Поверителност')}
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-base font-semibold">{select('Contact', 'Контакти')}</h3>
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
          <span>{select('Copyright (c) 2020. All Rights Reserved.', 'Copyright (c) 2020. Всички права запазени.')}</span>
        </div>
      </div>
    </footer>
  )
}

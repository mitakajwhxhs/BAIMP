import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '../components/ui/Button.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { FacebookIcon, InstagramIcon } from '../components/ui/SocialIcons.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { useSiteSettings } from '../hooks/useSiteSettings.js'
import { useToast } from '../hooks/useToast.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { localizeSettings } from '../i18n/localizedData.js'

const initial = { name: '', email: '', phone: '', message: '' }

export function Contact() {
  const { language, select } = useLanguage()
  useDocumentTitle(select('Contact', 'Контакти'))
  const { settings: storedSettings } = useSiteSettings()
  const settings = localizeSettings(storedSettings, language)
  const { createItem } = useLocalCollection('contact_requests', [], { skipRemoteLoad: true })
  const { pushToast } = useToast()
  const [form, setForm] = useState(initial)
  const [error, setError] = useState('')

  const contact = settings.contact
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`

  const submit = async (event) => {
    event.preventDefault()
    setError('')

    if (!form.name || !form.email || !form.phone || !form.message) {
      setError(select('Please fill in all fields.', 'Моля, попълнете всички полета.'))
      return
    }

    await createItem({ ...form, status: 'pending' })
    setForm(initial)
    pushToast(select('Your inquiry has been sent successfully.', 'Запитването е изпратено успешно.'))
  }

  return (
    <>
      <PageHero
        eyebrow={select('Contact', 'Контакт с нас')}
        title={select(
          'We will review your inquiry and contact you',
          'Ще обработим запитването Ви и ще се свържем обратно',
        )}
        text={select(
          'You can contact us about a complete training course, personal support, individual trainings and seminars.',
          'Може да се свържете с нас за цялостен обучителен курс, личностна подкрепа, еднократни обучения и семинари.',
        )}
      />
      <MotionSection className="section-pad section-surface">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            <div className="card-soft hover-lift p-6">
              <MapPin className="mb-4 h-7 w-7 text-[#a9844c]" />
              <h2 className="text-xl font-semibold text-[#153b34]">{select('Address', 'Адрес')}</h2>
              <p className="mt-2 text-base text-[#63736d]">{contact.address}</p>
            </div>
            <a className="card-soft hover-lift block p-6 transition hover:border-[#2f5f55]" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
              <Phone className="mb-4 h-7 w-7 text-[#a9844c]" />
              <h2 className="text-xl font-semibold text-[#153b34]">{select('Phone', 'Телефон')}</h2>
              <p className="mt-2 text-base text-[#63736d]">{contact.phone}</p>
            </a>
            <a className="card-soft hover-lift block p-6 transition hover:border-[#2f5f55]" href={`mailto:${contact.email}`}>
              <Mail className="mb-4 h-7 w-7 text-[#a9844c]" />
              <h2 className="text-xl font-semibold text-[#153b34]">Email</h2>
              <p className="mt-2 text-base text-[#63736d]">{contact.email}</p>
            </a>
            <div className="flex gap-3">
              <Button href={contact.facebook} variant="secondary" icon={FacebookIcon}>
                Facebook
              </Button>
              <Button href={contact.instagram} variant="secondary" icon={InstagramIcon}>
                Instagram
              </Button>
            </div>
          </div>

          <div className="premium-panel p-5 sm:p-8">
            <h2 className="mb-5 text-2xl font-semibold text-[#153b34]">
              {select('Send an inquiry', 'Изпратете запитване')}
            </h2>
            {error ? <p className="mb-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p> : null}
            <form onSubmit={submit} className="grid gap-4">
              <input
                className="field"
                placeholder={select('Name', 'Име')}
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="field"
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                />
                <input
                  className="field"
                  placeholder={select('Phone', 'Телефон')}
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                />
              </div>
              <textarea
                className="field min-h-36 resize-y"
                placeholder={select('Message', 'Съобщение')}
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              />
              <Button type="submit" icon={Send}>
                {select('Send', 'Изпрати')}
              </Button>
            </form>
          </div>
        </div>
      </MotionSection>
      <section className="map-section h-[420px] border-t border-[#ded3c4] p-1 sm:p-2">
        <iframe
          title="Google Maps"
          src={mapUrl}
          className="h-full w-full rounded-md border-0 shadow-[0_18px_45px_rgba(21,59,52,0.1)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}

import { Save } from 'lucide-react'
import { Button } from '../components/ui/Button.jsx'
import { useSiteSettings } from '../hooks/useSiteSettings.js'
import { useToast } from '../hooks/useToast.js'

const contactFields = [
  { name: 'address', label: 'Address' },
  { name: 'phone', label: 'Phone' },
  { name: 'email', label: 'Email' },
  { name: 'facebook', label: 'Facebook URL' },
  { name: 'instagram', label: 'Instagram URL' },
  { name: 'mapQuery', label: 'Google Maps search' },
]

function AdminSection({ eyebrow, title, children }) {
  return (
    <section className="rounded-lg border border-[#eadfce] bg-white p-5 shadow-[0_14px_40px_rgba(23,60,53,0.06)]">
      <p className="text-sm font-bold uppercase text-[#bd9560]">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-semibold text-[#173c35]">{title}</h2>
      <div className="mt-5 grid gap-4">{children}</div>
    </section>
  )
}

export function AdminSettings() {
  const { settings, saveSettings } = useSiteSettings()
  const { pushToast } = useToast()

  const update = (field, value) => {
    saveSettings({ ...settings, [field]: value })
  }

  const updateContact = (field, value) => {
    saveSettings({ ...settings, contact: { ...settings.contact, [field]: value } })
  }

  const updateStat = (index, field, value) => {
    const nextStats = settings.stats.map((stat, statIndex) =>
      statIndex === index ? { ...stat, [field]: value } : stat,
    )
    saveSettings({ ...settings, stats: nextStats })
  }

  const submit = (event) => {
    event.preventDefault()
    pushToast('Settings saved.')
  }

  return (
    <form onSubmit={submit} className="grid gap-6">
      <section className="overflow-hidden rounded-lg border border-[#d8c7a9] bg-white shadow-[0_18px_55px_rgba(23,60,53,0.08)]">
        <div className="bg-[#173c35] px-6 py-5 text-white">
          <p className="text-sm font-bold uppercase text-[#f1d4a4]">Settings</p>
          <h1 className="mt-2 text-3xl font-semibold">General site settings</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/75">
            Edit the main site copy, contact details, social links and statistics.
          </p>
        </div>
      </section>

      <AdminSection eyebrow="Brand" title="Organization name">
        <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
          Organization name
          <input className="field" value={settings.organization} onChange={(event) => update('organization', event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
          Short name
          <input className="field" value={settings.shortName} onChange={(event) => update('shortName', event.target.value)} />
        </label>
      </AdminSection>

      <AdminSection eyebrow="Home page" title="Hero section">
        <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
          Main heading
          <input className="field" value={settings.heroTitle} onChange={(event) => update('heroTitle', event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
          Description
          <textarea
            className="field min-h-28 resize-y"
            value={settings.heroText}
            onChange={(event) => update('heroText', event.target.value)}
          />
        </label>
      </AdminSection>

      <AdminSection eyebrow="About us" title="Introductory copy">
        <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
          Short lead
          <textarea
            className="field min-h-24 resize-y"
            value={settings.aboutLead}
            onChange={(event) => update('aboutLead', event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
          Main text
          <textarea
            className="field min-h-32 resize-y"
            value={settings.aboutText}
            onChange={(event) => update('aboutText', event.target.value)}
          />
        </label>
      </AdminSection>

      <AdminSection eyebrow="Contact" title="Contact information and social media">
        <div className="grid gap-4 sm:grid-cols-2">
          {contactFields.map((field) => (
            <label key={field.name} className="grid gap-2 text-sm font-semibold text-[#173c35]">
              {field.label}
              <input
                className="field"
                value={settings.contact[field.name]}
                onChange={(event) => updateContact(field.name, event.target.value)}
              />
            </label>
          ))}
        </div>
      </AdminSection>

      <AdminSection eyebrow="Home page" title="Statistics">
        <div className="grid gap-4 sm:grid-cols-2">
          {settings.stats.map((stat, index) => (
            <div key={`${stat.label}-${index}`} className="grid gap-3 rounded-lg border border-[#eadfce] bg-[#fbf8f1] p-4">
              <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
                Value
                <input className="field" value={stat.value} onChange={(event) => updateStat(index, 'value', event.target.value)} />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
                Label
                <input className="field" value={stat.label} onChange={(event) => updateStat(index, 'label', event.target.value)} />
              </label>
            </div>
          ))}
        </div>
      </AdminSection>

      <div className="sticky bottom-4 flex justify-end">
        <Button type="submit" icon={Save} className="shadow-[0_16px_35px_rgba(23,60,53,0.22)]">
          Save settings
        </Button>
      </div>
    </form>
  )
}

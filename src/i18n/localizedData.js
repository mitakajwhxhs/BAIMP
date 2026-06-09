import * as englishData from '../data/baimpData.js'
import * as bulgarianData from '../data/baimpData.bg.js'

export function getLocalizedData(language) {
  return language === 'bg' ? bulgarianData : englishData
}

export function localizeItems(items, localizedItems, language) {
  if (language !== 'bg') return items

  const translations = new Map(localizedItems.map((item) => [item.id, item]))

  return items.map((item) => {
    const translation = translations.get(item.id)
    if (!translation) return item

    return {
      ...item,
      ...translation,
      id: item.id,
      slug: item.slug,
      image_url: item.image_url,
      is_featured: item.is_featured,
      is_published: item.is_published,
      sort_order: item.sort_order,
    }
  })
}

export function localizeSettings(settings, language) {
  if (language !== 'bg') return settings

  return {
    ...settings,
    ...bulgarianData.siteContent,
    language: 'bg',
    contact: {
      ...settings.contact,
      ...bulgarianData.siteContent.contact,
    },
  }
}

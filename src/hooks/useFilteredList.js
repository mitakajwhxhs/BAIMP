import { useMemo } from 'react'

export function useFilteredList(items, query, fields) {
  return useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return items

    return items.filter((item) =>
      fields.some((field) => {
        const value = item[field]
        if (Array.isArray(value)) return value.join(' ').toLowerCase().includes(normalized)
        return String(value || '').toLowerCase().includes(normalized)
      }),
    )
  }, [fields, items, query])
}

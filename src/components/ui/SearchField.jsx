import { Search } from 'lucide-react'

export function SearchField({ value, onChange, placeholder }) {
  return (
    <label className="relative block min-w-0 max-w-full">
      <span className="sr-only">{placeholder}</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#63736d]" />
      <input
        className="field min-h-12 pl-12"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type="search"
      />
    </label>
  )
}

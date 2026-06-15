import { useMemo, useState } from 'react'
import { Edit3, Eye, ImagePlus, Plus, Save, Search, Trash2, Upload, X } from 'lucide-react'
import { Button } from '../components/ui/Button.jsx'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { slugify } from '../lib/slug.js'
import { uploadPublicFile } from '../lib/storage.js'
import { useToast } from '../hooks/useToast.js'

const fieldHelp = {
  array: 'Each line is saved as a separate item.',
  image: 'Enter a URL or upload an image from your computer.',
  textarea: 'You can enter longer text here.',
}

const formatValue = (field, value) => {
  if (field.type === 'array') return Array.isArray(value) ? value.join('\n') : value || ''
  if (field.type === 'checkbox') return Boolean(value)
  return value ?? ''
}

const parseValue = (field, value) => {
  if (field.type === 'array') {
    return value
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean)
  }
  if (field.type === 'checkbox') return Boolean(value)
  if (field.type === 'number') return Number(value || 0)
  return value
}

const statusLabel = (item) => {
  if (item.is_published === false) return 'Draft'
  return 'Published'
}

const matchesQuery = (item, query) => {
  if (!query.trim()) return true
  const searchable = [
    item.name,
    item.title,
    item.summary,
    item.type,
    item.category,
    item.role,
    item.email,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  return searchable.includes(query.trim().toLowerCase())
}

export function AdminResourcePage({
  title,
  description,
  table,
  fallback,
  fields,
  imageBucket,
  collectionOptions,
}) {
  const { items, createItem, updateItem, deleteItem } = useLocalCollection(
    table,
    fallback,
    collectionOptions,
  )
  const { pushToast } = useToast()
  const initialForm = useMemo(() => {
    const seed = {}
    fields.forEach((field) => {
      seed[field.name] = field.type === 'checkbox' ? Boolean(field.defaultValue) : field.defaultValue || ''
    })
    return seed
  }, [fields])

  const [form, setForm] = useState(initialForm)
  const [editingId, setEditingId] = useState(null)
  const [query, setQuery] = useState('')
  const [uploadingField, setUploadingField] = useState('')

  const filteredItems = useMemo(() => items.filter((item) => matchesQuery(item, query)), [items, query])
  const editingItem = useMemo(() => items.find((item) => item.id === editingId), [editingId, items])
  const imageField = fields.find((field) => field.type === 'image')
  const imagePreview = imageField ? form[imageField.name] : ''

  const reset = () => {
    setForm(initialForm)
    setEditingId(null)
  }

  const startEdit = (item) => {
    const next = {}
    fields.forEach((field) => {
      next[field.name] = formatValue(field, item[field.name])
    })
    setForm(next)
    setEditingId(item.id)
  }

  const submit = async (event) => {
    event.preventDefault()
    const payload = {}
    fields.forEach((field) => {
      payload[field.name] = parseValue(field, form[field.name])
    })

    if (!payload.slug && (payload.name || payload.title)) {
      payload.slug = slugify(payload.name || payload.title)
    }

    try {
      if (editingId) {
        await updateItem(editingId, payload)
        pushToast('The record was updated.')
      } else {
        await createItem(payload)
        pushToast('The record was added.')
      }
      reset()
    } catch (error) {
      pushToast(error.message || 'The record could not be saved.', 'error')
    }
  }

  const remove = async (item) => {
    const label = item.name || item.title || 'this record'
    if (!window.confirm(`Delete "${label}"?`)) return

    try {
      await deleteItem(item.id)
      if (editingId === item.id) reset()
      pushToast('The record was deleted.')
    } catch (error) {
      pushToast(error.message || 'The record could not be deleted.', 'error')
    }
  }

  const uploadImage = async (field, file) => {
    if (!file) return
    setUploadingField(field.name)
    try {
      const url = await uploadPublicFile(imageBucket || 'site-assets', file, `${table}/`)
      setForm((current) => ({ ...current, [field.name]: url }))
      pushToast('The image was uploaded.')
    } catch (error) {
      pushToast(error.message || 'Upload failed.', 'error')
    } finally {
      setUploadingField('')
    }
  }

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field.name]: value }))
  }

  return (
    <div className="grid gap-6">
      <section className="overflow-hidden rounded-lg border border-[#d8c7a9] bg-white shadow-[0_18px_55px_rgba(23,60,53,0.08)]">
        <div className="border-b border-[#eadfce] bg-[#173c35] px-6 py-5 text-white">
          <p className="text-sm font-bold uppercase text-[#f1d4a4]">Content management</p>
          <h1 className="mt-2 text-3xl font-semibold">{title}</h1>
          {description ? <p className="mt-3 max-w-3xl text-base leading-7 text-white/75">{description}</p> : null}
        </div>
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#bd9560]" />
            <input
              className="field pl-10"
              value={query}
              placeholder="Search the list"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Button type="button" icon={Plus} onClick={reset}>
            New record
          </Button>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <div className="rounded-lg border border-[#eadfce] bg-white p-4 shadow-[0_14px_40px_rgba(23,60,53,0.06)]">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-[#173c35]">Records</h2>
              <p className="mt-1 text-sm text-[#66736f]">{filteredItems.length} of {items.length}</p>
            </div>
            <Eye className="h-5 w-5 text-[#bd9560]" />
          </div>
          <div className="grid max-h-[760px] gap-3 overflow-auto pr-1">
            {filteredItems.length ? (
              filteredItems.map((item) => {
                const selected = item.id === editingId

                return (
                  <article
                    key={item.id}
                    className={`grid gap-3 rounded-lg border p-3 transition sm:grid-cols-[84px_1fr_auto] sm:items-center ${
                      selected
                        ? 'border-[#315c4f] bg-[#f4ede2]'
                        : 'border-[#eadfce] bg-[#fbf8f1] hover:border-[#c8b48f] hover:bg-white'
                    }`}
                  >
                    <button
                      type="button"
                      className="h-20 w-20 overflow-hidden rounded-md bg-[#eadfce]"
                      onClick={() => startEdit(item)}
                      aria-label="Edit record"
                    >
                      {item.image_url ? (
                        <img src={item.image_url} alt="" className="h-full w-full object-cover object-top" />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-[#bd9560]">
                          <ImagePlus className="h-6 w-6" />
                        </span>
                      )}
                    </button>
                    <button type="button" className="text-left" onClick={() => startEdit(item)}>
                      <h3 className="font-semibold leading-snug text-[#173c35]">{item.name || item.title || 'Untitled'}</h3>
                      <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#66736f]">
                        {item.summary || item.type || item.title || item.role || 'No description'}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span
                          className={`rounded-md px-2 py-1 text-xs font-bold ${
                            item.is_published === false ? 'bg-[#fff2e2] text-[#8a622f]' : 'bg-emerald-50 text-emerald-800'
                          }`}
                        >
                          {statusLabel(item)}
                        </span>
                        {item.is_featured ? (
                          <span className="rounded-md bg-[#eef4f1] px-2 py-1 text-xs font-bold text-[#315c4f]">
                            Featured
                          </span>
                        ) : null}
                      </div>
                    </button>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="focus-ring rounded-md border border-[#d8c7a9] bg-white p-2 text-[#315c4f] transition hover:bg-[#f4ede2]"
                        aria-label="Edit"
                        onClick={() => startEdit(item)}
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="focus-ring rounded-md border border-red-200 bg-white p-2 text-red-700 transition hover:bg-red-50"
                        aria-label="Delete"
                        onClick={() => remove(item)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                )
              })
            ) : (
              <div className="rounded-lg border border-dashed border-[#d8c7a9] bg-[#fbf8f1] p-8 text-center text-[#66736f]">
                No records found.
              </div>
            )}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-lg border border-[#d8c7a9] bg-white p-5 shadow-[0_18px_55px_rgba(23,60,53,0.08)] xl:sticky xl:top-24"
        >
          <div className="mb-5 flex flex-col gap-3 border-b border-[#eadfce] pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-[#bd9560]">{editingId ? 'Edit record' : 'New record'}</p>
              <h2 className="mt-1 text-2xl font-semibold text-[#173c35]">
                {editingItem?.name || editingItem?.title || title}
              </h2>
            </div>
            {editingId ? (
              <button
                type="button"
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-[#d8c7a9] px-3 py-2 text-sm font-semibold text-[#173c35] transition hover:bg-[#f4ede2]"
                onClick={reset}
              >
                <X className="h-4 w-4" />
                Close
              </button>
            ) : null}
          </div>

          {imagePreview ? (
            <img
              src={imagePreview}
              alt=""
              className="mb-5 aspect-[16/9] w-full rounded-md border border-[#eadfce] bg-[#eadfce] object-cover object-top"
            />
          ) : null}

          <div className="grid gap-4">
            {fields.map((field) => {
              if (field.type === 'checkbox') {
                return (
                  <label
                    key={field.name}
                    className="flex items-center justify-between gap-4 rounded-md border border-[#eadfce] bg-[#fbf8f1] px-4 py-3 text-sm font-semibold text-[#173c35]"
                  >
                    <span>{field.label}</span>
                    <input
                      type="checkbox"
                      checked={Boolean(form[field.name])}
                      onChange={(event) => updateField(field, event.target.checked)}
                      className="h-5 w-5 rounded border-[#d8c7a9] accent-[#315c4f]"
                    />
                  </label>
                )
              }

              if (field.type === 'textarea' || field.type === 'array') {
                return (
                  <label key={field.name} className="grid gap-2 text-sm font-semibold text-[#173c35]">
                    {field.label}
                    <textarea
                      className="field min-h-28 resize-y"
                      value={form[field.name]}
                      onChange={(event) => updateField(field, event.target.value)}
                    />
                    <span className="text-xs font-medium text-[#66736f]">{fieldHelp[field.type]}</span>
                  </label>
                )
              }

              if (field.type === 'image') {
                return (
                  <div key={field.name} className="grid gap-2">
                    <label className="grid gap-2 text-sm font-semibold text-[#173c35]">
                      {field.label}
                      <input
                        className="field"
                        value={form[field.name]}
                        onChange={(event) => updateField(field, event.target.value)}
                      />
                    </label>
                    <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
                      <span className="text-xs font-medium text-[#66736f]">{fieldHelp.image}</span>
                      <label className="focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-[#d8c7a9] bg-[#fbf8f1] px-4 py-3 text-sm font-semibold text-[#173c35] transition hover:bg-[#f4ede2]">
                        <Upload className="h-4 w-4" />
                        {uploadingField === field.name ? 'Uploading...' : 'Upload image'}
                        <input
                          className="sr-only"
                          type="file"
                          accept="image/*"
                          onChange={(event) => uploadImage(field, event.target.files?.[0])}
                        />
                      </label>
                    </div>
                  </div>
                )
              }

              return (
                <label key={field.name} className="grid gap-2 text-sm font-semibold text-[#173c35]">
                  {field.label}
                  <input
                    className="field"
                    type={field.type || 'text'}
                    value={form[field.name]}
                    onChange={(event) => updateField(field, event.target.value)}
                  />
                </label>
              )
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 border-t border-[#eadfce] pt-5">
            <Button type="submit" icon={Save}>
              Save
            </Button>
            <Button type="button" variant="secondary" onClick={reset}>
              New blank record
            </Button>
          </div>
        </form>
      </section>
    </div>
  )
}

import { useMemo, useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from './ui/Button.jsx'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { useToast } from '../hooks/useToast.js'
import { courses as seedCourses, trainers as seedTrainers } from '../data/baimpData.js'

const initialState = {
  name: '',
  phone: '',
  email: '',
  trainer_id: '',
  course_id: '',
  preferred_date: '',
  message: '',
}

export function BookingForm({ selectedTrainer, selectedCourse, onSuccess }) {
  const { createItem } = useLocalCollection('bookings', [], { skipRemoteLoad: true })
  const { items: trainerItems } = useLocalCollection('trainers', seedTrainers)
  const { items: courseItems } = useLocalCollection('courses', seedCourses)
  const { pushToast } = useToast()
  const [form, setForm] = useState(() => ({
    ...initialState,
    trainer_id: selectedTrainer?.id || '',
    course_id: selectedCourse?.id || '',
  }))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const publishedTrainers = useMemo(() => trainerItems.filter((item) => item.is_published), [trainerItems])
  const publishedCourses = useMemo(() => courseItems.filter((item) => item.is_published), [courseItems])

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const submit = async (event) => {
    event.preventDefault()
    setError('')

    if (!form.name || !form.phone || !form.email) {
      setError('Моля попълнете име, телефон и email.')
      return
    }

    setLoading(true)
    try {
      await createItem({
        ...form,
        trainer_id: form.trainer_id || null,
        course_id: form.course_id || null,
        status: 'pending',
        source: 'website',
        preferred_date: form.preferred_date || null,
      })
      setForm(initialState)
      pushToast('Заявката е изпратена успешно. Ще се свържем с Вас.')
      onSuccess?.()
    } catch (submitError) {
      setError(submitError.message || 'Възникна грешка при изпращане.')
      pushToast('Възникна грешка при изпращане.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      {error ? (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
          Име
          <input className="field" value={form.name} onChange={(event) => update('name', event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
          Телефон
          <input
            className="field"
            value={form.phone}
            onChange={(event) => update('phone', event.target.value)}
            inputMode="tel"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
        Email
        <input
          className="field"
          type="email"
          value={form.email}
          onChange={(event) => update('email', event.target.value)}
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
          Обучител
          <select className="field" value={form.trainer_id} onChange={(event) => update('trainer_id', event.target.value)}>
            <option value="">Без предпочитание</option>
            {publishedTrainers.map((trainer) => (
              <option key={trainer.id} value={trainer.id}>
                {trainer.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
          Курс / услуга
          <select className="field" value={form.course_id} onChange={(event) => update('course_id', event.target.value)}>
            <option value="">Консултация / уточнение</option>
            {publishedCourses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
        Предпочитана дата
        <input
          className="field"
          type="date"
          value={form.preferred_date}
          onChange={(event) => update('preferred_date', event.target.value)}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
        Съобщение
        <textarea
          className="field min-h-32 resize-y"
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
        />
      </label>
      <Button type="submit" icon={Send} className="w-full sm:w-auto" disabled={loading}>
        {loading ? 'Изпращане...' : 'Изпрати заявка'}
      </Button>
    </form>
  )
}

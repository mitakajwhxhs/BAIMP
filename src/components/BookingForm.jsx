import { useMemo, useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from './ui/Button.jsx'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { useToast } from '../hooks/useToast.js'
import {
  courses as seedCourses,
  isPublicTrainer,
  trainerIds,
  trainers as seedTrainers,
} from '../data/baimpData.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { getLocalizedData, localizeItems } from '../i18n/localizedData.js'

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
  const { language, select } = useLanguage()
  const localizedData = getLocalizedData(language)
  const { createItem } = useLocalCollection('bookings', [], { skipRemoteLoad: true })
  const { items: trainerItems } = useLocalCollection('trainers', seedTrainers, {
    remote: false,
    requiredFallbackIds: trainerIds,
  })
  const { items: courseItems } = useLocalCollection('courses', seedCourses, { remote: false })
  const { pushToast } = useToast()
  const [form, setForm] = useState(() => ({
    ...initialState,
    trainer_id: selectedTrainer?.id || '',
    course_id: selectedCourse?.id || '',
  }))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const publishedTrainers = useMemo(
    () => localizeItems(trainerItems, localizedData.trainers, language).filter(isPublicTrainer),
    [language, localizedData.trainers, trainerItems],
  )
  const publishedCourses = useMemo(
    () => localizeItems(courseItems, localizedData.courses, language).filter((item) => item.is_published),
    [courseItems, language, localizedData.courses],
  )

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const submit = async (event) => {
    event.preventDefault()
    setError('')

    if (!form.name || !form.phone || !form.email) {
      setError(select('Please fill in name, phone and email.', 'Моля, попълнете име, телефон и имейл.'))
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
      pushToast(select('Your request has been sent successfully. We will contact you.', 'Заявката е изпратена успешно. Ще се свържем с Вас.'))
      onSuccess?.()
    } catch (submitError) {
      setError(
        submitError.message ||
          select('An error occurred while sending the request.', 'Възникна грешка при изпращането на заявката.'),
      )
      pushToast(
        select('An error occurred while sending the request.', 'Възникна грешка при изпращането на заявката.'),
        'error',
      )
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
          {select('Name', 'Име')}
          <input className="field" value={form.name} onChange={(event) => update('name', event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
          {select('Phone', 'Телефон')}
          <input
            className="field"
            value={form.phone}
            onChange={(event) => update('phone', event.target.value)}
            inputMode="tel"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
        {select('Email', 'Имейл')}
        <input
          className="field"
          type="email"
          value={form.email}
          onChange={(event) => update('email', event.target.value)}
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
          {select('Trainer', 'Обучител')}
          <select className="field" value={form.trainer_id} onChange={(event) => update('trainer_id', event.target.value)}>
            <option value="">{select('No preference', 'Без предпочитание')}</option>
            {publishedTrainers.map((trainer) => (
              <option key={trainer.id} value={trainer.id}>
                {trainer.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
          {select('Course / service', 'Курс / услуга')}
          <select className="field" value={form.course_id} onChange={(event) => update('course_id', event.target.value)}>
            <option value="">{select('Consultation / clarification', 'Консултация / уточнение')}</option>
            {publishedCourses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
        {select('Preferred date', 'Предпочитана дата')}
        <input
          className="field"
          type="date"
          value={form.preferred_date}
          onChange={(event) => update('preferred_date', event.target.value)}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#153b34]">
        {select('Message', 'Съобщение')}
        <textarea
          className="field min-h-32 resize-y"
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
        />
      </label>
      <Button type="submit" icon={Send} className="w-full sm:w-auto" disabled={loading}>
        {loading ? select('Sending...', 'Изпращане...') : select('Send request', 'Изпрати заявка')}
      </Button>
    </form>
  )
}

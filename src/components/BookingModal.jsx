import { BookingForm } from './BookingForm.jsx'
import { Modal } from './ui/Modal.jsx'
import { useLanguage } from '../i18n/useLanguage.js'

export function BookingModal({ open, onClose, trainer, course }) {
  const { select } = useLanguage()
  const title = trainer
    ? select(`Booking with ${trainer.name}`, `Записване при ${trainer.name}`)
    : course
      ? select(`Application: ${course.title}`, `Кандидатстване: ${course.title}`)
      : select('Quick application', 'Бързо записване')

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <BookingForm selectedTrainer={trainer} selectedCourse={course} onSuccess={onClose} />
    </Modal>
  )
}

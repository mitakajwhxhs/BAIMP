import { BookingForm } from './BookingForm.jsx'
import { Modal } from './ui/Modal.jsx'

export function BookingModal({ open, onClose, trainer, course }) {
  const title = trainer
    ? `Записване при ${trainer.name}`
    : course
      ? `Кандидатстване: ${course.title}`
      : 'Бързо записване'

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <BookingForm selectedTrainer={trainer} selectedCourse={course} onSuccess={onClose} />
    </Modal>
  )
}

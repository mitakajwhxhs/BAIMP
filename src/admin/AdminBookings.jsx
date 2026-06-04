import { Calendar, Check, Mail, Phone, X } from 'lucide-react'
import { Button } from '../components/ui/Button.jsx'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { courses, emptyBookings, trainers } from '../data/baimpData.js'
import { useToast } from '../hooks/useToast.js'

const statusStyles = {
  pending: 'bg-[#f4ede2] text-[#8a622f]',
  approved: 'bg-emerald-50 text-emerald-800',
  rejected: 'bg-red-50 text-red-800',
}

export function AdminBookings() {
  const { items, updateItem, deleteItem } = useLocalCollection('bookings', emptyBookings)
  const {
    items: contactRequests,
    updateItem: updateContact,
    deleteItem: deleteContact,
  } = useLocalCollection('contact_requests', [])
  const { pushToast } = useToast()

  const nameFor = (collection, id) => collection.find((item) => item.id === id)?.name || collection.find((item) => item.id === id)?.title || 'Без избор'

  const setStatus = async (booking, status) => {
    await updateItem(booking.id, { status })
    pushToast(`Статусът е променен на ${status}.`)
  }

  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-[#eadfce] bg-white p-6">
        <p className="text-sm font-bold uppercase text-[#bd9560]">Заявки</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#173c35]">Онлайн записвания</h1>
      </section>
      <section className="grid gap-4">
        {items.length ? (
          items.map((booking) => (
            <article key={booking.id} className="rounded-lg border border-[#eadfce] bg-white p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <span className={`inline-flex rounded-md px-3 py-1 text-xs font-bold ${statusStyles[booking.status] || statusStyles.pending}`}>
                    {booking.status || 'pending'}
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold text-[#173c35]">{booking.name}</h2>
                  <div className="mt-3 grid gap-2 text-sm text-[#66736f] sm:grid-cols-2">
                    <a className="flex items-center gap-2 hover:text-[#173c35]" href={`tel:${booking.phone}`}>
                      <Phone className="h-4 w-4 text-[#bd9560]" />
                      {booking.phone}
                    </a>
                    <a className="flex items-center gap-2 hover:text-[#173c35]" href={`mailto:${booking.email}`}>
                      <Mail className="h-4 w-4 text-[#bd9560]" />
                      {booking.email}
                    </a>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#bd9560]" />
                      {booking.preferred_date || 'без дата'}
                    </span>
                  </div>
                  <div className="mt-4 grid gap-2 text-sm text-[#315c4f]">
                    <p>Обучител: {nameFor(trainers, booking.trainer_id)}</p>
                    <p>Курс/услуга: {nameFor(courses, booking.course_id)}</p>
                  </div>
                  {booking.message ? <p className="mt-4 text-base leading-7 text-[#66736f]">{booking.message}</p> : null}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" icon={Check} onClick={() => setStatus(booking, 'approved')}>
                    Approve
                  </Button>
                  <Button variant="secondary" icon={X} onClick={() => setStatus(booking, 'rejected')}>
                    Reject
                  </Button>
                  <Button variant="ghost" onClick={() => deleteItem(booking.id)}>
                    Изтрий
                  </Button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-lg border border-[#eadfce] bg-white p-8 text-center text-[#66736f]">Няма заявки.</div>
        )}
      </section>
      <section className="grid gap-4">
        <div className="rounded-lg border border-[#eadfce] bg-white p-5">
          <h2 className="text-2xl font-semibold text-[#173c35]">Контактни запитвания</h2>
        </div>
        {contactRequests.length ? (
          contactRequests.map((request) => (
            <article key={request.id} className="rounded-lg border border-[#eadfce] bg-white p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <span className={`inline-flex rounded-md px-3 py-1 text-xs font-bold ${statusStyles[request.status] || statusStyles.pending}`}>
                    {request.status || 'pending'}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-[#173c35]">{request.name}</h3>
                  <div className="mt-3 grid gap-2 text-sm text-[#66736f] sm:grid-cols-2">
                    <a className="flex items-center gap-2 hover:text-[#173c35]" href={`mailto:${request.email}`}>
                      <Mail className="h-4 w-4 text-[#bd9560]" />
                      {request.email}
                    </a>
                    {request.phone ? (
                      <a className="flex items-center gap-2 hover:text-[#173c35]" href={`tel:${request.phone}`}>
                        <Phone className="h-4 w-4 text-[#bd9560]" />
                        {request.phone}
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#66736f]">{request.message}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="secondary"
                    icon={Check}
                    onClick={async () => {
                      await updateContact(request.id, { status: 'approved' })
                      pushToast('Запитването е маркирано като approved.')
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="secondary"
                    icon={X}
                    onClick={async () => {
                      await updateContact(request.id, { status: 'rejected' })
                      pushToast('Запитването е маркирано като rejected.')
                    }}
                  >
                    Reject
                  </Button>
                  <Button variant="ghost" onClick={() => deleteContact(request.id)}>
                    Изтрий
                  </Button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-lg border border-[#eadfce] bg-white p-8 text-center text-[#66736f]">
            Няма контактни запитвания.
          </div>
        )}
      </section>
    </div>
  )
}

import { Award, BookOpen, CalendarClock, Newspaper, Users } from 'lucide-react'
import { useLocalCollection } from '../hooks/useLocalCollection.js'
import { certificates, courses, emptyBookings, news, trainers } from '../data/baimpData.js'

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-[#eadfce] bg-white p-5">
      <Icon className="mb-4 h-7 w-7 text-[#bd9560]" />
      <p className="text-3xl font-semibold text-[#173c35]">{value}</p>
      <p className="mt-2 text-sm font-semibold text-[#66736f]">{label}</p>
    </div>
  )
}

export function AdminDashboard() {
  const { items: trainerItems } = useLocalCollection('trainers', trainers)
  const { items: courseItems } = useLocalCollection('courses', courses)
  const { items: newsItems } = useLocalCollection('news', news)
  const { items: bookingItems } = useLocalCollection('bookings', emptyBookings)
  const { items: certificateItems } = useLocalCollection('certificates', certificates)
  const pending = bookingItems.filter((booking) => booking.status === 'pending').length

  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-[#eadfce] bg-white p-6">
        <p className="text-sm font-bold uppercase text-[#bd9560]">Dashboard</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#173c35]">Преглед на сайта</h1>
      </section>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat icon={Users} label="обучители" value={trainerItems.length} />
        <Stat icon={BookOpen} label="курсове" value={courseItems.length} />
        <Stat icon={Newspaper} label="новини" value={newsItems.length} />
        <Stat icon={CalendarClock} label="pending заявки" value={pending} />
        <Stat icon={Award} label="сертификати" value={certificateItems.length} />
      </section>
    </div>
  )
}

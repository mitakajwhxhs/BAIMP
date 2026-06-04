import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export function FloatingContactButton() {
  return (
    <Link
      to="/kontakti"
      aria-label="Контакт"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-md bg-[linear-gradient(135deg,#2f5f55,#153b34)] text-white shadow-[0_18px_45px_rgba(21,59,52,0.28)] transition duration-300 hover:-translate-y-1 md:hidden"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  )
}

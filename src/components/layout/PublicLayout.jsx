import { Outlet } from 'react-router-dom'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { FloatingContactButton } from './FloatingContactButton.jsx'

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#fbf8f1]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  )
}

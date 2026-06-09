import { Outlet } from 'react-router-dom'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { FloatingContactButton } from './FloatingContactButton.jsx'

export function PublicLayout() {
  return (
    <div className="site-shell min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  )
}

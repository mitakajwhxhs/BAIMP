import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastProvider } from './components/ui/ToastProvider.jsx'
import { ScrollToTop } from './components/layout/ScrollToTop.jsx'
import { PublicLayout } from './components/layout/PublicLayout.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Trainers } from './pages/Trainers.jsx'
import { TrainerProfile } from './pages/TrainerProfile.jsx'
import { Courses } from './pages/Courses.jsx'
import { News } from './pages/News.jsx'
import { Booking } from './pages/Booking.jsx'
import { Partners } from './pages/Partners.jsx'
import { Certificates } from './pages/Certificates.jsx'
import { Contact } from './pages/Contact.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { AdminSecretPanel } from './admin/AdminSecretPanel.jsx'
import { AdminLayout } from './admin/AdminLayout.jsx'
import { AdminDashboard } from './admin/AdminDashboard.jsx'
import { AdminNews } from './admin/AdminNews.jsx'
import { AdminTrainers } from './admin/AdminTrainers.jsx'
import { AdminCourses } from './admin/AdminCourses.jsx'
import { AdminBookings } from './admin/AdminBookings.jsx'
import { AdminPartners } from './admin/AdminPartners.jsx'
import { AdminCertificates } from './admin/AdminCertificates.jsx'
import { AdminSettings } from './admin/AdminSettings.jsx'
import { AdminTestimonials } from './admin/AdminTestimonials.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="za-nas" element={<About />} />
            <Route path="obuchiteli" element={<Trainers />} />
            <Route path="obuchiteli/:slug" element={<TrainerProfile />} />
            <Route path="kursove" element={<Courses />} />
            <Route path="novini" element={<News />} />
            <Route path="zapisvane" element={<Booking />} />
            <Route path="partnyori" element={<Partners />} />
            <Route path="sertifikati" element={<Certificates />} />
            <Route path="kontakti" element={<Contact />} />
          </Route>
          <Route path="login" element={<Navigate to="/admin-secret-panel" replace />} />
          <Route
            path="admin-secret-panel"
            element={
              <AdminSecretPanel>
                <AdminLayout basePath="/admin-secret-panel" logoutPath="/admin-secret-panel" />
              </AdminSecretPanel>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="news" element={<AdminNews />} />
            <Route path="trainers" element={<AdminTrainers />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="partners" element={<AdminPartners />} />
            <Route path="certificates" element={<AdminCertificates />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          <Route path="admin/*" element={<Navigate to="/admin-secret-panel" replace />} />
          <Route path="nachalo" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  )
}

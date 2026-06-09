import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastProvider } from './components/ui/ToastProvider.jsx'
import { ScrollToTop } from './components/layout/ScrollToTop.jsx'
import { PublicLayout } from './components/layout/PublicLayout.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Trainers } from './pages/Trainers.jsx'
import { TrainerProfile } from './pages/TrainerProfile.jsx'
import { Courses } from './pages/Courses.jsx'
import { TrainingOverview } from './pages/TrainingOverview.jsx'
import { PsychotherapyProgram } from './pages/PsychotherapyProgram.jsx'
import { TraineePsychotherapists } from './pages/TraineePsychotherapists.jsx'
import { TraineePsychotherapistProfile } from './pages/TraineePsychotherapistProfile.jsx'
import { Members } from './pages/Members.jsx'
import { Documents } from './pages/Documents.jsx'
import { Statute } from './pages/Statute.jsx'
import { CodeOfEthics } from './pages/CodeOfEthics.jsx'
import { RightsAndNonDiscriminationPolicy } from './pages/RightsAndNonDiscriminationPolicy.jsx'
import { PrivacyPolicy } from './pages/Policies.jsx'
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
            <Route path="about" element={<About />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="trainers/:slug" element={<TrainerProfile />} />
            <Route path="trainee-psychotherapists" element={<TraineePsychotherapists />} />
            <Route path="trainee-psychotherapists/:slug" element={<TraineePsychotherapistProfile />} />
            <Route path="members" element={<Members />} />
            <Route path="training" element={<TrainingOverview />} />
            <Route path="training/psychotherapy-program" element={<PsychotherapyProgram />} />
            <Route path="courses" element={<Courses />} />
            <Route path="documents" element={<Documents />} />
            <Route path="documents/statute" element={<Statute />} />
            <Route path="documents/code-of-ethics" element={<CodeOfEthics />} />
            <Route
              path="documents/rights-and-non-discrimination-policy"
              element={<RightsAndNonDiscriminationPolicy />}
            />
            <Route path="news" element={<News />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="booking" element={<Booking />} />
            <Route path="partners" element={<Partners />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="contact" element={<Contact />} />
            <Route path="za-nas" element={<Navigate to="/about" replace />} />
            <Route path="obuchiteli" element={<Navigate to="/trainers" replace />} />
            <Route path="obuchiteli/:slug" element={<TrainerProfile />} />
            <Route path="kursove" element={<Navigate to="/courses" replace />} />
            <Route path="novini" element={<Navigate to="/news" replace />} />
            <Route path="zapisvane" element={<Navigate to="/booking" replace />} />
            <Route path="partnyori" element={<Navigate to="/partners" replace />} />
            <Route path="sertifikati" element={<Navigate to="/certificates" replace />} />
            <Route path="kontakti" element={<Navigate to="/contact" replace />} />
            <Route path="404" element={<NotFound />} />
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

import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastProvider } from './components/ui/ToastProvider.jsx'
import { ScrollToTop } from './components/layout/ScrollToTop.jsx'
import { PublicLayout } from './components/layout/PublicLayout.jsx'

const lazyNamed = (loader, exportName) =>
  lazy(() => loader().then((module) => ({ default: module[exportName] })))

const Home = lazyNamed(() => import('./pages/Home.jsx'), 'Home')
const About = lazyNamed(() => import('./pages/About.jsx'), 'About')
const Trainers = lazyNamed(() => import('./pages/Trainers.jsx'), 'Trainers')
const TrainerProfile = lazyNamed(() => import('./pages/TrainerProfile.jsx'), 'TrainerProfile')
const Courses = lazyNamed(() => import('./pages/Courses.jsx'), 'Courses')
const CourseDetail = lazyNamed(() => import('./pages/CourseDetail.jsx'), 'CourseDetail')
const TrainingOverview = lazyNamed(() => import('./pages/TrainingOverview.jsx'), 'TrainingOverview')
const PsychotherapyProgram = lazyNamed(
  () => import('./pages/PsychotherapyProgram.jsx'),
  'PsychotherapyProgram',
)
const TraineePsychotherapists = lazyNamed(
  () => import('./pages/TraineePsychotherapists.jsx'),
  'TraineePsychotherapists',
)
const TraineePsychotherapistProfile = lazyNamed(
  () => import('./pages/TraineePsychotherapistProfile.jsx'),
  'TraineePsychotherapistProfile',
)
const Members = lazyNamed(() => import('./pages/Members.jsx'), 'Members')
const Documents = lazyNamed(() => import('./pages/Documents.jsx'), 'Documents')
const Statute = lazyNamed(() => import('./pages/Statute.jsx'), 'Statute')
const CodeOfEthics = lazyNamed(() => import('./pages/CodeOfEthics.jsx'), 'CodeOfEthics')
const RightsAndNonDiscriminationPolicy = lazyNamed(
  () => import('./pages/RightsAndNonDiscriminationPolicy.jsx'),
  'RightsAndNonDiscriminationPolicy',
)
const PrivacyPolicy = lazyNamed(() => import('./pages/Policies.jsx'), 'PrivacyPolicy')
const News = lazyNamed(() => import('./pages/News.jsx'), 'News')
const Booking = lazyNamed(() => import('./pages/Booking.jsx'), 'Booking')
const Partners = lazyNamed(() => import('./pages/Partners.jsx'), 'Partners')
const Certificates = lazyNamed(() => import('./pages/Certificates.jsx'), 'Certificates')
const Contact = lazyNamed(() => import('./pages/Contact.jsx'), 'Contact')
const NotFound = lazyNamed(() => import('./pages/NotFound.jsx'), 'NotFound')
const AdminSecretPanel = lazyNamed(
  () => import('./admin/AdminSecretPanel.jsx'),
  'AdminSecretPanel',
)
const AdminLayout = lazyNamed(() => import('./admin/AdminLayout.jsx'), 'AdminLayout')
const AdminDashboard = lazyNamed(() => import('./admin/AdminDashboard.jsx'), 'AdminDashboard')
const AdminNews = lazyNamed(() => import('./admin/AdminNews.jsx'), 'AdminNews')
const AdminTrainers = lazyNamed(() => import('./admin/AdminTrainers.jsx'), 'AdminTrainers')
const AdminCourses = lazyNamed(() => import('./admin/AdminCourses.jsx'), 'AdminCourses')
const AdminBookings = lazyNamed(() => import('./admin/AdminBookings.jsx'), 'AdminBookings')
const AdminPartners = lazyNamed(() => import('./admin/AdminPartners.jsx'), 'AdminPartners')
const AdminCertificates = lazyNamed(
  () => import('./admin/AdminCertificates.jsx'),
  'AdminCertificates',
)
const AdminSettings = lazyNamed(() => import('./admin/AdminSettings.jsx'), 'AdminSettings')
const AdminTestimonials = lazyNamed(
  () => import('./admin/AdminTestimonials.jsx'),
  'AdminTestimonials',
)

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbf8f1] px-6 text-center text-sm font-semibold text-[#526760]">
      Loading...
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
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
              <Route path="courses/:slug" element={<CourseDetail />} />
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
        </Suspense>
      </ToastProvider>
    </BrowserRouter>
  )
}

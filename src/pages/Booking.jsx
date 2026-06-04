import { BookingForm } from '../components/BookingForm.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export function Booking() {
  useDocumentTitle('Онлайн записване')

  return (
    <>
      <PageHero
        eyebrow="Онлайн записване"
        title="Изпратете заявка за обучение, консултация или среща"
        text="Попълнете формата и екипът на БАИМП ще се свърже с Вас за уточнение на следващите стъпки."
      />
      <MotionSection className="section-pad">
        <div className="container-page max-w-4xl">
          <div className="card-soft p-5 sm:p-8">
            <BookingForm />
          </div>
        </div>
      </MotionSection>
    </>
  )
}

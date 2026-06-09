import { BookingForm } from '../components/BookingForm.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../i18n/useLanguage.js'

export function Booking() {
  const { select } = useLanguage()
  useDocumentTitle(select('Online Application', 'Онлайн записване'))

  return (
    <>
      <PageHero
        eyebrow={select('Online Application', 'Онлайн записване')}
        title={select(
          'Send a request for training, consultation or a meeting',
          'Изпратете заявка за обучение, консултация или среща',
        )}
        text={select(
          'Fill in the form and the BAIMP team will contact you to clarify the next steps.',
          'Попълнете формата и екипът на БАИМП ще се свърже с Вас за уточнение на следващите стъпки.',
        )}
      />
      <MotionSection className="section-pad section-finish">
        <div className="container-page max-w-4xl">
          <div className="card-soft p-5 sm:p-8">
            <BookingForm />
          </div>
        </div>
      </MotionSection>
    </>
  )
}

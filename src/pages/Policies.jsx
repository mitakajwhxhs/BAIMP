import { Cookie, Database, LockKeyhole, Mail, Scale, ShieldCheck, UserCheck } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useSiteSettings } from '../hooks/useSiteSettings.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { localizeSettings } from '../i18n/localizedData.js'

function PolicyBlock({ icon: Icon, title, children }) {
  return (
    <section className="premium-panel p-6 sm:p-8">
      <Icon className="mb-5 h-8 w-8 text-[#a9844c]" />
      <h2 className="text-2xl font-semibold text-[#153b34]">{title}</h2>
      <div className="mt-4 grid gap-4 text-base leading-8 text-[#63736d]">{children}</div>
    </section>
  )
}

function PolicyList({ items }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a9844c]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function PrivacyPolicy() {
  const { language, select } = useLanguage()
  useDocumentTitle(select('Privacy and Policy', 'Поверителност и политика'))
  const { settings: storedSettings } = useSiteSettings()
  const settings = localizeSettings(storedSettings, language)
  const contact = settings.contact

  return (
    <>
      <PageHero
        eyebrow={select('Privacy', 'Поверителност')}
        title={select('Privacy and Policy', 'Поверителност и политика')}
        text={select(
          'How BAIMP collects, uses and protects personal information when you use this website or contact the association.',
          'Как БАИМП събира, използва и защитава личната информация, когато използвате сайта или се свързвате с асоциацията.',
        )}
      />
      <MotionSection className="section-pad section-finish">
        <div className="container-page grid max-w-5xl gap-6">
          <p className="text-sm font-semibold text-[#63736d]">
            {select('Last updated: June 7, 2026', 'Последна актуализация: 7 юни 2026 г.')}
          </p>

          <PolicyBlock
            icon={ShieldCheck}
            title={select('Who is responsible for your data', 'Кой отговаря за Вашите данни')}
          >
            <p>
              {select(
                'The Bulgarian Association for Intermodal Psychotherapy (BAIMP) is responsible for the personal data collected through this website.',
                'Българската асоциация по интермодална психотерапия (БАИМП) отговаря за личните данни, събирани чрез този уебсайт.',
              )}
            </p>
            <p>
              {select('You can contact BAIMP at', 'Можете да се свържете с БАИМП на')}{' '}
              <a className="font-semibold text-[#2f5f55] underline" href={`mailto:${contact.email}`}>{contact.email}</a>,
              {' '}{select('by phone at', 'на телефон')}{' '}
              <a className="font-semibold text-[#2f5f55] underline" href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>,
              {' '}{select('or at', 'или на адрес')} {contact.address}.
            </p>
          </PolicyBlock>

          <PolicyBlock icon={Database} title={select('Information we may collect', 'Информация, която можем да събираме')}>
            <PolicyList
              items={[
                select(
                  'Contact details such as your name, email address and telephone number.',
                  'Данни за контакт като име, имейл адрес и телефонен номер.',
                ),
                select(
                  'Information included in contact, booking or training application forms.',
                  'Информация, включена във форми за контакт, записване или кандидатстване за обучение.',
                ),
                select(
                  'Your selected trainer, course, preferred date and any message you choose to provide.',
                  'Избраният обучител, курс, предпочитана дата и всяко съобщение, което решите да предоставите.',
                ),
                select(
                  'Basic technical information necessary for security, operation and troubleshooting of the website.',
                  'Основна техническа информация, необходима за сигурността, работата и отстраняването на проблеми в сайта.',
                ),
              ]}
            />
            <p>
              {select(
                'Please do not submit sensitive health information unless BAIMP specifically requests it through an appropriate channel.',
                'Моля, не изпращайте чувствителна здравна информация, освен ако БАИМП изрично не я поиска по подходящ канал.',
              )}
            </p>
          </PolicyBlock>

          <PolicyBlock icon={UserCheck} title={select('Why we use personal data', 'Защо използваме лични данни')}>
            <PolicyList
              items={[
                select(
                  'To respond to inquiries and provide requested information.',
                  'За да отговаряме на запитвания и да предоставяме поисканата информация.',
                ),
                select(
                  'To process applications for training, consultations, meetings or events.',
                  'За да обработваме заявки за обучения, консултации, срещи или събития.',
                ),
                select(
                  'To organize and administer BAIMP services and professional activities.',
                  'За да организираме и администрираме услугите и професионалните дейности на БАИМП.',
                ),
                select(
                  'To protect the security and proper operation of the website.',
                  'За да защитаваме сигурността и правилната работа на сайта.',
                ),
                select(
                  'To comply with applicable legal and regulatory obligations.',
                  'За да спазваме приложимите законови и регулаторни задължения.',
                ),
              ]}
            />
            <p>
              {select(
                'Depending on the situation, processing is based on your consent, steps requested before entering into an agreement, BAIMP\'s legitimate interests, or compliance with a legal obligation.',
                'Според конкретния случай обработването се основава на Вашето съгласие, поискани стъпки преди сключване на споразумение, законните интереси на БАИМП или изпълнение на законово задължение.',
              )}
            </p>
          </PolicyBlock>

          <PolicyBlock icon={LockKeyhole} title={select('Storage, sharing and security', 'Съхранение, споделяне и сигурност')}>
            <p>
              {select(
                'BAIMP keeps personal data only for as long as it is reasonably needed for the purpose for which it was collected and for any applicable legal, accounting or administrative requirements.',
                'БАИМП съхранява личните данни само докато това е разумно необходимо за целта, за която са събрани, и съобразно приложимите законови, счетоводни или административни изисквания.',
              )}
            </p>
            <p>
              {select(
                'Information may be processed by trusted service providers that support website hosting, database storage, communications or administration. They receive only the access needed to provide their services. BAIMP does not sell personal data.',
                'Информацията може да бъде обработвана от доверени доставчици, които подпомагат хостинга, съхранението на данни, комуникациите или администрацията. Те получават само необходимия достъп. БАИМП не продава лични данни.',
              )}
            </p>
            <p>
              {select(
                'Reasonable technical and organizational measures are used to protect information against unauthorized access, alteration, loss or disclosure.',
                'Използват се разумни технически и организационни мерки за защита срещу неоторизиран достъп, промяна, загуба или разкриване.',
              )}
            </p>
          </PolicyBlock>

          <PolicyBlock icon={Cookie} title={select('Local storage and external services', 'Локално съхранение и външни услуги')}>
            <p>
              {select(
                'The website may use browser local storage to remember site settings and locally managed content. The contact page embeds Google Maps, and links to social networks may take you to external services governed by their own privacy policies.',
                'Сайтът може да използва локалното хранилище на браузъра за настройки и локално управлявано съдържание. Страницата за контакти вгражда Google Maps, а връзките към социални мрежи водят към външни услуги със собствени политики.',
              )}
            </p>
          </PolicyBlock>

          <PolicyBlock icon={Scale} title={select('Your data protection rights', 'Вашите права за защита на данните')}>
            <PolicyList
              items={[
                select(
                  'To receive information about how your personal data is processed.',
                  'Да получите информация как се обработват личните Ви данни.',
                ),
                select(
                  'To request access to and correction of your personal data.',
                  'Да поискате достъп до и корекция на личните Ви данни.',
                ),
                select(
                  'To request erasure or restriction of processing where the law allows it.',
                  'Да поискате изтриване или ограничаване на обработването, когато законът го позволява.',
                ),
                select(
                  'To object to certain processing and to withdraw consent at any time.',
                  'Да възразите срещу определено обработване и да оттеглите съгласието си по всяко време.',
                ),
                select(
                  'To request data portability where applicable.',
                  'Да поискате преносимост на данните, когато е приложимо.',
                ),
                select(
                  'To lodge a complaint with the Bulgarian Commission for Personal Data Protection.',
                  'Да подадете жалба до Комисията за защита на личните данни.',
                ),
              ]}
            />
            <p>
              {select('To exercise a right, contact', 'За да упражните свое право, свържете се на')}{' '}
              <a className="font-semibold text-[#2f5f55] underline" href={`mailto:${contact.email}`}>{contact.email}</a>.
              {' '}{select(
                'BAIMP may need to verify your identity before completing a request.',
                'БАИМП може да поиска потвърждение на самоличността Ви преди изпълнение на заявката.',
              )}
            </p>
          </PolicyBlock>

          <PolicyBlock icon={Mail} title={select('Policy updates', 'Актуализации на политиката')}>
            <p>
              {select(
                'This policy may be updated when the website, BAIMP\'s services or applicable requirements change. The latest version will be published on this page with a revised update date.',
                'Политиката може да бъде актуализирана при промени в сайта, услугите на БАИМП или приложимите изисквания. Последната версия ще бъде публикувана тук с обновена дата.',
              )}
            </p>
          </PolicyBlock>
        </div>
      </MotionSection>
    </>
  )
}

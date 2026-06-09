import { BookOpenCheck, BriefcaseMedical, Clock, GraduationCap, ShieldCheck, UsersRound } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../i18n/useLanguage.js'

const programmeContent = {
  en: {
    title: 'Training Standards and Programme Structure',
    hero:
      'A four-year professional training programme in integrative psychotherapy, aligned with the training standards of EAIP and EAP.',
    intro: [
      'The training programme of the Bulgarian Association for Intermodal Psychotherapy (BAIMP) is a four-year professional training programme in integrative psychotherapy. The programme is designed to be aligned with the training standards of the European Association for Integrative Psychotherapy (EAIP) and the European Association for Psychotherapy (EAP). It includes structured theoretical training, practical skills development, supervised clinical practice, personal therapy / self-experience, supervision, and final integrative assessment.',
      'The total duration of the programme is four years, or 48 months, with a total of 1,530 training and professionally applied hours. During the first three years, trainees complete 34 taught modules of 20 hours each, amounting to 680 hours of structured training. These modules include theory, methodology, clinical demonstrations, practical exercises, case-based learning and integrative case formulation.',
    ],
    duration: '48 months',
    durationLabel: 'total programme duration',
    hours: '1,530 hours',
    hoursLabel: 'training and professional application',
    requirements: 'Programme requirements',
    componentsTitle: 'Core components of the training',
    components: [
      { value: '680', label: 'hours of structured taught modules' },
      { value: '300', label: 'hours of supervised clinical practice' },
      { value: '150', label: 'hours of individual and group supervision' },
      { value: '250', label: 'hours of personal therapy and group self-experience' },
      { value: '100', label: 'hours of structured self-study' },
      { value: '50', label: 'hours of clinical case writing and final written work' },
    ],
    theoryTitle: 'Theoretical and methodological foundation',
    theory: [
      'Intermodal Psychotherapy is the integrative psychotherapy model developed and taught within BAIMP. It combines common factors of therapeutic change, multimodal assessment through BASIC I.D., systematic treatment selection, and individual clinical formulation through the 8 Ps model.',
      'The aim is not the mechanical accumulation of techniques, but the development of coherent clinical reasoning. Interventions are selected according to the client\'s presentation, the therapeutic relationship, clinical risk, personality style, coping patterns and therapeutic goals.',
    ],
    clinicalTitle: 'Clinical practice',
    clinical: [
      'Clinical practice begins after successful completion of the basic training phase and the intermediate assessment, approximately after the first 15 months. It develops progressively and continues until the end of the fourth year.',
      'Practice may include supervised private practice, mental health or psychiatric settings, educational settings, and centres working with children on the autism spectrum.',
      'All clinical hours are documented through anonymised clinical logs and discussed in supervision. Trainees do not work autonomously outside the supervisory framework of the programme.',
    ],
    pathway: 'Four-year pathway',
    yearsTitle: 'Structure by year',
    years: [
      {
        year: 'Year One',
        text: 'Foundations of the counselling and therapeutic process: ethics, the therapeutic relationship, clinical interviewing, active listening, emotional reflection, psychodiagnostic thinking and general psychopathology.',
      },
      {
        year: 'Year Two',
        text: 'Major psychotherapeutic approaches and interventions, including the psychodynamic perspective, cognitive-behavioural therapy, schema therapy, psychosomatics, work with children and adolescents, hypnosis, short-term and narrative therapy, DBT-informed skills and family therapy.',
      },
      {
        year: 'Year Three',
        text: 'An integrative clinical block focused on anxiety disorders, depressive conditions, trauma, dissociation, self-harm, personality disorders, eating disorders, addictions, child crises and crisis interventions.',
      },
      {
        year: 'Year Four',
        text: 'Clinical consolidation, supervision, completion of clinical practice, preparation of the clinical portfolio, final written work and final integrative assessment.',
      },
    ],
    supervisionTitle: 'Supervision and personal therapy / self-experience',
    supervision: [
      'Supervision is compulsory and includes individual and group work on real clinical cases. It supports clinical reasoning, ethical awareness, professional boundaries and client safety.',
      'Personal therapy / self-experience is distributed across the full four-year training period. It includes individual personal therapy and group therapeutic self-experience, supporting self-reflection, emotional maturity and awareness of the trainee\'s own participation in the therapeutic process.',
    ],
    completionTitle: 'Completion',
    completion: [
      'The programme concludes with a Final Integrative Assessment, including a theoretical component, an oral practical component and the defence of clinical work. Successful completion leads to an internal BAIMP certificate for completed training.',
      'This certificate does not constitute automatic individual certification by EAIP, EAP or any other European organisation. Individual European certification follows the separate procedures and criteria of the respective professional organisations.',
    ],
  },
  bg: {
    title: 'Стандарти и структура на обучителната програма',
    hero:
      'Четиригодишна професионална програма по интегративна психотерапия, съобразена с обучителните стандарти на EAIP и EAP.',
    intro: [
      'Обучителната програма на Българската асоциация по интермодална психотерапия представлява четиригодишно професионално обучение по интегративна психотерапия. Програмата е разработена в съответствие с обучителните стандарти на European Association for Integrative Psychotherapy (EAIP) и European Association for Psychotherapy (EAP), като включва структурирано теоретично обучение, практически умения, клинична практика под супервизия, личен терапевтичен опит и финално интегративно оценяване.',
      'Общата продължителност на програмата е 4 години, или 48 месеца, с общ обем от 1530 учебни и професионално-приложни часа. През първите три години обучаемите преминават през 34 модула по 20 часа, общо 680 часа структурирано обучение. Модулите включват теория, методология, демонстрации, практически упражнения, работа по случаи и интегративна формулировка.',
    ],
    duration: '48 месеца',
    durationLabel: 'обща продължителност на програмата',
    hours: '1530 часа',
    hoursLabel: 'обучение и професионално приложение',
    requirements: 'Изисквания на програмата',
    componentsTitle: 'Основни компоненти на обучението',
    components: [
      { value: '680', label: 'часа структурирани обучителни модули' },
      { value: '300', label: 'часа клинична практика под супервизия' },
      { value: '150', label: 'часа индивидуална и групова супервизия' },
      { value: '250', label: 'часа личен терапевтичен опит и групов self-experience' },
      { value: '100', label: 'часа структурирана самоподготовка' },
      { value: '50', label: 'часа разработване на клинични случаи и финална писмена работа' },
    ],
    theoryTitle: 'Теоретична и методологична основа',
    theory: [
      'Интермодалната психотерапия е интегративният модел на БАИМП. Тя съчетава общите фактори на терапевтичната промяна, мултимодалната оценка BASIC I.D., системния подбор на интервенции и индивидуалната клинична формулировка чрез модела 8 Ps.',
      'Целта не е механично събиране на техники, а развитие на ясна клинична логика, при която изборът на интервенции се основава на състоянието на клиента, терапевтичната връзка, клиничния риск, личностовия стил и терапевтичните цели.',
    ],
    clinicalTitle: 'Клинична практика',
    clinical: [
      'Клиничната практика започва след успешно преминаване на базовата подготовка и междинна атестация, приблизително след първите 15 месеца от обучението. Тя се развива постепенно и продължава до края на четвъртата година.',
      'Практиката може да включва работа в супервизирана лична практика, психично-здравна или психиатрична среда, образователна среда, както и центрове за работа с деца от аутистичния спектър.',
      'Всички клинични часове се документират чрез анонимизирани клинични логове и се обсъждат в супервизия. Обучаемите не работят автономно извън супервизионната рамка на програмата.',
    ],
    pathway: 'Четиригодишен път',
    yearsTitle: 'Структура по години',
    years: [
      {
        year: 'Първа година',
        text: 'Основи на консултативния и терапевтичния процес, етика, терапевтична връзка, интервю, активно слушане, емоционална рефлексия, психодиагностично мислене и обща психопатология.',
      },
      {
        year: 'Втора година',
        text: 'Задълбочаване в основни психотерапевтични подходи и интервенции: психодинамична перспектива, КПТ, схема терапия, психосоматика, работа с деца и юноши, хипноза, краткосрочна и наративна терапия, ДБТ-информирани умения и семейна терапия.',
      },
      {
        year: 'Трета година',
        text: 'Интегративен клиничен блок, насочен към работа с тревожни разстройства, депресивни състояния, травма, дисоциация, самонараняване, личностови разстройства, хранителни нарушения, зависимости, детски кризи и кризисни интервенции.',
      },
      {
        year: 'Четвърта година',
        text: 'Клинична консолидация, супервизия, завършване на клиничната практика, подготовка на клинично портфолио, финална писмена работа и финално интегративно оценяване.',
      },
    ],
    supervisionTitle: 'Супервизия и личен терапевтичен опит',
    supervision: [
      'Супервизията е задължителна част от обучението и включва индивидуална и групова работа върху реални клинични случаи. Нейната функция е да подпомага клиничното мислене, етичната чувствителност, професионалните граници и сигурността на клиентите.',
      'Личният терапевтичен опит се разпределя през целия четиригодишен период и включва индивидуална лична терапия и групов терапевтичен self-experience. Целта е обучаемият да развие по-добра саморефлексия, емоционална зрялост и осъзнатост за собственото си участие в терапевтичния процес.',
    ],
    completionTitle: 'Завършване',
    completion: [
      'Програмата завършва с финално интегративно оценяване, което включва теоретичен компонент, практически устен компонент и защита на клинична работа. Успешното завършване води до вътрешен сертификат на БАИМП за завършено обучение.',
      'Този сертификат не представлява автоматична индивидуална сертификация от EAIP, EAP или друга европейска организация; индивидуалното европейско сертифициране се извършва по отделните процедури и критерии на съответните професионални организации.',
    ],
  },
}

export function PsychotherapyProgram() {
  const { language, select } = useLanguage()
  const content = programmeContent[language]
  useDocumentTitle(content.title)

  return (
    <>
      <PageHero
        eyebrow={select('Training', 'Обучение')}
        title={content.title}
        text={content.hero}
      />

      <MotionSection className="section-pad">
        <div className="container-page">
          <div className="premium-panel grid gap-8 p-7 lg:grid-cols-[1.35fr_0.65fr] lg:p-10">
            <div className="grid gap-5 text-base leading-8 text-[#63736d]">
              {content.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <div className="rounded-lg bg-[#153b34] p-5 text-white">
                <Clock className="mb-3 h-7 w-7 text-[#d8b77a]" />
                <strong className="block text-3xl">{content.duration}</strong>
                <span className="mt-1 block text-sm text-white/75">{content.durationLabel}</span>
              </div>
              <div className="rounded-lg bg-[#ede4d6] p-5 text-[#153b34]">
                <GraduationCap className="mb-3 h-7 w-7 text-[#a9844c]" />
                <strong className="block text-3xl">{content.hours}</strong>
                <span className="mt-1 block text-sm text-[#63736d]">{content.hoursLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad bg-[#f3eadc]/55">
        <div className="container-page">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">{content.requirements}</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#153b34]">{content.componentsTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.components.map((component) => (
              <article key={component.label} className="card-soft p-6">
                <strong className="text-4xl font-semibold text-[#a9844c]">{component.value}</strong>
                <p className="mt-3 text-base leading-7 text-[#526760]">{component.label}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <section className="premium-panel p-7">
            <BookOpenCheck className="mb-5 h-8 w-8 text-[#a9844c]" />
            <h2 className="text-2xl font-semibold text-[#153b34]">{content.theoryTitle}</h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-[#63736d]">
              {content.theory.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section className="premium-panel p-7">
            <BriefcaseMedical className="mb-5 h-8 w-8 text-[#a9844c]" />
            <h2 className="text-2xl font-semibold text-[#153b34]">{content.clinicalTitle}</h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-[#63736d]">
              {content.clinical.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        </div>
      </MotionSection>

      <MotionSection className="section-pad bg-[#153b34]">
        <div className="container-page">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow text-[#d8b77a]">{content.pathway}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{content.yearsTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {content.years.map((item) => (
              <article key={item.year} className="rounded-lg border border-white/15 bg-white/8 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d8b77a]">{item.year}</p>
                <p className="mt-4 text-base leading-8 text-white/80">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad section-finish">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <section className="premium-panel p-7">
            <UsersRound className="mb-5 h-8 w-8 text-[#a9844c]" />
            <h2 className="text-2xl font-semibold text-[#153b34]">
              {content.supervisionTitle}
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-[#63736d]">
              {content.supervision.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section className="premium-panel p-7">
            <ShieldCheck className="mb-5 h-8 w-8 text-[#a9844c]" />
            <h2 className="text-2xl font-semibold text-[#153b34]">{content.completionTitle}</h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-[#63736d]">
              {content.completion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        </div>
      </MotionSection>
    </>
  )
}

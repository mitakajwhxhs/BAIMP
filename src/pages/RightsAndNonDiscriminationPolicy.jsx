import { BookOpen, HandHeart } from 'lucide-react'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../i18n/useLanguage.js'

const chapters = [
  {
    number: 'I',
    title: 'General Commitment',
    articles: [
      {
        number: 1,
        title: 'Principle of Equal Rights',
        items: [
          `The Bulgarian Association for Intermodal Psychotherapy (BAIMP) is committed to equal rights, fair treatment and respect for human dignity in all areas of its activity.`,
          `BAIMP recognises that psychotherapy training, supervision, assessment, clinical practice and professional development must be conducted in a manner that respects individual differences and protects persons from discrimination, humiliation, exclusion or unfair treatment.`,
          `This Declaration applies to members, trainees, applicants, trainers, supervisors, personal therapists, assessors, administrative staff, clients, supervisees and partner organisations involved in BAIMP activities.`,
        ],
      },
      {
        number: 2,
        title: 'Scope of Application',
        intro: 'This Declaration applies to all BAIMP activities, including:',
        items: [
          `admission and selection of trainees;`,
          `membership procedures;`,
          `training and teaching activities;`,
          `supervision and clinical practice;`,
          `personal therapy / self-experience arrangements within the training context;`,
          `assessment and progression decisions;`,
          `complaints and appeals procedures;`,
          `appointment, approval and review of trainers, supervisors and assessors;`,
          `administrative procedures;`,
          `cooperation with partner institutions and host organisations.`,
        ],
      },
    ],
  },
  {
    number: 'II',
    title: 'Non-discrimination',
    articles: [
      {
        number: 3,
        title: 'Prohibition of Discrimination',
        items: [
          {
            text: 'BAIMP prohibits discrimination, exclusion, harassment, humiliation or unfair treatment on the basis of:',
            subitems: [
              `gender;`,
              `gender identity or gender expression;`,
              `sexual orientation;`,
              `age;`,
              `ethnicity, race, nationality or national origin;`,
              `religion, belief or worldview;`,
              `disability or health-related condition;`,
              `social or economic background;`,
              `family status;`,
              `political opinion;`,
              `educational or professional background, where the person meets the relevant entry or role requirements;`,
              `any other legally protected or ethically relevant status.`,
            ],
          },
          `Differences in professional qualification, clinical competence, training readiness or fitness to practise may be considered only where they are directly relevant to the requirements of a role, programme, assessment or clinical responsibility.`,
        ],
      },
      {
        number: 4,
        title: 'Fair Access and Fair Participation',
        items: [
          `BAIMP seeks to ensure fair access to training, membership and professional development opportunities.`,
          `Selection, assessment and progression decisions must be based on defined criteria, professional suitability, ethical readiness, competence and fulfilment of training requirements.`,
          `No person shall be treated unfairly because they submit a complaint, request clarification, ask for reasonable adjustment or participate in an ethical or appeal procedure in good faith.`,
        ],
      },
    ],
  },
  {
    number: 'III',
    title: 'Reasonable Adjustments and Accessibility',
    articles: [
      {
        number: 5,
        title: 'Reasonable Adjustments',
        items: [
          `BAIMP is committed to making reasonable adjustments where a trainee, applicant, member or participant has a specific need that may affect access to training, assessment, supervision or participation.`,
          `Reasonable adjustments may include adaptation of administrative procedures, learning conditions, assessment format, communication methods or physical access, where feasible.`,
          `Reasonable adjustments must not compromise essential training standards, client safety, ethical obligations, clinical competence or assessment integrity.`,
          `Requests for reasonable adjustment are reviewed individually and confidentially by the relevant BAIMP body.`,
        ],
      },
      {
        number: 6,
        title: 'Disability and Health-Related Conditions',
        items: [
          `Disability or health-related condition shall not by itself be a ground for exclusion from training, membership or professional activity.`,
          `Limitations may be considered only when there is a clear and relevant concern regarding client safety, professional competence, ethical functioning or ability to meet essential training requirements.`,
          `Where such concerns arise, BAIMP will first consider reasonable adjustments, additional support, supervision or structured review before taking restrictive action.`,
        ],
      },
    ],
  },
  {
    number: 'IV',
    title: 'Responsibilities',
    articles: [
      {
        number: 7,
        title: 'Responsibilities of BAIMP',
        intro: 'BAIMP is responsible for:',
        items: [
          `maintaining policies that support equal rights and non-discrimination;`,
          `ensuring that admission, assessment and progression procedures are transparent;`,
          `providing trainees and members with access to complaints and appeals procedures;`,
          `responding to discrimination concerns in a timely and fair manner;`,
          `promoting respectful professional communication within training, supervision and institutional activities;`,
          `reviewing this Declaration periodically.`,
        ],
      },
      {
        number: 8,
        title: 'Responsibilities of Trainers, Supervisors and Assessors',
        intro: 'Trainers, supervisors and assessors are responsible for:',
        items: [
          `treating trainees and supervisees with dignity and respect;`,
          `applying assessment criteria fairly and without discrimination;`,
          `avoiding humiliating, coercive or discriminatory behaviour;`,
          `recognising power differences in training and supervision;`,
          `responding appropriately to discriminatory comments or conduct in the learning environment;`,
          `declaring conflicts of interest where impartiality may be affected.`,
        ],
      },
      {
        number: 9,
        title: 'Responsibilities of Trainees and Members',
        intro: 'Trainees and members are responsible for:',
        items: [
          `treating clients, colleagues, trainers, supervisors and other trainees with respect;`,
          `refraining from discriminatory or degrading conduct;`,
          `respecting diversity in clinical, educational and professional contexts;`,
          `using complaints and appeals procedures responsibly and in good faith;`,
          `complying with the BAIMP Code of Ethics and Professional Practice.`,
        ],
      },
    ],
  },
  {
    number: 'V',
    title: 'Complaints and Appeals',
    articles: [
      {
        number: 10,
        title: 'Right to Submit a Complaint',
        items: [
          `Any applicant, trainee, member, client, supervisee, staff member or relevant party who believes that they have been subjected to discrimination, harassment or unfair treatment may submit a written complaint through the BAIMP complaints procedure.`,
          `Complaints are handled with confidentiality, impartiality and respect for all parties involved.`,
          `BAIMP protects complainants from retaliation when a complaint is submitted in good faith.`,
        ],
      },
      {
        number: 11,
        title: 'Review of Complaints',
        items: [
          `Complaints related to discrimination or unfair treatment are reviewed by the Ethics Committee or another competent body designated by BAIMP.`,
          `The review process follows the BAIMP Complaints and Appeals Procedures.`,
          `Where a conflict of interest exists, the person concerned must not participate in the review or decision-making process.`,
        ],
      },
      {
        number: 12,
        title: 'Appeals',
        items: [
          `A party may appeal a decision according to the BAIMP Appeals Procedure.`,
          `Appeals must be reviewed by a person or body independent from the original decision wherever possible.`,
        ],
      },
    ],
  },
  {
    number: 'VI',
    title: 'Relationship with Other BAIMP Documents',
    articles: [
      {
        number: 13,
        title: 'Relationship with Ethical and Training Standards',
        intro: 'This Declaration is applied together with:',
        items: [
          `the BAIMP Constitution / Articles of Association;`,
          `the Internal Regulations;`,
          `the Code of Ethics and Professional Practice;`,
          `the Code of Ethics for Trainers and Supervisors;`,
          `the Complaints and Appeals Procedures;`,
          `the Detailed Training Curricula;`,
          `the Assessment Procedures and Marking Criteria.`,
        ],
      },
      {
        number: 14,
        title: 'Relationship with Law',
        items: [
          `This Declaration is applied in accordance with the laws of the Republic of Bulgaria and applicable anti-discrimination and data protection requirements.`,
          `Nothing in this Declaration overrides legal obligations or legally required procedures.`,
        ],
      },
    ],
  },
  {
    number: 'VII',
    title: 'Final Provisions',
    articles: [
      {
        number: 15,
        title: 'Review',
        items: [
          `This Declaration is reviewed at least once every three years or earlier where required by legal, ethical, professional or organisational developments.`,
          `Amendments are adopted by the competent BAIMP body according to the Constitution and Internal Regulations.`,
        ],
      },
    ],
  },
]

function ArticleItem({ item }) {
  if (typeof item === 'string') return item

  return (
    <>
      {item.text}
      <ol className="mt-2 grid gap-2 pl-6" style={{ listStyleType: 'lower-alpha' }}>
        {item.subitems.map((subitem) => (
          <li key={subitem} className="pl-2">
            {subitem}
          </li>
        ))}
      </ol>
    </>
  )
}

function Article({ article }) {
  const { select } = useLanguage()

  return (
    <article
      id={`rights-article-${article.number}`}
      className="scroll-mt-28 border-t border-[#e2d5bf] py-7 first:border-t-0 first:pt-0"
    >
      <h3 className="text-xl font-semibold leading-8 text-[#153b34]">
        {select('Article', 'Член')} {article.number}. {article.title}
      </h3>
      {article.intro ? (
        <p className="mt-4 text-base leading-8 text-[#526760]">{article.intro}</p>
      ) : null}
      <ol className="mt-4 grid list-decimal gap-3 pl-6 text-base leading-8 text-[#526760]">
        {article.items.map((item, index) => (
          <li key={typeof item === 'string' ? item : `${article.number}-${index}`} className="pl-2">
            <ArticleItem item={item} />
          </li>
        ))}
      </ol>
    </article>
  )
}

export function RightsAndNonDiscriminationPolicy() {
  const { isBulgarian, select } = useLanguage()
  useDocumentTitle(
    select(
      'Declaration of Equal Rights and Non-discrimination Policy',
      'Декларация за равни права и политика за недискриминация',
    ),
  )

  return (
    <>
      <PageHero
        eyebrow={select('Official document', 'Официален документ')}
        title={select(
          'Declaration of Equal Rights and Non-discrimination Policy',
          'Декларация за равни права и политика за недискриминация',
        )}
        text={select(
          'Of the Bulgarian Association for Intermodal Psychotherapy (BAIMP)',
          'На Българската асоциация по интермодална психотерапия (БАИМП)',
        )}
      />

      <MotionSection className="section-pad section-finish">
        <div className="container-page">
          <div className="grid items-start gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <aside className="premium-panel p-6 lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-[#a9844c]" />
                <h2 className="text-xl font-semibold text-[#153b34]">{select('Contents', 'Съдържание')}</h2>
              </div>
              <nav className="mt-5 grid gap-1" aria-label="Equal rights policy chapters">
                {chapters.map((chapter) => (
                  <a
                    key={chapter.number}
                    href={`#rights-chapter-${chapter.number.toLowerCase()}`}
                    className="rounded-md px-3 py-2 text-sm font-semibold leading-5 text-[#526760] transition hover:bg-[#f3eadc] hover:text-[#153b34]"
                  >
                    {chapter.number}. {chapter.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="grid min-w-0 gap-8">
              <div className="premium-panel flex items-start gap-4 p-6 sm:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f3eadc]">
                  <HandHeart className="h-6 w-6 text-[#a9844c]" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a9844c]">
                    BAIMP
                  </p>
                  <p className="mt-2 text-base leading-8 text-[#526760]">
                    {isBulgarian
                      ? 'Официалният текст на документа по-долу е публикуван на английски език.'
                      : 'This Declaration contains 7 chapters and 15 articles concerning equal rights, fair treatment, accessibility and protection from discrimination.'}
                  </p>
                </div>
              </div>

              {chapters.map((chapter) => (
                <section
                  key={chapter.number}
                  id={`rights-chapter-${chapter.number.toLowerCase()}`}
                  className="premium-panel scroll-mt-28 p-6 sm:p-8"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a9844c]">
                    {select('Chapter', 'Глава')} {chapter.number}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#153b34] sm:text-3xl">
                    {chapter.title}
                  </h2>
                  <div className="mt-7">
                    {chapter.articles.map((article) => (
                      <Article key={article.number} article={article} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>
    </>
  )
}

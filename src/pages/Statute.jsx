import { BookOpen, Landmark } from 'lucide-react'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../i18n/useLanguage.js'

const chapters = [
  {
    number: 'I',
    title: 'General Provisions',
    articles: [
      {
        number: 1,
        title: 'Name and Legal Status',
        items: [
          `The organisation is a non-profit legal entity named Bulgarian Association for Intermodal Psychotherapy, abbreviated as BAIMP, hereinafter referred to as "the Association".`,
          `The Association operates in accordance with the laws of the Republic of Bulgaria, its registered legal status and the present Constitution / Articles of Association.`,
          `The Association is an independent, non-political and non-religious professional organisation.`,
          `The Association conducts its activities in the field of psychotherapy training, professional development, supervision, ethics, research and applied psychological and psychotherapeutic practice.`,
        ],
      },
      {
        number: 2,
        title: 'Seat and Address',
        items: [
          `The seat of the Association is in the Republic of Bulgaria, city of Plovdiv.`,
          {
            text: 'The registered address of the Association is:',
            lines: [
              'Plovdiv, Flavia Business Park',
            ],
          },
        ],
      },
    ],
  },
  {
    number: 'II',
    title: 'Mission and Objectives',
    articles: [
      {
        number: 3,
        title: 'Mission',
        items: [
          `The mission of BAIMP is to promote, develop and maintain high professional standards in the training and practice of intermodal and integrative psychotherapy in Bulgaria.`,
          `BAIMP supports the development of integrative psychotherapy as a scientifically informed, ethically grounded and clinically responsible professional field.`,
          `The Association maintains clear training standards, ethical principles and professional procedures informed by established good practice in psychotherapy training.`,
        ],
      },
      {
        number: 4,
        title: 'Objectives',
        intro: 'The main objectives of the Association are:',
        items: [
          `To develop, organise and conduct professional training programmes in intermodal and integrative psychotherapy.`,
          `To support the professional development of psychotherapists, psychologists, counsellors and other helping professionals through training, supervision, continuing professional development and ethical guidance.`,
          `To establish and maintain training standards, ethical standards and professional procedures for trainees, members, trainers and supervisors.`,
          `To promote scientifically informed and evidence-aware psychotherapy practice.`,
          `To support research, publications, conferences, seminars and educational initiatives in the field of psychotherapy, counselling, psychology and mental health.`,
          `To protect the professional interests of its members while safeguarding the rights, dignity and welfare of clients and service users.`,
          `To cooperate with national and international organisations in the field of psychotherapy, psychology, counselling, supervision, mental health and professional education.`,
          `To support the development of integrative psychotherapy training in Bulgaria in accordance with established professional standards.`,
        ],
      },
    ],
  },
  {
    number: 'III',
    title: 'Activities',
    articles: [
      {
        number: 5,
        title: 'Means of Achieving the Objectives',
        intro: 'To achieve its objectives, the Association may:',
        items: [
          `Develop and implement training curricula in intermodal and integrative psychotherapy.`,
          `Organise seminars, lectures, workshops, conferences, supervision groups, intervision groups and professional development programmes.`,
          `Establish internal training, supervision and assessment procedures.`,
          `Maintain lists of trainees, members, trainers, supervisors and approved personal therapists in accordance with internal regulations and data protection requirements.`,
          `Develop and implement ethical codes, professional standards and procedures for complaints and appeals.`,
          `Support clinical practice, supervised practice and professional development pathways for trainees.`,
          `Cooperate with universities, clinical institutions, educational institutions, non-governmental organisations, professional associations and international psychotherapy organisations.`,
          `Participate in national and international projects, research initiatives and professional networks.`,
          `Publish educational, scientific and professional materials.`,
          `Maintain documentation required for professional accountability, training quality and institutional development.`,
        ],
      },
    ],
  },
  {
    number: 'IV',
    title: 'Membership',
    articles: [
      {
        number: 6,
        title: 'Types of Membership',
        intro: 'The Association may include the following categories of membership:',
        items: [
          {
            heading: 'Full Members',
            text: 'Professionals who meet the membership criteria defined by the Association and who accept the Constitution, the Code of Ethics and the internal regulations of BAIMP.',
          },
          {
            heading: 'Associate Members / Trainee Members',
            text: 'Persons enrolled in a BAIMP training programme or otherwise participating in recognised educational or professional development activities of the Association.',
          },
          {
            heading: 'Institutional Members',
            text: 'Legal entities, organisations or institutions that support the objectives of BAIMP and cooperate with the Association in areas related to training, professional development, research, clinical practice or mental health.',
          },
          {
            heading: 'Honorary Members',
            text: 'Persons who have made a significant contribution to the development of psychotherapy, psychology, counselling, mental health, supervision, education or the objectives of BAIMP.',
          },
        ],
      },
      {
        number: 7,
        title: 'Admission to Membership',
        items: [
          `Membership is voluntary.`,
          `Admission to membership is based on a written application and acceptance of the Constitution, the Code of Ethics and the internal regulations of the Association.`,
          `Applications for membership are reviewed and approved by the Managing Board or by a body authorised by the Managing Board.`,
          `The Association may define specific criteria for each membership category in its internal regulations.`,
        ],
      },
      {
        number: 8,
        title: 'Rights of Members',
        intro: 'Members have the right to:',
        items: [
          `Participate in the activities of the Association according to their membership category.`,
          `Receive information about the activities, training programmes and professional initiatives of BAIMP.`,
          `Participate in meetings, professional events, training activities and working groups, where eligible.`,
          `Make proposals related to the development of the Association.`,
          `Use the professional resources of the Association in accordance with internal regulations.`,
          `Vote and be elected to governing bodies where such rights are granted by their membership category and by the applicable internal regulations.`,
        ],
      },
      {
        number: 9,
        title: 'Duties of Members',
        intro: 'Members are required to:',
        items: [
          `Comply with the Constitution of the Association.`,
          `Comply with the BAIMP Code of Ethics and Professional Practice.`,
          `Respect the internal regulations, decisions and procedures of the Association.`,
          `Protect the dignity, confidentiality and welfare of clients, trainees, members and service users.`,
          `Avoid actions that may damage the professional reputation or lawful interests of the Association.`,
          `Pay membership fees where applicable.`,
        ],
      },
      {
        number: 10,
        title: 'Termination of Membership',
        intro: 'Membership may be terminated by:',
        items: [
          `Voluntary resignation.`,
          `Non-payment of membership fees, where applicable.`,
          `Decision of the Managing Board in cases of serious breach of the Constitution, internal regulations or Code of Ethics.`,
          `Decision of the Ethics Committee or other authorised body, where such a decision is confirmed according to the complaints and appeals procedures.`,
          `Dissolution or termination of the Association.`,
        ],
      },
    ],
  },
  {
    number: 'V',
    title: 'Organisational Structure',
    articles: [
      {
        number: 11,
        title: 'Bodies of the Association',
        intro: 'The bodies of the Association are:',
        items: [
          `The General Assembly.`,
          `The Managing Board.`,
          `The Ethics Committee.`,
          `The Training Standards Committee.`,
          `Other committees, working groups or advisory bodies established by decision of the Managing Board or the General Assembly.`,
        ],
      },
      {
        number: 12,
        title: 'General Assembly',
        items: [
          `The General Assembly is the supreme collective body of the Association.`,
          `The General Assembly consists of members who have voting rights according to the membership category and internal regulations of the Association.`,
          `The General Assembly meets at least once per year.`,
          `The General Assembly adopts the strategic priorities of the Association, elects the Managing Board, approves major structural changes and reviews the annual activity of the Association.`,
          `The procedure for convening and conducting the General Assembly is determined by the applicable law and the internal regulations of the Association.`,
        ],
      },
      {
        number: 13,
        title: 'Managing Board',
        items: [
          `The Managing Board is the executive and representative body of the Association.`,
          `The Managing Board manages the current activities of the Association and represents it before third parties, public authorities, institutions and partner organisations.`,
          `The composition, mandate, election procedure and decision-making rules of the Managing Board are defined in accordance with the official registration documents, applicable Bulgarian law and the internal regulations of the Association.`,
          {
            text: 'The Managing Board is responsible for:',
            subitems: [
              `implementing the objectives of the Association;`,
              `approving training policies and internal procedures;`,
              `appointing or approving committees and working groups;`,
              `approving trainers, supervisors and relevant professional roles;`,
              `maintaining institutional documentation;`,
              `ensuring compliance with ethical and professional standards;`,
              `representing the Association in national and international contexts.`,
            ],
          },
        ],
      },
      {
        number: 14,
        title: 'Ethics Committee',
        items: [
          `The Ethics Committee is responsible for supporting ethical standards within the Association.`,
          `The Ethics Committee reviews ethical questions, complaints and professional conduct matters according to the BAIMP Code of Ethics and the complaints procedure.`,
          `The Ethics Committee acts independently in the review of ethical matters and may make recommendations to the Managing Board.`,
          `Members of the Ethics Committee must avoid conflicts of interest in relation to the cases they review.`,
        ],
      },
      {
        number: 15,
        title: 'Training Standards Committee',
        items: [
          `The Training Standards Committee is responsible for the development, review and quality monitoring of training standards, curricula, supervision requirements and assessment procedures.`,
          `The Committee may review training programmes, module content, assessment criteria, clinical practice requirements and supervision standards.`,
          `The Committee may make recommendations to the Managing Board regarding training quality, faculty allocation and alignment with European standards.`,
        ],
      },
    ],
  },
  {
    number: 'VI',
    title: 'Training, Supervision and Professional Standards',
    articles: [
      {
        number: 16,
        title: 'Training Standards',
        items: [
          `BAIMP develops and maintains training programmes in intermodal and integrative psychotherapy.`,
          `Training programmes are organised in accordance with written curricula, defined learning outcomes, assessment procedures and ethical requirements.`,
          `The Association keeps its psychotherapy training aligned with established professional and educational good practice.`,
          `The Association maintains documentation of training hours, clinical practice, supervision, personal therapy / self-experience and assessment procedures.`,
        ],
      },
      {
        number: 17,
        title: 'Supervision Standards',
        items: [
          `Supervision is an essential component of psychotherapy training and professional development within BAIMP.`,
          `Supervisors must have relevant clinical, psychotherapeutic and supervisory competence.`,
          `Supervision requirements, formats, documentation and role boundaries are defined in the internal regulations and supervision policy of the Association.`,
        ],
      },
      {
        number: 18,
        title: 'Personal Therapy / Self-Experience',
        items: [
          `Personal therapy or equivalent self-experience is recognised as an essential component of psychotherapeutic training.`,
          `The requirements for personal therapy / self-experience are defined in the training curriculum and internal regulations.`,
          `Personal therapy is conducted under conditions that protect confidentiality and avoid role confusion between trainer, supervisor, assessor and personal therapist.`,
        ],
      },
    ],
  },
  {
    number: 'VII',
    title: 'Ethics and Professional Practice',
    articles: [
      {
        number: 19,
        title: 'Code of Ethics',
        items: [
          `The Association adopts a Code of Ethics and Professional Practice that is binding for members, trainees, trainers, supervisors and all persons acting on behalf of BAIMP.`,
          `The Code of Ethics defines principles of confidentiality, competence, professional responsibility, informed consent, boundaries, avoidance of dual relationships, non-discrimination and respect for clients' dignity and rights.`,
          `The ethical framework of BAIMP is developed in alignment with established ethical principles in psychotherapy.`,
        ],
      },
      {
        number: 20,
        title: 'Complaints and Appeals',
        items: [
          `BAIMP maintains procedures for complaints and appeals.`,
          `Complaints may concern ethical conduct, training decisions, assessment decisions or professional behaviour within the scope of the Association's activities.`,
          `Appeals are reviewed according to an independent procedure designed to ensure fairness and avoid conflicts of interest.`,
          `Detailed procedures are defined in the Code of Ethics, internal regulations and relevant policy documents.`,
        ],
      },
    ],
  },
  {
    number: 'VIII',
    title: 'Equal Rights and Non-discrimination',
    articles: [
      {
        number: 21,
        title: 'Equal Rights',
        items: [
          `BAIMP is committed to equal rights, fair treatment and non-discrimination in membership, training, assessment, supervision and professional activities.`,
          `The Association does not discriminate on the basis of gender, ethnicity, religion, nationality, age, disability, social background, political opinion, sexual orientation or other legally protected or ethically relevant status.`,
          `Equal rights and non-discrimination principles are further specified in the BAIMP Declaration of Equal Rights.`,
        ],
      },
    ],
  },
  {
    number: 'IX',
    title: 'Property, Finances and Administration',
    articles: [
      {
        number: 22,
        title: 'Property and Financial Resources',
        items: [
          `The Association may acquire property, receive membership fees, donations, grants, project funding, training fees and other lawful income.`,
          `Financial resources are used solely for achieving the objectives of the Association.`,
          `The Association maintains accounting and administrative records in accordance with Bulgarian law.`,
        ],
      },
      {
        number: 23,
        title: 'Administration and Records',
        items: [
          `BAIMP maintains administrative records related to membership, training, supervision, assessment, ethics, meetings and institutional decisions.`,
          `The Association keeps written documentation of meetings of governing bodies, committees and relevant training structures.`,
          `Personal data are processed in accordance with applicable data protection requirements.`,
        ],
      },
    ],
  },
  {
    number: 'X',
    title: 'Amendments and Dissolution',
    articles: [
      {
        number: 24,
        title: 'Amendments to the Constitution',
        items: [
          `Amendments to this Constitution may be adopted by the General Assembly in accordance with the applicable law and internal regulations of the Association.`,
          `Proposed amendments must be communicated to members in advance according to the procedure for convening the General Assembly.`,
        ],
      },
      {
        number: 25,
        title: 'Dissolution',
        items: [
          `The Association may be dissolved by decision of the General Assembly or by court ruling in the cases provided by law.`,
          `Upon dissolution, the remaining property of the Association shall be distributed in accordance with Bulgarian law and the decisions of the competent body.`,
        ],
      },
    ],
  },
  {
    number: 'XI',
    title: 'Final Provisions',
    articles: [
      {
        number: 26,
        title: 'Relationship with Internal Regulations',
        items: [
          `Matters not regulated in detail by this Constitution are governed by the internal regulations, ethical codes, training policies and decisions of the competent bodies of the Association.`,
          `In case of inconsistency, the Constitution and applicable Bulgarian law prevail.`,
        ],
      },
      {
        number: 27,
        title: 'Entry into Force',
        paragraphs: [
          `This Constitution enters into force upon its adoption by the competent body of the Association.`,
        ],
      },
    ],
  },
]

function ArticleItem({ item }) {
  if (typeof item === 'string') return item

  return (
    <>
      {item.heading ? <strong className="block text-[#153b34]">{item.heading}</strong> : item.text}
      {item.heading && item.text ? <span className="mt-1 block">{item.text}</span> : null}
      {item.lines ? (
        <span className="mt-2 block">
          {item.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
      ) : null}
      {item.subitems ? (
        <ol className="mt-2 grid gap-2 pl-6" style={{ listStyleType: 'lower-alpha' }}>
          {item.subitems.map((subitem) => (
            <li key={subitem} className="pl-2">
              {subitem}
            </li>
          ))}
        </ol>
      ) : null}
    </>
  )
}

function Article({ article }) {
  const { select } = useLanguage()

  return (
    <article
      id={`statute-article-${article.number}`}
      className="scroll-mt-28 border-t border-[#e2d5bf] py-7 first:border-t-0 first:pt-0"
    >
      <h3 className="text-xl font-semibold leading-8 text-[#153b34]">
        {select('Article', 'Член')} {article.number}. {article.title}
      </h3>
      {article.intro ? (
        <p className="mt-4 text-base leading-8 text-[#526760]">{article.intro}</p>
      ) : null}
      {article.items ? (
        <ol className="mt-4 grid list-decimal gap-3 pl-6 text-base leading-8 text-[#526760]">
          {article.items.map((item, index) => (
            <li key={typeof item === 'string' ? item : `${article.number}-${index}`} className="pl-2">
              <ArticleItem item={item} />
            </li>
          ))}
        </ol>
      ) : null}
      {article.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-base leading-8 text-[#526760]">
          {paragraph}
        </p>
      ))}
    </article>
  )
}

export function Statute() {
  const { isBulgarian, select } = useLanguage()
  useDocumentTitle(select('Constitution / Articles of Association', 'Устав'))

  return (
    <>
      <PageHero
        eyebrow={select('Official document', 'Официален документ')}
        title={select('Constitution / Articles of Association', 'Устав')}
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
              <nav className="mt-5 grid gap-1" aria-label="Constitution chapters">
                {chapters.map((chapter) => (
                  <a
                    key={chapter.number}
                    href={`#statute-chapter-${chapter.number.toLowerCase()}`}
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
                  <Landmark className="h-6 w-6 text-[#a9844c]" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a9844c]">
                    BAIMP
                  </p>
                  <p className="mt-2 text-base leading-8 text-[#526760]">
                    {isBulgarian
                      ? 'Официалният текст на документа по-долу е публикуван на английски език.'
                      : 'This Constitution contains 11 chapters and 27 articles governing the Association\'s objectives, membership, bodies, standards and administration.'}
                  </p>
                </div>
              </div>

              {chapters.map((chapter) => (
                <section
                  key={chapter.number}
                  id={`statute-chapter-${chapter.number.toLowerCase()}`}
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

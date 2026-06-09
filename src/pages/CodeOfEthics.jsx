import { BookOpen, Scale } from 'lucide-react'
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
        title: 'Purpose of the Code',
        items: [
          `This Code of Ethics and Professional Practice defines the ethical principles, professional responsibilities and standards of conduct applicable within the Bulgarian Association for Intermodal Psychotherapy (BAIMP).`,
          `The Code applies to members, trainees, trainers, supervisors, personal therapists, assessors, committee members and all persons acting on behalf of BAIMP.`,
          `The purpose of the Code is to protect clients, trainees, members, supervisees and the public, and to promote ethical, responsible and competent psychotherapeutic practice.`,
          `This Code is developed in alignment with European ethical principles in psychotherapy and with the aims and professional standards of the European Association for Integrative Psychotherapy (EAIP), while remaining subject to the laws and professional requirements applicable in the Republic of Bulgaria.`,
        ],
      },
      {
        number: 2,
        title: 'Scope',
        intro: 'This Code applies to:',
        items: [
          `psychotherapeutic and counselling practice;`,
          `training activities;`,
          `supervision;`,
          `personal therapy / self-experience within the training context;`,
          `assessment and certification procedures;`,
          `research and publication activities;`,
          `online and digital professional practice;`,
          `professional relationships within BAIMP.`,
        ],
      },
    ],
  },
  {
    number: 'II',
    title: 'Core Ethical Principles',
    articles: [
      {
        number: 3,
        title: 'Respect for Human Dignity and Rights',
        items: [
          `Members and trainees respect the dignity, autonomy, individuality and rights of every client, trainee, supervisee and colleague.`,
          `Professional practice is conducted with respect for cultural, social, personal, developmental and relational contexts.`,
          `Discrimination, humiliation, coercion, exploitation or abuse of power are incompatible with BAIMP ethical standards.`,
        ],
      },
      {
        number: 4,
        title: 'Welfare and Protection of Clients',
        items: [
          `The welfare and safety of clients and service users are central ethical obligations.`,
          `Practitioners work within the limits of their competence and take appropriate action when a client's needs exceed their competence or role.`,
          `Where necessary, clients are referred to another professional, medical service, psychiatric service, emergency service or other appropriate resource.`,
        ],
      },
      {
        number: 5,
        title: 'Integrity and Professional Responsibility',
        items: [
          `Members and trainees act honestly, responsibly and transparently in their professional roles.`,
          `They do not misrepresent their qualifications, training status, certification, professional competence or institutional affiliation.`,
          `Trainees must clearly identify themselves as trainees under supervision when working with clients or client systems.`,
        ],
      },
      {
        number: 6,
        title: 'Social Responsibility',
        items: [
          `BAIMP recognises psychotherapy as a professional activity with individual, relational and social implications.`,
          `Members and trainees are expected to act with social responsibility, respect for diversity and awareness of the broader context in which psychological suffering occurs.`,
        ],
      },
    ],
  },
  {
    number: 'III',
    title: 'Professional Competence',
    articles: [
      {
        number: 7,
        title: 'Scope of Competence',
        items: [
          `Members and trainees practise only within the limits of their education, training, supervised practice, clinical experience and legal competence.`,
          `When working with populations, problems or methods outside their current competence, they must seek supervision, additional training or referral.`,
          `Trainees may not undertake autonomous psychotherapy practice outside the supervision framework approved by BAIMP.`,
        ],
      },
      {
        number: 8,
        title: 'Continuing Professional Development',
        items: [
          `Members are expected to maintain and develop their professional competence through continuing professional development.`,
          `Continuing professional development may include training, supervision, workshops, conferences, self-study, research, publication, peer consultation and professional reflection.`,
          `BAIMP may define minimum continuing professional development requirements for membership categories in its internal regulations.`,
        ],
      },
      {
        number: 9,
        title: 'Supervision',
        items: [
          `Supervision is an essential mechanism for maintaining professional competence, ethical reflection and quality of practice.`,
          `Trainees are required to complete supervision according to the BAIMP training standards.`,
          `Practitioners are expected to seek supervision or consultation when working with complex, high-risk or unfamiliar clinical material.`,
        ],
      },
    ],
  },
  {
    number: 'IV',
    title: 'Professional Boundaries and Role Integrity',
    articles: [
      {
        number: 10,
        title: 'Professional Boundaries',
        items: [
          `Members and trainees maintain clear professional boundaries in all therapeutic, supervisory, training and assessment relationships.`,
          `They avoid relationships that may impair professional judgement, exploit dependency or create conflict of interest.`,
          `Financial, social, emotional, sexual, romantic or other exploitative relationships with clients, trainees or supervisees are prohibited.`,
        ],
      },
      {
        number: 11,
        title: 'Sexual and Romantic Boundaries',
        items: [
          `Sexual or romantic relationships with current clients are strictly prohibited.`,
          `Sexual or romantic relationships with current trainees or supervisees are prohibited where there is a power relationship, evaluative role, supervisory responsibility or training dependency.`,
          `Sexual or romantic relationships with former clients are strongly discouraged and may be considered unethical where there is exploitation, dependency, unresolved therapeutic vulnerability or misuse of power.`,
          `A minimum period of two years after termination of therapy does not automatically make such a relationship ethical.`,
        ],
      },
      {
        number: 12,
        title: 'Dual Roles in Training',
        items: [
          `Trainers and supervisors must not act as personal therapists for their current trainees or supervisees.`,
          `Personal therapists must not act as assessors for the same trainee.`,
          `Members of an assessment panel must disclose any prior training, supervisory, therapeutic, financial or personal relationship that may create a conflict of interest.`,
          `Where a conflict of interest exists, the person concerned must withdraw from the relevant decision-making or assessment process.`,
        ],
      },
      {
        number: 13,
        title: 'Role Clarity',
        items: [
          `BAIMP requires clear distinction between the roles of trainer, supervisor, personal therapist, assessor and institutional representative.`,
          `These roles are documented separately in the training structure and internal regulations.`,
          `The purpose of role separation is to protect confidentiality, reduce dependency and safeguard independent assessment.`,
        ],
      },
    ],
  },
  {
    number: 'V',
    title: 'Confidentiality and Data Protection',
    articles: [
      {
        number: 14,
        title: 'Confidentiality',
        items: [
          `All information obtained in therapeutic, supervisory, training, assessment or institutional contexts is treated as confidential.`,
          `Confidentiality applies to clients, trainees, supervisees, members and staff.`,
          `Confidential information may be shared only with appropriate consent, legal basis or ethical justification.`,
        ],
      },
      {
        number: 15,
        title: 'Limits of Confidentiality',
        intro: 'Confidentiality may be limited when:',
        items: [
          `there is serious risk of harm to the client;`,
          `there is serious risk of harm to another person;`,
          `there are child protection or vulnerable-person protection concerns;`,
          `disclosure is required by law;`,
          `disclosure is necessary for supervision, provided that material is anonymised wherever possible;`,
          `the client has provided explicit informed consent.`,
        ],
      },
      {
        number: 16,
        title: 'Anonymisation in Training and Supervision',
        items: [
          `Client material used in training, supervision, written assignments or case presentations must be anonymised.`,
          `Identifiable personal information must not be included in clinical logs, supervision logs, written case studies or teaching materials unless there is explicit legal and ethical justification.`,
        ],
      },
      {
        number: 17,
        title: 'Records and Data Protection',
        items: [
          `Members and trainees maintain records in a secure, responsible and confidential manner.`,
          `Client records, training records and supervision documentation are stored in accordance with applicable Bulgarian law, professional standards and data protection requirements.`,
          `Access to records is limited to persons with a legitimate professional or administrative role.`,
          `Upon closure of practice or institutional activity, records must be transferred, stored or destroyed in an ethical and lawful manner.`,
        ],
      },
    ],
  },
  {
    number: 'VI',
    title: 'Informed Consent',
    articles: [
      {
        number: 18,
        title: 'Information Provided to Clients',
        intro: 'Before beginning therapeutic or counselling work, clients must receive clear information about:',
        items: [
          `the practitioner's name, role, qualification and training status;`,
          `the nature of the therapeutic or counselling approach;`,
          `the trainee status of the practitioner, where applicable;`,
          `frequency, duration and expected frame of sessions;`,
          `fees and cancellation conditions, where applicable;`,
          `confidentiality and its limits;`,
          `record keeping;`,
          `supervision arrangements, where applicable;`,
          `the client's right to ask questions, refuse interventions or discontinue the process.`,
        ],
      },
      {
        number: 19,
        title: 'Consent in Training Contexts',
        items: [
          `When trainees work with clients or client systems, the client must be informed that the trainee is practising under supervision.`,
          `Where practice takes place in an institutional setting, consent procedures must comply with the rules of the host organisation and BAIMP ethical standards.`,
        ],
      },
      {
        number: 20,
        title: 'Documentation of Consent',
        items: [
          `Informed consent should be documented at the beginning of the therapeutic or counselling process.`,
          `New consent should be obtained when there is a substantial change in the therapeutic frame, practitioner role, confidentiality conditions or institutional context.`,
        ],
      },
    ],
  },
  {
    number: 'VII',
    title: 'Online and Digital Practice',
    articles: [
      {
        number: 21,
        title: 'Digital Competence',
        items: [
          `Members and trainees who provide online services must have sufficient technical and professional competence for digital practice.`,
          `They must understand the specific risks of online work, including privacy, confidentiality, crisis management, technological failure and jurisdictional limitations.`,
        ],
      },
      {
        number: 22,
        title: 'Digital Confidentiality',
        items: [
          `Online communication must be conducted through reasonably secure and appropriate channels.`,
          `Clients must be informed about the specific limitations and risks of online communication.`,
          `Practitioners must take reasonable steps to protect confidentiality in digital storage, communication and documentation.`,
        ],
      },
    ],
  },
  {
    number: 'VIII',
    title: 'Ethics in Training, Supervision and Assessment',
    articles: [
      {
        number: 23,
        title: 'Ethics in Training',
        items: [
          `Trainers act as models of ethical and professional conduct.`,
          `Training must be conducted in a respectful, non-discriminatory and professionally responsible manner.`,
          `Trainers must not exploit trainees emotionally, financially, sexually, professionally or academically.`,
        ],
      },
      {
        number: 24,
        title: 'Ethics in Supervision',
        items: [
          `Supervisors support the trainee's professional development, ethical reflection and client safety.`,
          `Supervisors must clearly distinguish between supervision, therapy, assessment and personal advice.`,
          `Supervisors must act within their competence and must refer or consult when a case exceeds their expertise.`,
        ],
      },
      {
        number: 25,
        title: 'Ethics in Assessment',
        items: [
          `Assessment of trainees must be transparent, fair, documented and based on defined criteria.`,
          `Trainees must be informed about assessment requirements, marking criteria and appeal procedures.`,
          `Assessment decisions must avoid discrimination, personal bias and conflict of interest.`,
          `At least one external assessor participates in the final integrative assessment, in accordance with BAIMP assessment procedures.`,
        ],
      },
    ],
  },
  {
    number: 'IX',
    title: 'Research, Publication and Teaching Materials',
    articles: [
      {
        number: 26,
        title: 'Research Ethics',
        items: [
          `Research involving clients, trainees or members must comply with ethical requirements, informed consent and data protection standards.`,
          `Research involving vulnerable persons or sensitive clinical material requires appropriate ethical review.`,
          `Participation in research must be voluntary, and participants must have the right to withdraw where applicable.`,
        ],
      },
      {
        number: 27,
        title: 'Use of Clinical Material',
        items: [
          `Clinical material may be used for teaching, supervision, research or publication only when it is anonymised and ethically justified.`,
          `Where anonymisation is insufficient to protect identity, explicit written consent must be obtained.`,
          `Clinical material must not be used in a way that humiliates, exposes or exploits clients, trainees or supervisees.`,
        ],
      },
    ],
  },
  {
    number: 'X',
    title: 'Complaints and Appeals',
    articles: [
      {
        number: 28,
        title: 'Right to Submit a Complaint',
        items: [
          `A client, trainee, supervisee, member, staff member, host organisation or other relevant party may submit a written complaint to BAIMP when there is concern about an ethical breach, professional misconduct, unsafe practice or procedural unfairness.`,
          `Complaints must include, where possible, a description of the concern, relevant dates, persons involved and supporting information.`,
        ],
      },
      {
        number: 29,
        title: 'Initial Review',
        items: [
          `Complaints are reviewed by the Ethics Committee or another competent body authorised by BAIMP.`,
          `The initial review determines whether the complaint falls within the competence of BAIMP and whether immediate protective action is required.`,
          `The complainant is normally informed of the receipt of the complaint within 14 days.`,
        ],
      },
      {
        number: 30,
        title: 'Investigation Panel',
        items: [
          `Where the complaint requires formal investigation, BAIMP appoints an investigation panel.`,
          `The panel normally consists of three persons without conflict of interest in relation to the complaint.`,
          `The parties have the right to present relevant information and to be heard.`,
          `The panel may request written statements, documents, supervision records, training records or other relevant material, while respecting confidentiality and data protection requirements.`,
        ],
      },
      {
        number: 31,
        title: 'Decision and Outcomes',
        items: [
          `The panel issues a reasoned decision within a defined timeframe, normally within 30 days after completion of the investigation.`,
        ],
        sublistIntro: 'Possible outcomes include:',
        subitems: [
          `no further action;`,
          `recommendation for mediation or clarification;`,
          `written warning;`,
          `requirement for additional supervision;`,
          `requirement for additional training;`,
          `temporary restriction of practice or training activity;`,
          `suspension of membership or training participation;`,
          `termination of membership or training participation;`,
          `referral to another competent body where required.`,
        ],
      },
      {
        number: 32,
        title: 'Appeals',
        items: [
          `A party may appeal the decision within 14 days of receiving it.`,
          `Appeals are reviewed by a body or panel independent from the original decision.`,
          `The appeal may concern procedural irregularity, conflict of interest, disproportionate sanction, new evidence or serious error in the decision-making process.`,
          `The decision of the appeal body is final within the Association.`,
        ],
      },
      {
        number: 33,
        title: 'External Reporting',
        items: [
          `Serious matters may be reported to external authorities or professional bodies where required by law, ethical responsibility or relevant professional procedures.`,
          `Reporting to EAIP or another professional organisation may occur only when appropriate, proportionate and consistent with the applicable rules, confidentiality requirements and legal obligations.`,
        ],
      },
    ],
  },
  {
    number: 'XI',
    title: 'Fitness to Practise and Client Safety',
    articles: [
      {
        number: 34,
        title: 'Fitness to Practise',
        items: [
          `BAIMP may review a trainee's or member's fitness to practise where there is concern about emotional stability, ethical conduct, professional behaviour, psychological functioning, client safety or capacity for reflective practice.`,
          `A fitness-to-practise review is not a disciplinary procedure by default, but may lead to protective, remedial or disciplinary measures when necessary.`,
        ],
      },
      {
        number: 35,
        title: 'Protective Measures',
        intro: 'Possible measures include:',
        items: [
          `additional supervision;`,
          `additional personal therapy or professional support;`,
          `temporary suspension from clinical practice;`,
          `limitation of permitted clinical activities;`,
          `remedial learning plan;`,
          `referral to the Ethics Committee;`,
          `interruption or termination of training participation where necessary for client safety.`,
        ],
      },
    ],
  },
  {
    number: 'XII',
    title: 'Equal Rights and Non-discrimination',
    articles: [
      {
        number: 36,
        title: 'Equal Treatment',
        items: [
          `BAIMP is committed to fair treatment and non-discrimination in training, supervision, assessment, membership and professional activities.`,
          `Decisions must not be based on gender, ethnicity, religion, nationality, age, disability, social background, political opinion, sexual orientation or other legally protected or ethically relevant status.`,
          `Reasonable steps should be taken to support access, fairness and respectful participation, while maintaining professional and training standards.`,
        ],
      },
    ],
  },
  {
    number: 'XIII',
    title: 'Relationship with Law and Other Documents',
    articles: [
      {
        number: 37,
        title: 'Relationship with Bulgarian Law',
        items: [
          `This Code is applied in accordance with the laws of the Republic of Bulgaria.`,
          `Nothing in this Code overrides legal obligations, court orders, statutory duties or legally required reporting.`,
        ],
      },
      {
        number: 38,
        title: 'Relationship with BAIMP Documents',
        intro: 'This Code is applied together with:',
        items: [
          `the BAIMP Constitution / Articles of Association;`,
          `the Internal Regulations;`,
          `the Detailed Training Curricula;`,
          `the Code of Ethics for Trainers and Supervisors;`,
          `the Complaints and Appeals Procedures;`,
          `the Clinical Practice Policy;`,
          `the Supervision Policy;`,
          `the Personal Therapy / Self-Experience Policy;`,
          `the Assessment Procedures and Marking Criteria.`,
        ],
      },
      {
        number: 39,
        title: 'Review of the Code',
        items: [
          `This Code is reviewed at least once every three years or earlier where required by legal, professional, ethical or organisational developments.`,
          `Amendments are adopted by the competent BAIMP body according to the Constitution and Internal Regulations.`,
        ],
      },
    ],
  },
  {
    number: 'XIV',
    title: 'Final Provisions',
    articles: [
      {
        number: 40,
        title: 'Binding Effect',
        items: [
          `All members, trainees, trainers, supervisors, assessors and persons acting on behalf of BAIMP are required to know and comply with this Code.`,
          `Breach of this Code may lead to ethical review, remedial measures, disciplinary measures or termination of membership or training participation.`,
        ],
      },
    ],
  },
]

function Article({ article }) {
  const { select } = useLanguage()

  return (
    <article
      id={`article-${article.number}`}
      className="scroll-mt-28 border-t border-[#e2d5bf] py-7 first:border-t-0 first:pt-0"
    >
      <h3 className="text-xl font-semibold leading-8 text-[#153b34]">
        {select('Article', 'Член')} {article.number}. {article.title}
      </h3>
      {article.intro ? (
        <p className="mt-4 text-base leading-8 text-[#526760]">{article.intro}</p>
      ) : null}
      <ol className="mt-4 grid list-decimal gap-3 pl-6 text-base leading-8 text-[#526760]">
        {article.items.map((item) => (
          <li key={item} className="pl-2">
            {item}
          </li>
        ))}
      </ol>
      {article.sublistIntro ? (
        <div className="mt-4 pl-8 text-base leading-8 text-[#526760]">
          <p>2. {article.sublistIntro}</p>
          <ol className="mt-2 grid gap-2 pl-6" style={{ listStyleType: 'lower-alpha' }}>
            {article.subitems.map((item) => (
              <li key={item} className="pl-2">
                {item}
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </article>
  )
}

export function CodeOfEthics() {
  const { isBulgarian, select } = useLanguage()
  useDocumentTitle(select('Code of Ethics and Professional Practice', 'Етичен кодекс и професионална практика'))

  return (
    <>
      <PageHero
        eyebrow={select('Official document', 'Официален документ')}
        title={select('Code of Ethics and Professional Practice', 'Етичен кодекс и професионална практика')}
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
              <nav className="mt-5 grid gap-1" aria-label="Code of Ethics chapters">
                {chapters.map((chapter) => (
                  <a
                    key={chapter.number}
                    href={`#chapter-${chapter.number.toLowerCase()}`}
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
                  <Scale className="h-6 w-6 text-[#a9844c]" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a9844c]">
                    BAIMP
                  </p>
                  <p className="mt-2 text-base leading-8 text-[#526760]">
                    {isBulgarian
                      ? 'Официалният текст на документа по-долу е публикуван на английски език.'
                      : 'This document contains 14 chapters and 40 articles governing ethical principles, professional responsibilities and standards of conduct within the Association.'}
                  </p>
                </div>
              </div>

              {chapters.map((chapter) => (
                <section
                  key={chapter.number}
                  id={`chapter-${chapter.number.toLowerCase()}`}
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

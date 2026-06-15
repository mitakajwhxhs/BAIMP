import { documentTrainers } from './documentTrainers.js'
import { siteContent } from './siteContent.js'

export { siteContent }

export const isPublicTrainer = (trainer) => Boolean(trainer?.is_published)

const originalTrainers = [
  {
    id: 'boris-tilov',
    slug: 'boris-tilov',
    name: 'Assoc. Prof. Boris Tilov',
    title: 'Psychologist-psychotherapist, Medical University, medical and clinical psychology',
    city: 'Plovdiv',
    image_url: '/images/trainers/boris-tilov.webp',
    specialties: ['Clinical psychology', 'Psychotherapy', 'Positive psychotherapy', 'Hypnotherapy'],
    badges: ['associate professor', 'PhD in psychology', '15+ years of experience', 'BAIMP'],
    short_bio:
      'Psychologist-psychotherapist with more than 15 years of experience in psychological support, personality assessment, individual work and group work.',
    bio: [
      'Assoc. Prof. Dr. Boris Tilov is a psychologist-psychotherapist with more than 15 years of experience in psychological support, personality assessment, individual work and group work.',
      'He successfully applies methods of psychotherapy and psychological counselling with people experiencing difficult adaptation and chronic stress related to anxiety and depressive states.',
      'Between 2015 and 2019 he worked as a counselling psychologist and psychotherapist in the Mental Health office at the Emergency Medicine Technology Center of Medical University Plovdiv. Since 2019 he has been an associate professor of clinical psychology at Medical University Plovdiv and has his own psychotherapy practice in Plovdiv.',
    ],
    education: [
      'Master degree in Counselling Psychology, 2008.',
      'PhD in medical psychology and psychiatry, Medical University Plovdiv, 2013.',
      'Assistant professor since 2008 and associate professor of clinical psychology since 2019.',
    ],
    qualifications: [
      'Certified psychotherapist in transcultural positive psychotherapy.',
      'Hypnotherapist affiliated with the European Society of Hypnosis.',
      'Member of the Society of Psychologists in Bulgaria, ID No BG-RP 0896, since 2009.',
    ],
    experience: ['Psychological support', 'Personality assessment', 'Individual and group counselling'],
    topics: ['Anxiety states', 'Depressive states', 'Chronic stress', 'Difficult adaptation'],
    memberships: ['Society of Psychologists in Bulgaria', 'BAIMP'],
    is_featured: true,
    is_published: true,
    sort_order: 1,
  },
  {
    id: 'bilyana-necheva',
    slug: 'bilyana-necheva',
    name: 'Bilyana Necheva',
    title: 'Psychologist and psychotherapist, cognitive-behavioural consultant, hypnotherapist and EMDR therapist',
    city: 'Plovdiv',
    image_url: '/images/trainers/bilyana-necheva.webp',
    specialties: ['CBT', 'Schema therapy', 'Hypnotherapy', 'EMDR', 'PTSD'],
    badges: ['EMDR', 'CBT', 'hypnotherapy', 'private practice'],
    short_bio:
      'Psychologist and psychotherapist with experience in anxiety disorders, post-traumatic stress, and work with adults, adolescents and families.',
    bio: [
      'Bilyana Necheva was born on 29.09.1986 in the Republic of North Macedonia. She completed her secondary education in 2005 at Gorche Petrov Secondary School in Prilep, with a medical nurse profile.',
      'From 2008 to 2012 she studied psychology at Plovdiv University Paisii Hilendarski. Between 2012 and 2018 she completed training in cognitive-behavioural psychotherapy and schema therapy with Dr. Petar Vasilev at the Institute for Ecology of Thought.',
      'She currently works in private practice in Plovdiv and is the manager of ATINA PSYCHOLOGY Ltd. She has extensive experience in anxiety and post-traumatic stress disorders.',
    ],
    education: [
      'Psychology, Plovdiv University Paisii Hilendarski, 2008 - 2012.',
      'Master degree in Human Resource Management, 2019.',
    ],
    qualifications: [
      'Cognitive-behavioural psychotherapy and schema therapy, 2012 - 2018.',
      'Hypnotherapy with BAHH, 2020 - 2022.',
      'EMDR therapy at EMDR Training Center Bulgaria with Dr. Udi Oren, 2023 - 2025.',
    ],
    experience: ['ATINA PSYCHOLOGY Ltd.', 'Private practice in Plovdiv'],
    topics: [
      'Anxiety',
      'Depression',
      'Panic disorder',
      'Eating disorders',
      'Intrusive thoughts',
      'OCD',
      'PTSD',
      'Group therapy',
    ],
    memberships: ['BAIMP'],
    is_featured: true,
    is_published: true,
    sort_order: 2,
  },
  {
    id: 'asen-beshkov',
    slug: 'asen-beshkov',
    name: 'Dr. Asen Beshkov',
    title: 'Psychiatrist, Medical University',
    city: 'Plovdiv',
    image_url: '/images/trainers/asen-beshkov.webp',
    specialties: ['Psychiatry', 'Addictions', 'Cross-cultural psychiatry', 'Psychopathology'],
    badges: ['medical doctor', 'psychiatrist', 'lecturer', 'professional training'],
    short_bio:
      'Psychiatrist and university lecturer with clinical, research and teaching experience in psychiatry and psychopathology.',
    bio: [
      'He was born in Plovdiv in 1983. In 2008 he obtained a master degree in medicine from Medical University Plovdiv, and in December 2013 he acquired the specialty Psychiatry.',
      'From the end of 2008 to 2018 he worked at the State Psychiatric Hospital in Pazardzhik. Since 2012 he has worked at AGPSPP Filipopolis, Plovdiv, in the field of addictions, acute and chronic mental disorders.',
      'Since 2016 he has been a PhD candidate in psychiatry at Medical University Plovdiv. From February 2019 to February 2024 he was an assistant professor, and from February 2024 to February 2025 a lecturer at the Department of Psychiatry and Medical Psychology.',
      'He publishes and participates in national forums on topics such as religiosity and mental health, culture and psychopathology, evolutionary understandings of mental disorders and morphological markers of dysontogenesis.',
    ],
    education: [
      'Master degree in medicine, Medical University Plovdiv, 2008.',
      'Specialty in Psychiatry, 2013.',
      'PhD candidate in psychiatry, Medical University Plovdiv, since 2016.',
    ],
    qualifications: [
      'Lecturer in postgraduate courses in evolutionary psychology and psychiatry, sexology, integrative psychotherapy, psychiatry for psychologists, psychosomatics and crisis states.',
      'Work in the field Medicine, Psychology and Faith as part of the inter-university project OMNIA.',
    ],
    experience: [
      'State Psychiatric Hospital Pazardzhik',
      'AGPSPP Filipopolis, Plovdiv',
      'Department of Psychiatry and Medical Psychology, Medical University Plovdiv',
    ],
    topics: [
      'Addictions',
      'Anxiety disorders',
      'Mood disorders',
      'Psychopharmacology',
      'Cross-cultural psychiatry',
      'Cognitive-behavioural therapy',
      'Existential and humanistic psychology',
    ],
    memberships: [
      'Bulgarian Medical Association',
      'Bulgarian Psychiatric Association',
      'College of Private Psychiatry',
      'European College of Neuropsychopharmacology',
      'Youth Scientific Society Asklepiy',
    ],
    is_featured: true,
    is_published: true,
    sort_order: 3,
  },
  {
    id: 'julia-petrova',
    slug: 'julia-petrova',
    name: 'Julia Petrova',
    title: 'Child psychologist and psychotherapist',
    city: 'Plovdiv',
    image_url: '/images/trainers/julia-petrova.webp',
    specialties: ['Child psychology', 'DIR Floortime', 'Neurodevelopment', 'Work with children and adolescents'],
    badges: ['DIR Floortime', 'child psychologist', 'ICDL'],
    short_bio:
      'Child psychologist and psychotherapist trained and certified in DIR Floortime for children and adolescents with neurodevelopmental and emotional challenges.',
    bio: [
      'Julia Petrova is a child psychologist and psychotherapist. She works with children and adolescents and has completed trainings in neuropsychological development, therapeutic methods for autism spectrum disorder, music therapy and developmental psychotherapy.',
      'Since 2018 she has worked as a child psychologist in a medical center in Plovdiv.',
    ],
    education: [
      'Bachelor degree in psychology, Plovdiv University Paisii Hilendarski, 2017.',
      'Training and certification in the DIR Floortime model for children and adolescents, 2019 - 2021.',
      'International Training Leader Expert in DIR Floortime, ICDL, 2022.',
    ],
    qualifications: [
      'DIR Floortime therapist and trainer.',
      'Work with children and adolescents.',
      'Courses and trainings in neuropsychological development and therapeutic methods for ASD.',
    ],
    experience: ['CNST Olga Skobeleva, 2014 - 2015.', 'Child psychologist in a medical center, Plovdiv, since 2018.'],
    topics: ['Child development', 'Neurodevelopmental challenges', 'Emotional difficulties', 'DIR Floortime'],
    memberships: ['BAIMP'],
    is_featured: true,
    is_published: true,
    sort_order: 6,
  },
  {
    id: 'gergana-buhova',
    slug: 'gergana-buhova',
    name: 'Gergana Buhova',
    title: 'Psychologist and psychotherapist',
    city: 'Sofia',
    image_url: '/images/trainers/gergana-buhova.webp',
    specialties: ['EMDR', 'Art therapy', 'Sandplay therapy', 'Fairy-tale therapy', 'NLP'],
    badges: ['10+ years of experience', 'EMDR', 'art therapy', 'analytical orientation'],
    short_bio:
      'Psychologist in Sofia with more than 10 years of experience, individual psychotherapeutic work with adults and children, and group activities for emotional intelligence.',
    bio: [
      'Gergana Buhova is a psychologist in Sofia with more than 10 years of experience. She applies a broad range of methods in her practice: EMDR therapy, art therapy, sandplay therapy, fairy-tale therapy, therapeutic writing, NLP techniques and others.',
      'She provides individual psychological counselling and psychotherapeutic work with adults and children. She conducts group work with children to develop emotional intelligence through stories and art therapy, as well as child development assessment through projective tests.',
      'She currently develops her private individual practice in Sofia at the psychological counselling and psychotherapy office Inside Out. She speaks English.',
    ],
    education: [
      'Master training in Organizational and Social Psychology, 2014.',
      'Postgraduate professional qualification in Counselling Psychology.',
    ],
    qualifications: [
      'Member of the Bulgarian Society of Analytical Psychology, C. G. Jung.',
      'Training as an EMDR therapy and art therapy consultant.',
      'Trainer in group-dynamic psychotraining and Assessment and Development Center specialist.',
      'NLP practitioner, fairy-tale therapy, sandplay therapy, therapeutic writing.',
    ],
    experience: ['Private practice Inside Out, Sofia', 'Group activities for children'],
    topics: [
      'Anxiety',
      'Depressive disorders',
      'Self-esteem',
      'Emotional intelligence',
      'Child development',
      'Parent-child relationships',
    ],
    memberships: ['Bulgarian Society of Analytical Psychology', 'BAIMP'],
    is_featured: false,
    is_published: true,
    sort_order: 10,
  },
  {
    id: 'stefania-gabrovska-shirova',
    slug: 'stefania-gabrovska-shirova',
    name: 'Stefania Gabrovska-Shirova',
    title: 'Psychologist and psychotherapist',
    city: 'Plovdiv',
    image_url: '/images/trainers/stefania-gabrovska-shirova.webp',
    specialties: ['Psychotherapy', 'Psychological counselling', 'Work with adults'],
    badges: ['psychologist', 'psychotherapist', 'BAIMP'],
    short_bio:
      'Psychologist and psychotherapist with a professional focus on psychological counselling, personal development and supportive therapeutic work.',
    bio: [
      'Stefania Gabrovska-Shirova is a psychologist and psychotherapist. Her work is focused on psychological counselling, personal development and supportive therapeutic work with adults.',
      'She participates in professional training formats and develops her practice within the intermodal perspective and the professional community of BAIMP.',
    ],
    education: ['Higher education in psychology.', 'Additional training in psychotherapy and psychological counselling.'],
    qualifications: ['Psychotherapeutic training.', 'Participation in professional seminars and supervision formats.'],
    experience: ['Psychological counselling', 'Psychotherapeutic practice'],
    topics: ['Personal development', 'Emotional difficulties', 'Relationships', 'Self-awareness'],
    memberships: ['BAIMP'],
    is_featured: false,
    is_published: true,
    sort_order: 9,
  },
  {
    id: 'viktoria-dyakova',
    slug: 'viktoria-dyakova',
    name: 'Viktoria Dyakova',
    title: 'Psychologist and psychotherapist',
    city: 'Plovdiv',
    image_url: '/images/trainers/viktoria-dyakova.webp',
    specialties: ['Psychology', 'Psychotherapy', 'Counselling'],
    badges: ['psychologist', 'psychotherapist', 'BAIMP'],
    short_bio:
      'Psychologist and psychotherapist with interests in counselling work, emotional support and personal development.',
    bio: [
      'Viktoria Dyakova is a psychologist and psychotherapist. She works in the field of counselling, emotional support and personal development.',
      'Her professional interests include the integration of different therapeutic methods according to the needs of the client and the context of the work.',
    ],
    education: ['Education in psychology.', 'Training in psychotherapy and counselling practice.'],
    qualifications: ['Psychotherapeutic training.', 'Professional development through seminars and supervision.'],
    experience: ['Psychological counselling', 'Psychotherapeutic work'],
    topics: ['Emotional difficulties', 'Anxiety', 'Personal resources', 'Relationships'],
    memberships: ['BAIMP'],
    is_featured: false,
    is_published: true,
    sort_order: 12,
  },
  {
    id: 'ivanka-djoneva',
    slug: 'ivanka-djoneva',
    name: 'Ivanka Djoneva',
    title: 'Psychologist',
    city: 'Plovdiv',
    image_url: '/images/trainers/ivanka-djoneva.webp',
    specialties: ['Psychology', 'Counselling', 'Personal development'],
    badges: ['psychologist', 'BAIMP'],
    short_bio:
      'Psychologist with professional interests in counselling, personal development and supportive work with clients.',
    bio: [
      'Ivanka Djoneva is a psychologist with interests in counselling, personal development and supportive work with clients.',
      'She participates in professional formats connected with psychological practice, training and the intermodal approach.',
    ],
    education: ['Education in psychology.', 'Additional professional training in counselling and applied psychology.'],
    qualifications: ['Professional development in psychological counselling.', 'Participation in training and supervision formats.'],
    experience: ['Psychological support', 'Counselling work'],
    topics: ['Personal development', 'Emotional support', 'Adaptation', 'Self-awareness'],
    memberships: ['BAIMP'],
    is_featured: false,
    is_published: true,
    sort_order: 13,
  },
  {
    id: 'stanimira-peykova',
    slug: 'stanimira-peykova',
    name: 'Stanimira Peykova',
    title: 'Psychologist and psychotherapist',
    city: 'Bulgaria',
    image_url: '/images/trainers/stanimira-peykova.webp',
    specialties: [
      'Positive psychology',
      'Counselling psychology',
      'Hypnotherapy',
      'NLP',
      'Intermodal psychotherapy',
    ],
    badges: ['psychologist', 'psychotherapist', 'hypnotherapy', 'NLP', 'BAIMP'],
    short_bio:
      'Academically qualified psychologist and psychotherapist with more than three years of experience in individual and group counselling.',
    bio: [
      'Stanimira Peykova is an academically qualified psychologist and psychotherapist with more than three years of experience in individual and group counselling. Her professional focus includes positive psychology, NLP, hypnotherapy and counselling psychology.',
      'She is the author and facilitator of successful workshops held across Bulgaria on the topic Healthy Personal Boundaries and Confidence.',
      'In her private practice she provides online and in-person sessions focused on anxiety, stress, confidence, parenting and motherhood. Her work also covers the mother\'s postpartum period and family dynamics.',
      'She organizes group therapy, training sessions, workshops and seminars, and lectures on maternal psychology and family dynamics. She also participates as a guest lecturer at public and corporate events and contributes to programmes related to personal development and mental health.',
    ],
    education: [
      'Master degree in Positive Psychology, Plovdiv University Paisii Hilendarski, 2018.',
      'Bachelor degree in Political Science, Plovdiv University Paisii Hilendarski, 2015.',
    ],
    qualifications: [
      'NLP training and certification with NLP Bulgaria, certified by the American school of Dr. Richard Bandler, 2023.',
      'Hypnotherapy training and certification with the Bulgarian Association of Hypnosis, 2024.',
      'BAIMP training and certification in Clusters and Cross-cultural Perspectives on Personality Disorders with trainer Dr. Asen Beshkov, 2024.',
      'Psychodrama modalities, 2016.',
      'Intermodal psychotherapy training with the Bulgarian Association for Intermodal Psychotherapy, from 2025 to the present, with trainers Assoc. Prof. Boris Tilov and Bilyana Necheva.',
      'Skilled in conducting individual and group therapy.',
      'Strong facilitation skills with both small and large groups.',
      'Presentation and facilitation skills for lectures and professional training.',
    ],
    experience: [
      'Private practice as a psychologist and psychotherapist.',
      'Online and in-person sessions, from 2022 to the present.',
      'Individual counselling focused on anxiety, stress, confidence, parenting and motherhood.',
      'Group therapy, training sessions, workshops and seminars.',
      'Lecturer and facilitator at public and corporate events.',
    ],
    topics: [
      'Anxiety and stress',
      'Confidence and healthy personal boundaries',
      'Parenting and motherhood',
      'Postpartum adjustment',
      'Family dynamics',
      'Individual and group therapy',
      'Cognitive-behavioural therapy',
      'Positive psychotherapy',
      'Schema therapy',
      'Hypnotherapy',
      'EMDR',
      'NLP',
    ],
    memberships: [
      'Bulgarian Association for Intermodal Psychotherapy, from 2024 to the present.',
      'Participant in conferences and events in applied psychology and psychotherapy.',
    ],
    is_featured: false,
    is_published: true,
    sort_order: 18,
  },
  {
    id: 'chudomir-delchev',
    slug: 'chudomir-delchev',
    name: 'Chudomir Delchev',
    title: 'Psychologist and psychotherapist',
    city: 'Bulgaria',
    image_url: '/images/trainers/chudomir-delchev.webp',
    specialties: [
      'Transactional analysis',
      'Interpersonal relationships',
      'Conflict management',
      'Emotional intelligence',
      'Organizational consulting',
    ],
    badges: ['psychologist', 'psychotherapist', 'transactional analysis', '20 years in IT'],
    short_bio:
      'Psychologist and psychotherapist whose professional path includes 20 years in the IT sector and work with individuals, groups and organizations since 2019.',
    bio: [
      'Chudomir Delchev\'s professional path includes 20 years in the IT sector as an engineer, team leader, organizational consultant and entrepreneur. Since 2019 he has developed his practice as a psychologist, working with individual clients, groups and organizations and leading educational seminars in psychology and interpersonal dynamics.',
      'His work focuses on building authentic interpersonal relationships, developing shared reflection and increasing self-awareness.',
      'His primary methodological approach is transactional analysis. He integrates elements of cognitive-behavioural therapy, EMDR, gestalt therapy, art therapy and psychodrama, drawing inspiration from the principles of Carl Rogers, Irvin Yalom and Richard Erskine.',
      'He regularly conducts seminars and training on interpersonal relationships, conflict management and emotional intelligence through the perspective of transactional analysis.',
    ],
    education: [
      'Master degree in Psychology, Plovdiv University Paisii Hilendarski.',
    ],
    qualifications: [
      'Completed the main four-year training programme of the Bulgarian Association for Transactional Analysis.',
      'Additional qualification in psychosomatics from Medical University Plovdiv.',
      'Integrates cognitive-behavioural therapy, EMDR, gestalt therapy, art therapy and psychodrama.',
    ],
    experience: [
      '20 years in the IT sector as an engineer, team leader, organizational consultant and entrepreneur.',
      'Psychological work with individual clients, groups and organizations since 2019.',
      'Educational seminars in psychology and interpersonal dynamics.',
    ],
    topics: [
      'Authentic interpersonal relationships',
      'Shared reflection',
      'Self-awareness',
      'Transactional analysis',
      'Conflict management',
      'Emotional intelligence',
      'Interpersonal dynamics',
    ],
    memberships: [],
    is_featured: false,
    is_published: true,
    sort_order: 17,
  },
]

export const trainers = [...originalTrainers, ...documentTrainers]
export const trainerIds = trainers.map((trainer) => trainer.id)

export const courses = [
  {
    id: 'psychological-counselling',
    slug: 'introduction-to-psychological-counselling',
    title: 'Introduction to Psychological Counselling',
    eyebrow: 'Practical training course',
    duration: '15 months',
    format: 'two consecutive levels',
    certificate: 'Certificate issued by BAIMP',
    image_url: '/images/baimp-logo.webp',
    summary:
      'A certified programme designed for psychologists, psychology students, educators, social and medical specialists.',
    description: [
      'The programme is structured in two consecutive levels: a 4-month introductory stage and an 11-month counselling stage, with the option of certification after each part.',
      'Completion of the full programme documents the acquired counselling knowledge and practical skills.',
      'The training combines theory, practice and supervision in an environment that supports personal growth and professional competence.',
    ],
    topics: [
      'Introduction to counselling practice and basic counselling skills',
      'Applied aspects of psychological counselling',
      'Psychological assessment in counselling practice',
      'Psychopathology and psychosomatics',
      'Psychodynamic perspective',
      'Cognitive-behavioural therapy and schema therapy',
      'Humanistic and behavioural approaches',
      'Working with groups and group dynamics',
      'Practice with real clients under supervision',
      'Intervision and case discussion',
    ],
    is_featured: true,
    is_published: true,
    sort_order: 1,
  },
  {
    id: 'psychotherapy-skills',
    slug: 'essentials-of-intermodal-psychotherapy',
    title: 'Essentials of Intermodal Psychotherapy',
    eyebrow: 'Practical training course',
    duration: '7 months',
    format: 'practical training',
    certificate: 'Certificate issued by BAIMP',
    image_url: '/images/baimp-logo.webp',
    summary:
      'A certified programme for psychologists, psychotherapists, consultants, educators, medical specialists and professionals in helping professions.',
    description: [
      'The training Essentials of Intermodal Psychotherapy is a certified programme delivered by BAIMP.',
      'The programme offers an in-depth immersion in the main modalities of psychotherapy, united in an intermodal approach that combines theory and practice.',
      'It develops skills for flexibility, awareness and creative integration of therapeutic methods according to the individual needs of the client.',
    ],
    topics: [
      'Therapeutic approaches when working with children',
      'Transactional analysis',
      'Existential and humanistic approach',
      'Behavioural techniques',
      'Brief therapy and narrative approaches',
      'Specialized CBT skills',
      'Dialectical behaviour therapy and psychoeducation',
    ],
    is_featured: true,
    is_published: true,
    sort_order: 2,
  },
  {
    id: 'psychopathology-personality',
    slug: 'general-psychopathology-and-personality-disorders',
    title: 'General Psychopathology and Personality Disorders',
    eyebrow: 'Practical training course',
    duration: '1 weekend',
    format: 'intensive two-day course',
    certificate: 'Certificate issued by BAIMP',
    image_url: '/images/baimp-logo.webp',
    summary:
      'An intensive two-day specialized course for psychologists, psychotherapists and specialists working with mental vulnerability and personality difficulties.',
    description: [
      'The programme offers an in-depth review of clinical psychopathology, diagnostic categories and contemporary models for understanding personality disorders.',
      'Participants develop practical skills for recognizing symptoms, formulating cases and building an appropriate therapeutic plan.',
      'The training includes lectures and interactive work, real clinical examples, role-play exercises and professional discussion.',
    ],
    topics: [
      'Day 1: general psychopathology, diagnostic categories and the relationship between mental processes and behaviour',
      'Day 2: personality disorders, classifications, clinical manifestations and approaches to work',
    ],
    is_featured: true,
    is_published: true,
    sort_order: 3,
  },
]

export const news = []

export const retiredPartnerIds = [['e', 'a', 'a', 'p'].join('')]

export const partners = [
  {
    id: 'baimp-community',
    name: 'BAIMP professional community',
    type: 'Trainers, psychologists and psychotherapists',
    description:
      'A community of specialists who develop the intermodal approach through trainings, seminars and professional support.',
    website: 'https://baimp.org',
    is_published: true,
    sort_order: 1,
  },
]

export const certificates = [
  {
    id: 'certificate-counselling',
    title: 'Introduction to Psychological Counselling',
    issuer: 'Bulgarian Association for Intermodal Psychotherapy',
    valid_until: '21.11.2026',
    image_url: '/images/baimp-logo.webp',
    is_published: true,
    sort_order: 1,
  },
  {
    id: 'certificate-psychotherapy',
    title: 'Essentials of Intermodal Psychotherapy',
    issuer: 'Bulgarian Association for Intermodal Psychotherapy',
    valid_until: '10.04.2028',
    image_url: '/images/baimp-logo.webp',
    is_published: true,
    sort_order: 2,
  },
  {
    id: 'certificate-psychopathology',
    title: 'General Psychopathology and Personality Disorders',
    issuer: 'Bulgarian Association for Intermodal Psychotherapy',
    valid_until: '07.07.2028',
    image_url: '/images/baimp-logo.webp',
    is_published: true,
    sort_order: 3,
  },
]

export const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Training participant',
    role: 'Psychologist',
    quote:
      'The training was structured, calm and practical. The most valuable part was the combination of theory, real cases and space for professional discussion.',
    is_published: true,
    sort_order: 1,
  },
  {
    id: 'testimonial-2',
    name: 'Seminar participant',
    role: 'Specialist in a helping profession',
    quote:
      'The environment was supportive and professional, and the materials helped me see therapeutic work through a broader and more integrative perspective.',
    is_published: true,
    sort_order: 2,
  },
]

export const faqItems = [
  {
    question: 'Who can apply for the trainings?',
    answer:
      'The programmes are intended for psychologists, psychology students, psychotherapists, consultants, educators, social and medical specialists, as well as professionals in helping professions.',
  },
  {
    question: 'Is a certificate issued?',
    answer:
      'Yes. After successful completion, participants receive a certificate issued by the Bulgarian Association for Intermodal Psychotherapy according to the specific programme.',
  },
  {
    question: 'Can I apply online?',
    answer:
      'Yes. The online application form sends a request to the administrators. When Supabase is configured, the request is saved in the bookings table and is visible in the admin panel.',
  },
  {
    question: 'Where do meetings and trainings take place?',
    answer:
      'The BAIMP contact address is in Plovdiv, Flavia Business Park. Specific training locations and meeting details are provided individually.',
  },
]

export const whyChooseItems = [
  {
    title: 'Intermodal approach',
    text: 'Combining therapeutic modalities according to the individual needs of the client and the professional context.',
  },
  {
    title: 'Trainers with real practice',
    text: 'A team of psychologists, psychotherapists, psychiatrists and lecturers with clinical, counselling and training experience.',
  },
  {
    title: 'Professional framework',
    text: '80+ trained specialists',
  },
]

export const emptyBookings = []

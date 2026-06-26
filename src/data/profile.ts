// Single source of truth for identity, headline, metrics and links.
// Language-neutral data lives in `data`; translatable prose lives in `localized`.
// `getProfile(locale)` assembles the localized view the pages consume.

export type Locale = 'en' | 'es';

// ── Language-neutral data (never translated) ──────────────────────────────
const data = {
  name: 'Valter Nunez',
  links: {
    email: 'valter.nunez@outlook.com',
    github: 'https://github.com/valternunez',
    githubHandle: 'valternunez',
    linkedin: 'https://www.linkedin.com/in/valternunez',
  },
  // Per-locale CV download.
  cv: {
    en: '/cv/Valter-Nunez-CV.pdf',
    es: '/cv/Valter-Nunez-CV-ES.pdf',
  } as Record<Locale, string>,

  // Numbers are single-source so EN/ES can never drift. Labels/details are localized by id.
  metrics: [
    { id: 'erp', value: -83, unit: '%', format: 'signed-percent' },
    { id: 'shipping', value: -78, unit: '%', format: 'signed-percent' },
    { id: 'downtime', value: -91, unit: '%', format: 'signed-percent' },
  ],

  // School names + periods are neutral; degree + note are localized by id.
  education: [
    { id: 'lse', school: 'London School of Economics (LSE)', period: '2026 – 2027', highlight: true },
    { id: 'itesm', school: 'Tecnológico de Monterrey (ITESM)', period: '2016 – 2021', highlight: false },
    { id: 'rmit', school: 'RMIT University, Melbourne', period: '2019', highlight: false },
    { id: 'ibm', school: 'IBM (Coursera)', period: '2026', highlight: false },
  ],

  // Levels are neutral codes; language names are localized by id.
  languages: [
    { id: 'es', level: 'Native' },
    { id: 'en', level: 'C2' },
    { id: 'de', level: 'A2' },
    { id: 'it', level: 'A1' },
  ],
} as const;

// ── Translatable prose, per locale ────────────────────────────────────────
const localized = {
  en: {
    role: 'Backend & distributed-systems engineer',
    tagline:
      'Backend and distributed-systems engineer. Five years on high-traffic e-commerce; ' +
      'now studying data science at LSE.',
    seoTitle: 'Valter Nunez — Backend & Distributed Systems Engineer',
    seoDescription:
      'Backend and distributed-systems engineer with measured impact on high-traffic e-commerce: ' +
      'decoupled 83% of revenue-critical sales flows from the ERP and cut shipping spend 78%. ' +
      'MSc Data Science student at LSE, London.',
    location: 'London, UK',
    status: { label: 'MSc Data Science · LSE, London', short: 'LSE Data Science · London' },
    availability:
      'In London for the LSE MSc. Eligible for the UK Graduate visa (18 months, no sponsorship ' +
      'required); seeking Skilled Worker sponsorship to stay long-term. ' +
      'Open to roles across the UK/EU and remote.',
    availabilityShort: 'Open to roles · UK/EU + remote',
    metrics: {
      erp: { label: 'ERP dependency', detail: 'Share of revenue-critical sales flows decoupled from synchronous ERP calls.' },
      shipping: { label: 'Shipping spend', detail: 'Automated least-cost routing across carriers (≈ $500K USD/yr).' },
      downtime: { label: 'Downtime (projected)', detail: 'Designed-for reduction in sales-blocking downtime during ERP outages.' },
    },
    skills: [
      { group: 'Backend & APIs', items: ['Python', 'FastAPI', 'Django', 'TypeScript', 'GraphQL', 'Frappe / ERPNext'] },
      { group: 'Data & messaging', items: ['PostgreSQL', 'Redis', 'RabbitMQ', 'MongoDB', 'Celery', 'SQL'] },
      { group: 'Data science', items: ['pandas', 'NumPy', 'scikit-learn', 'PyMC', 'Bayesian inference', 'D3.js', 'Quarto'] },
      { group: 'AI / LLM engineering', items: ['LLM integration (Gemini)', 'Usage metering & rate-limiting', 'Structured output', 'Agent-orchestrated development', 'Git-worktree workflows'] },
      { group: 'Practices & infra', items: ['Event-driven design', 'Microservices', 'Docker', 'Grafana', 'GitHub Actions', 'Testing'] },
    ],
    education: {
      lse: { degree: 'MSc Data Science', note: 'In progress, London.' },
      itesm: { degree: 'B.S. Computer Science & Technology', note: 'Average 90/100 (3.7 GPA).' },
      rmit: { degree: 'Semester abroad', note: 'Average 94/100.' },
      ibm: { degree: 'Data Science Professional Certificate', note: 'In progress.' },
    },
    languages: { es: 'Spanish', en: 'English', de: 'German', it: 'Italian' },
  },

  es: {
    role: 'Ingeniero backend y de sistemas distribuidos',
    tagline:
      'Ingeniero backend y de sistemas distribuidos. Cinco años en e-commerce de alto tráfico; ' +
      'ahora estudiando ciencia de datos en LSE.',
    seoTitle: 'Valter Nunez — Ingeniero Backend y de Sistemas Distribuidos',
    seoDescription:
      'Ingeniero backend y de sistemas distribuidos con impacto medible en e-commerce de alto tráfico: ' +
      'desacoplé el 83% de los flujos de venta críticos del ERP y reduje el gasto de envíos un 78%. ' +
      'Estudiante de la Maestría en Ciencia de Datos en LSE, Londres.',
    location: 'Londres, Reino Unido',
    status: { label: 'Maestría en Ciencia de Datos · LSE, Londres', short: 'Ciencia de Datos LSE · Londres' },
    availability:
      'En Londres por la maestría en LSE. Elegible para la Graduate visa del Reino Unido ' +
      '(18 meses, sin necesidad de patrocinio); en busca de patrocinio Skilled Worker para ' +
      'permanecer a largo plazo. Abierto a roles en Reino Unido/UE y remotos.',
    availabilityShort: 'Disponible · Reino Unido/UE + remoto',
    metrics: {
      erp: { label: 'Dependencia del ERP', detail: 'Proporción de flujos de venta críticos desacoplados de llamadas síncronas al ERP.' },
      shipping: { label: 'Gasto de envíos', detail: 'Enrutamiento automático al menor costo entre paqueterías (≈ $500K USD/año).' },
      downtime: { label: 'Caídas (proyectado)', detail: 'Reducción de diseño en el tiempo de caída que bloquea ventas durante fallas del ERP.' },
    },
    skills: [
      { group: 'Backend y APIs', items: ['Python', 'FastAPI', 'Django', 'TypeScript', 'GraphQL', 'Frappe / ERPNext'] },
      { group: 'Datos y mensajería', items: ['PostgreSQL', 'Redis', 'RabbitMQ', 'MongoDB', 'Celery', 'SQL'] },
      { group: 'Ciencia de datos', items: ['pandas', 'NumPy', 'scikit-learn', 'PyMC', 'Inferencia bayesiana', 'D3.js', 'Quarto'] },
      { group: 'Ingeniería de IA / LLM', items: ['Integración de LLM (Gemini)', 'Medición de uso y límites', 'Salida estructurada', 'Desarrollo orquestado con agentes', 'Flujos con git worktrees'] },
      { group: 'Prácticas e infraestructura', items: ['Diseño orientado a eventos', 'Microservicios', 'Docker', 'Grafana', 'GitHub Actions', 'Pruebas'] },
    ],
    education: {
      lse: { degree: 'Maestría en Ciencia de Datos', note: 'En curso, Londres.' },
      itesm: { degree: 'Ing. en Ciencias y Tecnologías Computacionales', note: 'Promedio 90/100 (3.7 GPA).' },
      rmit: { degree: 'Semestre de intercambio', note: 'Promedio 94/100.' },
      ibm: { degree: 'Certificado Profesional en Ciencia de Datos', note: 'En curso.' },
    },
    languages: { es: 'Español', en: 'Inglés', de: 'Alemán', it: 'Italiano' },
  },
} as const;

export interface Metric {
  id: string;
  value: number;
  unit: string;
  format: string;
  label: string;
  detail: string;
}

export function getProfile(locale: Locale) {
  const L = localized[locale];
  return {
    name: data.name,
    links: data.links,
    cv: data.cv[locale],
    role: L.role,
    tagline: L.tagline,
    seoTitle: L.seoTitle,
    seoDescription: L.seoDescription,
    location: L.location,
    status: L.status,
    availability: L.availability,
    availabilityShort: L.availabilityShort,
    metrics: data.metrics.map((m) => ({
      ...m,
      label: L.metrics[m.id as keyof typeof L.metrics].label,
      detail: L.metrics[m.id as keyof typeof L.metrics].detail,
    })) as Metric[],
    skills: L.skills,
    education: data.education.map((e) => ({
      school: e.school,
      period: e.period,
      highlight: e.highlight,
      degree: L.education[e.id as keyof typeof L.education].degree,
      note: L.education[e.id as keyof typeof L.education].note,
    })),
    languages: data.languages.map((l) => ({
      name: L.languages[l.id as keyof typeof L.languages],
      level: l.level,
    })),
  };
}

export type Profile = ReturnType<typeof getProfile>;

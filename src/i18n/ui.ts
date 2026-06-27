// UI strings for the page template (everything not in profile/content).
// Keyed by locale; `useTranslations(locale)` returns the right bundle.
//
// Voice: dry & wry — understated, confident through restraint, at most one
// knowing aside per area. No slogans, no hustle, no "I build X that does Y".
// Functional labels (nav, contact links, skip link, card buttons) stay plain.
import type { Locale } from '../data/profile';

export const languages: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

const ui = {
  en: {
    nav: { work: 'Work', projects: 'Projects', experience: 'Experience', about: 'About', contact: 'Contact' },
    hero: {
      ctaCv: 'Download CV ↓',
      ctaWork: 'See the work',
    },
    sections: {
      work: { eyebrow: 'Work', title: 'Things that shipped.' },
      projects: { eyebrow: 'On my own time', title: 'Side projects, mostly.' },
      experience: { eyebrow: 'Experience', title: 'Where I’ve worked.' },
      about: { eyebrow: 'About', title: 'The particulars.' },
      contact: { eyebrow: 'Contact', title: 'Say hello.' },
    },
    flagship: 'Headline',
    alsoWorth: 'Also around',
    contactLinks: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', cv: 'CV (PDF)' },
    footer: { built: 'Hand-built with Astro. No templates were harmed.' },
    langLabel: 'Language',
    card: {
      kinds: { 'data-science': 'Data science', engineering: 'Engineering', 'full-stack': 'Full-stack', academic: 'Academic' } as Record<string, string>,
      live: 'Live ↗',
      code: 'Code ↗',
      npm: 'npm ↗',
      privateRepo: 'Private repo',
      stackLabel: 'Tech stack',
    },
    skipLink: 'Skip to content',
  },
  es: {
    nav: { work: 'Trabajo', projects: 'Proyectos', experience: 'Experiencia', about: 'Sobre mí', contact: 'Contacto' },
    hero: {
      ctaCv: 'Descargar CV ↓',
      ctaWork: 'Ver el trabajo',
    },
    sections: {
      work: { eyebrow: 'Trabajo', title: 'Cosas que salieron a producción.' },
      projects: { eyebrow: 'Por mi cuenta', title: 'Proyectos personales, en su mayoría.' },
      experience: { eyebrow: 'Experiencia', title: 'Dónde he trabajado.' },
      about: { eyebrow: 'Sobre mí', title: 'Los detalles.' },
      contact: { eyebrow: 'Contacto', title: 'Saluda.' },
    },
    flagship: 'Lo principal',
    alsoWorth: 'También por aquí',
    contactLinks: { email: 'Correo', linkedin: 'LinkedIn', github: 'GitHub', cv: 'CV (PDF)' },
    footer: { built: 'Hecho a mano con Astro. Ninguna plantilla salió lastimada.' },
    langLabel: 'Idioma',
    card: {
      kinds: { 'data-science': 'Ciencia de datos', engineering: 'Ingeniería', 'full-stack': 'Full-stack', academic: 'Académico' } as Record<string, string>,
      live: 'Ver ↗',
      code: 'Código ↗',
      npm: 'npm ↗',
      privateRepo: 'Repo privado',
      stackLabel: 'Tecnologías',
    },
    skipLink: 'Saltar al contenido',
  },
} as const;

export type UI = (typeof ui)['en'];

export function useTranslations(locale: Locale): UI {
  return ui[locale];
}

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Work experience (timeline). Body holds the prose / bullets.
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    lang: z.enum(['en', 'es']).default('en'),
    company: z.string(),
    role: z.string(),
    location: z.string().optional(),
    start: z.string(),
    end: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

// Deep-dive case studies (OZ, Shipment Middleware, Nexus). Body = narrative.
const casestudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casestudies' }),
  schema: z.object({
    lang: z.enum(['en', 'es']).default('en'),
    title: z.string(),
    org: z.string(),
    role: z.string().optional(),
    period: z.string().optional(),
    blurb: z.string(),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    stack: z.array(z.string()).default([]),
    confidential: z.boolean().default(false),
    flagship: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// Curated project cards (public repos + private described). Not a raw API dump.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    lang: z.enum(['en', 'es']).default('en'),
    title: z.string(),
    blurb: z.string(),
    year: z.string().optional(),
    kind: z.enum(['data-science', 'engineering', 'full-stack', 'academic']),
    stack: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    isPrivate: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { experience, casestudies, projects };

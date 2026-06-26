// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://valternunez.github.io',
  // User/organization page → served from the domain root, so no base path.
  trailingSlash: 'ignore',
  // English at /, Spanish at /es (no /en prefix for the default locale).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
  build: {
    // Emit clean URLs: /lab/ instead of /lab.html
    format: 'directory',
    // Inline small stylesheets to cut render-blocking requests.
    inlineStylesheets: 'auto',
  },
});

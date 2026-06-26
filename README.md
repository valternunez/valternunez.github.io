# valternunez.github.io

Personal CV / portfolio site for **Valter Nunez** — backend & distributed-systems engineer,
incoming MSc Data Science @ LSE (2026).

Live at **https://valternunez.github.io**.

## Two versions, one content layer

The site ships in two deliberately distinct designs that read from the **same** content:

| Route   | Design                | Feel                                            |
| ------- | --------------------- | ----------------------------------------------- |
| `/`     | Editorial / Swiss     | Light, serif display, strict grid, one accent   |
| `/lab`  | Technical / data-viz  | Dark, mono accents, animated impact chart       |

A switcher in the header links between them. Content is authored once in
`src/content/` + `src/data/profile.ts`, so there's no duplication.

## Stack

- **[Astro](https://astro.build)** — static output, ships ~zero JS framework.
- Self-hosted variable fonts (Fontsource): Fraunces, Inter Tight, JetBrains Mono.
- Hand-written CSS with design tokens (`src/styles/`). No UI kit.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321  (/ and /lab)
npm run build      # static site → dist/
npm run preview    # preview the production build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with the official
`withastro/action` and publishes to GitHub Pages. In the repo: **Settings → Pages → Source =
GitHub Actions** (one-time).

## Content map

- `src/data/profile.ts` — identity, headline, metrics, links, skills, education, languages.
- `src/content/experience/` — work history.
- `src/content/casestudies/` — deep-dive work (OZ, Shipment Middleware, Nexus).
- `src/content/projects/` — curated project cards.
- `cv-src/` — the LaTeX source for the downloadable CV (see its README).
- `public/cv/Valter-Nunez-CV.pdf` — the served CV.

## Editing the CV

The CV lives in [`cv-src/`](cv-src/) as LaTeX (Overleaf-ready). After recompiling, copy the PDF to
`public/cv/Valter-Nunez-CV.pdf`.

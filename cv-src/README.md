# CV source

Five role-weighted 1-page variants sharing one preamble:

| File | Use for | Leads with |
|---|---|---|
| `Valter-Nunez-CV.tex` | **Master** — backend / big-tech / general | ZeBrands impact (OZ, shipping) |
| `Valter-Nunez-CV-DS.tex` | **Data Science / ML** roles | Quant foundation + the Bayesian projects |
| `Valter-Nunez-CV-Founding.tex` | **Startup / founding-engineer** roles | Solo-built Nexus + Laiter co-founder ownership |
| `Valter-Nunez-CV-AI.tex` | **AI / LLM-engineering** roles | In-product LLM integration (Gemini) + agent-orchestrated development |
| `Valter-Nunez-CV-ES.tex` | **Spanish-language** applications | Same as the master, in Spanish |

They share an identical preamble (fonts, colours, `\role`/`\skill` macros); only the subtitle,
summary, and section order/emphasis differ.

The PDFs the site serves (`public/cv/*.pdf`) are **generated from these sources by CI** — they are
not committed. `Valter-Nunez-CV.pdf` is the master and is what the site's download button links to.

## Project roster per variant

The Ballon d'Or attention study was **removed from all five variants** (and from the website) — do
not reinstate it. Current project bullets:

| Variant | Projects |
|---|---|
| Master | Nexus · Refract · World Cup 2026 momentum |
| AI | Refract · Motu · World Cup 2026 momentum |
| DS | World Cup 2026 momentum · Insurance-claims regression (two bullets — Refract and Motu aren't data-science work) |
| Founding | Nexus (solo) · Refract · World Cup 2026 momentum |
| ES | Nexus · Refract · Momentum del Mundial 2026 |

## Compile

**You normally don't have to.** Editing a `.tex` and pushing to `main` is enough: the deploy
workflow ([.github/workflows/deploy.yml](../.github/workflows/deploy.yml)) compiles every
`cv-src/*.tex` with Tectonic into `public/cv/` before the site build, so the served PDFs always
match these sources. Download the run's `cv-pdfs` artifact to see the result without opening
the site.

To compile one locally anyway:

- **Overleaf:** upload the `.tex`, set the compiler to **XeLaTeX** (Menu → Compiler), *Recompile*.
- **[Tectonic](https://tectonic-typesetting.github.io/):** `tectonic -X compile Valter-Nunez-CV.tex`
- **MiKTeX (Windows):** `winget install MiKTeX.MiKTeX`, then `xelatex Valter-Nunez-CV.tex`

Local output lands in `cv-src/` and is gitignored, as is anything you drop in `public/cv/`.

---

## What changed vs. the old `CV-3.pdf` (and why)

The goal was a denser, results-first, FAANG-style 1-pager. Recruiters skim for *impact* in the first
few seconds — the rewrite optimizes for that.

1. **Metrics moved into the summary.** The three headline numbers (−83% / −91% / +$500K) now appear
   in the very first sentence a reader sees, not buried in bullet four.
2. **Cut duty-bullets.** Removed generic lines ("participation in architecture reviews",
   "collaboration with cross-functional teams") and folded the substance into stronger,
   outcome-led bullets. FAANG resumes are dense with *results*, light on *responsibilities*.
3. **Every bullet leads with a verb → impact → method.** "Architected OZ … cutting ERP dependency
   83% … (FastAPI, PostgreSQL, RabbitMQ, Redis)" instead of "Architecture, design and
   implementation of …".
4. **LSE surfaced prominently.** "Incoming MSc Data Science at LSE (2026)" is in the summary and at
   the top of Education — it signals trajectory and ambition.
5. **Added a Selected Projects block.** Nexus plus shipped, independent side projects show real
   ownership outside work — the kind of signal that gets a recruiter to click GitHub.
6. **ATS-safe formatting.** Single column, standard section names (Summary / Experience / Education /
   Skills), selectable text, no multi-column tables that break parsers, no icon fonts.
7. **One accent color, used sparingly** — matches the website, so CV + site read as one brand.

## Audit-driven honesty revisions (round 2)

A multi-agent audit flagged credibility risks; these were fixed with the real facts:

- **The "+$500K USD" and the −78% are the same win — don't double-count.** Dropped it as a separate
  headline metric; it now appears once as support for the −78% shipping figure ("≈ $500K USD/yr").
- **Downtime is projected, not measured.** Now "failure-mode analysis projected a 91% reduction in
  sales-blocking downtime" (not "cut 91%").
- **ERP −83% has a denominator.** "decoupled 83% of revenue-critical sales flows from synchronous ERP
  calls."
- **No title inflation.** Kept "Backend Engineer" (mid-level) and "mentored a junior backend
  developer" — honest; the architecture work carries the seniority signal, not a fake title.
- **Dropped "causal."** The Ballon d'Or work is observational → "Bayesian decomposition isolating an
  unexplained media-attention residual."
- **Nexus reframed** around scope + ownership ("sole architect … in active development, onboarding
  first tenants"), not vanity counts ("20+ modules / 400+ tests / 1 engineer").
- **Added** `github.com/valternunez` to the header, the UK Graduate-visa line (18 months), and the
  ATS-safer bold-label skills lines (no 2-column tabular).

## AI / LLM positioning — honesty guardrails

The CVs (and site/LinkedIn) surface two **real** AI assets from Nexus. Keep the wording exact so every
claim survives an interview:
- ✅ "Integrated an LLM (**Gemini**) with metering, rate-limits, fallback, structured output."
  ❌ NOT "integrated Claude" — the Anthropic path in Nexus is a stub; Gemini is the live provider.
- ✅ "**Orchestrated** a multi-agent dev workflow (Claude Code agents + git worktrees), human-in-the-loop."
  ❌ NOT "built an agent framework" and NOT autonomous agent-to-agent swarms — you use Claude Code's
  native affordances and coordinate the handoffs yourself.

### Worth considering next
- Fill in any absolute-scale anchors if you can defend them (orders/day, events/sec, store count).
- Publish one sanitized backend repo to back the distributed-systems claims (currently all proprietary
  or private).

## One page, enforced

Every variant must fit on a single page. CI checks this after compiling and **fails the deploy**
if any PDF is longer, so an overlong bullet can't ship silently. Locally, `npm run cv` builds all
five into `public/cv/` (needs Tectonic or MiKTeX).

The project bullets are the usual culprit: they sit at the bottom of a full page, so adding ~80
characters to one is enough to push the trailing "Languages" line onto page 2.

# CV source

Three role-weighted 1-page variants, all Overleaf-ready (upload the `.tex`, compile with **XeLaTeX**):

| File | Use for | Leads with |
|---|---|---|
| `Valter-Nunez-CV.tex` | **Master** — backend / big-tech / general | ZeBrands impact (OZ, shipping) |
| `Valter-Nunez-CV-DS.tex` | **Data Science / ML** roles | Quant foundation + the Bayesian/causal projects |
| `Valter-Nunez-CV-Founding.tex` | **Startup / founding-engineer** roles | Solo-built Nexus + Laiter co-founder ownership |
| `Valter-Nunez-CV-AI.tex` | **AI / LLM-engineering** roles | In-product LLM integration (Gemini) + agent-orchestrated development |

They share an identical preamble (fonts, colours, `\role`/`\skill` macros); only the subtitle,
summary, and section order/emphasis differ. Edit the relevant one in Overleaf.

`public/cv/Valter-Nunez-CV.pdf` is the master and is what the site downloads; the DS and founding
PDFs also live in `public/cv/`.

## Compile

- **Overleaf:** upload `Valter-Nunez-CV.tex`, set the compiler to **XeLaTeX** (Menu → Compiler),
  click *Recompile*.
- **Locally with [Tectonic](https://tectonic-typesetting.github.io/):**
  ```bash
  tectonic -X compile Valter-Nunez-CV.tex
  ```

## Updating the site's downloadable CV

The site serves `../public/cv/Valter-Nunez-CV.pdf`. After editing, recompile and copy the PDF over:

```bash
cp Valter-Nunez-CV.pdf ../public/cv/Valter-Nunez-CV.pdf
```

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
5. **Added a Selected Projects block.** Nexus + the two public data-science studies show shipped,
   independent work and a clear DS pivot — the kind of signal that gets a recruiter to click GitHub.
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

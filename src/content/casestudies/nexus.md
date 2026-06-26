---
title: Nexus — a multi-tenant platform for running real estate
org: Independent project
role: Sole architect & engineer
period: "2026, in active development"
blurb: >
  A multi-tenant, event-driven SaaS for condominium administration: an adjacency-list location
  model that maps any property layout, a double-entry finance engine, and Stripe Connect payments.
  Built solo, in active development, onboarding its first tenants.
metrics:
  - { value: "Finance engine", label: "ledgers · billing · payouts" }
  - { value: "Stripe Connect", label: "charges · SPEI · disputes" }
  - { value: "Multi-tenant", label: "per-condo RBAC + add-ons" }
stack: [FastAPI, SQLAlchemy 2 (async), PostgreSQL, Celery, RabbitMQ, Redis, "Stripe Connect", "Next.js 16", PWA]
confidential: false
flagship: true
order: 0
---

### What it is

**Nexus** is a multi-tenant SaaS backend for condominium and real-estate administration, in active
development and onboarding its first tenants. A hierarchical **adjacency-list node model** maps any
physical layout (vertical towers through sprawling neighborhoods), and a per-condo RBAC + add-on
system gates features per tenant.

### Why it's interesting

It's the full stack of a serious product, built and documented by one person:

- **Finance engine:** ledgers, charges, payments, recurring billing, late fees, credit balances,
  delinquency reporting, and a transparency report, with Celery doing the heavy lifting.
- **Payments:** Stripe Connect (Express, direct charges), SPEI/CLABE, saved cards, auto-pay with
  explicit consent and audit, disputes, and payout reconciliation.
- **Platform depth:** Redis read-through caching with targeted invalidation, a storage abstraction
  (local disk ↔ S3 with presigned URLs), audit-grade action trails, scoped API keys, WhatsApp
  integration, a PWA, and scheduled notifications across in-app, email, web-push, and mobile.
- **LLM integration:** an "Improve with AI" assist wired to a real LLM (Google Gemini), with the
  controls a production feature needs: usage metering, daily request/token limits, alert thresholds,
  a fallback model, graceful degradation, and schema-enforced structured output.
- **Engineering discipline:** async tests with isolated DB rollbacks, and a docs-as-code hub with
  per-module references and architecture decision logs.

### How it was built

One person, small-team scope, through leverage. I built Nexus with an **orchestrated multi-agent
development workflow**: a set of specialist Claude Code agents (implement, review, and nine
read-only auditors for security, data integrity, performance, and the rest), running in parallel
across isolated git worktrees and handing work off via API contracts and diffs. I'm the
human-in-the-loop architect; the agents are the leverage. Same instinct as the rest of my work:
design the system, instrument it, and let the tooling handle the repetitive part.

### The point

What I build when nobody's handing out tickets: a hard, real domain, end to end (architecture, data
model, payments, observability, and the docs), to a standard I'd defend in review.

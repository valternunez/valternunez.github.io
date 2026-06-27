---
title: OZ — selling while the ERP is down
org: ZeBrands
role: Co-architecture & implementation
period: "2025 – 2026"
blurb: >
  An event-driven resilience layer that keeps online and retail sales running during ERP
  outages. A single point of failure, turned into a fallback you can watch.
metrics:
  - { value: "−83%", label: "of sales flows ERP-decoupled" }
  - { value: "−91%", label: "downtime (projected)" }
  - { value: "~195", label: "stores live on OZ" }
stack: [FastAPI, PostgreSQL, RabbitMQ, Redis, Grafana]
confidential: true
flagship: false
order: 1
---

### The problem

Sales (online and in-store) were tightly coupled to the ERP. When the ERP stalled, revenue
stalled with it. Sales needed to keep flowing while the ERP recovered, without double-selling
inventory or dropping orders.

### The approach

I co-designed **OZ (Off-ZeCore)** with the team: an event-driven platform that mirrors the data sales actually need
and absorbs writes while the ERP is unavailable.

- **Clear contracts.** APIs, schemas, and event queues defined so each service can fail on its own.
  Orders and stock movements became events instead of synchronous ERP calls.
- **Buffer, then reconcile.** Redis and RabbitMQ hold and route work during an outage; the system
  reconciles cleanly when the ERP comes back.
- **Observable by default.** Grafana dashboards on queue depth, lag, and error rates make a degraded
  state something you can read rather than something you discover.

### The result

**83%** of revenue-critical sales flows were decoupled from synchronous ERP calls. Failure-mode
analysis projects a **91%** reduction in sales-blocking downtime. Sales carry on through ERP
incidents that used to stop them.

In production, OZ now backs in-store sales across **~195 stores in Mexico** (full rollout), with a
**Brazil** rollout underway. During the 2026 Hot Sale it carried **~MX$102M (≈ $5M USD)** in sales
over nine days, a major retail peak that ran ~16% ahead of the prior year. *(Proprietary system;
architecture described, no source shared.)*

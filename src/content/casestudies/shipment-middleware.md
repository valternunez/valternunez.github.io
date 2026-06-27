---
title: Shipment middleware — one interface, every carrier
org: ZeBrands
role: Co-design & development
period: "2024"
blurb: >
  A service that puts every shipping carrier behind one interface and routes each shipment to
  the cheapest viable option, automatically.
metrics:
  - { value: "−78%", label: "total shipping spend" }
  - { value: "$500K", label: "saved per year (USD)" }
stack: [Python, FastAPI, PostgreSQL]
confidential: true
flagship: false
order: 2
---

### The problem

Each carrier (FedEx, DHL, and others) had its own API, pricing, and quirks. Integrations were
duplicated, and shipments weren't consistently routed to the cheapest option.

### The approach

I co-designed and built the carrier middleware: **every carrier behind one contract**, with cost a
first-class routing decision.

- One interface over all carrier data and operations, so nothing else in the platform ever talks to
  a raw carrier API.
- Cost optimization at dispatch: each shipment is rated across carriers and routed to the cheapest
  one that meets the constraints.

### The result

Total shipping spend fell **~78%** (≈ **$500K USD/year** in direct savings), and the per-carrier
integration sprawl went with it. *(Proprietary system; architecture described, no source shared.)*

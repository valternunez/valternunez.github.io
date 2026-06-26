---
company: ZeBrands
role: Backend Developer
location: Mexico (remote)
start: "2021"
end: "2026"
summary: >
  Built and ran event-driven backend systems for high-traffic e-commerce:
  the resilience layer, the shipping spine, and the data services behind them.
highlights:
  - Architected the OZ (Off-ZeCore) platform, an event-driven system that keeps online and retail sales running through ERP outages, cutting ERP dependency 83% and projected downtime 91%.
  - Built shipment middleware consolidating carriers (FedEx, DHL) with automated cost optimization, reducing shipping costs 78% (≈ $500K USD/yr).
  - Moved review analytics into its own microservice, improving client-side data availability and query clarity.
  - Built and maintained ERP modules and APIs (Frappe, TypeScript, GraphQL) for reliability and deployment performance.
  - Stood up API logging, error tracking, and Grafana dashboards, cutting issue detection and response times.
  - Mentored new engineers and ran the internal architecture reviews and backend coding standards.
stack: [Python, FastAPI, PostgreSQL, RabbitMQ, Redis, GraphQL, Frappe, Grafana, Docker]
order: 1
---

At ZeBrands I owned backend systems where downtime is measured in lost sales. The through-line of
the work was **decoupling**: turning brittle, ERP-dependent flows into event-driven services that
degrade gracefully and say what they're doing.

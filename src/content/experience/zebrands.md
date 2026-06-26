---
company: ZeBrands
role: Backend Developer
location: Mexico (remote)
start: "2021"
end: "2026"
summary: >
  Five years on backend for high-traffic e-commerce: most of it maintaining and extending existing
  client-facing microservices and the Frappe ERP, then building the shipping middleware (2024) and
  the OZ resilience platform (2025–26).
highlights:
  - Architected the OZ (Off-ZeCore) platform (2025–26), an event-driven system that keeps online and retail sales running through ERP outages, cutting ERP dependency 83% and projected downtime 91%.
  - Built shipment middleware (2024) consolidating carriers (FedEx, DHL) with automated cost optimization, reducing shipping costs 78% (≈ $500K USD/yr).
  - Maintained and extended existing client-facing microservices and the Frappe ERP across most of the tenure, including feature work, GraphQL APIs, and reliability/deployment improvements (Frappe, TypeScript, GraphQL).
  - Moved review analytics into its own microservice, improving client-side data availability and query clarity.
  - Stood up API logging, error tracking, and Grafana dashboards, cutting issue detection and response times.
  - Mentored new engineers and ran the internal architecture reviews and backend coding standards.
stack: [Python, FastAPI, PostgreSQL, RabbitMQ, Redis, GraphQL, Frappe, Grafana, Docker]
order: 1
---

At ZeBrands I owned backend systems where downtime is measured in lost sales. The through-line of
the work was **decoupling**: turning brittle, ERP-dependent flows into event-driven services that
degrade gracefully and say what they're doing.

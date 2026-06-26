---
lang: "es"
title: OZ — la plataforma que vende cuando el ERP está caído
org: ZeBrands
role: Arquitectura e implementación
period: "2025 – 2026"
blurb: >
  Una capa de resiliencia orientada a eventos que mantiene operando las ventas en línea y de retail durante
  caídas del ERP. Un único punto de falla, convertido en un respaldo que puedes observar.
metrics:
  - { value: "−83%", label: "de flujos de venta desacoplados del ERP" }
  - { value: "−91%", label: "de tiempo de inactividad (proyectado)" }
  - { value: "~195", label: "tiendas en producción con OZ" }
stack: [FastAPI, PostgreSQL, RabbitMQ, Redis, Grafana]
confidential: true
flagship: false
order: 1
---

### El problema

Las ventas (en línea y en tienda) estaban fuertemente acopladas al ERP. Cuando el ERP se detenía, también lo hacían
los ingresos. El negocio necesitaba que las ventas siguieran fluyendo mientras el ERP se recuperaba, sin vender dos veces
el mismo inventario ni perder pedidos.

### El enfoque

Diseñé **OZ (Off-ZeCore)**: una plataforma orientada a eventos que replica los datos que las ventas realmente necesitan
y absorbe las escrituras cuando el ERP no está disponible.

- **Contratos claros.** Definí las APIs, los esquemas y las colas de eventos para que cada servicio pudiera fallar
  de forma independiente. Los pedidos y los movimientos de inventario se convirtieron en eventos, no en llamadas síncronas al ERP.
- **Amortiguar + reconciliar.** Redis y RabbitMQ retienen y enrutan el trabajo durante una caída; el sistema
  reconcilia de forma limpia cuando el ERP regresa.
- **Observable por defecto.** Los tableros de Grafana sobre profundidad de colas, latencia y tasas de error hacen que un
  estado degradado sea legible en lugar de una sorpresa.

### El resultado

El **83%** de los flujos de venta críticos para los ingresos se desacoplaron de las llamadas síncronas al ERP, y el
análisis de modos de falla proyectó una reducción del **91%** en el tiempo de inactividad que bloquea ventas. Las ventas
continúan durante los incidentes del ERP que antes las detenían.

En producción, OZ ahora sostiene las ventas en tienda en **~195 tiendas en México** (adopción total),
con un despliegue en **Brasil** en marcha. Durante el Hot Sale 2026 procesó **~MX$102M (≈ $5M USD)**
en ventas en nueve días, un pico de venta que corrió ~16% por encima del año previo. *(Sistema
propietario; se describe la arquitectura, sin compartir código.)*

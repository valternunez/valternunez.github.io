---
lang: "es"
title: Nexus — una plataforma multiinquilino para administrar bienes raíces
org: Independent project
role: Arquitecto e ingeniero único
period: "2026, en desarrollo activo"
blurb: >
  Un SaaS multiinquilino y orientado a eventos para la administración de condominios: un modelo de ubicaciones
  basado en listas de adyacencia que mapea cualquier distribución de propiedad, un motor financiero de partida doble y pagos con Stripe Connect.
  Diseñado y construido en solitario; incorporando sus primeros inquilinos.
metrics:
  - { value: "Finance engine", label: "libros contables · facturación · dispersiones" }
  - { value: "Stripe Connect", label: "cargos · SPEI · disputas" }
  - { value: "Multi-tenant", label: "RBAC por condominio + complementos" }
stack: [FastAPI, SQLAlchemy 2 (async), PostgreSQL, Celery, RabbitMQ, Redis, "Stripe Connect", "Next.js 16", PWA]
confidential: false
flagship: true
order: 0
---

### Qué es

**Nexus** es un backend SaaS multiinquilino para la administración de condominios y bienes raíces, en desarrollo
activo e incorporando sus primeros inquilinos. Un **modelo jerárquico de nodos con listas de adyacencia** mapea cualquier
distribución física (desde torres verticales hasta vecindarios extensos) y un sistema de RBAC + complementos por condominio
habilita las funcionalidades por inquilino.

### Por qué es interesante

Es el stack completo de un producto serio, construido y documentado por una sola persona:

- **Motor financiero:** libros contables, cargos, pagos, facturación recurrente, recargos por mora, saldos a favor,
  reportes de morosidad y un reporte de transparencia, con tareas de Celery haciendo el trabajo pesado.
- **Pagos:** Stripe Connect (Express, cargos directos), SPEI/CLABE, tarjetas guardadas, pago automático con
  consentimiento explícito + auditoría, disputas y reconciliación de dispersiones.
- **Profundidad de plataforma:** caché read-through con Redis con invalidación dirigida, una abstracción de almacenamiento
  (disco local ↔ S3 con URLs prefirmadas), rastros de acciones con grado de auditoría, claves de API con alcance acotado, integración
  con WhatsApp, una PWA y notificaciones programadas a través de in-app / correo / web-push / móvil.
- **Integración con LLM:** un asistente "Mejorar con IA" conectado a un LLM real (Google Gemini) con los
  controles que necesita una funcionalidad de producción: medición de uso, límites diarios de solicitudes/tokens, umbrales de alerta,
  un modelo de respaldo, degradación elegante y salida estructurada con esquema forzado.
- **Disciplina de ingeniería:** pruebas asíncronas con rollbacks aislados de la base de datos, y un hub de "docs como código" con
  referencias por módulo y bitácoras de decisiones de arquitectura.

### Cómo se construyó

Una sola persona, con alcance de equipo pequeño, a través del apalancamiento. Construí Nexus con un **flujo de desarrollo
multiagente orquestado**: un conjunto de agentes especialistas de codificación (implementar, revisar y nueve
auditores de solo lectura para seguridad, integridad de datos, rendimiento y demás), ejecutándose en paralelo en
git worktrees aislados y traspasándose el trabajo mediante contratos de API y diffs. Yo soy el arquitecto humano en el ciclo
(human-in-the-loop); los agentes son el apalancamiento. Es el mismo instinto que el resto de mi trabajo: diseñar el
sistema, instrumentarlo y dejar que las herramientas hagan la parte repetitiva.

### Qué demuestra

Propiedad de extremo a extremo de un dominio difícil, en solitario: diseño de sistemas, un stack de
pagos que mueve dinero real (libros de partida doble, Stripe Connect), seguridad multiinquilino, y las
pruebas y la documentación que lo respaldan.

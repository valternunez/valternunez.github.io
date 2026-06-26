---
lang: "es"
company: ZeBrands
role: Desarrollador Backend
location: Mexico (remote)
start: "2021"
end: "2026"
summary: >
  Construí y operé sistemas backend orientados a eventos para e-commerce de alto tráfico:
  la capa de resiliencia, la columna vertebral de envíos y los servicios de datos detrás de ellos.
highlights:
  - Diseñé la arquitectura de la plataforma OZ (Off-ZeCore), un sistema orientado a eventos que mantiene operando las ventas en línea y de retail durante caídas del ERP, reduciendo la dependencia del ERP en 83% y el tiempo de inactividad proyectado en 91%.
  - Construí un middleware de envíos que consolida paqueterías (FedEx, DHL) con optimización de costos automatizada, reduciendo los costos de envío en 78% (≈ $500K USD/año).
  - Migré la analítica de reseñas a un microservicio dedicado, mejorando la disponibilidad de datos del lado del cliente y la claridad de las consultas.
  - Diseñé y mantuve módulos y APIs del ERP (Frappe, TypeScript, GraphQL) para confiabilidad y rendimiento de despliegue.
  - Implementé el registro (logging) de APIs, el seguimiento de errores y tableros de rendimiento en Grafana, reduciendo los tiempos de detección y respuesta ante incidencias.
  - Mentoré a nuevos ingenieros e impulsé revisiones de arquitectura internas y estándares de codificación de backend.
stack: [Python, FastAPI, PostgreSQL, RabbitMQ, Redis, GraphQL, Frappe, Grafana, Docker]
order: 1
---

En ZeBrands fui responsable de sistemas backend donde el tiempo de caída se mide en ventas perdidas.
El hilo conductor del trabajo fue el **desacoplamiento**: convertir flujos frágiles y dependientes del ERP en
servicios orientados a eventos que se degradan con gracia y dicen lo que están haciendo.

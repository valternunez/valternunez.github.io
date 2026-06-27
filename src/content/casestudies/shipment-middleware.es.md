---
lang: "es"
title: Middleware de envíos — una sola interfaz, todas las paqueterías
org: ZeBrands
role: Co-diseño y desarrollo
period: "2024"
blurb: >
  Un servicio que pone a cada paquetería detrás de una sola interfaz y enruta cada envío a
  la opción viable más económica, de forma automática.
metrics:
  - { value: "−78%", label: "gasto total en envíos" }
  - { value: "$500K", label: "ahorrados por año (USD)" }
stack: [Python, FastAPI, PostgreSQL]
confidential: true
flagship: false
order: 2
---

### El problema

Cada paquetería (FedEx, DHL y otras) tenía su propia API, precios y peculiaridades. Las integraciones estaban
duplicadas y los envíos no se enrutaban de forma consistente a la opción más económica.

### El enfoque

Co-diseñé y construí el middleware de envíos: **cada paquetería detrás de un solo contrato**, con el costo como una
decisión de primer nivel.

- Una sola interfaz sobre todos los datos y operaciones de las paqueterías, de modo que nada más en la plataforma
  habla con la API cruda de una paquetería.
- Optimización de costos al momento del despacho: cada envío se cotiza entre las paqueterías y se enruta a la
  más económica que cumple con las restricciones.

### El resultado

El gasto total en envíos cayó **~78%** (≈ **$500K USD/año** en ahorros directos), y con él se fue
la proliferación de integraciones por paquetería. *(Sistema propietario; se describe la arquitectura, sin compartir código.)*

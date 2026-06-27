---
lang: "es"
title: ¿El Balón de Oro premia los goles, o las historias?
blurb: >
  Una descomposición bayesiana que se pregunta si la atención mediática tiene alguna asociación independiente con
  el premio más grande del futbol una vez controlados el mérito en la cancha y el éxito del equipo. El tirón, resulta,
  vive en quién es <em>considerado</em>, no en quién gana.
year: "2025"
kind: data-science
stack: [Python, PyMC, nutpie, D3.js, Quarto]
repo: https://github.com/valternunez/ballon-dor-analysis
live: https://valternunez.github.io/ballon-dor-analysis/
featured: true
order: 1
---

Un proyecto de interpretación, no de predicción (~210 temporadas de finalistas, 2018–2025). La cantidad
central es **H⊥ ("Hype Score")**: la porción de la atención de un jugador que el mérito, la fama y el éxito
del equipo *no* explican; un residual inexplicado de atención mediática, leído como asociación, no como causa.
Modelada como dos decisiones (nominación vs. ubicación) con modelos bayesianos; el tirón de la narrativa sobre la
nominación es ~5× su tirón sobre la ubicación final, y ese resultado se sostiene en cada prueba de robustez.
Se entrega como un sitio autónomo de scrollytelling en D3 más un reporte técnico completo en Quarto.

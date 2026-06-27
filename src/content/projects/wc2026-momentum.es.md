---
lang: "es"
title: ¿Las pausas de hidratación cambian el momentum del Mundial?
blurb: >
  Trató las pausas de hidratación obligatorias del Mundial 2026 como un experimento natural, midiendo si
  movían el momentum dentro del partido frente a interrupciones comparables. Un pipeline que se regeneró a diario
  durante el torneo conforme se acumulaban los partidos.
year: "2026"
kind: data-science
stack: [Python, pandas, "GitHub Actions", "GitHub Pages"]
repo: https://github.com/valternunez/wc2026-momentum
live: https://valternunez.github.io/wc2026-momentum/
featured: true
order: 2
---

Un diseño de inferencia causal con ingeniería real a su alrededor: el scraping se ejecuta localmente (para que la CI no pueda
ser bloqueada por IP), solo se versionan los datos derivados, y el historial de git funciona también como sistema de snapshots.
El sitio del reporte se reconstruye en cada push mediante GitHub Actions. La identificación usa comparaciones emparejadas
por duración (hidratación vs. VAR vs. interrupciones por lesión), tiempos de pausa placebo, un placebo histórico de 2022
y un control explícito de la regresión a la media.

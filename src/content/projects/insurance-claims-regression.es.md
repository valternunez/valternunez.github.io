---
lang: "es"
title: Predicción de reclamos de seguros — regresión desde cero
blurb: >
  Implementé regresión lineal a mano (varianza, covarianza, los coeficientes) y luego con
  scikit-learn, comparando ambas sobre datos de seguros de autos suecos por RMSE.
year: "2025"
kind: data-science
stack: [Python, NumPy, scikit-learn]
isPrivate: false
featured: false
order: 4
---

Un ejercicio de "constrúyelo antes de importarlo": derivar el estimador desde primeros principios para
entender exactamente qué hace `LinearRegression`, y luego validar que la versión desde cero
coincide con la biblioteca en el error sobre datos retenidos (held-out).

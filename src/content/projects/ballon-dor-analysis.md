---
title: Does the Ballon d'Or reward goals, or stories?
blurb: >
  A Bayesian decomposition asking whether media attention has any independent association with
  football's biggest award after controlling for on-pitch merit and team success. The pull, it
  turns out, lives in who gets <em>considered</em>, not who wins.
year: "2026"
kind: data-science
stack: [Python, PyMC, nutpie, D3.js, Quarto]
repo: https://github.com/valternunez/ballon-dor-analysis
live: https://valternunez.github.io/ballon-dor-analysis/
featured: true
order: 1
---

An interpretation project, not a prediction one (~210 finisher-seasons, 2018–2025). The central
quantity is **H⊥ ("Hype Score")**, the slice of a player's attention that merit, fame, and team
success *don't* explain: an unexplained media-attention residual, read as association, not cause.
Modelled as two decisions (nomination vs placement) with Bayesian models; narrative's pull on
nomination is ~5× its pull on final placement, and that holds up under every robustness check.
Ships as a self-contained D3 scrollytelling site plus a full Quarto technical report.

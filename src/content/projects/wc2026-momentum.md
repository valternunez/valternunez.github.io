---
title: Do hydration breaks shift World Cup momentum?
blurb: >
  Treated the 2026 World Cup's mandatory hydration breaks as a natural experiment, measuring whether
  they moved in-match momentum against comparable stoppages. A pipeline that regenerated daily
  through the tournament as matches accumulated.
year: "2026"
kind: data-science
stack: [Python, pandas, "GitHub Actions", "GitHub Pages"]
repo: https://github.com/valternunez/wc2026-momentum
live: https://valternunez.github.io/wc2026-momentum/
featured: true
order: 2
---

A causal-inference design with real engineering around it: scraping runs locally (so CI can't get
IP-blocked), only derived data is committed, and git history doubles as the snapshot system. The
report site rebuilds on every push via GitHub Actions. Identification leans on duration-matched
comparisons (hydration vs VAR vs injury stoppages), placebo break times, a 2022 historical placebo,
and an explicit regression-to-the-mean control.

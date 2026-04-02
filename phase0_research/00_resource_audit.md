# Resource Audit

> Author: Codex
> Date: 2026-04-02

## Reviewed Assets

### 1. Logo

- Source: `resource/로고.png`
- Observation: circular emblem with Korean and English association name, brushstroke red/blue taegeuk-style form, white dragon motif
- Implication: the visual language can support diplomacy, trust, tradition, and Korea-Bhutan symbolism without looking like a generic tourism site

### 2. Figma Make sample

- Source: `resource/bhutan friendly/`
- Structure found: header, hero, about, history, business, news, network, contact, footer
- Stack found: Vite + React 18 + Tailwind 4 + Radix-based UI dependencies
- Risks:
  - Korean text in multiple components is mojibake and cannot be trusted as launch copy
  - Dependency surface is large for a simple association homepage
  - Sample looks useful as inspiration for section flow, but not ideal as-is for production

### 3. Association introduction PPT

- Source: `resource/한국부탄우호협회 소개 (1).pptx`
- Slide count detected: 33
- Strong themes observed:
  - Association identity and portfolio overview
  - Bhutan tourism and MICE promotion
  - 2017 event case with large-scale attendance
  - 2023 to 2025 promotion activity timeline
  - 2024 and 2025 MOU and collaboration records
  - Bhutan Culture Day, ESG tourism, charity, exhibitions, and official appointments
- Implication: the website should prominently show organizational credibility through timeline, event history, and partnership evidence

## Working Conclusion

The most reliable starting point is:

- brand cues from the logo
- section scaffolding from the Figma sample
- factual narrative and proof points from the PPT

The homepage should therefore be positioned as an official institutional profile site with event portfolio depth, not only a culture-themed landing page.

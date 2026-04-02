# Benchmarking Summary

> Author: Codex
> Date: 2026-04-02

## Scope

This benchmark focused on patterns relevant to KBFA:

- association and institution site structure
- nonprofit sponsorship and donation guidance
- project-based sponsorship UX
- content operations for notices and campaigns

## Sources Reviewed

- KEEA association history structure
  - https://www.keea.or.kr/head/intro/getWIN03R01.do
- SIEW sponsorship guide
  - https://www.siew.or.kr/%ED%9B%84%EC%9B%90%EC%95%88%EB%82%B4
- Donation page best practices from Donorbox
  - https://donorbox.org/nonprofit-blog/donation-page-best-practices
- Donation page simplification guidance
  - https://nonprofitfundraising.com/8-vital-donation-page-best-practices/
- Korean donation guide examples surfaced in search
  - https://www.donor.or.kr/home/support/guide02.asp
  - https://www.hs-seobu.or.kr/page/supporter
  - https://www.pinetree.or.kr/page/support

## Benchmark Findings

### 1. Association websites tend to keep the top-level menu conservative

Repeated patterns include:

- about or institution introduction
- history
- major programs or business areas
- notices
- directions or contact

Implication for KBFA:

- top navigation should stay legible and trust-oriented
- history can live inside `About` or as a strong sub-section

### 2. Donation and sponsorship pages convert better when the flow is direct

Common best-practice guidance emphasizes:

- easy-to-find sponsorship CTA
- short, focused form flow
- immediate transition from CTA to the actual giving step
- clear explanation of why support matters

Implication for KBFA:

- `Sponsor` should not be buried under heavy explanatory text
- each sponsorship project needs a direct route to the support flow

### 3. Trust increases when fund usage is explicit

Examples and best-practice articles repeatedly show the value of:

- funding purpose
- usage breakdown
- account guidance
- contact information

Implication for KBFA:

- project sponsorship pages should show purpose, use of funds, target amount, and operating notes

### 4. Manual-first operations are common and realistic for smaller nonprofits

Some nonprofit sites still rely on bank transfer guidance, manual confirmation, and direct contact rather than full payment automation.

Implication for KBFA:

- a manual verification workflow is acceptable for V1
- the site can still feel polished without bank automation on day one

### 5. Separate content buckets improve maintainability

Sites commonly distinguish:

- evergreen institutional content
- notices and updates
- sponsorship guidance
- contact information

Implication for KBFA:

- `Major Activities` and `News/Notices` should stay separate
- popup content should be treated as a managed content type, not a one-off hardcoded element

## KBFA-Specific Recommendation

The site should combine three benchmark patterns:

1. Association site trust structure
2. Campaign-oriented sponsorship flow
3. Owner-friendly content operations

This leads to a KBFA model with:

- formal institutional presentation
- visible proof of activities and partnerships
- project-based sponsorship plus one-time sponsorship
- Markdown-managed content and popup operations

## Decision

Based on both benchmark evidence and stakeholder preference, the recommended V1 direction is:

- Korean main site with English parallel pages
- clear top-level navigation
- content-managed notices, activities, and popup campaigns
- project sponsorship with manual-first confirmation workflow
- future-ready structure for admin tooling or CMS integration

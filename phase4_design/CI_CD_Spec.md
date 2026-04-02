# CI/CD Spec - KBFA Homepage V1

> Date: 2026-04-03
> Status: Draft

## Minimum Step 4 Build Gate

- install dependencies with `npm install`
- validate types and production bundle with `npm run build`

## Current Verified Command

- `npm run build`

Result:

- successful as of 2026-04-03 in the current workspace

## Suggested Future CI

1. checkout repository
2. install Node dependencies in `site/`
3. run `npm run build`
4. publish build artifacts or deploy

## Deployment Note

Because the current V1 foundation is frontend-first, it is suitable for static hosting or frontend platform deployment once environment and email integration decisions are finalized.

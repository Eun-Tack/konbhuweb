# Environment Spec - KBFA Homepage V1

> Date: 2026-04-03
> Status: Draft

## Local Development

- Node.js
- npm
- Vite development server

## Environment Variables Planned

- `VITE_CONTACT_EMAIL`
- `VITE_SPONSORSHIP_EMAIL`
- `VITE_BANK_ACCOUNT_DISPLAY`
- `VITE_MAIL_PROVIDER_ENABLED`

## Notes

- V1 can render public pages without all runtime variables if fallback placeholder strategy is used
- email delivery should not be considered complete until provider configuration exists

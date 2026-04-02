# Database Schema - KBFA Homepage V1

> Date: 2026-04-03
> Status: Draft

## V1 Decision

No full database is required for the current Step 4 scope.

## V1 Storage Model

- public content: local structured files in `site/content/`
- images: public asset paths in `site/public/uploads/`
- inquiry and sponsorship submission handling: integration-ready only, no production persistence implemented yet

## Future Tables If Backend Is Added

### inquiries

- id
- name
- affiliation
- email
- phone
- subject
- message
- created_at

### sponsorship_submissions

- id
- sponsorship_type
- project_slug
- donor_type
- donor_name
- affiliation
- email
- phone
- receipt_requested
- amount
- verification_status
- created_at

## Note

This is intentionally minimal because the current project remains in a frontend-oriented Step 4 completion state.

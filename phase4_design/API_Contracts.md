# API Contracts - KBFA Homepage V1

> Date: 2026-04-03
> Status: Draft

## Scope

V1 is frontend-first and currently uses service stubs, but the following interfaces define the expected integration surface for inquiry and sponsorship flows.

## 1. Inquiry Submission

### Endpoint

- `POST /api/inquiries`

### Request Body

```json
{
  "name": "string",
  "affiliation": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string"
}
```

### Response

```json
{
  "ok": true
}
```

## 2. Sponsorship Submission

### Endpoint

- `POST /api/sponsorships`

### Request Body

```json
{
  "sponsorshipType": "project | one-time",
  "projectSlug": "string | undefined",
  "donorType": "string",
  "name": "string",
  "affiliation": "string",
  "email": "string",
  "phone": "string",
  "receiptRequested": "string",
  "amount": "string"
}
```

### Response

```json
{
  "ok": true
}
```

## Operational Note

- V1 frontend currently uses service stubs in `site/src/services.ts`
- a later backend or serverless handler can implement this contract without changing the page flow

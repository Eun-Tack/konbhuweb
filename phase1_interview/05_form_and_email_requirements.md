# Form and Email Requirements

> Author: Codex
> Date: 2026-04-02

## Inquiry Form

The inquiry form should collect:

- name
- organization or affiliation if applicable
- email
- phone number
- inquiry subject
- inquiry message

## Sponsorship Form

The sponsorship form should collect:

- donor type
  - individual
  - organization
- name
- affiliation
- email
- contact information
- receipt request 여부
- sponsorship amount

## Email Behavior

### Inquiry

- send inquiry details to the association contact inbox
- optionally send a confirmation copy to the submitter later

### Sponsorship

- send thank-you email to the sponsor
- include transfer guidance again in the email
- include sponsored project name for project sponsorship
- include contact route in case payment information needs correction

## Operational Note

Email sending requires a real outbound email setup in production, such as:

- SMTP
- Resend
- SendGrid
- another approved mail provider

This should be treated as an implementation requirement, not just UI text.

# Tech Spec - KBFA Homepage V1

> Status: Draft
> Author: Designer reference alignment
> Date: 2026-04-03

## 1. Summary

### BA Definition

Build a bilingual institutional website for KBFA with About, Activities, Partners, News, Sponsorship, and Contact experiences.

### Technical Approach

- Vite + React + TypeScript frontend
- local structured content files for V1
- route-aware page rendering without full CMS dependency
- sponsorship and inquiry forms built as frontend flows with service integration points

## 2. Architecture

### Frontend

- React app in `site/src/`
- client-side route rendering for V1
- reusable data model layer for Korean and English content

### Content

- JSON for site settings
- structured TS data or content-ready files for activities, sponsorship projects, partners, and news in V1
- future migration path to markdown parser or CMS collections

### Integrations

- email delivery integration placeholder for inquiry and sponsorship confirmation
- manual sponsorship verification workflow in V1

## 3. Business Rules to Technical Mapping

| BR ID | Technical Handling |
|-------|--------------------|
| BR-CONTENT-01 | hide unpublished entries at render time |
| BR-SPON-03 | validate required form fields before confirmation screen |
| BR-SPON-04 | show account transfer guidance after successful client-side submission |
| BR-SPON-05 | prepare service hook for confirmation email dispatch |
| BR-CONTACT-01 | prepare service hook for inquiry email dispatch |

## 4. State Model

- language: `ko | en`
- sponsorship mode: `project | one-time`
- project status: `upcoming | active | closed`
- popup state: enabled by content and date checks

## 5. Performance and Maintainability

- optimize image usage
- keep dependency surface small
- separate content from layout code
- keep forms service-agnostic until mail provider is chosen

## 6. Security and Privacy

- no fake confirmation of payment on client only
- donor and inquiry data should not be silently persisted without chosen backend path
- collect only necessary contact and sponsorship details

## 7. Step 4 Deliverables

- frontend app scaffold
- content/data model scaffold
- homepage and key page structure
- sponsorship and contact UI flow foundation

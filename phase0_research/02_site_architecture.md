# Site Architecture Draft

> Author: Codex
> Date: 2026-04-02

## Proposed V1 Sitemap

1. Home
2. About KBFA
3. Major Activities
4. Partners
5. News and Announcements
6. Contact

## Confirmed Priority Order

1. Association introduction
2. Activity and achievements promotion
3. Partnership inquiries
4. Sponsorship expansion

## Homepage Section Flow

1. Hero
   - Official association name
   - Mission line: "A bridge between Korea and Bhutan"
   - Primary CTA: partnership inquiry
2. Association Overview
   - Founding context
   - Mission and values
   - Integrated history section
3. Major Activities
   - Tourism and MICE promotion
   - Cultural exchange
   - Forum and exhibition programs
   - Charity and public-interest programs
4. Activity Highlights and Timeline
   - Flexible featured milestones from 2017, 2023, 2024, 2025, and 2026
5. Partners and Network
   - Government, tourism, regional, cultural, and transport partners
6. News and Announcements
   - Notice and activity update area
7. Contact and CTA
   - Inquiry route
   - Collaboration route
   - Membership route

## Content Blocks Confirmed or Pending

- Menu preference confirmed:
  - Association introduction
  - Major activities
  - Partners
  - News and announcements
  - Contact
- History should live under the association introduction section or page
- Mission phrase confirmed:
  - Korean: `한국과 부탄 가교`
- Official English name confirmed:
  - `Korea Bhutan Friendship Association`
- Contact details are not finalized yet, but placeholders should be reserved for:
  - email
  - phone number
  - address and directions
- Korean and English should both be prepared in this release
- Activity highlights must remain easy to change later
- A separate inquiry page or section with form is preferred over hero-only contact handling
- Popup support may be needed for notices or campaigns

## Content Blocks That Should Be Confirmed in Phase 1

- Official Korean mission statement
- Official English mission line
- Official English name usage and abbreviation policy
- Founding year and organization history summary
- Approved list of partner logos or names
- Whether MOU details can be publicly listed
- Contact email, phone, address, map, and social links

## Technical Direction

- Prefer a lightweight content architecture that can support bilingual content and editable activity highlights
- Use Markdown-based content templates so the site owner can manage notices, activity posts, and popup content directly
- Each content item should support title, summary, body, date, language, image path, and publish flag
- Image paths should be managed alongside Markdown entries so upload and replacement stay simple
- Popup content should also be content-driven so it can be turned on and off without code edits
- Keep content modular so a future CMS can be added without redesigning the whole structure
- Use the sample only as a section reference unless the team explicitly wants to preserve its codebase

# State Machine - KBFA Homepage V1

> Date: 2026-04-03
> Status: Draft

## Sponsorship Project Status

| Current State | Event | Next State | Note |
|--------------|-------|-----------|------|
| upcoming | start date reached and owner publishes | active | project begins accepting intent |
| active | fundraising closes | closed | owner-defined close behavior |
| active | achieved amount exceeds target | active | over-100% is allowed |
| closed | owner reopens project | active | optional operational path |

## Sponsorship Submission Status

| Current State | Event | Next State | Note |
|--------------|-------|-----------|------|
| draft | user submits form | submitted | frontend intent captured |
| submitted | transfer details verified manually | verified | achieved amount may be updated |
| submitted | mismatch found | pending_review | needs operator check |
| pending_review | operator resolves mismatch | verified or cancelled | operational decision |

## Inquiry Submission Status

| Current State | Event | Next State | Note |
|--------------|-------|-----------|------|
| draft | user submits form | submitted | request handed off |
| submitted | operator handles inquiry | responded | future backend/admin path |

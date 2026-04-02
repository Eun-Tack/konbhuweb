# AI_SDLC Process Feedback Log

> Author: Codex
> Project: Korea Bhutan Friendship Association Homepage
> Start date: 2026-04-02
> Purpose: Record friction, contradictions, and improvement opportunities found while applying AI_SDLC in a real project.

## How To Use This Log

- Add entries whenever the framework causes ambiguity, duplication, delay, or inconsistent guidance
- Distinguish between process friction and project-specific issues
- Reuse this log in Phase 7 postmortem and framework improvement issues

## Entry Format

| Date | Phase | Category | Issue | Impact | Suggested Improvement | Status |
|------|------|----------|------|--------|------------------------|--------|

## Recorded Feedback

| Date | Phase | Category | Issue | Impact | Suggested Improvement | Status |
|------|------|----------|------|--------|------------------------|--------|
| 2026-04-02 | Step 1-3 | Repository setup | The README expects a separate project repository with git initialization and remote connection, but this can be missed easily when users focus on content work first. | Project can progress without proper remote tracking, which weakens the framework's commit-by-phase intent. | Add an explicit Step 1 checklist item: `git init`, `git remote add origin`, first commit, first push. | Open |
| 2026-04-02 | Step 3 | Agent loading clarity | The README says to load the phase agent after checking `current.md`, but it does not define what counts as "completed" for Step 3 in practical terms. | Teams may think adding paths in `CLAUDE.md` is enough, while others may interpret Step 3 as requiring formal document alignment. | Add a short completion definition for Step 3: check `current.md`, identify the version file, note the loaded version in project docs, and confirm the active phase. | Open |
| 2026-04-02 | Phase 1-3 | Template encoding/readability | Several template and agent files display with mojibake in the current environment, making direct template-following harder. | Slows down accurate template interpretation and increases risk of format drift. | Normalize repository text encoding and verify Korean files render correctly in standard Windows and terminal environments. | Open |
| 2026-04-02 | Phase boundaries | Phase naming alignment | The README high-level phase flow and folder naming can be interpreted differently, especially around strategy, BA, design, and implementation transition points. | Creates uncertainty about whether the team is still in Step 3, in Phase 3, or already entering Phase 4. | Add one explicit mapping table: `README Step -> Phase -> Folder -> Expected outputs`. | Open |
| 2026-04-02 | Phase 3 -> 4 | Gate definition | The framework defines readiness scores, but it does not give a lightweight checklist for small website projects before implementation starts. | Teams may over-document or under-document depending on interpretation. | Add a "small-project minimum gate" checklist for brochure/institutional sites, separate from complex application projects. | Open |
| 2026-04-02 | Phase 4 planning | Code location guidance | The framework says code lives with project documents, but it does not strongly define where the code folder should live inside the project repo. | Teams may choose inconsistent patterns such as root-level app, `src/`, `site/`, or inside design/implementation folders. | Add recommended code layout examples for web, app, and API projects. | Open |
| 2026-04-03 | Phase 4 execution | Tooling orchestration | In real implementation work, some actions like staging and committing must remain strictly sequential even when overall work is parallelizable. | Over-parallelizing execution can create false failures that are not framework problems but still slow the flow. | Add a short operator note to Phase 4 guidance: parallelize inspection and reads freely, but keep source-control write actions sequential. | Open |

## Additional Notes

- This log is about framework fitness, not product requirements.
- Keep project-specific feature decisions out of this file unless they expose a framework weakness.
- At Phase 7, convert relevant items into framework issues using the AI_SDLC issue templates.

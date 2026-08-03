# Website update package for Antigravity

## Task

Update the existing website at `https://www.ekrayneva.space/` according to the approved requirements in this package.

Work in the existing codebase and preserve the current visual identity unless a structural change is explicitly required below. Do not redesign the site from scratch, migrate frameworks, invent new sections, or rewrite approved copy.

## Source of truth

Use the files in this order:

1. `01_MASTER_IMPLEMENTATION_BRIEF_RU.md` — master scope and exact implementation requirements.
2. `02_EXACT_COPY_EN.md` — approved user-facing English copy.
3. `project_specs/` — required skeleton structure for each project page.
4. `technical/` — routes, interactions, downloads, privacy, responsive and accessibility requirements.
5. `05_ACCEPTANCE_CHECKLIST.md` — completion criteria.
6. `content/site_content.json` — machine-readable copy and route manifest.

The files in `source_materials/` are supporting evidence only. Do not publish additional claims from them unless the master brief explicitly instructs you to do so.

## Required deliverables

- Updated homepage.
- New `/projects` page.
- Three dedicated project routes with approved minimum content and empty case-study skeletons.
- Updated experience copy.
- Updated skills behaviour without redesigning the skills taxonomy.
- Three-language CV download selector using the supplied PDFs.
- Correct certificate links.
- Persistent AI assistant in the bottom-right corner with a first-visit invitation.
- Removal of phone number, Qwell, Databricks, Snowflake, McKinsey Forward, unfinished SQL certification, repeated AI CTAs, and all public references to the confidential project name.
- Responsive and keyboard-accessible implementation.

## Non-negotiable rules

- Never expose the confidential AI project name in visible copy, routes, metadata, image names, alt text, comments, data objects, analytics labels, or generated source.
- Do not invent project outcomes, metrics, tools, clients, ownership, or proficiency levels.
- Do not add internship-seeking copy.
- Do not mention Barcelona in the homepage hero.
- Do not change approved English copy without explicit approval.
- Do not replace the supplied CV files with generated summaries.

## Supplied CV files

- `assets/cv/Elena_Krayneva_CV_EN.pdf`
- `assets/cv/Elena_Krayneva_CV_ES.pdf`
- `assets/cv/Elena_Krayneva_CV_RU.pdf`

These are the current uploaded versions. Implement downloads using stable paths so a future file replacement does not require UI or code changes.
## Package format

The implementation instructions are provided only in Markdown and JSON. PDF files are included only as the actual CV download assets for the website.


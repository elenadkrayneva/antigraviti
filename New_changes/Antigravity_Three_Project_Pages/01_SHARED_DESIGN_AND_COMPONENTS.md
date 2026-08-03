# Shared Design and Component Specification

## 1. Reusable project-page component

Create one reusable `ProjectCasePage` structure driven by project data.

Recommended component areas:

- `ProjectHero`
- `ProjectMeta`
- `ProjectSection`
- `InsightCards`
- `ProcessSteps`
- `EvidenceGallery`
- `ContributionBlock`
- `ProjectNavigation`

Do not duplicate the entire page component for each project.

## 2. Hero

The hero must contain:

- `Back to Projects`
- project type
- project title
- one-sentence project summary
- 4–6 skill tags
- one primary visual

The hero image must not dominate the entire viewport. At 1920×1080 and 100% zoom, the project title, summary, metadata, and at least part of the visual must be visible without excessive empty space.

## 3. Project at a Glance

Use one compact information strip or grid.

Possible fields:

- Project type
- Context
- Core question
- Methods
- Deliverables

Do not add dates, team size, clients, or tools unless they are explicitly present in the project file.

## 4. Section formatting

Use this hierarchy:

- H1: project title
- H2: major section
- H3: subsection or framework element
- short paragraphs
- concise bullets only where scanning is useful

Avoid placing every paragraph inside a bordered card.

## 5. Visual evidence

Each visual must have:

- responsive width;
- descriptive alt text;
- optional one-line caption;
- no visible confidential AI startup name;
- no stretching;
- no hard-coded fixed height for full-width diagrams.

For a grid gallery:

- desktop: 2 columns where appropriate;
- tablet/mobile: 1 column;
- open images in a lightbox only if the site already has an existing reusable lightbox.

## 6. My Contribution

Make this section visually distinct, but not promotional or exaggerated.

Use:

- first-person wording;
- clear separation between team work and individual contribution;
- no invented ownership.

## 7. Outcome

Use accurate labels:

- `Outcome`
- `Deliverables`
- `Recommendation Presented`

Do not label proposed strategies as measured commercial results.

## 8. Project navigation

At the bottom:

- Back to all projects
- Previous project
- Next project

Navigation order:

1. AI Startup
2. Digify Active
3. Oblicuo

## 9. GitHub links

Use direct project-folder links.

Open GitHub links in a new tab and include safe external-link attributes.

## 10. Accessibility

- semantic heading order;
- keyboard-accessible links;
- visible focus states;
- alt text from the project files;
- sufficient contrast;
- no essential information available only on hover;
- no text embedded inside inaccessible decorative UI when HTML text can be used.

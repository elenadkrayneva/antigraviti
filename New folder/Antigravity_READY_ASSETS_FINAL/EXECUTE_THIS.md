# EXECUTE THIS — FINAL PROJECT PAGE REBUILD

## Non-negotiable rule

**Do not generate, redraw, recreate, invent, or source any project visuals.**

Every visual required for the three pages is already physically included in this package under `assets/`.

Your task is to:

1. copy these supplied files into the website asset directory;
2. remove the current repetitive card-based layouts;
3. rebuild the three project pages around the supplied assets;
4. verify that every required asset is visibly rendered;
5. provide desktop and mobile screenshots before reporting completion.

Do not leave placeholders. Do not replace supplied images with AI-generated alternatives. Do not create new diagrams.

---

# 1. Pages to replace

Replace the current content and layout on these routes:

- `/projects/ai-startup-strategy`
- `/projects/digify-active`
- `/projects/oblicuo-customer-strategy`

The existing pages currently look like text reports made of repeated white cards. Remove that repeated card structure rather than inserting the supplied images into the old layout.

---

# 2. Shared implementation rules

Use the existing website design system:

- existing colours;
- existing typography;
- existing content width;
- existing buttons;
- existing spacing tokens;
- existing border radii and shadows.

Do not create a separate visual system for project pages.

Use one reusable project-page architecture, but allow the section layouts to vary by project.

Each page must tell this story:

**Business problem → evidence and analysis → key insight → recommendation → personal contribution → outcome**

At 100% browser zoom, images must be readable and must not be forced into small cards.

---

# 3. AI Startup page

## Required asset folder

`assets/ai_startup/`

## Required assets and exact placement

### A. Prioritisation framework

File:

`ai-prioritisation-framework.png`

Place:

- after the Business Challenge section;
- full-width or in a 60/40 split with a short text block;
- image must occupy at least 55% of the content width on desktop.

Do not wrap this inside a small card.

### B. Recommendation logic

File:

`ai-recommendation-logic.png`

Place:

- immediately before the Strategic Recommendation section;
- use as the visual bridge between analysis and recommendation.

### C. Go-to-market roadmap

File:

`ai-gtm-roadmap-clean.png`

Place:

- directly after the Strategic Recommendation headline;
- full-width on desktop;
- preserve aspect ratio.

## Required page structure

1. Hero
2. Compact metadata strip
3. Business Challenge
4. `ai-prioritisation-framework.png`
5. Short Research & Analysis copy
6. `ai-recommendation-logic.png`
7. Strategic Recommendation
8. `ai-gtm-roadmap-clean.png`
9. My Contribution
10. Outcome
11. GitHub evidence link
12. Previous / Next project navigation

## Recommendation headline

**Shift from broad horizontal competition to focused vertical specialisation.**

## Confidentiality

Do not display the name ZORIA anywhere on the website, including:

- text;
- alt text;
- metadata;
- filenames copied into the website;
- captions;
- structured data.

---

# 4. Digify Active page

## Required asset folders

- `assets/digify/landing/`
- `assets/digify/pitch_innovation/`
- `assets/digify/media_metrics/`

All images in these folders are ready to use.

## Hero

Use:

`assets/digify/landing/01-landing-hero.png`

Also include the supplied walkthrough video as an optional secondary evidence item:

`assets/digify/landing/landing-page-walkthrough.mp4`

## Main case-study assets

Use these assets directly on the main page, not only inside a hidden gallery:

1. `pitch_innovation/01-agency-overview.png`
2. `pitch_innovation/02-strategic-diagnosis.png`
3. `pitch_innovation/05-active360-concept-framework.png`
4. `pitch_innovation/06-active360-prototype.png`
5. `pitch_innovation/07-targeting-and-positioning.png`
6. `pitch_innovation/08-pricing-and-competitor-benchmark.png`
7. `pitch_innovation/09-channel-selection-bullseye.png`
8. `pitch_innovation/10-promotional-activity-mockups.png`
9. `pitch_innovation/11-tam-estimation.png`
10. `pitch_innovation/14-success-metrics.png`
11. `landing/02-lead-capture-form.png`
12. `landing/03-testimonial-section.png`
13. `landing/04-services-section.png`

## Supporting evidence gallery

Use these files in a visible, expandable evidence gallery below the core case:

- `pitch_innovation/03-luma-workshop.png`
- `pitch_innovation/04-active360-pitch.png`
- `pitch_innovation/12-cost-structure.png`
- `pitch_innovation/13-financial-projection.png`
- all files in `media_metrics/`

Do not omit the Media Metrics materials. They show additional execution evidence:

- client and competitor analysis;
- content inspiration;
- production process;
- real performance results;
- engagement;
- audience insights;
- improvement recommendations.

## Required page structure

1. Hero using the landing-page screenshot
2. Compact metadata strip
3. Business Challenge
4. Agency and strategic diagnosis visuals
5. Active360 concept framework
6. Prototype visuals
7. Targeting and positioning
8. Pricing and competitive benchmark
9. Channel selection and promotional mockups
10. TAM and success metrics
11. Landing-page screenshots
12. Media Metrics execution evidence
13. My Contribution
14. Outcome
15. GitHub evidence link
16. Previous / Next project navigation

## Required behaviour

- full-size images must be readable;
- use alternating full-width and split layouts;
- do not shrink complete slides into tiny three-column cards;
- use click-to-expand/lightbox only if the website already has a reusable implementation;
- the user must be able to understand the project without opening a hidden gallery.

---

# 5. Oblicuo page

## Required asset folder

`assets/oblicuo/`

## Required assets and exact placement

### A. Research evidence strip

File:

`oblicuo-research-in-numbers.png`

Place:

- directly after Business Challenge;
- full-width.

### B. Key insights

File:

`oblicuo-key-insights-board.png`

Place:

- after the Research section;
- full-width and high-emphasis.

### C. Priority segment

File:

`oblicuo-priority-segment-spotlight.png`

Place:

- after Key Insights;
- use as the main Priority Segment section.

### D. Customer journey

File:

`oblicuo-customer-journey.png`

Place:

- directly after the priority segment;
- full-width.

### E. KPI framework

File:

`oblicuo-kpi-chain.png`

Place:

- after Strategic Recommendation;
- full-width.

## Required page structure

1. Hero
2. Compact metadata strip
3. Business Challenge
4. `oblicuo-research-in-numbers.png`
5. `oblicuo-key-insights-board.png`
6. `oblicuo-priority-segment-spotlight.png`
7. `oblicuo-customer-journey.png`
8. Strategic Recommendation
9. `oblicuo-kpi-chain.png`
10. My Contribution
11. Outcome
12. GitHub evidence link
13. Previous / Next project navigation

## Recommendation headline

**Use social media as a risk-reduction tool for weekday visits.**

## Accuracy rule

The KPI framework contains proposed indicators. Do not describe them as achieved post-implementation commercial results.

---

# 6. Visual layout requirements

For all three pages:

- remove repeated three-card and four-card text grids where they do not add comparison value;
- do not use one identical white card for every section;
- alternate image-led and text-led sections;
- use full-width visuals for frameworks, journeys, roadmaps, and complete presentation slides;
- keep long body copy to a readable width of approximately 650–700 px;
- use captions only where they help explain the evidence;
- preserve image aspect ratios;
- use lazy loading below the fold;
- do not lazy-load the hero image if it harms LCP;
- no horizontal overflow;
- no CSS zoom or transform scaling.

---

# 7. Completion is blocked until all checks pass

Do not report completion until:

- all supplied required assets are copied into the website;
- all required assets are visibly rendered on their assigned pages;
- the old repetitive card layout has been removed;
- all three routes work;
- every image loads without a broken path;
- desktop screenshots are provided at 1440 px width;
- mobile screenshots are provided at approximately 390 px width;
- no placeholder or “visual to be added” text remains;
- no new project visual has been generated or invented;
- no console errors or warnings are caused by the changes.

Any unchecked item means the task is incomplete.

---

# 8. Required completion report

Return:

1. exact files changed;
2. exact supplied assets copied;
3. old components or layouts removed;
4. new reusable components created;
5. desktop screenshots for all 3 pages;
6. mobile screenshots for all 3 pages;
7. confirmation that no project visual was generated or recreated.

# Antigravity Code Cleanup and Future Development Rules

## Purpose

Use this document as a permanent implementation standard for the website.

The task has two parts:

1. clean and consolidate the code already created during previous iterations;
2. follow the same rules for every future change.

The approved design, content, routes, and functionality must be preserved. The cleanup must not redesign the site, rewrite approved copy, remove working features, or introduce new behaviour.

---

# Part I — Clean the Existing Codebase

## 1. Audit before editing

Before changing code, inspect and document:

- application and folder structure;
- page and component hierarchy;
- global styles, CSS variables, and design tokens;
- existing button, card, modal, and popover variants;
- typography, spacing, container widths, shadows, radii, and breakpoints;
- navigation, sticky-header, and scroll logic;
- skill-popover and tooltip logic;
- AI assistant behaviour;
- project cards and routes;
- CV language selector;
- contact form;
- duplicated components, styles, hooks, and event listeners;
- unused files, assets, imports, variables, and CSS rules;
- temporary fixes from previous iterations.

Do not begin by creating replacements. First determine what can be reused and consolidated.

## 2. Preserve approved behaviour

The cleanup must preserve:

- responsive layouts;
- sticky navigation;
- approved CTA hierarchy;
- Contact me scrolling;
- project cards and project routes;
- CV language selection and downloads;
- skill evidence popovers;
- GitHub and credential links;
- AI assistant position and opening prompt;
- contact form;
- keyboard and mobile interactions;
- current visual identity.

Do not change approved copy, colours, routes, button hierarchy, or content unless explicitly requested.

## 3. Consolidate the design system

Create one source of truth for:

- primary and secondary colours;
- text and background colours;
- borders and shadows;
- radii;
- spacing;
- container widths;
- typography;
- button dimensions;
- animation durations;
- breakpoints;
- z-index layers.

Reuse existing tokens where they already exist. If the same value is repeated in several files, move it into the existing shared token system. Do not create a second parallel set of variables.

## 4. Remove duplicated styles and components

Search for duplicate or nearly identical implementations of:

- buttons;
- navigation links;
- Contact me variants;
- project cards;
- experience cards;
- skill chips;
- popovers;
- modals;
- section containers;
- headings;
- hover and focus states;
- mobile layouts.

Consolidate them into shared components, variants, or existing utility classes.

Do not keep multiple versions such as:

- `.button-primary`, `.main-button`, `.blue-button`, `.contact-button-final`;
- `ProjectCard`, `ProjectCardNew`, `ProjectCardFinal`;
- separate popovers for each skill.

Use semantic variants instead, for example:

- `primary`;
- `secondary`;
- `dark`;
- `text`;
- `navigation`.

## 5. Remove layout hacks

Remove or replace fragile fixes such as:

- CSS `zoom`;
- `transform: scale()` used to fit the page;
- unnecessary fixed heights;
- large negative margins;
- excessive absolute positioning;
- arbitrary pixel offsets;
- duplicated media queries;
- inline styles;
- repeated hard-coded colours;
- unnecessary `overflow: hidden`;
- rules targeting only one exact screen size.

Replace them with maintainable layout techniques:

- CSS Grid;
- Flexbox;
- shared containers;
- intrinsic sizing;
- `minmax()`;
- `clamp()` where appropriate;
- shared spacing tokens;
- consistent breakpoints.

Do not hide a structural layout problem with a local visual patch.

## 6. Limit global CSS

Review broad global selectors such as:

```css
button { ... }
a { ... }
section { ... }
h2 { ... }
div { ... }
```

Global rules should be limited to true base styles and shared tokens. Component-specific behaviour must be scoped to the relevant component.

A local change must not unintentionally affect unrelated pages or sections.

## 7. Standardise responsive logic

Use a small, consistent set of existing breakpoints.

Avoid groups of nearly identical breakpoints such as:

- `1190px`;
- `1200px`;
- `1210px`;
- `1240px`;
- `1270px`;
- `1280px`.

Consolidate responsive behaviour around the current design-system breakpoints. Do not create a new media query for every small visual issue.

## 8. Consolidate scroll logic

Audit all scroll-related behaviour:

- sticky header;
- Contact me header state;
- smooth scrolling;
- active-section tracking;
- hero visibility;
- AI assistant prompt;
- scroll-triggered animation.

Requirements:

- no duplicate scroll listeners;
- one clear source of scroll state;
- prefer `IntersectionObserver` where appropriate;
- clean up observers and listeners on unmount;
- avoid repeated inline style writes during scroll;
- avoid multiple handlers for variations of the same behaviour;
- prevent header height jumps when the CTA state changes.

## 9. Consolidate popovers and tooltips

Skill evidence must use one reusable popover implementation.

The shared component must support:

- one or multiple evidence items;
- GitHub project links;
- credential links;
- internal experience anchors;
- desktop hover;
- keyboard focus;
- mobile tap;
- click outside to close;
- Escape to close;
- viewport-aware positioning;
- accessible labels.

Remove duplicate open/close logic, outside-click handlers, Escape handlers, and positioning calculations.

## 10. Consolidate buttons and CTA states

Use one shared button system for:

- Contact me;
- View Projects;
- Download CV;
- View more;
- View All Projects;
- contact-form submission;
- CV language choices.

Preserve the approved hierarchy:

- hero Contact me — blue;
- View Projects — light blue;
- Download CV — black;
- homepage header Contact me — normal navigation at the top of the hero, then blue after scrolling;
- internal-page Contact me — blue from initial load.

Do not copy complete style blocks only to change colour or emphasis.

## 11. Clean JavaScript and state management

Review interactive code for:

- duplicated state;
- values stored when they could be derived;
- repeated event listeners;
- direct DOM manipulation;
- timers without cleanup;
- observers without cleanup;
- duplicated mobile and desktop logic;
- unnecessary effects;
- avoidable rerenders.

Requirements:

- one clear source of state;
- cleanup for timers, listeners, and observers;
- no repeated state for the same value;
- no style mutation from several independent functions;
- one responsive component instead of separate desktop/mobile copies where possible;
- use CSS instead of JavaScript when CSS can handle the behaviour reliably.

## 12. Remove obsolete code

Remove:

- unused components;
- unused imports and variables;
- unused CSS classes;
- obsolete media queries;
- duplicate helper functions;
- old button, modal, and popover versions;
- abandoned routes and assets;
- commented-out code;
- temporary debugging code;
- `console.log` statements;
- unused placeholder data;
- dead feature flags;
- backup components inside production folders.

Do not retain obsolete code “just in case.” Version control preserves history.

## 13. Use semantic naming

Use clear names such as:

- `Button`;
- `ProjectCard`;
- `SkillEvidencePopover`;
- `CvLanguageModal`;
- `StickyHeader`;
- `ContactForm`;
- `useHeaderScrollState`.

Do not use names such as:

- `fix`;
- `fix2`;
- `new`;
- `newest`;
- `final`;
- `finalFinal`;
- `temporary`;
- `updatedButton`;
- `cardNewVersion`.

Names should describe responsibility, not development history.

## 14. Review file structure

Keep a clear separation between:

- reusable UI components;
- page components;
- content and data;
- shared tokens and styles;
- hooks;
- utilities;
- assets.

Avoid duplicate components in several folders, unrelated logic in one large file, and hard-coded content inside presentation components.

Do not restructure the entire project unless necessary. Make the smallest maintainable consolidation.

## 15. Accessibility cleanup

Verify:

- semantic heading hierarchy;
- correct button/link semantics;
- keyboard focus;
- visible focus states;
- `aria-expanded` and `aria-controls` where needed;
- modal focus management;
- Escape-key behaviour;
- image alt text;
- form labels and validation messages;
- sufficient contrast.

Do not use clickable `div` elements when a button or link is appropriate.

## 16. Performance cleanup

Check for:

- oversized images;
- duplicated assets;
- unnecessary rerenders;
- unnecessary dependencies;
- repeated data fetching;
- duplicate listeners;
- off-screen animations;
- layout shifts;
- unoptimised project previews.

Use existing image optimisation and lazy-loading mechanisms. Do not add a new library for behaviour that can be implemented cleanly with the current stack.

---

# Part II — Rules for All Future Changes

## 17. Smallest maintainable change

For every future task:

> Implement the requested change as the smallest maintainable modification to the existing architecture.

Do not:

- rewrite unrelated sections;
- create a parallel design system;
- duplicate components;
- add a global rule for a local issue;
- add extra features;
- change copy outside the request;
- redesign neighbouring elements without approval.

## 18. Reuse before creating

Before adding a component or style:

1. inspect existing components;
2. inspect existing variants;
3. inspect existing tokens;
4. inspect existing hooks;
5. inspect existing responsive rules.

Create something new only when the required behaviour is genuinely different. Explain why reuse was insufficient.

## 19. Do not invent design rules

Do not introduce new:

- colours;
- font sizes;
- shadows;
- radii;
- spacing scales;
- breakpoints;
- animation styles;
- CTA hierarchy;

unless explicitly requested.

## 20. Do not invent or alter content

Do not:

- invent skills or outcomes;
- invent metrics;
- rewrite approved role descriptions;
- rename projects without instruction;
- add certifications;
- change links;
- expose confidential names;
- change approved copy.

Content changes require explicit approval.

## 21. Avoid one-off selectors

Do not solve future issues with selectors such as:

```css
.homepage .section:nth-child(4) .card:first-child { ... }
```

Avoid rules tied to content order, arbitrary DOM depth, one exact viewport, or one specific text length.

Use explicit components, variants, and semantic class names.

## 22. Extend shared interactions

Future changes to:

- scroll behaviour;
- modals;
- popovers;
- navigation state;
- tooltips;
- responsive menus;
- form validation;

must extend existing shared implementations. Do not create a second independent implementation for the same interaction type.

## 23. Protect unrelated functionality

Before each change, identify what should remain unaffected.

After the change, verify:

- homepage;
- projects page;
- individual project pages;
- experience section;
- skills section;
- education section;
- contact form;
- CV downloads;
- AI assistant;
- mobile navigation.

A local change is not complete if it causes regressions elsewhere.

## 24. Required implementation process

### Step 1 — Inspect

Identify relevant files, reusable components, styles, state logic, and possible side effects.

### Step 2 — Plan

State briefly:

- files to change;
- components to reuse;
- whether a new component is necessary;
- risks to existing behaviour.

### Step 3 — Implement

Make only the approved change.

### Step 4 — Clean

Remove temporary code, duplicated rules, unused imports, and debugging output created during implementation.

### Step 5 — Test

Test relevant pages, viewports, interactions, and keyboard behaviour.

### Step 6 — Report

Provide a concise implementation summary.

---

# Part III — Prohibited Patterns

## 25. Do not use these approaches

Do not use the following unless there is a documented, unavoidable technical reason:

- CSS `zoom`;
- `transform: scale()` for layout fitting;
- repeated `!important`;
- inline styles for reusable components;
- repeated hard-coded colours;
- arbitrary negative margins;
- excessive absolute positioning;
- fixed heights for text-heavy cards;
- duplicated components for colour variations;
- duplicated media queries;
- multiple global scroll listeners;
- uncleaned timers or observers;
- click handlers on non-interactive elements;
- unexplained new dependencies;
- temporary production code;
- commented-out legacy components;
- console debugging output;
- new global selectors for local fixes.

If an exception is necessary, document:

- why it is necessary;
- where it is used;
- why a reusable alternative was not suitable.

---

# Part IV — Validation Checklist

## 26. Code-quality checks

Before marking any task complete, verify:

- no duplicate components for the same purpose;
- no duplicated CSS that should be shared;
- no unused imports or variables;
- no unused styles;
- no dead routes;
- no commented-out code;
- no console errors;
- no new console warnings;
- no temporary logs;
- no unnecessary `!important`;
- no new global-style conflicts;
- no listener, observer, or timer leaks.

## 27. Visual checks

Verify:

- no horizontal overflow;
- no dependency on browser zoom;
- no text clipping;
- no overlapping elements;
- no hidden controls;
- no popovers outside the viewport;
- no unexpected colour changes;
- no inconsistent button dimensions;
- no layout shifts;
- responsive behaviour remains intact.

Test at minimum:

- 1920 × 1080;
- 1536 × 864;
- 1440 × 900;
- tablet width;
- mobile width;
- 100% browser zoom.

## 28. Functional checks

Verify:

- navigation links;
- Contact me scroll;
- header CTA state;
- View Projects;
- View more;
- View All Projects;
- CV language selector and downloads;
- project links;
- skill popovers on desktop, keyboard, and mobile;
- contact-form validation and submission;
- AI assistant accessibility and positioning.

## 29. Required completion report

After cleanup or any future implementation, provide:

1. files changed;
2. files removed;
3. components consolidated;
4. styles consolidated;
5. duplicated logic removed;
6. obsolete code removed;
7. new components created and why;
8. new dependencies added, if any;
9. viewport sizes tested;
10. accessibility checks performed;
11. remaining technical debt, if any.

Do not report completion without a cleanup and validation pass.

---

# Permanent Instruction for Future Tasks

Append this to every future website request:

> Implement this as the smallest maintainable change. Reuse the existing architecture, components, design tokens, breakpoints, and interaction patterns. Do not create duplicate styles, parallel components, new global rules, or unrelated design changes. After implementation, remove temporary and obsolete code, test for regressions, and provide a concise summary of files changed and checks completed.

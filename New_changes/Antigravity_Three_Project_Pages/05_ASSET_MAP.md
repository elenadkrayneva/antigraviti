# Asset Map

Antigravity should use the repository’s existing project assets where available. Do not hotlink production website images directly from GitHub. Copy approved images into the website asset structure and use neutral, semantic filenames.

## AI Startup

Source folder:

`09-Zoria-Strategic-Market-Prioritisation/assets/`

Candidate assets:

- `01_hero_zoria.jpg`
- `02_project_at_a_glance.png`
- `03_business_challenge.png`
- `07_prioritisation_framework.png`
- `10_gtm_roadmap.png`
- `13_project_outcome.png`
- `14_contribution.png`

Required website filenames:

- `ai-startup-hero.jpg`
- `ai-startup-project-overview.png`
- `ai-startup-business-challenge.png`
- `ai-startup-prioritisation-framework.png`
- `ai-startup-gtm-roadmap.png`
- `ai-startup-outcome.png`
- `ai-startup-contribution.png`

Before use:

- inspect every image;
- remove or crop any visible confidential startup name;
- do not expose the old name in alt text, captions, filenames, or metadata;
- preserve the analytical meaning.

## Digify Active

Source folder:

`02-Digify-Active/`

Existing asset:

- `screenshot.png`

Required website filename:

- `digify-active-hero.png`

Additional visuals may be built from approved content:

- `digify-customer-journey.png`
- `digify-acquisition-funnel.png`
- `digify-channel-comparison.png`
- `digify-conversion-dropoffs.png`
- `digify-contribution.png`

Do not invent values in charts.

## Oblicuo

Source folder:

`08-Oblicuo-Customer-Insights-Growth-Strategy/assets/`

Assets:

- `01_hero_oblicuo.jpg`
- `02_project_at_a_glance.png`
- `03_business_challenge.png`
- `06_key_insights.png`
- `07_persona_map.png`
- `10_strategy_logic.png`
- `13_kpi_tree.png`
- `14_contribution.png`

Required website filenames:

- `oblicuo-hero.jpg`
- `oblicuo-project-overview.png`
- `oblicuo-business-challenge.png`
- `oblicuo-key-insights.png`
- `oblicuo-persona-map.png`
- `oblicuo-strategy-logic.png`
- `oblicuo-kpi-tree.png`
- `oblicuo-contribution.png`

## Image handling

- preserve aspect ratio;
- use responsive `srcset` if the framework supports it;
- provide WebP/AVIF versions only through the project’s existing image optimisation flow;
- keep original files available during implementation;
- use lazy loading below the hero;
- do not use lazy loading for the primary hero image if it delays the largest contentful paint;
- include alt text from each project page file.

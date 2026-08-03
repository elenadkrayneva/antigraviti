# Antigravity Website Revision Instructions

## Scope

Implement only the changes described in this document. Do not introduce additional copy, new sections, new visual styles, new colours, or unsupported claims.

---

## 1. Fix desktop scaling and layout

The site currently looks correct only when the browser zoom is reduced to approximately 75%. It must display correctly at **100% browser zoom**.

### Required test conditions

Test the site at:

- Chrome zoom: **100%**
- 1920 × 1080
- 1536 × 864
- 1440 × 900

### Professional Experience section

At 1920 × 1080 and 100% zoom, the following must fit on screen:

- header;
- section title **Professional Experience**;
- section subtitle;
- fully expanded X5 Digital card;
- fully expanded Technologies of Trust card;
- **Show 2 more experiences** button.

### Desktop layout

For screens wider than or equal to `1280px`, use a two-column layout:

```text
Professional Experience
Subtitle

[X5 Digital]    [Technologies of Trust]

[Show 2 more experiences]
```

Requirements:

- both main experience cards must be displayed in two columns;
- cards must have equal width;
- cards must be aligned to the top;
- main content container should use approximately `1200–1280px` maximum width;
- **Show 2 more experiences** must sit below both cards;
- reduce unnecessary vertical spacing;
- slightly reduce card padding and spacing between bullet points;
- do not reduce the body text to an unreadable size.

### Responsive behaviour

- `≥1280px`: two columns;
- `768–1279px`: one column;
- `<768px`: mobile vertical layout.

Do not use:

- CSS `zoom`;
- `transform: scale()`;
- artificial scaling of the whole page;
- fixed dimensions that create horizontal scrolling.

---

## 2. Add images to Featured Projects

Add visual preview images to the two Featured Project cards on the homepage.

Projects:

1. **AI Startup — Strategic Market Consulting**
2. **Digify Active — B2B Growth & Marketing Analytics**

### Card structure

```text
[Project image]

[Project type]
[Project title]
[Short description]

[View more →]
```

### Image requirements

- image must feel integrated into the card;
- both project images must use the same height;
- preferred aspect ratio: `16:9`;
- use `object-fit: cover`;
- use the same corner radius logic as the existing site;
- image must not stretch or deform;
- cards must remain visually balanced and equal in height;
- on mobile, image must use the full available card width.

### Digify Active image

Use the existing preview image from:

```text
02-Digify-Active/screenshot.png
```

Project URL:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/02-Digify-Active
```

### AI Startup image

Use one of the existing strategic visual assets from the current AI startup GitHub project.

Current project URL:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/09-Zoria-Strategic-Market-Prioritisation
```

Requirements:

- do not display the name ZORIA anywhere on the website;
- the image used on the website must not visibly include the name ZORIA;
- copy the image into the website assets using a neutral file name;
- use a neutral alt text such as:

```text
AI startup market prioritisation framework
```

The project must always be displayed on the website as:

```text
AI Startup — Strategic Market Consulting
```

The GitHub project will be anonymised separately later.

---

## 3. Make View All Projects more visible

Keep the text:

```text
View All Projects
```

The button currently looks too neutral. Make it more visually noticeable.

Requirements:

- use an accent colour already present on the site;
- do not introduce a new colour palette;
- strengthen border, background, or emphasis;
- add a clear hover state;
- add a keyboard focus state;
- arrow should move slightly to the right on hover;
- button may lift slightly or gain a stronger shadow;
- animation must be short and subtle;
- the CTA must clearly communicate that it leads to additional projects.

Example interaction:

```css
transform: translateY(-2px);
```

Use only the site’s existing shadow and colour system.

---

## 4. Add hover states to Featured Project cards

On hover:

- slightly strengthen the card shadow;
- slightly lift the card;
- keep all text readable;
- do not change card height;
- avoid strong or distracting animation.

### Project links

**View more** must lead directly to the dedicated project page:

```text
/projects/ai-startup-strategy
/projects/digify-active
```

**View All Projects** must lead to:

```text
/projects
```

The arrow beside **View more** should move slightly right on hover.

---

## 5. Standardise Contact me wording

Replace all contact-related variants with:

```text
Contact me
```

Replace:

- `Send Message`
- `Contact`
- `Contact Me`
- `Get in Touch`

Use exactly the same capitalisation everywhere:

```text
Contact me
```

### Apply this to

- navigation item;
- main CTA button;
- contact section heading;
- contact form submission button;
- any repeated contact labels.

### Behaviour

The main **Contact me** CTA must smoothly scroll to:

```text
#contact
```

### Visual consistency

All **Contact me** elements must use the site’s existing design system:

- consistent typography;
- consistent accent colour;
- consistent border radius;
- consistent hover and focus states;
- consistent icon and arrow logic.

Navigation remains a text link. Hero CTA and form button remain buttons, but must look like part of the same visual system.

---

## 6. Skills & Tools interaction logic

Not every skill should be clickable.

Use two visual states.

### Confirmed skill

- accent or blue outline;
- hover/focus popover;
- direct evidence link to a project or professional experience section.

### Skill without published evidence

- neutral grey outline;
- no fake link;
- do not link to the main GitHub repository;
- do not link to an unfinished project.

---

## 7. Skill hover and click behaviour

### Desktop

On hover or keyboard focus, open a compact popover.

Popover heading:

```text
See how I applied this skill
```

Popover must contain:

- project or experience name;
- one concise evidence sentence;
- direct link.

Example:

```text
See how I applied this skill

Digify Active
Planned Google Ads acquisition and analysed campaign and conversion performance.

View project →
```

### Link behaviour

- GitHub project links open in a new tab;
- links to Professional Experience stay on the website and scroll to the relevant anchor.

### Mobile

Since hover is unavailable:

- first tap opens the popover;
- link inside the popover opens the evidence;
- tap outside closes the popover;
- tapping the skill itself must not immediately navigate away before the user can read the evidence.

### Accessibility

- popover must work with keyboard focus;
- popover must not disappear when the cursor moves from the chip to the popover;
- use visible focus states;
- links must have clear `aria-label` values;
- popovers must remain inside the viewport.

---

## 8. Digital Marketing & Analytics — evidence mapping

### Marketing Analytics

Evidence:

```text
Acquisition Funnel Dashboard
Analysed full-funnel marketing performance across CTR, CPA, ROAS, ROMI and conversion rates.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/00-Acquisition-Funnel-Excel-Dashboard
```

### Web & SEO Analytics

Evidence:

```text
Digify Active
Conducted keyword research, applied SEO principles and connected search intent to the project website and acquisition strategy.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/02-Digify-Active
```

Do not overstate this as advanced technical web analytics.

### Campaign Performance Tracking

Evidence:

```text
Acquisition Funnel Dashboard
Tracked campaign results by platform, channel and audience segment using an interactive Excel dashboard.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/00-Acquisition-Funnel-Excel-Dashboard
```

### Conversion Tracking

Show two evidence items.

#### Digify Active

```text
Tracked the acquisition journey from paid traffic to lead submission and analysed conversion performance.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/02-Digify-Active
```

#### Acquisition Funnel Dashboard

```text
Analysed click-to-lead and lead-to-order conversion rates and identified funnel drop-offs.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/00-Acquisition-Funnel-Excel-Dashboard
```

### Paid Media Strategy

Evidence:

```text
Digify Active
Planned paid acquisition around campaign objectives, audience targeting, keyword intent and lead generation.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/02-Digify-Active
```

### Google Ads — Search & Display

Evidence:

```text
Digify Active
Planned and launched Google Ads Search and Display campaigns and analysed their conversion performance.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/02-Digify-Active
```

### Campaign Planning & Optimisation

Evidence:

```text
Digify Active
Structured campaign targeting and acquisition logic and developed recommendations based on performance data.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/02-Digify-Active
```

### Dashboard Development

Evidence:

```text
Acquisition Funnel Dashboard
Built an interactive Excel dashboard with KPI cards, pivot charts, slicers and timeline filters.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/00-Acquisition-Funnel-Excel-Dashboard
```

### Data Visualization

Evidence:

```text
Acquisition Funnel Dashboard
Visualised marketing spend, revenue, acquisition efficiency and conversion progression.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/00-Acquisition-Funnel-Excel-Dashboard
```

### Performance Reporting

Evidence:

```text
Acquisition Funnel Dashboard
Converted campaign data into KPI summaries, channel comparisons and budget recommendations.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/00-Acquisition-Funnel-Excel-Dashboard
```

---

## 9. Marketing Strategy & Business — evidence mapping

### Market Research

Show two evidence items.

#### AI Startup

```text
Compared potential market verticals using demand, competition, regulation, adoption and scalability criteria.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/09-Zoria-Strategic-Market-Prioritisation
```

#### Oblicuo Hi-Fi Bar

```text
Combined 16 customer interviews with competitor analysis to identify behavioural barriers and growth opportunities.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/08-Oblicuo-Customer-Insights-Growth-Strategy
```

### Keyword Research & Search Analysis

Evidence:

```text
Digify Active
Researched high-intent keywords and connected search logic to paid acquisition and SEO decisions.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/02-Digify-Active
```

### Strategic & Business Analysis

Show two evidence items.

#### AI Startup

```text
Evaluated market attractiveness, competitive differentiation and implementation feasibility to support market prioritisation.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/09-Zoria-Strategic-Market-Prioritisation
```

#### Oblicuo Hi-Fi Bar

```text
Translated customer evidence into a priority-segment strategy, implementation plan and KPI framework.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/08-Oblicuo-Customer-Insights-Growth-Strategy
```

### Analytical & Research Skills

Show two evidence items.

#### Oblicuo Hi-Fi Bar

```text
Synthesised qualitative interviews and competitor research into customer insights and strategic recommendations.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/08-Oblicuo-Customer-Insights-Growth-Strategy
```

#### Human–AI Interaction Analysis

```text
Cleaned and analysed experimental data from more than 260 participants using R.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/05-Human-AI-Interaction-R-Analysis
```

### Cross-functional Coordination

Do not link to GitHub.

Evidence:

```text
Professional Experience
Coordinated recurring workflows and stakeholder inputs across HR, legal, finance and business teams.
```

Links:

```text
/#x5-digital
/#technologies-of-trust
```

### Stakeholder Communication

Primary evidence:

```text
AI Startup
Presented the strategic recommendation to the CEO and defended the analysis, assumptions and implementation risks.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/09-Zoria-Strategic-Market-Prioritisation
```

Optional second evidence:

```text
X5 Digital
Prepared structured reporting and presentations for HR leadership.
```

Link:

```text
/#x5-digital
```

### Workflow Optimisation

Do not link to GitHub.

Evidence:

```text
Technologies of Trust
Coordinated approval workflows and maintained tracking systems across HR, legal, finance and business teams.
```

Link:

```text
/#technologies-of-trust
```

### Operational Reporting

Show two evidence items.

#### X5 Digital

```text
Prepared KPI-based workforce reports and management presentations.
```

Link:

```text
/#x5-digital
```

#### Technologies of Trust

```text
Maintained operational trackers for approvals, renewals, payments, deadlines and requests.
```

Link:

```text
/#technologies-of-trust
```

---

## 10. Tools — evidence mapping

### SQL

Keep neutral and non-clickable.

There is no completed SQL project in the current public GitHub portfolio.

### R

Show two evidence items.

#### Walmart A/B Test

```text
Used R and statistical tests to compare conversion, revenue per visitor and average order value.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/03-Walmart-AB-Testing-R
```

#### Human–AI Interaction Analysis

```text
Used R for data preparation, exploratory analysis, regression modelling and visualisation.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/05-Human-AI-Interaction-R-Analysis
```

### Python

Evidence:

```text
NYC Airbnb Analysis
Cleaned and explored approximately 48,000 listings using Python, Pandas and visual analysis.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/04-Python-NYC-Airbnb-Analysis
```

### Power BI

Keep neutral and non-clickable.

Do not link to the unfinished planning page.

### Tableau

Keep neutral and non-clickable until a complete Tableau project is published.

### Excel

Evidence:

```text
Acquisition Funnel Dashboard
Built a full-funnel campaign tracker using Power Query, formulas, pivot tables, slicers and charts.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/00-Acquisition-Funnel-Excel-Dashboard
```

### PowerPoint

Keep neutral and non-clickable for now.

The current public files do not clearly confirm that the presentations were created specifically in Microsoft PowerPoint.

### Google Analytics

Do not link to GitHub.

Use credential:

```text
https://skillshop.credential.net/7b50cac1-6a37-4a5d-984d-af324c05ecc5#acc.WEAsRH32
```

Popover:

```text
Google Analytics Certification
View credential.
```

### Google Ads

Show two evidence items.

#### Project

```text
Digify Active
Planned and launched Google Ads Search and Display campaigns and analysed acquisition performance.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/02-Digify-Active
```

#### Credential

```text
Google Ads Display Certification
View credential.
```

Link:

```text
https://skillshop.credential.net/7b50cac1-6a37-4a5d-984d-af324c05ecc5#acc.WEAsRH32
```

### HubSpot

Show two evidence items.

#### Project

```text
Digify Active
Used HubSpot for the project website, landing pages, lead capture and CRM integration.
```

Link:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio/tree/main/02-Digify-Active
```

#### Credential

```text
HubSpot Marketing Hub Software
View credential.
```

Link:

```text
https://app.hubspot.com/academy/achievements/400j3fn2/en/1/elena-krayneva/hubspot-marketing-hub-software
```

---

## 11. Main GitHub link

All general GitHub links in the header, footer, or profile area must lead to:

```text
https://github.com/elenadkrayneva/Elena-Krayneva-Portfolio
```

Inside Skills & Tools, use direct links to the specific project folders listed above. Do not send all skill evidence links to the repository homepage.

---

## 12. Temporary AI Startup linking logic

For now:

- use the existing GitHub link containing `09-Zoria-Strategic-Market-Prioritisation`;
- display only **AI Startup — Strategic Market Consulting** on the website;
- do not display the word ZORIA in visible website text;
- do not display ZORIA in website labels, buttons, popovers, alt text, or metadata;
- do not delay the skill linking implementation because the GitHub folder still contains the old name.

Later, in a separate task:

- rename the GitHub folder;
- remove ZORIA from README;
- rename assets;
- update image alt text;
- update website URLs.

---

## 13. Final QA checklist

Before finishing, verify all of the following:

- site works at 100% browser zoom;
- Professional Experience fits correctly on all three desktop resolutions;
- Featured Project cards contain images;
- Featured Project cards are visually balanced and equal in height;
- **View All Projects** is clearly visible;
- all contact wording is standardised to **Contact me**;
- all confirmed skills have working hover and focus popovers;
- mobile tap behaviour works correctly;
- GitHub links point to specific project folders;
- Power BI and Tableau do not link to unfinished projects;
- neutral skills look non-clickable;
- popovers do not overflow the viewport;
- AI assistant does not cover buttons, popovers, or the contact form;
- ZORIA does not appear anywhere on the website itself.

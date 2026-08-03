# Digify Active — B2B Growth & Marketing Analytics

Route: `/projects/digify-active`

## Public minimum content
- Back to All Projects
- Title
- Project type: Applied academic project
- Context: Target market: SME fitness businesses
- Summary: Development and testing of a B2B acquisition funnel combining positioning, HubSpot, paid campaigns, and performance analysis.
- Business question: How can a new B2B marketing service attract and convert SME fitness businesses through a structured digital acquisition funnel?
- Status: Case study in development

## Required component skeleton

1. `ProjectContextSection`
   - empty container for project format, B2B concept, target market, team structure and duration

2. `BusinessChallengeSection`
   - render approved question

3. `MarketPositioningSection`
   - empty containers for market gap, target segment, customer need, value proposition, pricing logic and positioning

4. `CustomerJourneySection`
   - structural 6-step sequence:
     - Awareness
     - Advertisement
     - Landing Page
     - Lead-Capture Form
     - Diagnostic Content
     - Follow-Up Communication

5. `FunnelBuildSection`
   - empty containers for HubSpot website, landing pages, forms, lead capture, tracking and follow-up

6. `CampaignExecutionSection`
   - empty containers for Search, Display, keyword research, targeting, ad structure, budget and campaign period

7. `PerformanceAnalysisSection`
   - metric placeholders only:
     - CTR
     - CPA
     - Lead Conversions
     - Conversion Rate
     - Search vs Display
     - Funnel Drop-Offs
   - do not insert values

8. `MyContributionSection`
   - empty highlighted container for market analysis, funnel structure, campaign analysis, audience segmentation, positioning contribution and recommendations

9. `RecommendationsSection`
   - empty containers for targeting, bidding, landing-page structure, messaging, follow-up and conversion optimisation

10. `VisualEvidenceSection`
   - empty named slots:
     - Acquisition funnel
     - Customer journey
     - Search vs Display comparison
     - Conversion drop-off chart
     - Landing-page screenshots

## Guardrail
Never label SME fitness businesses as the client. Use `Target market`.

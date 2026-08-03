# Interaction and technical behaviour

## Contact scroll
- `Contact Me` performs smooth scroll to `#contact`.
- Respect `prefers-reduced-motion`: use instant scroll when reduced motion is enabled.
- Move logical focus to the contact heading after navigation without causing a second scroll jump.

## CV selector
- Use an accessible dialog, menu or popover.
- Title: `Choose CV language`.
- Options: English, Español, Русский.
- Escape closes it.
- Click/tap outside closes it.
- Focus remains trapped while a modal dialog is open.
- After close, focus returns to `Download CV`.
- Download uses supplied PDFs and download filenames from `cv_download_manifest.json`.

## Project navigation
- Homepage `View more` links go directly to dedicated routes.
- Homepage `View All Projects` and hero `View Projects` go to `/projects`.
- Project pages include `Back to All Projects` linking to `/projects`.

## Skill evidence
- Desktop: open on hover and keyboard focus.
- Mobile: first tap opens popover; a link inside performs navigation.
- Popover title: `See how I applied this skill`.
- Keep existing skill labels/order, except remove Databricks and Snowflake.
- Only enable evidence for skills already present on the site and mapped in `skill_evidence_map.json`.
- No fake evidence and no proficiency labels.

## AI assistant
- Fixed bottom-right on all routes.
- Persistent launcher always visible.
- First visit in a browser session opens the invitation bubble.
- Bubble title: `Curious about my experience?`
- Body: `Ask about my projects, skills, or professional background.`
- Button: `Ask a question`.
- Close control hides the bubble but not the launcher.
- Use session storage or equivalent so the invitation appears once per session, not once per route.
- Ensure it does not overlap CTA buttons, navigation, dialogs or mobile safe areas.

## Empty project skeletons
- Do not use Lorem ipsum.
- Do not invent content.
- Keep approved public minimum content.
- Build section components and TODO comments.
- Hide unfilled sections from public rendering if empty boxes would look broken.

## External links
- Certificate and LinkedIn links open safely with `rel="noopener noreferrer"` when using a new tab.
- Verify all external links return the intended destination.

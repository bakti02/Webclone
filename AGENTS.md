# Webclone — Website Reverse Engineering Workspace

This project is based on the architecture and workflow of JCodesMore/ai-website-cloner-template.

## Target

Current reconstruction target: https://www.wiz.io/

## Workflow

Use the clone-website methodology:
1. Reconnaissance: screenshots, design tokens, content, assets, responsive states, interactions.
2. Foundation: fonts, global tokens, assets, shared types and utilities.
3. Component specs: one auditable specification per component before implementation.
4. Build: focused components, keeping shared WIZ structures under a site namespace.
5. Assembly and QA: routes, interactions, responsive checks, build/type checks and visual comparison.

## Fidelity

The emulation phase aims for high visual and behavioral fidelity. Do not invent layout details when they can be measured or documented. Preserve every meaningful interaction state discovered during reconnaissance.

## Code style

- Next.js App Router
- React 19 + TypeScript strict
- Tailwind CSS v4
- Named exports
- PascalCase components and camelCase utilities
- Mobile-first responsive implementation
- Avoid `any`

## Output layout

- `src/app/` — routes
- `src/components/sites/wiz-io/` — WIZ-specific components
- `src/lib/` — utilities
- `public/sites/wiz-io/` — permitted local assets
- `docs/research/wiz-io/` — research and component specifications
- `docs/design-references/wiz-io/` — screenshots/reference material
- `scripts/` — reproducible extraction/download helpers

## Safety and rights

Only use public material where reproduction is permitted. Do not collect credentials, private information, authentication tokens, or restricted material. Do not use the result for phishing, impersonation, or deceptive deployment. Prefer original or permitted assets when building the test implementation.

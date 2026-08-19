---
name: clone-website
description: Reconstruct a website using the AI Website Cloner methodology: reconnaissance, foundation, component specs, build and QA.
argument-hint: "<url1> [<url2> ...]"
---

# Clone Website

Target URL(s): `$ARGUMENTS`

## Required methodology

Follow the source template's five-phase workflow:

1. **Reconnaissance**
   - Inspect the target at the supplied URL.
   - Capture desktop and mobile visual references.
   - Extract fonts, colors, spacing, key dimensions, metadata and global UI patterns.
   - Sweep scroll, click, hover and responsive states.
   - Identify whether interactions are scroll-driven, click-driven, hover-driven or time-driven.

2. **Foundation**
   - Establish the target design tokens before section implementation.
   - Add permitted fonts/assets under the site-specific namespace.
   - Set global CSS and reusable TypeScript content models.

3. **Component specifications**
   - Create an auditable spec for each meaningful section before building it.
   - Record exact/observed styling values, responsive changes, content, asset paths and interaction states.
   - Break complex sections into focused builder tasks.

4. **Build**
   - Implement in `src/components/sites/<site-key>/`.
   - Preserve source pathnames as App Router routes.
   - Keep same-site shared pieces under `shared/`.

5. **Assembly and QA**
   - Wire routes and interactions.
   - Run TypeScript/build checks.
   - Compare desktop/tablet/mobile output against the research references.

## WIZ.IO test

For this project the active target is `https://www.wiz.io/` and the primary namespace is `wiz-io`.

Keep research under `docs/research/wiz-io/` and assets under `public/sites/wiz-io/`.

## Important limitation

The upstream skill requires browser automation for true pixel-level `getComputedStyle()` extraction. Where browser automation is unavailable, record the limitation explicitly and use only verifiable public observations rather than inventing exact CSS values.

## Rights and safety

Use only public material that may be reproduced for the intended test. Do not collect credentials, private data or authentication tokens, and do not deploy a deceptive impersonation of the source site.

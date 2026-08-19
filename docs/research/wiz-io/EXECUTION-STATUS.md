# WIZ.IO Clone Execution Status

## Upstream workflow used

This project is based on `JCodesMore/ai-website-cloner-template` (MIT) and follows its documented phases:

1. Reconnaissance
2. Foundation
3. Component specifications
4. Build
5. Assembly / QA

Upstream source: https://github.com/JCodesMore/ai-website-cloner-template

## What has been completed in this repository

- Next.js 16 / React 19 / TypeScript strict package baseline aligned to the upstream stack.
- `AGENTS.md` created with reverse-engineering workflow rules.
- `.claude/skills/clone-website/SKILL.md` created with the upstream methodology adapted to this workspace.
- Public WIZ.IO route/content/interactions research recorded.
- WIZ homepage foundation CSS and first-pass page implementation added.
- Responsive desktop/tablet/mobile layout rules added.

## What is not yet possible in this execution environment

The upstream skill explicitly requires a browser automation MCP to perform:

- full-page screenshots at 1440px and 390px
- exact `getComputedStyle()` extraction
- scroll/click/hover interaction sweep
- state-by-state tab/carousel inspection
- responsive viewport sweep with live DOM measurements
- direct visual-diff QA

This session does not expose a browser automation MCP, so those measurements were not fabricated. The current implementation is therefore a research-driven first pass, not a claim of pixel-perfect parity.

## Public-source constraint

The implementation uses publicly observable structure/content patterns. Proprietary source code, credentials and private data were not collected. Brand-specific assets should only be added when their reproduction/use is permitted.

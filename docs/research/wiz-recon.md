# WIZ.IO Reconnaissance

Target: https://www.wiz.io/
Recon date: 2026-08-19
Purpose: baseline for a permitted visual/structural recreation test using the Webclone repository.

## Scope

This reconnaissance maps the public information architecture, visible sections, content hierarchy, forms, navigation, carousels, integrations, responsive-critical components, and public route families observed on Wiz.io. It intentionally does not copy proprietary source code, private data, credentials, or restricted assets.

## Homepage information architecture

1. Global header / primary navigation
   - Wiz brand mark
   - Platform
   - Solutions
   - Pricing
   - Resources
   - Customers
   - Company
   - Sign-in / utility links where exposed
   - Primary CTA: Get a demo

2. Hero
   - H1: Protect Everything You Build and Run
   - Value proposition around connecting code, cloud, and runtime in a unified security graph
   - Primary demo CTA
   - Lead-generation form with work email and additional business fields

3. Enterprise trust/logo rail
   - Trust statement: more than 65% of Fortune 100 companies
   - Customer logos including Morgan Stanley, Chipotle, Siemens, Fox, Colgate-Palmolive, Mars, IHG, ASOS, Salesforce, BMW, Slack, Priceline, Bridgewater Associates, LVMH, ServiceNow, Lovable, Wolt and DocuSign in the current crawl

4. Reviews / social proof
   - Heading: Customers rate Wiz #1 in cloud security
   - G2 review count and repeated G2 badge visuals
   - See all reviews CTA

5. AI-era operating model
   - Section heading: A new operating model for AI-era security
   - Core message: security at AI speed, powered by context
   - Platform CTA
   - Three core areas: Code, Cloud, Defend
   - Secure Development
   - Prevent Cloud and AI Risks
   - Runtime protection

6. AI security agents
   - Wiz Green agent: turns risks into code fixes / PRs
   - Wiz Red agent: automated attack-path discovery and penetration testing
   - Wiz Blue agent: SecOps hunting and investigation

7. AI-Powered Code-to-Cloud Defense CTA block
   - Short CTA headline
   - Schedule a call with a Wiz expert
   - Demo CTA / visual

8. Exposure-to-code-fix workflow
   - Attack surface scanning
   - Deep internal analysis
   - Fix at scale in code
   - Detect and block
   - Repeated carousel presentation with previous/next controls

9. Customer testimonials carousel
   - Security leadership testimonials
   - Repeating card/image pattern
   - Names/titles include Michelle Pieszko, Rohit Kohli, Igor Tsyganskiy, Melody Hildebrandt, Michael Johnson, Susanne Senoff and Nitin Raina in the current crawl
   - Previous/next controls

10. Wiz secures the AI frontier
    - Introductory statement for frontier AI labs
    - Four selectable content states:
      a. Visibility
      b. AI Native Risk
      c. AI Posture
      d. Runtime & Response
    - Repeated image/content panel structure

11. Analyst recognition
    - Forrester Wave
    - IDC MarketScape
    - Voice of the Customer
    - Report/read-review CTAs
    - G2/Gartner social-proof elements

12. Driving Outcomes
    - Speed metric card
    - Impact metric card
    - Simplicity metric card
    - Customer quote + executive attribution per card

13. Closing CTA
    - Ready to see Wiz in action?
    - Get a demo

14. Footer
    - Platform links
    - Learn links
    - Company links
    - Social links: X, LinkedIn, Bluesky, RSS
    - Copyright
    - Status
    - Privacy Policy
    - Terms of Use
    - Modern Slavery Statement
    - Cookie Settings
    - Latest podcast module with YouTube / Spotify / Apple Podcasts links
    - Locale/language selector (English US)

## Homepage interaction inventory

- Primary CTA opens lead/demo flow.
- Lead form includes work email, first name, last name, country, phone number, company and newsletter consent fields.
- Hero also exposes an email-only inline form.
- Customer logos are presented as a trust rail.
- Review badges have a dedicated reviews destination.
- Exposure-to-code-fix content behaves like a carousel.
- Testimonial section behaves like a carousel with previous/next controls.
- AI frontier section behaves like a tabbed/slide selector.
- Footer contains grouped navigation and a cookie-settings action.

## Global form model

Observed demo form fields:
- Work Email (required)
- First Name (required)
- Last Name (required)
- Country
- Phone Number (required)
- Company (required)
- Marketing consent checkbox
- Blog digest checkbox
- Submit

## Visual system observations

- Strong enterprise SaaS aesthetic.
- Large display typography for section headlines.
- Very generous horizontal and vertical whitespace.
- Blue is the dominant action/brand accent.
- White/light neutral surfaces dominate long-form sections.
- Editorial-style headline + concise explanatory copy.
- Rounded UI controls and modern cards.
- Frequent use of abstract illustrations, product UI screenshots, badges and customer logos.
- Carousels/tabbed panels are major content-compression mechanisms.
- Mobile layout must preserve large type hierarchy while collapsing nav and grids.

## Public route families identified

Primary routes observed or referenced:
- /
- /platform
- /platform/wiz-code
- /platform/wiz-defend
- /pricing
- /customers
- /resources
- /about
- /blog/*
- /academy/*
- /cloud-security/*
- /customers/*

Footer-linked destinations also include:
- Integrations
- Environments
- Documentation (docs.wiz.io)
- Customer Stories
- Cloud Security Courses
- CloudSec Academy
- Resources Center
- Cloud Threat Landscape
- Cloud Security Assessment
- Vulnerability Database
- Join the Team
- Newsroom
- Events
- Contact Us
- Trust Center
- Wiz Partner Alliance

## Robots / crawl constraints

robots.txt currently allows / and disallows /vulnerability-database. Sitemap is declared at https://wiz.io/sitemap.xml.

## Build-critical component inventory

- Header / mega-navigation
- Mobile navigation drawer
- Demo lead form
- Inline email CTA form
- Customer logo rail
- Review badge rail
- Hero illustration layer
- Feature/content tabs
- Agent cards
- Exposure-to-fix carousel
- Testimonial carousel
- Analyst recognition cards
- Outcome/stat cards
- Closing CTA
- Multi-column footer
- Podcast footer card
- Cookie settings trigger
- Language selector

## Notes for recreation

Build the information architecture and interaction model from this document, then reproduce visual geometry and behavior with original implementation/assets or assets for which use is permitted. Keep brand-specific text/assets isolated in data/config so the shell can be reused for other websites.

## Sources

- https://www.wiz.io/
- https://www.wiz.io/platform
- https://www.wiz.io/pricing
- https://www.wiz.io/customers
- https://www.wiz.io/resources
- https://www.wiz.io/about
- https://www.wiz.io/platform/wiz-code
- https://www.wiz.io/platform/wiz-defend
- https://www.wiz.io/robots.txt

# Winsume Lift India — Premium Homepage (Next.js)

Bespoke-elevator homepage for **Winsume Lift India Private Limited**, built with Next.js (App
Router), fully static-prerendered, running locally at **http://localhost:3000/winsume** and in
production at **https://savotech.vercel.app/winsume**.

```bash
npm run dev     # development
npm run build   # production build (static prerender)
npm run start   # production server
```

## Stack

- Next.js 15 (App Router) · React 19 · no other runtime dependencies
- `next/font` — Archivo (display, width axis), IBM Plex Sans (body), IBM Plex Mono (data labels)
- `next/image` — responsive srcsets, lazy loading, optimized delivery
- Vanilla CSS in `styles/` (tokens → base → components → sections), content in `lib/data.js`

## Component map (§36 of the brief)

`app/page.jsx` composes: `Hero` · `SolutionFinder` · `IntroStatement` · `StatsStrip` ·
`ProductExplorer` · `IndustrySolutions` · `CabinConfigurator` · `EngineeringStory` ·
`SafetySection` · `LifecycleTimeline` · `ModernizationBanner` · `ProjectShowcase` ·
`WhyWinsume` · `ArchitectCTA` · `MaintenanceSection` · `Testimonials` · `InsightsGrid` ·
`ConsultationCTA` (form) — plus chrome: `Header` (utility bar + mega menus + mobile drawer),
`GlobalSearch`, `FloorIndicator` (elevator journey nav), `MobileCTABar`, `MotionRoot`, `Footer`.

All section content is data-driven from **`lib/data.js`** — shaped to lift into a CMS
(§35). Interactive logic lives in components; copy and collections live in data.

## Content integrity — replacement list (before production)

Verified facts (extracted from winsumelift.com this session) are used directly: company name,
"Since 2018", address, phone +91 99932 77492, WhatsApp, emails, social links.

Everything below ships as a **clearly marked placeholder** and needs Winsume confirmation:

| What | Where | Marker |
| --- | --- | --- |
| Installation/project/city/maintenance counts | Stats strip | `[XXX]` + footnote |
| Project scope, capacity, names | Featured projects | `[CLIENT TO CONFIRM]` |
| Testimonials (3 placeholder quotes) | Testimonials | `[CLIENT TO CONFIRM]` |
| Business hours | Footer, service badge | `[CLIENT TO CONFIRM]` |
| Certification / standards scope | Safety section | `[CLIENT TO CONFIRM]` |
| Architect resources (PDF/DWG) | Architects panel | `In preparation` |
| Form response-time promise | Consultation form note | `[CLIENT TO CONFIRM]` |
| Primary WhatsApp number (two exist on current site) | `lib/data.js` | comment in data |

**Hero footage:** the hero background is a muted looping film (Pexels 3044827 — modern
atrium with moving elevators, 4.8 MB, URL in `components/Hero.jsx` → `HERO_FILM`). It is
`TEMPORARY FOOTAGE` — replace with Winsume's own installation or manufacturing b-roll
before production. It fades in over the still poster; under `prefers-reduced-motion` it never
mounts.

**Photography:** all imagery is verified-resolving Unsplash placeholder photography, labeled as
placeholder in alt text/captions. Replace with genuine Winsume project photography before
launch — prioritised: hero, cabin configurator backdrop, product collection, projects.

## Analytics-ready instrumentation (§34)

Every conversion surface carries a `data-track` attribute (no tracker loaded by default):

`cta-plan-lift-header`, `cta-explore-hero`, `cta-plan-hero`, `cta-expert-hero`,
`solution-finder`, `solution-finder-submit`, `search-open`, `search-result-*`,
`product-{id}`, `solution-{id}`, `projects-filter-*`, `project-{id}`, `cta-request-service`,
`cta-call-*`, `cta-whatsapp-*`, `cta-modernization*`, `consultation-form`,
`consultation-submit`, `mobile-call`, `mobile-whatsapp`, `mobile-quote`, `floor-nav-*`,
`utility-*`, `cta-download-resources`, `cta-project-team`, `cta-insights`, `insight-*`.

Wire by delegating one listener: `document.addEventListener('click', e => …e.target.closest('[data-track]'))`.

## SEO / AEO / GEO (§26)

- Semantic HTML5, single H1, logical heading order, `aria-labelledby` sections
- Descriptive title/meta/OG/Twitter, canonical, `metadataBase`
- JSON-LD: `Organization` + `LocalBusiness` (verified NAP only)
- `app/robots.js` + `app/sitemap.js` metadata routes
- NAP consistent with Google Business Profile; `og:image` generation and breadcrumbs belong to
  inner-page build-out

## Deployment

Live at **https://savotech.vercel.app/winsume** (Vercel project `savotech`, production).
`/` 307-redirects to `/winsume`. The homepage route is `app/winsume/page.jsx`.

```bash
npx vercel deploy --prod          # redeploy from this folder
```

**Domain migration note:** `metadataBase`, canonical/OG URLs (`app/layout.jsx`), and
`app/sitemap.js` / `app/robots.js` currently point at the preview domain. When the site
moves to winsumelift.com, update those five URLs (the JSON-LD Organization identity keeps
`winsumelift.com` already).

## Notes

- Form submissions are client-side demo only — connect to CRM/email workflow.
- `prefers-reduced-motion` fully respected (reveals, doors, parallax, autoplay, smooth scroll).
- Mobile: sticky Call | WhatsApp | Get Quote bar appears after the hero; collection is swipeable.
- Desktop ≥1280px: fixed floor-indicator rail (G, 2–8) tracks and jumps sections.

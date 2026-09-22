---
name: Winsume Lift India
description: Architectural monograph of verticality — graphite, warm paper and champagne bronze for a bespoke elevator brand.
colors:
  ink: "#16171B"
  graphite-950: "#0F1013"
  graphite-900: "#141619"
  graphite-800: "#1F2328"
  graphite-700: "#2A2F36"
  paper: "#F4F1EB"
  paper-2: "#ECE8DF"
  paper-3: "#E2DDD2"
  bronze: "#A98E5F"
  bronze-bright: "#C2A878"
  bronze-deep: "#7A6240"
  stone-700: "#55534C"
  stone-500: "#7D7A71"
  stone-400: "#A6A39A"
  mist: "#C9C6BD"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontVariation: "wdth 118, wght 540–640"
    fontSize: "clamp(2.2rem, 1.2rem + 5.4vw, 5.4rem)"
    fontWeight: 560
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontVariation: "wdth 118"
    fontSize: "clamp(2rem, 1.1rem + 3.4vw, 3.8rem)"
    fontWeight: 560
    lineHeight: 1.04
  title:
    fontFamily: "Archivo, sans-serif"
    fontVariation: "wdth 118"
    fontSize: "1.25–1.7rem"
    fontWeight: 600
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.14–0.22em"
    textTransform: "uppercase"
  scale:
    micro-2: "0.6rem"
    micro-1: "0.62rem"
    annotation: "0.66rem"
    label: "0.72rem"
    label-wide: "0.78rem"
    caption: "0.8rem"
    caption-1: "0.82rem"
    caption-2: "0.84rem"
    caption-3: "0.86rem"
    caption-4: "0.88rem"
    body-small: "0.9rem"
    body-small-1: "0.92rem"
    body-small-2: "0.94rem"
    body-small-3: "0.95rem"
    body-small-4: "0.98rem"
    body: "1rem"
    body-1: "1.02rem"
    lead-in: "1.05rem"
    lead-in-1: "1.06rem"
    lead-in-2: "1.1rem"
    lead-in-3: "1.15rem"
    lead-in-4: "1.18rem"
    title-small: "1.25rem"
    title: "1.35rem"
    title-large: "1.45rem"
    title-fluid-min: "1.5rem"
    title-xl: "1.6rem"
    display-small: "2.6rem"
    fluid-display-min: "2.2rem"
    fluid-display-mid: "2.4rem"
    fluid-display-mid-2: "2.7rem"
    fluid-display-max: "3.6rem"
    fluid-display-2-max: "3.8rem"
    fluid-display-xl-max: "5.4rem"
    fluid-display-2-min: "2rem"
    fluid-lead-max: "1.3rem"
    fluid-title-min: "1.4rem"
    fluid-title-max: "1.7rem"
    fluid-title-2-max: "2.3rem"
rounded:
  none: "0px"
  circle: "50%"
  pill: "2.4rem"
spacing:
  gutter: "clamp(1.25rem, 0.6rem + 2.6vw, 3.5rem)"
  section: "clamp(5rem, 3.4rem + 6vw, 9.5rem)"
  grid-gap: "clamp(0.7rem, 0.4rem + 1vw, 1.2rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "1.02rem 1.9rem"
    rounded: "{rounded.none}"
  button-bronze:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.graphite-950}"
    padding: "1.02rem 1.9rem"
    rounded: "{rounded.none}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "1.02rem 1.9rem"
    rounded: "{rounded.none}"
  button-ghost-light:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    padding: "1.02rem 1.9rem"
    rounded: "{rounded.none}"
---

# Design System: Winsume Lift India

## Overview

**Creative North Star: "The Vertical Monograph"**

The site reads like an architectural monograph devoted to vertical movement: floor-numbered sections, hairline rules, measurement ticks, and typography set with an engineer's restraint. Photography is cinematic; the interface around it stays nearly invisible. Premium quality comes from proportion, whitespace and material honesty — never from ornament.

The page alternates bright architectural passages (warm paper) with dark cinematic ones (graphite) like a building moving between day-lit floors and service cores. One metallic voice — champagne bronze — marks action and orientation, and is deliberately rationed. Sections vary in kind: some almost purely typographic (pillars, testimonials), some technical (the shaft schematic, spec lists), some immersive (hero, solutions stage) — contrast creates the rhythm.

**Key Characteristics:**

- Graphite/warm-paper alternation with bronze as the single accent
- Archivo expanded display against IBM Plex Sans body; Plex Mono reserved for measurement
- Hairline 1px rules and floor-tick devices instead of boxes and cards-in-cards
- Elevator metaphors made functional: floor indicator rail, door-panel reveals, descending scroll cue
- Square corners everywhere; circles only for controls and swatches

## Colors

Palette character: warm neutrals engineered like architectural materials — paper, stone, graphite — with one champagne-metal accent.

### Primary
- **Champagne Bronze** (#A98E5F): the only accent. Primary CTAs, active states, floor indicators, hairline rules on dark sections. On light grounds its small-text variant **Bronze Deep** (#7A6240) keeps ≥4.5:1.
- **Bronze Bright** (#C2A878): the accent's dark-ground voice (kickers, links, callouts on graphite).

### Neutral
- **Graphite Ink** (#16171B): text on paper; the brand's writing voice.
- **Graphite 950/900/800/700** (#0F1013/#141619/#1F2328/#2A2F36): the dark-section ladder — scrims, surfaces, hover steps.
- **Warm Paper** (#F4F1EB): the light ground; **Paper 2** (#ECE8DF) for mid sections; **Paper 3** (#E2DDD2) for door panels and hovers.
- **Stone 700/500/400** (#55534C/#7D7A71/#A6A39A): secondary text on paper / tertiary on both / secondary on graphite. Tinted from the paper hue, never gray-on-gray.
- **Mist** (#C9C6BD): faint annotations on light grounds.

### Named Rules
**The Bronze Budget Rule.** Bronze covers ≤10% of any viewport. Its rarity is the luxury; if everything is accented, nothing is.
**The Alternation Rule.** Dark and bright sections alternate like a building's floors; never two consecutive sections of the same value without a change in density or scale.

## Typography

**Display Font:** Archivo (variable, width axis; fallback sans-serif)
**Body Font:** IBM Plex Sans (fallback sans-serif)
**Label/Mono Font:** IBM Plex Mono

**Character:** Expanded grotesque signage meets engineering documentation — headlines are wide, tracked tight and set low; the mono voice only ever annotates measurements.

### Hierarchy
- **Display** (Archivo wdth 118, wght 560, clamp(2.2rem…5.4rem), lh 0.98–1.04): one per viewport — hero H1, section H2s.
- **Headline** (same family, clamp(2rem…3.8rem)): section leads.
- **Title** (wght 600, 1.25–1.7rem): card and panel headings.
- **Body** (Plex Sans 400/500, 1rem, lh 1.65, max ~56ch): all running copy.
- **Label** (Plex Mono 500, 0.6–0.8rem, +0.14–0.22em, uppercase): floor numbers, sheet labels, spec values, kickers.

### Named Rules
**The Measurement Rule.** Plex Mono appears only where a drawing would annotate: floor numbers, dimensions, spec readouts, sheet labels. Never for sentences.
**The One Display Rule.** Display type is always Archivo expanded; no second display voice exists.

## Layout

One container: `max-width 86rem`, gutters `clamp(1.25rem…3.5rem)`. Section padding `clamp(5rem…9.5rem)`; more space above a heading than below it. Grids are 1px-gap hairline grids (`background: var(--line)`) — the rule is the border. The collection uses an asymmetric editorial grid (wide/tall spans) on desktop and a snap-scroll carousel on mobile. A fixed floor-indicator rail (G, 2–8) appears ≥1280px, left edge. Primary breakpoints: 720 (grid→carousel), 900 (two→four columns), 1060 (mobile→desktop nav + drawer→mega), 1280 (floor rail).

## Elevation & Depth

Flat by default. Depth comes from tonal steps (the paper and graphite ladders) and photographic scrims, not shadows. Two functional exceptions: the mega menu drops a large soft shadow (`0 42px 60px rgba(15,16,19,.5)`) over content, and the search overlay dims + blurs the page behind it.

### Named Rules
**The Flat-By-Default Rule.** No resting shadows. Elevation appears only for true overlays.

## Shapes

Square corners everywhere (radius 0) — the architectural signature. Circles are reserved for controls: swatches, round arrow buttons, testimonial dots. The one expressive form is the **elevator-door reveal**: two panels (clip-path inset halves) sliding apart over imagery, used sparingly on first-reveal images.

## Components

### Buttons
- **Shape:** square (0 radius), uppercase 0.86rem/600, +0.09em, padding 1.02rem 1.9rem.
- **Primary:** ink ground / paper text. **Bronze:** bronze ground / graphite-950 text (the hero/final CTA voice). **Ghost:** 1px hairline border (ink on light, paper on dark).
- **Hover:** ground steps one tonal level; the arrow glyph translates +4px. Focus: 2px bronze outline, 3px offset.

### Sheet label
The section annotation device: `[no] — rule — TITLE` in Plex Mono; numbered sheets double as the floor system's wayfinding (02 Collection … 07 Service).

### Cards
Product and project cards are full-bleed photographs under a bottom gradient scrim; text sits on the scrim, never in a chip box. Descriptions expand on hover (always visible on touch).

### Inputs
Dark-field style in the consultation form (graphite ground, hairline border), light-field in the finder (paper ground, hairline grid). Focus = bronze border, no glow. Labels are mono uppercase above fields.

### Navigation
Transparent over the hero, graphite on scroll. Utility bar (support/service/downloads/contact + phone/email), mega menus with columns + featured image card, icon-button search (press `/`), bronze "Plan Your Lift" CTA. Mobile: full-screen drawer with accordion, clip-path door-wipe transition; sticky Call | WhatsApp | Get Quote bar.

### Signature components
- **Hero film:** a muted, looping architecture film (moving elevators) that fades in over the optimized still poster once playable; never mounts under `prefers-reduced-motion`.
- **Floor indicator rail:** fixed, mono floor numbers G/2–8, current floor in bronze, direction arrows, dark/light aware.
- **Cabin configurator:** one-point-perspective SVG cabin whose gradients re-render live from the finish library (walls / floor / ceiling / handrail).
- **Solution finder:** four-question recommender returning linked cards.
- **Doors:** elevator-door image reveals on first intersection.

## Do's and Don'ts

### Do:
- **Do** alternate dark and bright sections; the page is a building, not a scroll of cards.
- **Do** use bronze for exactly one thing per view: the primary action or the orientation mark.
- **Do** keep mono labels short — they annotate, they never speak.
- **Do** let photography carry emotion; keep UI around it hairline-thin.
- **Do** mark unverifiable content with the `[CLIENT TO CONFIRM]` treatment — integrity is part of the brand.

### Don't:
- **Don't** add radii, drop shadows, glass, gradient text or icon-card grids — the system's surfaces are flat and ruled.
- **Don't** introduce a second accent colour or a decorative display face.
- **Don't** use Plex Mono for body copy or buttons.
- **Don't** cover sections with nested boxes; separation is whitespace + 1px rules.
- **Don't** animate anything faster than `--dur-fast` (350ms) except the door wipe; motion is smooth, slow, precise.

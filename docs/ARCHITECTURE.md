# Technical Architecture & Standards

This document outlines the architecture, code organization, accessibility compliance, and state lifecycle for the Finovision corporate website.

---

## 1. Architectural Principles

1. **Zero Runtime Dependencies**: The website is built with native Vanilla HTML5, CSS3, and modern ECMAScript. No heavy JS frameworks, compilers, or bundlers are required.
2. **Progressive Enhancement**: Content is fully accessible and readable even if JavaScript fails to load or is disabled.
3. **Speed & Carbon Efficiency**: Minimal page payload (< 1.5MB total including high-resolution imagery) guaranteeing sub-second Largest Contentful Paint (LCP).
4. **WCAG 2.1 AA Accessibility Baseline**: Full screen-reader support, keyboard focus visibility, and semantic HTML landmarks.

---

## 2. Directory Hierarchy

```text
finovision/
├── index.html               # Semantic HTML5 document containing all 7 primary sections
├── app.js                   # Client-side behavior (Strict Mode, DOMContentLoaded lifecycle)
├── styles/
│   ├── base.css             # Foundational tokens, CSS reset, typography, and responsive grid
│   └── advisory.css         # Modern Advisory theme components, layouts, and animations
├── assets/
│   ├── finovision-mark.svg  # Scalable vector logo mark
│   ├── finoza_review_img.jpg# 800x600 audit and financial analysis photography
│   └── finoza_team_img.jpg  # 800x600 advisory meeting photography
└── docs/
    ├── ARCHITECTURE.md      # This document
    ├── STYLE_GUIDE.md       # Visual tokens and CSS conventions
    └── CONTENT_SPECIFICATION.md # Verified profile and legal specifications
```

---

## 3. DOM & Section Layout Structure

The page consists of 7 structured sections within standard HTML landmarks:

```html
<header class="site-header" role="banner">
  <!-- Brand link, SVG logo mark, primary navigation links, direct telephone, and CTA -->
</header>

<main id="main-content" role="main">
  <!-- Section 1: Hero (Advisory Compass orbit diagram + value proposition) -->
  <section class="finoza-hero" aria-label="Introduction">...</section>

  <!-- Section 2: Narrative About (Dual overlapping photo collage + story) -->
  <section class="section finoza-about" id="about" aria-labelledby="about-heading">...</section>

  <!-- Section 3: Practice Areas (4 service boxes with circular action anchors) -->
  <section class="section finoza-services" id="services" aria-labelledby="services-heading">...</section>

  <!-- Section 4: Operational Knowledge (Deep green card + meeting photography) -->
  <section class="section finoza-knowledge" id="knowledge" aria-labelledby="knowledge-heading">...</section>

  <!-- Section 5: Track Record Metrics (18+ Years, License #1804056, 3 Markets, PwC/ATT) -->
  <section class="section finoza-stats" aria-label="Track record and credentials">...</section>

  <!-- Section 6: Interactive FAQ Accordion (Native <details> elements) -->
  <section class="section finoza-faq" id="faq" aria-labelledby="faq-heading">...</section>

  <!-- Section 7: Consultation Contact Form (Instant feedback handler) -->
  <section class="section finoza-cta" id="contact" aria-labelledby="contact-heading">...</section>
</main>

<footer class="finoza-footer" role="contentinfo">
  <!-- Entity information, license number, commercial address, and copyright -->
</footer>
```

---

## 4. Script Lifecycle & Event Handling (`app.js`)

`app.js` runs in strict mode (`'use strict'`) inside a single `DOMContentLoaded` listener:

1. **Mobile Navigation Drawer**:
   - Toggles `aria-expanded` and `aria-label` on `.menu-toggle`.
   - Adds/removes `.open` class on `.nav-links`.
   - Prevents background body scrolling (`overflow: hidden`) when drawer is open.
   - Automatically closes when:
     - An in-drawer anchor link is tapped.
     - The user clicks outside the drawer.
     - The user presses the `Escape` key (focus returns to `.menu-toggle`).

2. **Scroll Reveal Animation**:
   - Uses native `IntersectionObserver` with a `0.12` threshold.
   - Elements with `.reveal` transition smoothly to `.visible` as they enter the viewport.
   - Graceful fallback: If `IntersectionObserver` is not supported, `.reveal` elements are immediately displayed.

3. **Consultation Request Form**:
   - Intercepts form `submit` event via `preventDefault()`.
   - Validates that name and email inputs are provided.
   - Provides user feedback in an accessible `role="status"` element.
   - Resets the form upon completion.

---

## 5. Accessibility & SEO Checklist

- [x] **Skip Link**: `<a class="skip-link" href="#main-content">` present as the very first focusable element.
- [x] **Focus Indicators**: Unambiguous `:focus-visible` styling (`outline: 2px solid #0d3826; outline-offset: 3px;`).
- [x] **Screen Reader Labels**: Hidden `.sr-only` labels attached to all form input fields.
- [x] **Structured Data**: Schema.org `AccountingService` JSON-LD embedded in `<head>`.
- [x] **Social Sharing**: Complete Open Graph (`og:`) and Twitter Card (`twitter:`) tags.
- [x] **Motion Preferences**: Respects `prefers-reduced-motion: reduce` by zeroing transition durations.

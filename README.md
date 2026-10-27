# Finovision Business Solutions LLC — Production Website

[![License](https://img.shields.io/badge/License-Commercial-0d3826.svg)](https://finovisionuae.com)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-10b981.svg)]()
[![Standards](https://img.shields.io/badge/Standards-HTML5%20%7C%20WCAG%202.1%20AA-blue.svg)]()

Modern, ultra-fast corporate website for **Finovision Business Solutions LLC**, an accredited business advisory, accounting, statutory audit, and ERP systems firm based in Sharjah Media City (Shams), UAE.

---

## Table of Contents

- [Overview & Client Identity](#overview--client-identity)
- [Design Direction](#design-direction)
- [Repository Architecture](#repository-architecture)
- [Coding Standards & Accessibility](#coding-standards--accessibility)
- [Getting Started & Local Development](#getting-started--local-development)
- [Deployment Guide](#deployment-guide)
- [Documentation Index](#documentation-index)

---

## Overview & Client Identity

- **Entity**: Finovision Business Solutions LLC
- **Jurisdiction**: Sharjah Media City (Shams), Sharjah, United Arab Emirates
- **Commercial License**: #1804056
- **Regional Footprint**: United Arab Emirates · Oman · India (18+ Years Combined Track Record)
- **Direct Advisory Hotline**: `+971 50 301 0675`
- **Core Practice Disciplines**:
  1. Accounting & Routine Bookkeeping (double-entry ledgers, payroll WPS, periodic closing)
  2. Statutory Audit, Assurance & Internal Control Reviews
  3. UAE VAT & Corporate Tax Consultancy (FTA compliance, supply classification, input recovery)
  4. ERP & Business Software Systems (Zoho Books, Tally Prime, Odoo, QuickBooks, and POS)

---

## Design Direction

The design follows the client-selected **Integrated Advisory** direction:
- **Palette**: Deep Emerald (`#0d3826`), Warm Alabaster (`#fbfaf6`), Sage Mist (`#eef6f0`), Slate Gray (`#5a6760`), and Accent Coral (`#e06b53`).
- **Typography**: Clean, geometric, high-legibility sans-serif (`Inter`, system UI stack).
- **Interactive Visual**: An abstract system-led *Advisory Compass* showing how accounting, controls, VAT, and systems work as a connected orbit.
- **Visual Proof**: Verified credentials badge (CPA Alaska, MBA Finance Manipal, PwC/ATT GCC VAT) and authentic boardroom advisory photography.

---

## Repository Architecture

```text
finovision/
├── .gitignore               # Standard macOS, OS, and IDE ignore rules
├── README.md                # Main repository documentation
├── index.html               # Production single-page website
├── app.js                   # Client-side JavaScript (strict mode, accessible navigation, form handling)
├── assets/                  # Brand vectors and optimized advisory photography
│   ├── finovision-mark.svg  # Official SVG brand mark
│   ├── finoza_review_img.jpg# Financial audit & spreadsheets review photo
│   └── finoza_team_img.jpg  # Advisory team collaborative meeting photo
├── styles/                  # Modular Vanilla CSS
│   ├── base.css             # Design tokens, reset, typography, and accessibility utilities
│   └── advisory.css         # Modern Advisory component styles, animations, and responsive rules
└── docs/                    # Technical & brand documentation
    ├── ARCHITECTURE.md      # Technical architecture, lifecycle, and component breakdown
    ├── STYLE_GUIDE.md       # Visual tokens, typography scale, and CSS conventions
    ├── CONTENT_SPECIFICATION.md # Verified business facts, credentials, and legal profile
    └── ...                  # Client-supplied reference documents (PDFs & profiles)
```

---

## Coding Standards & Accessibility

The codebase strictly adheres to modern enterprise web standards:

1. **Semantic HTML5**:
   - Single, distinct `<h1>` per page.
   - Descriptive landmarks (`<header role="banner">`, `<main id="main-content" role="main">`, `<footer role="contentinfo">`, `<section aria-labelledby="...">`).
   - Accessible heading hierarchy (`h1` → `h2` → `h3`).

2. **Web Content Accessibility Guidelines (WCAG 2.1 AA)**:
   - Visible keyboard `:focus-visible` styling with 3px outline offsets.
   - Accessible *Skip to main content* anchor for screen readers and keyboard navigation.
   - Mobile navigation drawer includes `aria-expanded`, `aria-label`, click-outside handling, and `Escape` key capture.
   - All form controls contain paired screen-reader labels (`.sr-only`), input types, and `autocomplete` attributes.

3. **Performance & SEO**:
   - Zero runtime JavaScript dependencies or heavy frameworks.
   - Responsive, async-decoded, lazy-loaded images with explicit `width` and `height` to prevent Cumulative Layout Shift (CLS).
   - Complete Open Graph (Facebook/LinkedIn) and Twitter Cards meta tags.
   - Integrated Schema.org `AccountingService` JSON-LD microdata for rich search engine indexing.

4. **Vanilla Modular CSS**:
   - CSS custom properties (variables) defined at `:root`.
   - Fluid typography using CSS `clamp()`.
   - Respects user preference for reduced motion (`@media (prefers-reduced-motion: reduce)`).

---

## Getting Started & Local Development

No package installation or build steps are required.

To preview locally:

```bash
# Using Python 3 built-in HTTP server:
python3 -m http.server 4173

# Or using Node.js npx serve:
npx serve -l 4173
```

Open your browser to `http://localhost:4173`.

### Code Validation

```bash
# Validate JavaScript syntax:
node -c app.js
```

---

## Deployment Guide

This project is a static site with zero build requirements:

### Vercel
1. Import repository on [vercel.com](https://vercel.com).
2. Framework Preset: **Other**.
3. Build Command: Leave blank.
4. Output Directory: `./`.

### Netlify
1. Connect repository on [netlify.com](https://netlify.com).
2. Build command: Leave blank.
3. Publish directory: `.`.

### Cloudflare Pages / GitHub Pages
- Set publishing source to `main` branch root (`/`).

---

## Documentation Index

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — Technical structure and lifecycle documentation
- [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md) — Design tokens, color system, and typography reference
- [docs/CONTENT_SPECIFICATION.md](docs/CONTENT_SPECIFICATION.md) — Verified client profile, credentials, and compliance facts

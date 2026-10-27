# Finovision Business Solutions LLC — Production Website

[![Status](https://img.shields.io/badge/Status-Multi--Page%20Production%20Ready-10b981.svg)]()
[![Standards](https://img.shields.io/badge/Standards-HTML5%20%7C%20WCAG%202.1%20AA-blue.svg)]()
[![Theme](https://img.shields.io/badge/Design-Integrated%20Advisory%20(Emerald%20%26%20Alabaster)-073c34.svg)]()

Multi-page corporate website for **Finovision Business Solutions LLC**, an accredited business advisory, accounting, statutory audit, UAE VAT compliance, and cloud ERP systems firm based in Sharjah Media City (Shams), UAE.

---

## Table of Contents

- [Corporate Identity](#corporate-identity)
- [Multi-Page Architecture](#multi-page-architecture)
- [Design System](#design-system)
- [Coding Standards & Accessibility](#coding-standards--accessibility)
- [Local Development & Testing](#local-development--testing)
- [Deployment Guide](#deployment-guide)
- [Documentation Suite](#documentation-suite)

---

## Corporate Identity

- **Entity**: Finovision Business Solutions LLC
- **Jurisdiction**: Sharjah Media City (Shams), Sharjah, United Arab Emirates
- **Commercial License**: #1804056
- **Telephone / WhatsApp**: `+971 50 301 0675` (`050 301 0675`)
- **Official Email**: `admin@finovision.net`
- **Hours of Operation**:
  - Sunday – Thursday: 9:00 AM – 6:00 PM
  - Saturday: By appointment
  - Friday: Closed
- **Core Qualifications**:
  - Certified Public Accountant (CPA, Alaska, USA)
  - MBA in Finance (Manipal University, Dubai)
  - Diploma in GCC VAT Compliance (PwC / ATT)
- **Regional Footprint**: United Arab Emirates · Oman · India (18+ Years Combined Corporate Track Record)

---

## Multi-Page Architecture

Instead of an all-in-one scrolling layout, the website is organized into dedicated pages populated with verified data from the company's official documentation:

```text
finovision/
├── index.html               # Home (Hero Advisory Compass, Practice highlights, Track Record)
├── about.html               # About Us (Company Profile, Vision, Mission, Values, Team Qualifications)
├── services.html            # Services (Consultancy & Value-Added Technology Solutions)
├── vat-services.html        # UAE VAT & Tax (Dedicated compliance flyer specifications)
├── contact.html             # Contact Us (Direct hotline, Office hours, Consultation form, FAQ)
├── app.js                   # Client-side JavaScript (Strict Mode, accessible mobile drawer, reveal observer)
├── styles/
│   ├── base.css             # Foundational tokens, reset, typography, and accessibility utilities
│   └── advisory.css         # Advisory theme components, subpage banners, and responsive styles
├── assets/
│   ├── finovision-mark.svg  # Scalable vector logo mark
│   ├── finoza_review_img.jpg# Financial audit & spreadsheets review photo
│   └── finoza_team_img.jpg  # Advisory team collaborative meeting photo
└── docs/
    ├── ARCHITECTURE.md      # Technical architecture, DOM structure, and script lifecycle
    ├── STYLE_GUIDE.md       # Visual tokens, typography scale, and CSS conventions
    ├── CONTENT_SPECIFICATION.md # Verified business facts, credentials, and legal profile
    └── ...                  # Client-supplied reference documents
```

---

## Coding Standards & Accessibility

1. **Semantic HTML5 & WCAG 2.1 AA**:
   - Distinct, descriptive `<h1>` on every page with sequential heading hierarchy.
   - Accessible landmark roles (`role="banner"`, `role="main"`, `role="contentinfo"`).
   - Skip to main content link (`.skip-link`) as the first focusable element on every page.
   - Visible focus indicators (`:focus-visible`) for keyboard navigation.
   - Paired `.sr-only` labels on form controls with appropriate `autocomplete` attributes.
   - Zero emojis in all HTML files.

2. **SEO & Structured Data**:
   - Unique title tags, meta descriptions, and Open Graph / Twitter Card tags on every page.
   - Schema.org `AccountingService` JSON-LD microdata on `index.html`.

3. **Performance Optimization**:
   - Zero runtime framework dependencies.
   - Lazy-loaded (`loading="lazy"`), async-decoded (`decoding="async"`) images with explicit width and height.

---

## Local Development & Testing

Run a local server from the workspace root:

```bash
# Using Python 3:
python3 -m http.server 4173

# Or using Node.js:
npx serve -l 4173
```

Open `http://localhost:4173` in your browser.

Validate JavaScript syntax:

```bash
node -c app.js
```

---

## Deployment Guide

Static buildless deployment ready for:
- **Vercel**: Import repository, framework preset *Other*, build command *blank*, output directory `./`.
- **Netlify**: Connect repo, build command *blank*, publish directory `.`.
- **GitHub Pages / Cloudflare Pages**: Deploy from `main` branch root.

---

## Documentation Suite

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — Multi-page structure and DOM lifecycle
- [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md) — Emerald & Alabaster design tokens and typography
- [docs/CONTENT_SPECIFICATION.md](docs/CONTENT_SPECIFICATION.md) — Verified client profile, credentials, and services breakdown

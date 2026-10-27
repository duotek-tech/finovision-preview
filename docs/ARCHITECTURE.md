# Technical Architecture & Multi-Page Standards

This document describes the multi-page structure, DOM landmarks, shared CSS modules, and accessibility baseline for the Finovision corporate website.

---

## 1. Page Hierarchy & URLs

| File | Page Title | Primary Purpose & Content |
| :--- | :--- | :--- |
| `index.html` | Home | Advisory Compass interactive diagram, practice summary, core metrics, CTA |
| `about.html` | About Us | Company profile, Vision, Mission, Core Values, Leadership qualifications |
| `services.html` | Services | Complete consultancy catalog and value-added software solutions |
| `vat-services.html` | VAT Services | Specialized flyer breakdown: 6 compliance pillars, PwC/ATT certification |
| `contact.html` | Contact Us | Direct hotline, email, office location, business hours, inquiry form, FAQ |

---

## 2. Shared Layout Conventions

Every page implements the following standardized layout structure:

1. **Accessibility Skip Link**:
   ```html
   <a class="skip-link" href="#main-content">Skip to main content</a>
   ```

2. **Site Header**:
   - Semantic `<header class="site-header" role="banner">`.
   - SVG brand mark with text lockup.
   - Mobile navigation toggle `<button class="menu-toggle" aria-expanded="false" aria-label="Open navigation menu">`.
   - Primary navigation links with `class="active"` on the current page.
   - Header contact pill with clickable phone number (`tel:+971503010675`) and CTA button.

3. **Main Content Container**:
   - `<main id="main-content" role="main">` for skip-link targeting.
   - Subpages include `<section class="subpage-hero">` with `.breadcrumb` navigation.

4. **Site Footer**:
   - `<footer class="finoza-footer" role="contentinfo">`.
   - Brand mark, official Shams license number, telephone, and official email.
   - Graphic three-bars icon and copyright notice.

---

## 3. Script Architecture (`app.js`)

- Operates in strict mode (`'use strict'`).
- Executed on `DOMContentLoaded`.
- Shared across all pages:
  - Accessible mobile drawer toggle with click-outside and `Escape` key capture.
  - IntersectionObserver scroll-reveal engine.
  - Contact and consultation form submission handler with validation and status feedback.

---

## 4. Coding Standards Compliance Checklist

- [x] **No Emojis**: All decorative and informational markers use inline SVG vectors or standard typographical punctuation.
- [x] **Semantic Landmarks**: Standard HTML5 landmarks (`banner`, `main`, `contentinfo`, `section`, `article`, `details`).
- [x] **Keyboard Accessibility**: Visible focus states (`:focus-visible`), skip-link, and accessible keyboard navigation in mobile menu.
- [x] **Form Labels**: Every input field includes paired `.sr-only` accessibility labels and modern `autocomplete` attributes.
- [x] **Image Loading**: All images specify `loading="lazy"`, `decoding="async"`, and explicit dimensions to avoid CLS.

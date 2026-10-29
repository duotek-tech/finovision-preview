# Technical Architecture & Multi-Page Standards

This document describes the multi-page structure, DOM landmarks, shared CSS modules, clean URL routing, and accessibility baseline for the Finovision corporate website.

---

## 1. Clean URLs & Page Hierarchy

All public routes hide `.html` extensions. The application uses canonical `https://finovision.net` as the primary domain:

| Clean Public URL | Internal Source File | Directory Fallback | Primary Purpose & Content |
| :--- | :--- | :--- | :--- |
| `https://finovision.net/` | `index.html` | `/index.html` | Home: Advisory Compass interactive diagram, practice summary, core metrics, CTA |
| `https://finovision.net/about` | `about.html` | `about/index.html` | About Us: Company profile, Vision, Mission, Core Values, Leadership qualifications |
| `https://finovision.net/services` | `services.html` | `services/index.html` | Services: Complete consultancy catalog and value-added software solutions |
| `https://finovision.net/vat-services` | `vat-services.html` | `vat-services/index.html` | VAT Services: Specialized flyer breakdown: 6 compliance pillars, PwC/ATT certification |
| `https://finovision.net/contact` | `contact.html` | `contact/index.html` | Contact Us: Direct hotline, email, office location, business hours, inquiry form, FAQ |

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
   - Primary clean URL navigation links (`/`, `/about`, `/services`, `/vat-services`, `/contact`).
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
  - **Dynamic Clean Path Active Link Matcher**: Automatically inspects `window.location.pathname`, strips trailing slashes and `.html` extensions, and adds the `.active` class to the appropriate navigation link.
  - **Accessible Mobile Drawer**: Handles toggle, focus traps, outside click dismiss, and `Escape` key close.
  - **IntersectionObserver Engine**: Automatically reveals elements with `.reveal` as they scroll into view.
  - **Consultation Form Handler**: Asynchronously validates inputs and displays live accessible confirmation without page reload.

---

## 4. Multi-Platform Clean URL & Domain Routing

- **Vercel (`vercel.json`)**: Enforces `cleanUrls: true`, serves `finovision.net` directly, and redirects secondary domains and `www.*` to `https://finovision.net`.
- **Netlify & Cloudflare (`_redirects` & `netlify.toml`)**: Enforces `pretty_urls = true`, serves `finovision.net` directly, and redirects secondary domains to `https://finovision.net/:splat`.
- **Apache / cPanel / LiteSpeed (`.htaccess`)**: Strips `.html` requests via `mod_rewrite` and redirects `finovision.net` traffic to `https://finovision.net`.
- **Static Server Fallback**: Subdirectories (`about/index.html`, `services/index.html`, etc.) ensure clean directory loading on any static host or local server.

---

## 5. Coding Standards Compliance Checklist

- [x] **No Emojis**: All decorative and informational markers use inline SVG vectors or standard typographical punctuation.
- [x] **Semantic Landmarks**: Standard HTML5 landmarks (`banner`, `main`, `contentinfo`, `section`, `article`, `details`).
- [x] **Keyboard Accessibility**: Visible focus states (`:focus-visible`), skip-link, and accessible keyboard navigation in mobile menu.
- [x] **Form Labels**: Every input field includes paired `.sr-only` accessibility labels and modern `autocomplete` attributes.
- [x] **Image Loading**: All images specify `loading="lazy"`, `decoding="async"`, and explicit dimensions to avoid CLS.
- [x] **SEO & GEO Standards**: Canonical tags to `https://finovision.net`, Sharjah Media City GEO coordinates, Schema.org JSON-LD structured data.

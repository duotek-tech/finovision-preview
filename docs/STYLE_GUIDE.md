# Design System & Style Guide

This style guide documents the color palette tokens, typography rules, component patterns, and responsive breakpoints for the Finovision website.

---

## 1. Color Palette Tokens

The design system uses a curated **Emerald & Ivory** corporate palette tailored for professional Middle Eastern advisory firms:

| Token Name | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| **Forest Green (Primary)** | `#0d3826` | Primary brand color, headers, CTAs, hero background |
| **Deep Moss Green** | `#082619` | Dark cards, contrast blocks, footer background |
| **Ivory / Warm Alabaster** | `#fbfaf6` | Primary page canvas background |
| **Card White** | `#ffffff` | Elevated cards, forms, and service boxes |
| **Sage Mist** | `#eef6f0` | Light accent pills, icons, and subtle badge containers |
| **Text Charcoal** | `#14241d` | High-contrast body copy and headings |
| **Text Slate Muted** | `#5a6760` | Secondary descriptions, captions, and metadata |
| **Accent Coral** | `#e06b53` | Micro-badges, notification dots, focus highlights |
| **Border Line** | `#e2eae5` | Card outlines, dividers, and table borders |

---

## 2. Typography Scale

The site utilizes a modern system font stack prioritizing **Inter** with fallbacks to native OS geometric sans-serifs (`-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`):

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Scale Hierarchy

- **Hero Title (`h1`)**:
  - Desktop: `clamp(2.6rem, 5.2vw, 4.4rem)`
  - Line-height: `1.04`
  - Letter-spacing: `-0.05em`
  - Font-weight: `800`
- **Section Heading (`h2`)**:
  - Fluid: `clamp(2rem, 4vw, 3.2rem)`
  - Line-height: `1.08`
  - Letter-spacing: `-0.04em`
  - Font-weight: `800`
- **Card Subheading (`h3`)**:
  - Size: `1.3rem` – `1.45rem`
  - Font-weight: `750`
- **Eyebrow / Category Tag**:
  - Size: `0.75rem`
  - Text-transform: `uppercase`
  - Letter-spacing: `0.14em`
  - Font-weight: `800`
- **Body Text**:
  - Size: `0.95rem` – `1.05rem`
  - Line-height: `1.65`
  - Color: `#14241d` or `#5a6760`

---

## 3. Spacing & Layout Tokens

- **Max Container Width**: `1180px` (`var(--max)`)
- **Default Section Padding**: `110px 0` (Desktop), `70px 0` (Mobile)
- **Standard Border Radius**:
  - Cards & Panels: `22px` – `28px`
  - Badges & Buttons: `999px` (full pill)
  - Inputs & Small Elements: `12px` – `14px`

---

## 4. Key Interactive Components

### Primary Button (`.button-finoza`)
- Background: `#0d3826`
- Color: `#ffffff`
- Shape: Rounded pill (`border-radius: 999px`)
- Hover: Subtle scale lift (`transform: translateY(-2px)`), shadow enhancement

### Service Box (`.service-box`)
- Background: `#ffffff`
- Border: `1px solid #e2eae5`
- Top index badge: `01`, `02`, `03`, `04`
- Center icon circle: `#eef6f0` background with emerald stroke icon
- Bottom right: Circular action arrow `→`

### Advisory Compass (`.advisory-compass`)
- Centered circular financial intelligence graphic
- Outer rotating orbit rings showing synchronized connectivity
- Four peripheral node tags: Records (Accounting), Confidence (Controls), Compliance (VAT & Corporate Tax), Flow (Systems)
- Central core: "Finance in focus"

---

## 5. Responsive Breakpoints

- **Desktop (Large)**: `> 1024px` (Full 2-column hero, 4-column service grid)
- **Tablet**: `768px – 1024px` (2-column service grid, adjusted hero padding)
- **Mobile**: `< 768px` (Single-column layout, full-screen slide-in navigation drawer)

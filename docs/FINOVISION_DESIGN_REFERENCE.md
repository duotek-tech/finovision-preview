# Finovision Website Design Reference

This document records the visual language of the current Finovision website. It is intended as a **do-not-repeat reference** for future websites. A future site may be polished and professional, but it should use a clearly different palette, geometry, typography, interaction language, and component vocabulary.

## 1. Overall Visual Signature

The current site can be recognized by this combination:

- Professional UAE business-advisory positioning.
- Emerald, forest-green, mint, ivory, and white color system.
- Light editorial canvas with dark-green contrast sections.
- Rounded UI, especially pill buttons and large-radius cards.
- Soft green-tinted shadows instead of hard black shadows.
- Large, tightly tracked sans-serif headings.
- Hero composition with an emerald arch behind a rounded portrait/team image.
- Interactive financial/tax calculator presented as a prominent white card.
- Four service cards arranged in a clean grid with circular arrow actions.
- Floating trust badges and small metric cards around the hero artwork.
- Subtle scroll-reveal animations that move content upward into view.
- Full-screen right-to-left mobile navigation drawer.
- Small uppercase eyebrow labels with generous letter spacing.

The next website should avoid reproducing this combination even if individual elements are common in isolation.

## 2. Current Color System

### Brand and surface colors

| Role | Current token | Hex / value | Current usage |
|---|---|---:|---|
| Primary forest | `--finoza-forest` | `#073c34` | Main headings, nav text, dark panels, active controls |
| Dark forest | `--finoza-dark` | `#052a24` | Footer and deepest contrast surfaces |
| Primary green | `--finoza-green` | `#00b074` | CTAs, icons, highlights, active accents |
| Bright green | `--finoza-green-bright` | `#00c853` | Hover states and emphasis |
| Mint surface | `--finoza-mint` | `#f3faf6` | Cards, panels, mobile navigation background |
| Ivory canvas | `--finoza-cream` | `#fafdfb` | Main page background |
| Pale border | `--finoza-border` | `#d7ede4` | Card outlines and separators |
| Main text | `--finoza-text` | `#1a2e2b` | Body copy |
| Muted text | `--finoza-muted` | `#526e67` | Descriptions, labels, metadata |
| White | direct value | `#ffffff` | Cards, text on dark surfaces, image overlays |

### Other recurring colors

```text
#089b67       green gradient stop
#059669       avatar accent
#34d399       mint avatar/accent
#dbeae2       slider track
#f2f7f4       preset controls
#f7faf8       calculator controls
#fbfdfc       calculator header
rgba(7, 60, 52, ...)       green-tinted borders and shadows
rgba(0, 176, 116, ...)     green glow and focus effects
```

### Color characteristics to avoid next time

- Do not use a green-led palette as the primary brand expression.
- Do not pair near-white ivory with mint panels and emerald text.
- Do not use bright emerald as the universal CTA and active-state color.
- Do not use green-tinted shadows or green glows as the default elevation treatment.
- Do not reuse the forest-green-on-cream contrast pattern for hero, footer, and CTA sections.
- Do not use the same semantic mapping of green = action, mint = surface, forest = authority.

## 3. Typography

### Current typography

- Primary family: `Inter`, followed by system sans-serif fallbacks.
- Alternate declaration: `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`.
- Overall tone: modern, compact, corporate, highly legible sans-serif.
- Main headings use heavy weight, tight tracking, and short line-height.
- Heading letter-spacing is commonly between `-0.035em` and `-0.055em`.
- Eyebrows and labels are uppercase with letter-spacing around `.10em`–`.14em`.
- Body copy is muted through opacity or the `#526e67` muted-text color.

### Current type scale

| Element | Current treatment |
|---|---|
| Hero heading | `clamp(2.2rem, 3.4vw, 3.5rem)` in the Finovision hero; large global hero variants reach `6.8rem` |
| Section heading | Approximately `clamp(2rem, 4vw, 4rem)` |
| Card heading | Approximately `1.18rem`–`1.3rem` |
| Body copy | Approximately `0.92rem`–`1.05rem`, line-height around `1.6` |
| Eyebrow | Approximately `.75rem`–`.84rem`, uppercase, bold, letter-spaced |
| Metadata | Approximately `.62rem`–`.78rem`, uppercase or compact muted labels |

### Typography to avoid next time

- Do not use Inter or the same system-sans stack as the primary visual cue.
- Do not use very heavy geometric headings with tight negative tracking.
- Do not repeat uppercase, letter-spaced eyebrow labels throughout every section.
- Do not use the same oversized hero heading plus muted one-paragraph description pattern.

Possible directions for a distinct next site: a serif-led editorial system, a humanist grotesk, a mono/technical system, or a deliberately restrained type scale with normal tracking.

## 4. Layout and Spacing

### Current layout tokens

```text
Maximum content width: 1180px
Desktop container side padding: 24px
Mobile container side padding: 16px
Desktop section padding: 110px 0
Tablet section padding: 84px 0
Mobile section padding: 64px 0
Default global radius: 24px
Large panel radius: 28px–34px
Small control radius: 6px–16px
Pill radius: 999px
```

### Current composition patterns

- Fixed transparent header that becomes translucent ivory with blur after scrolling.
- Two-column hero: copy on the left, staged image/calculator composition on the right.
- Two-column split sections with large flexible gaps.
- Three-column process/service layouts on desktop.
- Four-card service deck on the home page.
- Two-column audience and contact layouts that collapse to one column.
- Full-width dark CTA banner near the bottom of the page.
- Dark footer with multiple link columns and a bottom accent strip.

### Layout to avoid next time

- Do not use the same left-copy/right-visual hero structure.
- Do not repeat the 1180px centered container with large vertical whitespace.
- Do not repeat four equal service cards in a horizontal deck.
- Do not place a calculator or business simulator as the hero-side focal point.
- Do not reuse the dark bottom CTA followed by a multi-column dark footer.

## 5. Header and Navigation

### Desktop header

- Fixed to the top with a transparent initial state.
- Navigation height starts around `92px`, reducing to `72px` when scrolled.
- Brand includes a green mark, bold wordmark, and tiny uppercase descriptor.
- Navigation links are compact and medium-bold.
- Non-button links use a thin animated underline from left to right.
- The main CTA is a green, rounded pill button.

### Mobile navigation drawer

There is no traditional content modal in the current website. The main overlay interaction is the mobile navigation drawer:

- Full viewport fixed panel.
- Slides in from the right using `transform: translateX(100%)` to `translateX(0)`.
- Ivory/mint background with dark forest text.
- Large vertically stacked links with bottom separators.
- Contains the phone number and CTA after the main links.
- Closes on menu toggle, outside click, and `Escape`.
- Uses focus handling and `aria-expanded` state.
- Has a very high stacking order around `10000`.

### Navigation to avoid next time

- Do not repeat a right-side full-screen drawer.
- Do not use the same hamburger-to-X animation.
- Do not use the same transparent-to-blurred ivory header transition.
- Consider a bottom sheet, centered navigation overlay, split navigation rail, or an always-visible editorial navigation instead.

## 6. Buttons and Interactive Controls

### Primary CTA button

```text
Background: #00b074
Text: #ffffff
Shape: full pill, border-radius: 999px
Typical padding: 12px 24px
Font weight: 750
Hover: brighter green, translateY(-2px), green shadow
Optional icon: right arrow with a small horizontal movement on hover
```

### Other control patterns

- Toggle buttons use a two-column grid.
- Active toggle is dark forest with white title and bright green supporting text.
- Sliders use a green circular thumb with a white border.
- Preset values use compact pale-green pills.
- Form inputs are white or pale surfaces with subtle borders and radius around `13px`.
- Focus states use green borders, green outlines, or green glow.

### Controls to avoid next time

- Do not use pill buttons as the dominant action shape.
- Do not use emerald active toggles with mint inactive controls.
- Do not use green slider thumbs and pale green preset pills.
- Do not use right-arrow micro-animation as the repeated action cue.

## 7. Card Language

### Service cards

- White or mint background.
- Border uses a very light green line.
- Radius generally `20px`–`24px`.
- Padding generally `30px` on desktop and `24px` on mobile.
- Small service number or uppercase label near the top.
- Rounded square icon container, around `48px × 48px`, often with `15px` radius.
- Heading is dark forest and compact.
- Description is muted and slightly smaller.
- Hover state lifts the card by approximately `6px` and adds a soft shadow.
- Circular arrow action sits at the lower/right edge of service cards.

### Statistic cards

- Mint background with pale green border.
- Rounded around `20px`.
- Circular green icon container.
- Large bold number or metric.
- Muted supporting label underneath.
- Light upward hover movement.

### Floating badges

- White background.
- Pale green border.
- Soft green-tinted shadow.
- Radius around `16px`.
- Used to show trusted clients, compliance, or other credibility markers around hero artwork.

### Calculator card

- Dominant white card with a subtle green border.
- Radius around `20px`.
- Layered shadow with a faint outer ring.
- Header has a near-white background and bottom divider.
- Body is a vertical stack of labeled control groups.
- Results area is visually emphasized with dark forest and green highlight values.
- Footer contains a compact informational note and green CTA.
- Disclaimer appears below the card in smaller muted text.

### Cards to avoid next time

- Do not use oversized rounded white cards with pale green borders.
- Do not use a repeated `20px`/`24px` radius language across every component.
- Do not use soft green-tinted elevation for all cards.
- Do not repeat icon-above-heading service boxes.
- Do not repeat circular arrow affordances in card corners.
- Do not make the main hero a calculator card with segmented controls and sliders.

## 8. Modal, Overlay, and Layering Reference

### Current implementation status

- No conventional dialog/modal component is present in the current site.
- No lightbox, cookie modal, centered alert, or bottom-sheet modal is defined.
- The only modal-like interaction is the mobile navigation drawer.
- Hero badges are floating decorative cards, not interactive modals.
- The calculator is an inline card, not a modal.

### Existing layering behavior

```text
Fixed site header: approximately z-index 1000
Skip link: approximately z-index 999
Mobile menu button: approximately z-index 10001
Mobile navigation drawer: approximately z-index 10000
Hero visual layers: background behind image, image above background, badges above both
```

### Do-not-copy modal language

- Do not introduce a right-side drawer if the next website needs a modal.
- Do not use the same ivory/mint full-screen overlay.
- Do not use the same green CTA inside the overlay.
- Do not reuse the same outside-click and Escape behavior presentation.
- Do not use the same stacking-order pattern unless required for accessibility.

## 9. Image and Illustration Treatment

- Photography shows professional advisory/accounting teams and business environments.
- Hero image is cropped into a tall arch with a rounded top and small rounded bottom corners.
- A green gradient arch acts as a stage behind the image.
- Supporting images are rounded rectangular cards with large corners.
- Images use soft, wide green-tinted shadows.
- Decorative dot matrix uses small green circular points on a transparent background.
- Visual metaphors focus on finance, teams, calculators, tax, ERP, and business operations.

### Image direction to avoid next time

- Do not use a portrait inside an emerald arch.
- Do not use an emerald gradient as a stage behind a tall team image.
- Do not reuse green dot matrices or floating credibility badges.
- Do not use the same corporate-team photography treatment.

## 10. Motion and Interaction

### Current motion

- Scroll reveal begins with `opacity: 0` and `translateY(28px)`.
- Reveal duration is about `.85s` with a smooth cubic-bezier curve.
- Cards stagger into view with delays around `.08s`, `.18s`, `.28s`, and `.38s`.
- Buttons lift by `2px` on hover.
- Service cards lift by approximately `6px`.
- Header transitions background, shadow, border, blur, and height on scroll.
- Mobile navigation slides horizontally.
- Arrow icons shift a few pixels horizontally on hover.
- Reduced-motion support disables or minimizes animation.

### Motion to avoid next time

- Do not make upward fade-in the universal entrance animation.
- Do not repeat the same stagger timing.
- Do not use the same hover lift on every card and button.
- Do not use horizontal slide-in navigation as the primary mobile transition.

## 11. Responsive Behavior

| Breakpoint | Current behavior |
|---|---|
| Above `1024px` | Full desktop grids, two-column hero, full navigation |
| Around `900px` | Mobile navigation drawer activates; grids begin collapsing |
| Below `640px` | Single-column layout, tighter padding, smaller hero heading, full-width form controls |
| Below `480px` | Additional compact spacing and typography adjustments |

The next website should not simply reuse these breakpoints and collapse rules. Consider a different responsive strategy, such as a content-first mobile layout, a horizontal scroll rail, a persistent bottom action bar, or a more asymmetric tablet composition.

## 12. Content and Tone as Visual Signals

The design is also made recognizable by its content presentation:

- Corporate advisory language.
- UAE and Sharjah positioning.
- Accounting, audit, VAT, corporate tax, ERP, and e-invoicing themes.
- Trust, compliance, certification, and business-growth proof points.
- Direct contact CTA language: consultation, advisory session, phone, WhatsApp.
- Professional but reassuring tone.

For the next website, change the content architecture as well as the surface styling. Avoid the same sequence of trust statement → calculator → service cards → process/knowledge → statistics → dark CTA → multi-column footer.

## 13. Future Design Divergence Checklist

Before approving a new website, confirm that it differs from this one in at least these areas:

- [ ] Primary color is not emerald/forest green.
- [ ] Background is not ivory with mint cards.
- [ ] Typography does not use Inter/system sans with tight heavy headings.
- [ ] Primary buttons are not full pills.
- [ ] Cards do not use the same large rounded corners and green-tinted shadows.
- [ ] Hero is not a left-copy/right-arch-photo composition.
- [ ] Hero does not feature a tax/finance calculator card.
- [ ] Service content is not presented as four rounded cards with circular arrow actions.
- [ ] Navigation is not a right-side full-screen drawer.
- [ ] Modals or overlays use a different geometry and transition model.
- [ ] Motion does not rely on the same upward reveal and hover-lift behavior.
- [ ] Footer and CTA do not repeat the dark-green ending pattern.
- [ ] Content hierarchy does not repeat the same section order.

## 14. Short Creative Brief for the Next Site

Create a distinctly different visual system. Use a new color temperature, a different type family, sharper or more editorial geometry, a new navigation model, and a different hero narrative. Avoid emerald green, ivory/mint surfaces, pill CTAs, large rounded cards, arch photography, calculator-led hero composition, right-side mobile drawers, circular arrow card actions, and green-tinted shadows. The new site should feel like a separate brand system rather than a reskin of Finovision.

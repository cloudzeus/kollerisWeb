# KOLLERIS DESIGN SYSTEM v1.0
## Complete Visual Language, Component Library & Animation Framework

---

## 🎨 DESIGN PHILOSOPHY

**Core Positioning:** Professional. Trustworthy. Action-Oriented.
**Aesthetic Inspiration:** Industrial B2B brand with Vodafone-style editorial confidence and precision typography.
**Content Hierarchy:** Ogilvy-driven problem-solution messaging with visual support (never decoration).
**Animation Strategy:** GSAP micro-interactions that feel purposeful, not playful. Every animation serves clarity.

Kolleris sells through **confidence built on specificity**. The design gets out of the way.

---

## 🎨 COLORS

### Brand & Accent
- **Primary (Kolleris Steel):** `#1a3a52` — Dark professional blue
  - Used for: Primary CTAs, hero bands, active states, brand anchors
  - Warmth balance: Paired with industrial oranges for energy
- **Secondary Accent (Industrial Orange):** `#e67e22` — Action/warning/highlight
  - Used for: Secondary CTAs, alerts, confidence markers
  - Pairs with steel blue for high contrast

### Surface
- **Canvas (Clean White):** `#ffffff` — Default light content background
- **Canvas Soft (Neutral Off-White):** `#f5f5f5` — Card backgrounds, subtle elevation
- **Canvas Darker:** `#e8e8e8` — Dividers, borders
- **Ink (Industrial Black):** `#1f1f1f` — Hero bands, footer, typography on light

### Typography
- **Ink (Primary Text):** `#1f1f1f` — All headings & body on light surfaces
- **Body (Secondary):** `#555555` — Supporting copy, metadata, captions
- **Mute (Tertiary):** `#888888` — Placeholder text, low-priority footer links
- **On Dark (Light):** `#ffffff` — All text on dark surfaces

### Semantic
- **Success:** `#27ae60` (green) — Confirmations, stock status
- **Error:** `#e74c3c` (red) — Warnings, out of stock
- **Info:** `#3498db` (blue) — Notifications, tooltips

---

## 📝 TYPOGRAPHY

### Font Family
**Primary:** Inter (open-source, Vodafone-like precision)
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (heavy)
- Used for every role (headings, body, buttons, labels)
- Never mixed with serif or monospace

**System Fallback:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif

### Type Scale & Hierarchy

#### Display (Hero & Section Headlines)
| Token | Size | Weight | Line Height | Letter Spacing | Use |
|-------|------|--------|-------------|---|---|
| `display-hero` | 56px / 48px mobile | 800 | 64px | -0.5px | Page hero headlines (uppercase) |
| `display-xl` | 48px / 40px mobile | 700 | 56px | -0.25px | Section headlines |
| `display-lg` | 40px / 32px mobile | 700 | 48px | 0 | Subsection titles |
| `display-md` | 32px / 28px mobile | 600 | 40px | 0 | Card headings |
| `display-sm` | 28px / 24px mobile | 600 | 36px | 0 | Subheadings |

#### Body (Content & Details)
| Token | Size | Weight | Line Height | Use |
|-------|------|--------|---|---|
| `body-lg` | 20px | 400 | 32px | Lead paragraphs |
| `body-md` | 18px | 400 | 28px | Default body copy |
| `body-md-strong` | 18px | 600 | 28px | Bolded inline text |
| `body-sm` | 16px | 400 | 24px | Secondary body, nav links |
| `body-sm-strong` | 16px | 600 | 24px | Strong captions |
| `caption` | 14px | 400 | 20px | Metadata, fine print |
| `caption-strong` | 14px | 600 | 20px | Badge labels |
| `caption-uppercase` | 12px | 700 | 16px | Section eyebrows, tags |
| `button-md` | 16px | 600 | 24px | Button labels |

### Type Principles
- ✅ Weight 800 + uppercase = hero voice. Confidence + professionalism.
- ✅ Weight 700 = strong section headers. Readable at any scale.
- ✅ Weight 400 = calm body. Never drop below 16px for readability.
- ✅ Tight leading on headlines (1.1–1.2). Generous leading on body (1.5–1.6).
- ✅ Single family throughout. No serif sneaking in. Consistency = trust.

---

## 📐 SPACING SYSTEM

**Base Unit:** 4px (4-pixel grid)

| Token | Value | Use |
|-------|-------|-----|
| `spacing-xs` | 4px | Tight inline gaps (icon padding) |
| `spacing-sm` | 8px | Small gaps between related elements |
| `spacing-md` | 12px | Standard gap (button rows, chips) |
| `spacing-lg` | 16px | Card padding, section spacing |
| `spacing-xl` | 20px | Larger gaps between sections |
| `spacing-2xl` | 24px | Hero padding (horizontal) |
| `spacing-3xl` | 32px | Section padding (top/bottom) |
| `spacing-4xl` | 48px | Major section breaks |
| `spacing-5xl` | 64px | Page-level vertical rhythm |

### Section Padding
- Desktop: `spacing-5xl` (64px) top/bottom between major sections
- Tablet: `spacing-4xl` (48px)
- Mobile: `spacing-3xl` (32px)

---

## 🎯 BORDER RADIUS

| Token | Value | Use |
|-------|-------|-----|
| `rounded-none` | 0px | Full-bleed hero bands |
| `rounded-sm` | 4px | Input fields, tight cards |
| `rounded-md` | 6px | Default card radius |
| `rounded-lg` | 8px | Larger component frames |
| `rounded-pill` | 32px | Badge pills, compact buttons |
| `rounded-pill-lg` | 48px | Large CTA pills (buttons) |
| `rounded-full` | 9999px | Circular avatars, icon buttons |

---

## 🔘 COMPONENTS

### Buttons

#### Primary Button (CTA Pill)
```
Background: #1a3a52 (primary)
Text: #ffffff
Border: 1px solid #1a3a52
Padding: 12px 24px (button-md typography)
Border Radius: 48px (pill-lg)
Font Weight: 600
Transition: all 0.3s ease-in-out (GSAP)

States:
- Default: as above
- Hover: background #0f2435 (darker), scale 1.05 (GSAP)
- Active: background #0a1820, shadow: 0 4px 12px rgba(26,58,82,0.3)
- Disabled: background #cccccc, cursor not-allowed
```

#### Secondary Button (Outline Accent)
```
Background: transparent
Text: #e67e22 (accent)
Border: 2px solid #e67e22
Padding: 10px 24px
Border Radius: 48px (pill-lg)
Font Weight: 600

States:
- Hover: background rgba(230,126,34,0.1), scale 1.05
- Active: background rgba(230,126,34,0.2)
```

#### Ghost Button (Text Link)
```
Background: transparent
Text: #1a3a52 (primary)
Border: none
Padding: 8px 0
Font Weight: 500
Text Decoration: none

States:
- Hover: text-decoration underline
- Active: color #0f2435
```

### Cards

#### Default Card
```
Background: #ffffff
Border: 1px solid #e8e8e8
Border Radius: 6px (rounded-md)
Padding: 24px (spacing-2xl)
Shadow: none (flat aesthetic)
```

#### Elevated Card (Feature/Highlight)
```
Background: #ffffff
Border: 1px solid #e8e8e8
Border Radius: 6px
Padding: 32px (spacing-3xl)
Shadow: 0 4px 16px rgba(0,0,0,0.08)

On Hover (GSAP):
- Transform: translateY(-4px)
- Shadow: 0 8px 24px rgba(0,0,0,0.12)
- Transition: 0.3s ease-out
```

#### Problem-Solution Card (Ogilvy Framework)
```
Background: #f5f5f5 (canvas-soft)
Border Radius: 6px
Padding: 24px
Layout: Icon (left, 40px) + Content (right)

Content Structure:
- Problem Headline: display-sm, #e74c3c (red), weight 700
- Solution Text: body-md, #1f1f1f, weight 400
- Benefit Bullets: body-sm, #555555

On Hover (GSAP):
- Background: lighten to #ffffff
- Icon: scale 1.1, rotate 5deg
```

### Forms

#### Text Input
```
Background: #ffffff
Border: 1px solid #ccc (normal), 2px solid #1a3a52 (focused)
Border Radius: 4px
Padding: 12px 16px
Font: body-sm, #1f1f1f
Placeholder: #888888

States:
- Focus: border-color #1a3a52, box-shadow 0 0 0 3px rgba(26,58,82,0.1)
- Error: border-color #e74c3c, outline-icon red checkmark
- Success: border-color #27ae60, outline-icon green checkmark
```

#### Textarea
```
Same as text input
Min Height: 120px
Resize: vertical only
```

#### Select / Dropdown
```
Background: #ffffff
Border: 1px solid #ccc
Padding: 12px 16px
Font: body-sm
Border Radius: 4px

States:
- Open: border-color #1a3a52, shadow 0 4px 12px rgba(0,0,0,0.1)
- Focused Option: background #f5f5f5
```

### Navigation

#### Top Nav Bar
```
Background: #1f1f1f (ink)
Padding: 16px 32px
Display: flex, space-between
Position: sticky (top: 0)

Logo: left, 32px height
Links: right, body-sm (#ffffff), gap 32px
Language Selector: right corner, flex gap 8px

States:
- Link Hover: color #e67e22 (accent)
- Active Link: color #e67e22 + underline (2px)
```

#### Footer
```
Background: #1f1f1f (ink)
Padding: 64px 32px (top/bottom), 32px (sides)
Display: grid, 4 columns (desktop), 1 column (mobile)
Text Color: #ffffff
Typography: body-sm

Sections:
- Company Info (left): logo, tagline, social links
- Products (center-left): category links
- Services (center-right): service links
- Contact (right): phone, email, address

Dividers: 1px solid rgba(255,255,255,0.1)
Bottom: caption-uppercase eyebrow + copyright text
```

### Badges & Tags

#### Category Badge
```
Background: #e67e22 (accent)
Text: #ffffff
Font: caption-strong (12px, weight 700)
Padding: 6px 12px
Border Radius: 32px (pill-md)

On Dark:
- Background: #ffffff
- Text: #e67e22
```

#### Status Badge (In Stock / Out of Stock)
```
In Stock:
- Background: #27ae60 (green)
- Text: #ffffff
- Icon: checkmark (12px)

Out of Stock:
- Background: #e74c3c (red)
- Text: #ffffff
- Icon: x (12px)

Font: caption-strong
Padding: 6px 12px
Border Radius: 4px
```

### Modal / Dialog

#### Modal Overlay & Card
```
Overlay: background rgba(0,0,0,0.5), backdrop-filter blur(4px)
Modal Card: 
- Background: #ffffff
- Border Radius: 8px
- Padding: 32px
- Max Width: 600px
- Box Shadow: 0 10px 40px rgba(0,0,0,0.2)

Close Button: top-right, icon only, ghost button

GSAP Animation (on open):
- Overlay: opacity 0 → 1 (0.3s)
- Modal: scale 0.8 → 1, opacity 0 → 1 (0.4s, ease-out)
```

### Hero Section

#### Hero Band (Dark)
```
Background: #1a3a52 (primary) with editorial photo overlay (40% opacity)
Padding: 96px 32px (desktop), 64px 32px (tablet), 48px 32px (mobile)
Min Height: 600px (desktop), 400px (mobile)
Position: relative

Content Layout:
- H1: display-hero (56px), #ffffff, weight 800, uppercase
- Subheading: body-lg, #ffffff, weight 400, max-width 600px
- CTA Buttons: 2 buttons (primary + secondary), stacked on mobile
- Optional: background image (16:9 aspect, real industrial/team photos)

GSAP Animation (on load):
- Headline: slideInDown (0.8s ease-out)
- Subheading: fadeIn (0.6s ease-out, delay 0.2s)
- Buttons: slideUp (0.6s ease-out, delay 0.4s)
```

#### Hero Band (Red/Accent)
```
Same as dark hero but:
- Background: #e67e22 (accent)
- Text: #ffffff
- Used for: limited high-impact sections (e.g., "Special Offer")
```

### Product Grid

#### Product Card
```
Background: #ffffff
Border: 1px solid #e8e8e8
Border Radius: 6px
Overflow: hidden
Padding: 0 (image flush top)

Layout:
- Image Container (top): 1:1 aspect ratio, white background
  - Badge (Stock Status): top-right corner, absolutely positioned
- Content (bottom): padding 16px
  - Brand Name: caption-uppercase, #888888
  - Product Name: display-sm, #1f1f1f, weight 600
  - Short Spec: body-sm, #555555
  - Price (if shown): body-md-strong, #1a3a52
  - CTA: "View Details" link, ghost button

GSAP Animation (on hover):
- Image: scale 1.05, filter brightness(1.1) (0.3s ease-out)
- Card: translateY(-4px), shadow elevation (0.3s ease-out)
- Spec text: color #1a3a52 (0.2s ease)
```

### Accordion / FAQ

#### Accordion Item
```
Background: #ffffff
Border Bottom: 1px solid #e8e8e8
Padding: 20px 24px

Header (clickable):
- Display: flex, space-between
- Font: body-md-strong, #1a3a52
- Icon (right): chevron-down (24px), rotate 0deg (closed) / 180deg (open)
- Cursor: pointer
- Hover: background #f5f5f5, color #e67e22

Content (hidden by default):
- Font: body-md, #555555
- Padding: 16px 0
- Max Height: 0 (closed) / auto (open)

GSAP Animation (on toggle):
- Content: max-height 0 → auto (0.4s ease-in-out)
- Icon: rotate 0 → 180deg (0.3s ease-out)
```

### Loading States

#### Skeleton Screen (Placeholder)
```
Background: linear-gradient(90deg, #f5f5f5 25%, #e8e8e8 50%, #f5f5f5 75%)
Background Size: 200% 100%
Border Radius: 4px
Height: matches component size

GSAP Animation (pulse):
- Background Position: 0% → 100% (1.5s ease-in-out, infinite loop)
```

#### Spinner
```
SVG Circle (24px diameter)
Stroke: 2px solid #1a3a52
Stroke Dasharray: circumference
Stroke Dashoffset: 0

GSAP Animation (spin):
- rotation: 0 → 360deg (2s linear, infinite loop)
- Stroke Color: #1a3a52 → #e67e22 (pulse, 1s ease-in-out)
```

---

## ✨ GSAP ANIMATION LIBRARY

### Micro-Interactions Principles
1. **Purpose First:** Every animation clarifies, doesn't distract
2. **Consistency:** All transitions use 0.3s–0.6s easing (ease-in-out)
3. **Accessibility:** Respect `prefers-reduced-motion` media query
4. **Performance:** Use GPU-accelerated properties (transform, opacity)

### Core Animation Easings
```javascript
// Standard easing for most interactions
const easeOut = "power3.out";    // Feels snappy & confident
const easeInOut = "power2.inOut"; // Smooth transitions
const easeIn = "power2.in";       // Entrance animations

// Timeline speeds
const FAST = 0.2;     // Quick state changes (hover, focus)
const NORMAL = 0.4;   // Standard interactions
const SLOW = 0.8;     // Entrance/exit on page load
```

### Animation Catalog

#### Button Hover (CTA Pill)
```javascript
// Click state
gsap.to(button, {
  scale: 1.05,
  duration: 0.3,
  ease: "power3.out"
});

gsap.to(button, {
  boxShadow: "0 8px 24px rgba(26,58,82,0.3)",
  duration: 0.3,
  ease: "power3.out"
}, 0);
```

#### Card Lift (Hover Effect)
```javascript
gsap.to(card, {
  y: -8,
  boxShadow: "0 16px 32px rgba(0,0,0,0.12)",
  duration: 0.4,
  ease: "power3.out"
});
```

#### Hero Headline Entrance
```javascript
gsap.from(headline, {
  opacity: 0,
  y: -50,
  duration: 0.8,
  ease: "power3.out",
  delay: 0.2
});
```

#### Hero Subheading Stagger
```javascript
gsap.from(subheading, {
  opacity: 0,
  y: 30,
  duration: 0.6,
  ease: "power3.out",
  delay: 0.4
});
```

#### Button Stagger (Multiple CTAs)
```javascript
gsap.from(buttons, {
  opacity: 0,
  y: 30,
  duration: 0.6,
  ease: "power3.out",
  delay: 0.6,
  stagger: 0.1 // Each button delays by 0.1s
});
```

#### Product Grid Entrance (Stagger)
```javascript
gsap.from(productCards, {
  opacity: 0,
  y: 40,
  duration: 0.6,
  ease: "power3.out",
  stagger: 0.1, // Cascade effect
  delay: 0.2
});
```

#### Accordion Toggle
```javascript
const tl = gsap.timeline({ paused: true });

tl.to(content, {
  maxHeight: contentHeight, // Calculate dynamically
  opacity: 1,
  duration: 0.4,
  ease: "power2.inOut"
}, 0);

tl.to(icon, {
  rotate: 180,
  duration: 0.3,
  ease: "power2.inOut"
}, 0);

// Listen for click
toggleButton.addEventListener("click", () => {
  isOpen ? tl.reverse() : tl.play();
  isOpen = !isOpen;
});
```

#### Skeleton Pulse
```javascript
gsap.to(skeleton, {
  backgroundPosition: "200% 0",
  duration: 1.5,
  ease: "none",
  repeat: -1
});
```

#### Page Scroll Reveal (Intersection Observer + GSAP)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gsap.from(entry.target, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out"
      });
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll("[data-reveal]").forEach(el => {
  observer.observe(el);
});
```

#### Form Field Focus
```javascript
gsap.to(input, {
  boxShadow: "0 0 0 3px rgba(26,58,82,0.1)",
  borderColor: "#1a3a52",
  duration: 0.2,
  ease: "power2.out"
});
```

#### Modal Open
```javascript
const tl = gsap.timeline();

tl.to(overlay, {
  opacity: 1,
  duration: 0.3,
  ease: "power2.inOut"
}, 0);

tl.from(modal, {
  opacity: 0,
  scale: 0.8,
  y: 50,
  duration: 0.4,
  ease: "back.out(1.2)"
}, 0.1);
```

#### Language Switcher
```javascript
gsap.to(switcher, {
  rotate: 180,
  duration: 0.4,
  ease: "back.out(1.5)"
});

// Fade out current language, fade in new
gsap.to(currentContent, {
  opacity: 0,
  duration: 0.2,
  onComplete: () => {
    // Switch language
    gsap.from(newContent, {
      opacity: 0,
      duration: 0.2
    });
  }
});
```

---

## 📱 RESPONSIVE BREAKPOINTS

| Name | Width | Key Changes |
|------|-------|---|
| **Mobile** | < 640px | Single column, stacked layout, scaled headlines (32–40px), hamburger nav |
| **Tablet** | 640–1023px | 2-column grids, medium headlines (40–48px), expanded nav |
| **Desktop** | 1024–1399px | Full layouts, max headlines (48–56px), 3–4 column grids |
| **Ultra-wide** | ≥ 1400px | Container max-width 1400px, full visual hierarchy |

### Mobile-First Strategy
- Start with mobile layout (single column, stacked)
- Progressively enhance for tablet (2 columns, larger text)
- Full desktop experience above 1024px
- Never shrink text below 16px (body) or 24px (headlines)

---

## 🎬 PAGE-BY-PAGE ANIMATION FLOW

### Homepage
1. **On Load:**
   - Hero headline slides down (0.8s)
   - Subheading fades in (0.6s, delay 0.2s)
   - CTAs slide up (0.6s, delay 0.4s)

2. **Problem Cards Section:**
   - Cards stagger in on scroll (0.6s, stagger 0.1s each)
   - On hover: card lifts + icon scales

3. **Brands Carousel:**
   - Logos fade in on scroll
   - On hover: logo scales 1.1x, background color shifts

4. **Products Grid:**
   - Products cascade in on scroll (stagger effect)
   - On hover: image scales, card lifts

5. **Bottom CTA Section:**
   - Headline slides in from left
   - CTAs slide up

### Services Page
1. **Hero:** Same as homepage
2. **Service Sections:**
   - Problem headline slides from left (0.6s)
   - Solution content fades in (0.4s, stagger)
   - Icon scales on section enter

### Contact Page
1. **Form Fields:**
   - Stagger in on page load (0.4s each, 0.1s delay)
   - On focus: border color animates, shadow appears
   - On submit: button loading spinner (GSAP rotation)

2. **Department Cards:**
   - Cascade in on scroll

### FAQ Page
1. **Accordions:**
   - Icon rotates on toggle (0.3s)
   - Content expands/collapses (0.4s)
   - Background color shifts on open

---

## 🌍 LANGUAGE SWITCHER

### Visual Treatment
- **Placement:** Top-right corner, nav bar
- **Style:** Two flags (🇬🇧 EN / 🇬🇷 ΕΛ) or text dropdown
- **Animation on Click:**
  - Icon rotates 180deg (0.4s)
  - Content cross-fades (0.3s)
  - LocalStorage saves preference

### Implementation Notes
- Must not flash wrong language on page reload
- Use `lang="en"` / `lang="el"` on `<html>` tag
- All text content in separate objects (translations.js)
- GSAP animates the transition between language versions

---

## ♿ ACCESSIBILITY & PERFORMANCE

### Accessibility
- ✅ All buttons 48px+ touch target (mobile)
- ✅ Text contrast ≥ 4.5:1 (WCAG AA)
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus states visible on all interactive elements
- ✅ `aria-label` on icon buttons
- ✅ Form labels associated with inputs (`<label htmlFor="...">`)
- ✅ Semantic HTML (nav, main, footer, section, article)
- ✅ Respect `prefers-reduced-motion` (disable GSAP for users)

### Performance
- ✅ GSAP only animates on desktop (mobile: instant)
- ✅ Use `will-change: transform` on animated elements
- ✅ Lazy load images (IntersectionObserver)
- ✅ Defer non-critical JS
- ✅ Minify CSS/JS in production
- ✅ WebP images with PNG fallbacks
- ✅ Code-split components with Next.js dynamic imports

---

## 📦 COMPONENT INVENTORY

Ready to build in React + TypeScript:

```
components/
├── Button/
│   ├── Primary.tsx
│   ├── Secondary.tsx
│   └── Ghost.tsx
├── Card/
│   ├── Default.tsx
│   ├── Elevated.tsx
│   └── ProblemSolution.tsx
├── Forms/
│   ├── Input.tsx
│   ├── Textarea.tsx
│   ├── Select.tsx
│   └── FormGroup.tsx
├── Hero/
│   ├── HeroBandDark.tsx
│   ├── HeroBandAccent.tsx
│   └── HeroContent.tsx
├── Navigation/
│   ├── TopNav.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
├── Products/
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── ProductFilter.tsx
├── Brands/
│   ├── BrandCard.tsx
│   └── BrandCarousel.tsx
├── Services/
│   ├── ServiceSection.tsx
│   └── ServiceCard.tsx
├── Contact/
│   ├── ContactForm.tsx
│   └── DepartmentCard.tsx
├── FAQ/
│   ├── AccordionItem.tsx
│   └── AccordionGroup.tsx
├── Badges/
│   ├── StatusBadge.tsx
│   └── CategoryBadge.tsx
├── Modal/
│   ├── Modal.tsx
│   └── ModalContent.tsx
└── Shared/
    ├── Skeleton.tsx
    ├── Spinner.tsx
    └── ScrollReveal.tsx

hooks/
├── useGSAP.ts (wrapper for GSAP animations)
├── useLang.ts (language context)
└── useIntersectionObserver.ts

utils/
├── animations.ts (GSAP timelines)
├── translations.ts (EN/EL content)
└── theme.ts (design tokens)
```

---

## 🚀 IMPLEMENTATION CHECKLIST

- [ ] Install dependencies: `next`, `gsap`, `react`, `typescript`, `tailwindcss`
- [ ] Create design tokens file (theme.ts)
- [ ] Build component library (Button, Card, etc.)
- [ ] Integrate GSAP animations into components
- [ ] Set up language switcher + translations
- [ ] Create page layouts (Homepage, About, Services, etc.)
- [ ] Wire up SoftOne API endpoints for brands/products
- [ ] Test responsive breakpoints (640px, 1024px, 1400px)
- [ ] Audit accessibility (contrast, focus states, semantic HTML)
- [ ] Performance optimization (lazy load, code split, image WebP)
- [ ] Deploy to production with Coolify or Vercel

---

## 📋 SUMMARY FOR DEVELOPERS

**Think:** Professional B2B industrial brand with editorial confidence, Ogilvy-driven copy, and purposeful micro-interactions.

**Build:** React + Next.js 16.2+ with Prisma ORM (MySQL/PostgreSQL), shadcn for baseline components, GSAP for animations, Tailwind for utility styling.

**Animate:** Every interaction serves clarity. Buttons lift on hover. Cards stagger in. Forms provide visual feedback. Modals scale gracefully. All animations respect reduced-motion preferences.

**Content:** Problem-first messaging (Ogilvy), API-driven brands & products (SoftOne), bilingual EN/EL with smooth language switching.

**Design:** Dark hero bands (#1a3a52) alternating with light content (#ffffff). Industrial orange (#e67e22) for secondary actions. Pill-shaped CTAs (48px radius). No shadows on cards—surface contrast does elevation. Editorial photography only.

---

**Ready to build. Ship in 6–12 weeks. 🚀**


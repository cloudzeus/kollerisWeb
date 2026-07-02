# KOLLERIS LOGO GUIDELINES
## Complete Brand Mark System & Usage Standards

---

## 📐 LOGO OVERVIEW

**Logo Type:** Combination Mark (Icon + Logotype)
**Icon:** Stylized "K" in red/orange with geometric cutaway detail
**Logotype:** "KOLLERIS" in sans-serif, gray/charcoal
**Visual Language:** Modern, industrial, professional, confident
**Primary Colors:** Red/Orange (#E74C3C or #E67E22) + Gray (#555555)

---

## 🎨 LOGO VARIATIONS

### 1. Full Logo (Default)
**Use:** Primary mark for main pages, hero sections, footer, letterhead
- Icon (left): Red geometric "K" 
- Logotype (right): "KOLLERIS" in gray, sans-serif medium weight
- Spacing: 12px gap between icon and logotype
- File Format: SVG (preferred), PNG with transparency

### 2. Icon Only (Symbol)
**Use:** Favicon, app icons, small spaces (nav buttons, avatars)
- Just the red "K" mark
- Square aspect ratio (1:1)
- Minimum size: 32px × 32px

### 3. Horizontal Lockup
**Use:** Wide spaces (hero headers, section dividers)
- Icon and logotype aligned horizontally
- Aspect ratio: ~3:1 (wider than tall)
- Icon size: 40–60px height

### 4. Stacked Lockup
**Use:** Narrow vertical spaces (sidebar, mobile hero)
- Icon centered above logotype
- Aspect ratio: ~1:1.5 (taller than wide)
- Icon size: 48–64px height

### 5. Monochrome (White on Dark)
**Use:** Dark hero bands, footer, dark overlays
- Icon: White (#FFFFFF)
- Logotype: White (#FFFFFF)
- Background: Dark (#1a3a52, #1f1f1f, or 50%+ opacity photo)

### 6. Monochrome (Dark on Light)
**Use:** Light backgrounds, print, PDFs
- Icon: Dark gray (#1f1f1f) or Red (#e67e22)
- Logotype: Dark gray (#1f1f1f)
- Background: White or light gray

### 7. Single Color (Red Icon Only)
**Use:** Accent marks, badges, secondary branding
- Icon only in red (#e67e22)
- Logotype removed
- Used when full logo is too large or prominent

---

## 📏 SIZE & SPACING SPECIFICATIONS

### Minimum Sizes
| Context | Minimum Size | Ratio |
|---------|--------------|-------|
| Desktop Hero | 80px height | Full logo (3:1) |
| Tablet Hero | 60px height | Full logo or stacked |
| Mobile Hero | 48px height | Icon only or stacked |
| Navigation Bar | 32px height | Icon only |
| Footer | 40px height | Icon only or small full logo |
| Favicon | 32px × 32px | Icon only (square) |
| Print (Letterhead) | 15mm height | Full logo |

### Clear Space (Breathing Room)
- **Minimum clear space:** Equal to the icon width on all sides
- Example: If icon is 40px wide, leave 40px clear space (left/right/top/bottom)
- Exception: In tight layouts (nav bar, footer), can reduce to 8px minimum

### Logo Placement Grid
```
┌─────────────────────────────────────┐
│  ← 40px clear space minimum        │
│   ┌─────────────┐                  │
│   │ KOLLERIS    │  ← Logo          │
│   │ K mark      │                  │
│   └─────────────┘                  │
│  ↓                                  │
│  40px clear space minimum           │
└─────────────────────────────────────┘
```

---

## 🎨 COLOR SPECIFICATIONS

### Primary Red (Icon)
- **Hex:** `#e74c3c` (brand confidence red)
- **RGB:** 231, 76, 60
- **HSL:** 6°, 80%, 57%
- **CSS:** `--color-logo-red: #e74c3c;`
- **Usage:** Default logo icon on light backgrounds

### Secondary Orange (Accent Variant)
- **Hex:** `#e67e22` (industrial orange)
- **RGB:** 230, 126, 34
- **HSL:** 30°, 81%, 52%
- **CSS:** `--color-logo-orange: #e67e22;`
- **Usage:** Alternate icon color, accent contexts

### Text (Logotype)
- **Dark Gray:** `#555555` (standard on light)
- **Hex:** 555555
- **RGB:** 85, 85, 85
- **HSL:** 0°, 0%, 33%
- **White:** `#ffffff` (on dark backgrounds)

### Do Not Use
- ❌ Gradients on icon (flat color only)
- ❌ Shadows or drop-effects on icon
- ❌ Outlined/stroke-only version (solid fill only)
- ❌ Color combinations other than red/gray or white/dark
- ❌ Rotated, skewed, or distorted logos

---

## 📱 RESPONSIVE LOGO SIZING

### Desktop (1024px+)
- **Hero Logo:** 80–100px height, full horizontal lockup
- **Nav Logo:** 40px height, icon only
- **Footer Logo:** 50px height, horizontal or stacked

### Tablet (640–1023px)
- **Hero Logo:** 60–80px height, full logo or stacked
- **Nav Logo:** 36px height, icon only
- **Footer Logo:** 40px height, icon only or stacked

### Mobile (< 640px)
- **Hero Logo:** 40–48px height, icon only preferred
- **Nav Logo:** 32px height, icon only
- **Footer Logo:** 32px height, icon only
- **Avoid:** Full horizontal lockup (too wide)

---

## 🖼️ LOGO PLACEMENT RULES

### Hero Section (Page Top)
✅ **Do:**
- Place logo in top-left corner of hero band
- Center vertically inside 30–50px padding
- Ensure 20px minimum spacing from nav/borders
- White or light version on dark photo overlay

❌ **Don't:**
- Place logo center of hero (crowds the headline)
- Use small icon in large hero (looks lost)
- Place logo over text (legibility issue)
- Use colored logo on busy photo backgrounds

### Navigation Bar
✅ **Do:**
- Place logo left-aligned in nav
- Use icon-only version (32–40px)
- Align vertically centered in nav bar
- Link logo to home page

❌ **Don't:**
- Use full lockup in nav (too wide)
- Squeeze logo into tight spaces (loses clarity)
- Place logo in hamburger menu (goes hidden on mobile)

### Footer
✅ **Do:**
- Place logo top-left or top-center of footer
- Use 40–50px height, full logo or icon + text
- Add company tagline below logo
- Include social links + contact info in footer grid

❌ **Don't:**
- Overshadow with social icons (logo is primary)
- Place logo bottom-right (unintuitive)
- Make logo smaller than body text (hierarchy wrong)

### Print & Digital Assets
✅ **Do:**
- Use SVG format for digital (crisp at any size)
- Use PNG (transparent bg) for web images
- Use CMYK for print (convert from RGB)
- Include 1/4" (6mm) clear space on all sides

❌ **Don't:**
- Use JPG (lossy, no transparency)
- Resize logo using raster scaling (blurry)
- Print logo smaller than 15mm (loses detail)

---

## 🎬 LOGO ANIMATIONS (GSAP)

### Logo Entrance (Hero Page Load)
```javascript
// Icon slides in from left, logotype fades in
gsap.from(logoIcon, {
  x: -50,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out"
});

gsap.from(logoText, {
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
  delay: 0.2
});
```

### Logo Hover (In Navigation)
```javascript
// Subtle scale + color shift on hover
gsap.to(logoIcon, {
  scale: 1.1,
  duration: 0.3,
  ease: "power2.out"
});

gsap.to(logoIcon, {
  fill: "#e67e22", // Red → Orange
  duration: 0.3,
  ease: "power2.out"
}, 0);
```

### Logo Click (To Home)
```javascript
// Spin + scale feedback
gsap.to(logoIcon, {
  rotation: 360,
  scale: 0.9,
  duration: 0.4,
  ease: "back.out(1.5)"
});

gsap.to(logoIcon, {
  scale: 1,
  duration: 0.2,
  ease: "power2.inOut",
  delay: 0.3
});
```

---

## 🌍 LOGO USAGE BY PAGE

### Homepage
- **Hero:** Full logo (100px), white on dark photo overlay, left-aligned
- **Nav:** Icon only (40px), red or white depending on nav background
- **Footer:** Icon + "KOLLERIS" text (50px), white on dark background

### About Us
- **Hero:** Icon-only (80px), positioned behind headline (20% opacity)
- **Company History Section:** Icon-only (60px), gray, left margin accent
- **Footer:** Same as homepage

### Services
- **Page Hero:** Full logo (80px), white on dark, left corner
- **Service Cards:** Icon-only (32px), red, inside card top-left
- **Footer:** Same as homepage

### Products
- **Hero:** Full logo (100px), centered above headline, white
- **Product Cards:** No logo (product images dominate)
- **Filter Section:** Icon-only (32px), red, left of filter heading
- **Footer:** Same as homepage

### Brands
- **Hero:** Full logo (90px), white, left corner
- **Brand Carousel:** No logo on brand cards (brand logos only)
- **Section Dividers:** Icon-only (40px), gray, centered
- **Footer:** Same as homepage

### Contact
- **Page Hero:** Icon-only (70px), white, left corner
- **Contact Form:** Icon-only (32px), gray, form header
- **Department Cards:** No logo (contact info only)
- **Footer:** Same as homepage

### FAQ
- **Page Hero:** Icon-only (80px), white, left
- **Accordion Sections:** Icon-only (24px), gray, section header
- **Footer:** Same as homepage

---

## 📄 FILE FORMATS & DELIVERY

### SVG (Primary Format)
- **File:** `kolleris-logo-full.svg` (icon + logotype)
- **File:** `kolleris-logo-icon.svg` (icon only)
- **File:** `kolleris-logo-white.svg` (white version)
- **Advantages:** Crisp at any size, small file size, animatable
- **Usage:** Web, digital, all responsive contexts

### PNG (Fallback)
- **File:** `kolleris-logo-full@2x.png` (transparent bg, 2x resolution)
- **File:** `kolleris-logo-icon@2x.png` (icon only, 2x)
- **File:** `kolleris-logo-white@2x.png` (white version)
- **Dimensions:** Full logo ~800×600px @ 2x, icon ~400×400px @ 2x
- **Usage:** Email, PDF, legacy browsers, print proofs

### Favicon
- **File:** `favicon-32x32.png`, `favicon-16x16.png`
- **File:** `favicon.ico` (Windows compatibility)
- **File:** `apple-touch-icon.png` (iOS home screen)
- **Format:** Icon-only, red or solid color
- **Dimensions:** 32×32 minimum, 180×180 for Apple

### Print (CMYK)
- **File:** `kolleris-logo-cmyk-print.pdf`
- **Format:** Full logo, converted to CMYK color space
- **Resolution:** 300 DPI minimum
- **Usage:** Business cards, letterhead, brochures, signage

---

## ✅ USAGE CHECKLIST

### Before Placing Logo
- [ ] Logo is at least minimum size (see Size Specifications)
- [ ] Clear space rules followed (no text/elements within minimum radius)
- [ ] Color contrast sufficient (white on light? Use dark version)
- [ ] Logo is not distorted, rotated, or squeezed
- [ ] Background does not make logo illegible
- [ ] SVG used for digital, PNG for images, PDF for print

### Mobile Responsiveness
- [ ] Logo scales appropriately at 320px, 640px, 1024px breakpoints
- [ ] Icon-only used on mobile nav (full logo too wide)
- [ ] Favicon visible and clear on mobile home screen
- [ ] Hero logo not competing with mobile headline (stack vertically)

### Brand Consistency
- [ ] Only official logo files used (no recreations or knockoffs)
- [ ] Red color matches `#e74c3c` or `#e67e22` (not random red)
- [ ] Font matches system Helvetica/Arial (logotype, if editable)
- [ ] Logo follows all Do's and Don'ts (see below)

---

## ❌ COMMON MISTAKES (Don't Do These)

| Mistake | Why It's Wrong | Fix |
|---------|---|---|
| Logo stretched horizontally | Distorts brand mark | Use provided lockups only |
| Logo on busy photo (no contrast) | Illegible | Use white version or add semi-transparent overlay |
| Logo rotated 45° | Breaks visual system | Keep logo upright always |
| Gradient fill on icon | Looks cheap/dated | Use solid red only |
| Full logo in 32px nav | Too crowded | Use icon-only version |
| Black logotype text | Wrong color | Use dark gray (#555555) |
| Logo with drop shadow | Adds visual noise | Keep flat and clean |
| Tiny logo lost on page | Hierarchy confused | Minimum sizes non-negotiable |
| Colored logo on red background | Illegible | Use white version |

---

## 🎯 SUMMARY FOR DESIGNERS & DEVELOPERS

**Logo is the brand anchor.** Every placement communicates trust and professionalism.

**Three simple rules:**
1. Use SVG files (crisp, animatable, small)
2. Follow minimum sizes (don't shrink too small)
3. Respect clear space (let logo breathe)

**Icon + Logotype = Full Logo** for hero/footer
**Icon Only** for nav/small spaces
**White Version** on dark backgrounds

**Color:** Red (#e74c3c) on light, White on dark. That's it.

---

**Logo files ready for developer handoff. 🚀**


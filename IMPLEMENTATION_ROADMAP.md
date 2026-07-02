# KOLLERIS WEBSITE - IMPLEMENTATION ROADMAP
## Complete Development Guide, Phase-by-Phase

---

## 📋 OVERVIEW

**Project:** Kolleris.com website rebuild
**Technology Stack:** Next.js 16.2+, Prisma ORM, MySQL/PostgreSQL, shadcn/UI, Auth.js, GSAP, TypeScript
**Timeline:** 6–12 weeks (3 phases)
**Team:** 1 backend engineer, 1 frontend engineer, 1 designer (part-time), 1 QA engineer
**Languages:** English (primary) + Greek (parallel content)

---

## ✅ PRE-FLIGHT CHECKLIST

Before starting development:

- [ ] **Design System Approved** — Review KOLLERIS_DESIGN_SYSTEM.md, DESIGN_DIRECTIONS.md, KOLLERIS_LOGO_GUIDELINES.md
- [ ] **Content Finalized** — All 8 English pages + 7 Greek pages reviewed and locked
- [ ] **Brand Assets Ready** — Logo SVG files, brand photos, product images gathered
- [ ] **SoftOne API Access** — Credentials for getObjects(BRAND, ITEM, CUSTOMER)
- [ ] **Domain & Hosting** — kolleris.com registered, Coolify or Vercel ready
- [ ] **Git Repository** — GitHub repo created (cloudzeus/kolleris-website or similar)
- [ ] **Database Setup** — MySQL/PostgreSQL instance created (local dev + production)
- [ ] **Team Access** — Designers/devs have Figma, GitHub, staging server access

---

## 🏗️ PHASE 1: FOUNDATION (Weeks 1–2)

### Week 1: Project Setup & Design Tokens

**Designer Tasks:**
- [ ] Create Figma file from design directions
- [ ] Build component library in Figma (buttons, cards, forms, hero, etc.)
- [ ] Create design tokens (colors, typography, spacing)
- [ ] Establish color swatches + icon system

**Backend Developer:**
- [ ] Initialize Next.js 16.2+ project with TypeScript
  ```bash
  npx create-next-app@latest kolleris \
    --typescript \
    --tailwind \
    --app-router \
    --import-alias '@/*'
  ```
- [ ] Set up Git repo and branch strategy (main / develop / feature/*)
- [ ] Initialize Prisma ORM
  ```bash
  npm install @prisma/client
  npx prisma init
  ```
- [ ] Configure database connection (.env.local)
- [ ] Create folder structure:
  ```
  src/
  ├── app/
  │   ├── layout.tsx
  │   ├── page.tsx
  │   ├── [lang]/
  │   │   ├── page.tsx (homepage)
  │   │   ├── about/page.tsx
  │   │   ├── services/page.tsx
  │   │   ├── brands/page.tsx
  │   │   ├── products/page.tsx
  │   │   ├── contact/page.tsx
  │   │   └── faq/page.tsx
  │   └── api/
  │       ├── brands/route.ts
  │       ├── products/route.ts
  │       └── contact/route.ts
  ├── components/
  │   ├── Button/
  │   ├── Card/
  │   ├── Hero/
  │   ├── Navigation/
  │   └── ... (per design system)
  ├── hooks/
  │   ├── useGSAP.ts
  │   ├── useLang.ts
  │   └── useIntersectionObserver.ts
  ├── lib/
  │   ├── animations.ts (GSAP timelines)
  │   ├── api-client.ts (SoftOne integration)
  │   └── theme.ts (design tokens)
  ├── styles/
  │   └── globals.css
  └── content/
      ├── en/
      │   ├── homepage.json
      │   ├── about.json
      │   └── ... (all 8 pages)
      └── el/
          ├── homepage.json
          ├── about.json
          └── ... (all 7 pages)
  ```

**Frontend Developer:**
- [ ] Install dependencies:
  ```bash
  npm install \
    gsap \
    next-intl \
    shadcn-ui \
    next-auth \
    axios \
    @hookform/resolvers \
    react-hook-form \
    zod
  ```
- [ ] Set up Tailwind config with design tokens
- [ ] Create theme.ts with color/typography values
- [ ] Initialize ESLint + Prettier config

**DevOps:**
- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Configure staging environment on Coolify
- [ ] Set up monitoring (Sentry, LogRocket)

### Week 2: Design Tokens & Component Foundation

**Designer:**
- [ ] Finalize Figma component library
- [ ] Create responsive component specs (mobile/tablet/desktop)
- [ ] Hand off designs to frontend dev

**Frontend Developer:**
- [ ] Create design token exports (theme.ts):
  ```typescript
  export const colors = {
    primary: '#1a3a52',
    secondary: '#e67e22',
    ink: '#1f1f1f',
    body: '#555555',
    canvas: '#ffffff',
    success: '#27ae60',
    error: '#e74c3c',
  };

  export const typography = {
    displayHero: {
      fontSize: '56px',
      fontWeight: 800,
      lineHeight: '64px',
    },
    // ... all tokens
  };

  export const spacing = {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    // ... all tokens
  };
  ```

- [ ] Create base component stubs (Button, Card, Input, etc.)
- [ ] Set up responsive utilities (@mobile, @tablet, @desktop)

**Backend Developer:**
- [ ] Design Prisma schema for:
  - [ ] ContactSubmission model (form data)
  - [ ] Newsletter subscription model
  - [ ] Optional: Blog/announcement model
  ```prisma
  model ContactSubmission {
    id          String    @id @default(cuid())
    name        String
    email       String
    company     String?
    phone       String?
    category    String
    message     String
    createdAt   DateTime  @default(now())
  }

  model NewsletterSubscriber {
    id      String    @id @default(cuid())
    email   String    @unique
    lang    String    @default("en")
    createdAt DateTime @default(now())
  }
  ```
- [ ] Run initial migration
  ```bash
  npx prisma migrate dev --name init
  ```

**QA:**
- [ ] Set up test environment
- [ ] Create test plan document

---

## 🎨 PHASE 2: COMPONENT DEVELOPMENT & PAGE BUILDS (Weeks 3–8)

### Week 3: Core Components (Buttons, Cards, Forms)

**Frontend Developer:**
- [ ] Build Button component family:
  - [ ] PrimaryButton (solid CTA pill)
  - [ ] SecondaryButton (outline accent)
  - [ ] GhostButton (text link)
  - [ ] All with GSAP hover animations

- [ ] Build Card component variants:
  - [ ] DefaultCard
  - [ ] ElevatedCard (on hover lift)
  - [ ] ProblemSolutionCard (Ogilvy framework)

- [ ] Build Form components:
  - [ ] TextInput with focus/error states
  - [ ] Textarea
  - [ ] Select dropdown
  - [ ] Checkbox
  - [ ] FormGroup with labels

- [ ] Build GSAP animation hook:
  ```typescript
  export const useGSAPAnimation = (ref, animation, deps = []) => {
    useEffect(() => {
      if (ref.current) {
        // Apply animation from animations.ts
      }
    }, deps);
  };
  ```

**Designer:**
- [ ] Create component interaction specs (hover, focus, active states)
- [ ] Define animation timings for each component

### Week 4: Navigation & Hero Sections

**Frontend Developer:**
- [ ] Build TopNav component:
  - [ ] Logo (icon-only on mobile, full on desktop)
  - [ ] Navigation links with active state
  - [ ] Language switcher (EN / ΕΛ)
  - [ ] Sticky positioning on scroll

- [ ] Build Hero component:
  - [ ] Dark hero band (background image + overlay)
  - [ ] Accent hero band (orange/red)
  - [ ] Display headline with GSAP entrance
  - [ ] Subheading fade-in
  - [ ] CTA buttons with stagger

- [ ] Build Footer component:
  - [ ] Company info, links, social
  - [ ] Contact info
  - [ ] Newsletter signup
  - [ ] Dark background with proper contrast

**Designer:**
- [ ] Create nav responsive behavior (hamburger on mobile)
- [ ] Define hero image crop ratios (desktop vs mobile)

### Week 5: Homepage Assembly

**Frontend Developer:**
- [ ] Build Homepage layout:
  - [ ] Import Hero component
  - [ ] Problem-Solution cards section (4 cards, 2x2 grid)
  - [ ] Brands carousel (horizontal scroll, API-driven)
  - [ ] Featured products grid (4 col desktop, 2 col mobile)
  - [ ] Services preview section
  - [ ] Bottom CTA section

- [ ] Integrate language switcher (next-intl)
- [ ] Set up server-side content routing for /en and /el

- [ ] Create api/brands route:
  ```typescript
  // GET /api/brands
  // Fetch from SoftOne: getObjects('BRAND')
  // Return: { id, name, logo, description }
  ```

- [ ] Create api/products route:
  ```typescript
  // GET /api/products?category=handTools&brand=Milwaukee
  // Fetch from SoftOne: getObjects('ITEM')
  // Return: { id, name, brand, category, image, inStock }
  ```

**Designer:**
- [ ] Finalize brand carousel design (logo sizes, spacing)
- [ ] Define product card layout (image, title, spec, status)

**Backend Developer:**
- [ ] Build SoftOne API client (lib/api-client.ts):
  ```typescript
  import axios from 'axios';

  const softoneClient = axios.create({
    baseURL: 'https://s1services.softone.gr/api/v1',
    headers: {
      'Authorization': `Bearer ${process.env.SOFTONE_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  export async function getBrands() {
    const response = await softoneClient.get('/getObjects', {
      params: { objectName: 'BRAND' },
    });
    return response.data;
  }

  export async function getProducts(filters = {}) {
    const response = await softoneClient.get('/getObjects', {
      params: { objectName: 'ITEM', ...filters },
    });
    return response.data;
  }
  ```

### Week 6: Additional Pages (About, Services, Brands, Products)

**Frontend Developer:**
- [ ] Build About Us page:
  - [ ] Hero section
  - [ ] Company story (2-column layout)
  - [ ] Mission/Vision cards
  - [ ] Credibility facts (46 years, team expertise)
  - [ ] Why different (4 feature cards)
  - [ ] Facilities section
  - [ ] Team section (no headshots, expertise highlights)

- [ ] Build Services page:
  - [ ] Hero
  - [ ] 5 service deep-dives (alternating left/right layout)
  - [ ] Problem-solution sections with benefits

- [ ] Build Brands page:
  - [ ] Hero
  - [ ] Brand carousel (dynamic from API)
  - [ ] Featured brands (Milwaukee, Bahco, Knipex) with explanations
  - [ ] Why quality matters (4 cards)

- [ ] Build Products page:
  - [ ] Hero
  - [ ] Search + filter bar (sticky on desktop)
  - [ ] Product grid (4 col desktop, 2 col mobile, API-driven)
  - [ ] Category cards
  - [ ] Loading skeleton while fetching

**Designer:**
- [ ] Finalize all page layouts
- [ ] Create mobile responsive mockups

### Week 7: Contact & FAQ Pages

**Frontend Developer:**
- [ ] Build Contact page:
  - [ ] Hero
  - [ ] Quick contact info (3 columns)
  - [ ] Contact form with validation
  - [ ] Department directory (4-column grid)
  - [ ] Visit showroom section (map embed + address)
  - [ ] Response time expectations

- [ ] Build FAQ page:
  - [ ] Hero
  - [ ] Accordion component with GSAP toggle animation
  - [ ] 14 Q&A pairs organized by category
  - [ ] Search accordion functionality

- [ ] Create contact form API:
  ```typescript
  // POST /api/contact
  export async function POST(request: Request) {
    const body = await request.json();
    
    // Validate with Zod
    const validation = contactFormSchema.parse(body);
    
    // Save to database
    await prisma.contactSubmission.create({
      data: validation,
    });
    
    // Send email notification
    await sendEmail({
      to: 'sales@kolleris.com',
      subject: `New contact: ${body.name}`,
      body: formatContactMessage(body),
    });
    
    return Response.json({ success: true });
  }
  ```

**Backend Developer:**
- [ ] Set up email service (Resend, SendGrid, or SMTP)
- [ ] Create email templates (contact form confirmation, admin notification)

### Week 8: Refinements & Optimization

**Frontend Developer:**
- [ ] Add GSAP scroll reveal animations:
  ```typescript
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.from(entry.target, {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: 'power3.out',
          });
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll('[data-reveal]').forEach(el => {
      observer.observe(el);
    });
  }, []);
  ```

- [ ] Add loading skeleton screens (Skeleton component)
- [ ] Implement language switching with smooth fade (GSAP)
- [ ] Add focus states to all interactive elements
- [ ] Test form validation + error messages

**Designer:**
- [ ] Review all pages against design system
- [ ] Check spacing, alignment, typography on desktop/tablet/mobile
- [ ] Validate color contrast (WCAG AA minimum)

**QA:**
- [ ] Test all pages across devices (320px, 640px, 1024px, 1400px)
- [ ] Test form validation and submission
- [ ] Test language switcher
- [ ] Verify all links work (internal + external)
- [ ] Check load times (target: <3s on 4G)

---

## 🚀 PHASE 3: TESTING, OPTIMIZATION & DEPLOYMENT (Weeks 9–12)

### Week 9: Testing & SEO

**Frontend Developer:**
- [ ] Set up Jest + React Testing Library
- [ ] Write tests for:
  - [ ] Button component (click, disabled state, link navigation)
  - [ ] Form component (validation, submission)
  - [ ] Language switcher (locale change)
  - [ ] Product grid (API fetching, filtering)

**QA:**
- [ ] Functional testing:
  - [ ] All pages load correctly
  - [ ] Forms validate and submit
  - [ ] API data displays correctly
  - [ ] Images load properly
  - [ ] Links work (internal + external)
  - [ ] Responsive layout at all breakpoints

- [ ] Performance testing:
  - [ ] Lighthouse score (target: >90 on all)
  - [ ] Load time <3s on 4G
  - [ ] Cumulative Layout Shift <0.1

- [ ] Accessibility testing:
  - [ ] Keyboard navigation (Tab, Enter, Escape)
  - [ ] Screen reader compatibility (NVDA, JAWS)
  - [ ] Color contrast (WCAG AA minimum 4.5:1)
  - [ ] Touch target sizes (48px minimum on mobile)

**Backend Developer:**
- [ ] Set up SEO meta tags:
  ```typescript
  // app/[lang]/layout.tsx
  export const metadata = {
    title: 'Kolleris - Industrial Tools & Equipment Distributor',
    description: 'Supply chain solutions for Greek shipping, manufacturing, and repair operations.',
    openGraph: {
      title: 'Kolleris - Industrial Tools & Equipment',
      description: '...',
      url: 'https://kolleris.com',
      siteName: 'Kolleris',
      images: [{
        url: 'https://kolleris.com/og-image.jpg',
        width: 1200,
        height: 630,
      }],
    },
  };
  ```

- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Set up Google Analytics 4 + Search Console
- [ ] Create structured data (JSON-LD) for:
  - [ ] Organization (name, logo, contact)
  - [ ] LocalBusiness (address, phone, hours)
  - [ ] Product (schema for product grid)

### Week 10: Staging & Client Review

**DevOps:**
- [ ] Deploy to staging environment (Coolify or Vercel preview)
- [ ] Configure staging domain (staging.kolleris.com or similar)
- [ ] Set up environment variables (API keys, database, etc.)

**QA & Designer:**
- [ ] Full site walkthrough on staging
- [ ] Check all animations and interactions
- [ ] Verify brand consistency (colors, typography, spacing)
- [ ] Test language switching (EN ↔ ΕΛ)

**Client Review:**
- [ ] Present staging site to Kolleris stakeholders
- [ ] Gather feedback
- [ ] Document change requests
- [ ] Iterate if needed (typically 1–2 rounds)

### Week 11: Bug Fixes & Performance Tuning

**Frontend Developer:**
- [ ] Fix any reported bugs
- [ ] Optimize images (WebP with fallbacks, srcset for responsive)
- [ ] Code-split heavy components with Next.js dynamic imports
- [ ] Implement image lazy-loading

**Backend Developer:**
- [ ] Optimize API queries (SoftOne integration)
- [ ] Add caching layer (Redis or Next.js ISR)
- [ ] Monitor API response times
- [ ] Handle API errors gracefully (fallback UI)

**DevOps:**
- [ ] Performance profiling
- [ ] Configure CDN (Vercel or Cloudflare)
- [ ] Set up SSL/HTTPS (should be automatic)
- [ ] Configure security headers (CSP, X-Frame-Options, etc.)

### Week 12: Launch & Monitoring

**DevOps:**
- [ ] Set up production database backup schedule
- [ ] Configure monitoring (Sentry, LogRocket, New Relic)
- [ ] Set up uptime monitoring (Pingdom, UptimeRobot)
- [ ] Configure email alerts for errors

**Frontend Developer:**
- [ ] Final code review
- [ ] Merge develop → main branch
- [ ] Tag release (v1.0.0)

**Deploy to Production:**
```bash
# On main branch
git tag v1.0.0
git push origin v1.0.0

# CI/CD automatically deploys to kolleris.com
# (via GitHub Actions or Vercel deployment)
```

**QA:**
- [ ] Final smoke test on production
- [ ] Verify all pages load correctly
- [ ] Check form submission
- [ ] Verify API data displays
- [ ] Test language switcher

**Post-Launch:**
- [ ] Monitor error logs (Sentry)
- [ ] Check Core Web Vitals (Google Search Console)
- [ ] Monitor user behavior (Google Analytics)
- [ ] Be ready for hotfixes

---

## 📊 TIMELINE SUMMARY

| Phase | Duration | Deliverables |
|-------|----------|---|
| **Phase 1: Foundation** | 2 weeks | Project setup, design tokens, component stubs, Figma mockups |
| **Phase 2: Development** | 6 weeks | All pages built, API integrated, forms working, animations polished |
| **Phase 3: Testing & Launch** | 4 weeks | Testing complete, SEO ready, staging approved, deployed to production |
| **Total** | 12 weeks | Live website at kolleris.com ✅ |

---

## 👥 TEAM RESPONSIBILITIES

### Frontend Developer (50% of project)
- Component development (Button, Card, Form, Hero, etc.)
- Page layouts (Homepage, About, Services, Products, etc.)
- GSAP animations and interactions
- Responsive design & mobile testing
- Form validation & submission
- Language switcher implementation
- Testing & bug fixes

### Backend Developer (30% of project)
- Project setup (Next.js, Prisma, database)
- SoftOne API integration (brands, products)
- Database schema & migrations
- Contact form API & email notifications
- Authentication & security
- SEO setup (meta tags, sitemap, structured data)
- Performance optimization

### Designer (15% of project, mostly Weeks 1–3)
- Figma component library
- Design handoff specs
- Responsive design validation
- Brand consistency review

### QA Engineer (15% of project, mostly Weeks 9–12)
- Functional testing
- Cross-browser/device testing
- Performance testing
- Accessibility testing
- Final staging review

### DevOps (10% of project, continuous)
- CI/CD pipeline setup
- Staging & production deployment
- Monitoring & error tracking
- Database backups & security

---

## 🛠️ DEVELOPMENT TOOLS & SETUP

### Required Software
```bash
# Node.js 18+
node --version  # v18+

# Git
git --version

# VS Code (recommended)
# - ESLint extension
# - Prettier extension
# - Tailwind CSS extension
```

### Local Development Setup
```bash
# Clone repository
git clone https://github.com/cloudzeus/kolleris-website.git
cd kolleris-website

# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local
# Fill in:
# DATABASE_URL=mysql://user:password@localhost:3306/kolleris
# SOFTONE_API_KEY=...
# NEXTAUTH_SECRET=...
# NEXTAUTH_URL=http://localhost:3000

# Set up database
npx prisma migrate dev

# Start development server
npm run dev

# Open http://localhost:3000
```

### Deployment Commands
```bash
# Staging (Coolify)
git push origin develop  # Auto-deploys to staging

# Production (Main)
git push origin main     # Auto-deploys to production
```

---

## 📚 DOCUMENTATION REFERENCES

- **KOLLERIS_DESIGN_SYSTEM.md** — Complete visual language, components, animations
- **DESIGN_DIRECTIONS.md** — Page wireframes and layout specs
- **KOLLERIS_LOGO_GUIDELINES.md** — Logo usage, sizing, placement
- **Content Files** — 01_HOMEPAGE_OGILVY.md through 08_FAQ_OGILVY.md (English)
- **Greek Content Files** — 01_HOMEPAGE_GREEK_PROFESSIONAL.md through 08_FAQ_GREEK_PROFESSIONAL.md
- **Ogilvy Principles** — [How to Create Advertising That Sells](https://en.wikipedia.org/wiki/David_Ogilvy) — problem-first messaging, specific facts, benefit statements

---

## ✨ SUCCESS CRITERIA

✅ **Website Launches When:**
- All 8 pages (7 + homepage) live in English
- All 7 pages (6 + homepage) live in Greek
- Language switcher works (EN ↔ ΕΛ)
- Brands & products load from SoftOne API
- Contact form submits and sends email
- All animations play smoothly (no janky scrolls)
- Mobile responsive (320px, 640px, 1024px, 1400px)
- Lighthouse score ≥ 90 (Performance, Accessibility, SEO)
- Zero console errors or warnings
- WCAG AA accessibility compliant

---

## 🚀 GO LIVE!

**Target Launch Date:** Week 12 (12 weeks from start)
**Production URL:** https://kolleris.com
**Status:** Ready to build 🎯

---

**Next Steps:**
1. Schedule kickoff meeting with team
2. Finalize tech stack & hosting (Vercel vs Coolify)
3. Get SoftOne API credentials
4. Create GitHub repository
5. Start Phase 1 → Project Setup

**Questions?** Reference KOLLERIS_DESIGN_SYSTEM.md or DESIGN_DIRECTIONS.md for specifics.


# KOLLERIS WEBSITE - QUICK START GUIDE
## First Week Setup & Initial Commands

---

## 🎯 START HERE (5 MINUTES)

**You have everything you need to build Kolleris.com**

Three documents + eight content pages in English + seven content pages in Greek + design system + logo guidelines.

---

## 📦 WHAT YOU HAVE

✅ **KOLLERIS_DESIGN_SYSTEM.md** (62 sections)
- Colors, typography, spacing, border radius
- 15+ component specs (buttons, cards, forms, navigation, hero, products, modals)
- GSAP animation library (14+ animation patterns with code snippets)
- Responsive breakpoints & mobile-first strategy
- Accessibility & performance guidelines
- React component inventory (ready to build)

✅ **DESIGN_DIRECTIONS.md** (200+ lines)
- Page-by-page layout wireframes
- Component hierarchy & spacing
- Responsive design strategy
- Typography guidelines

✅ **KOLLERIS_LOGO_GUIDELINES.md** (20 sections)
- 7 logo variations (full, icon, horizontal, stacked, monochrome)
- Exact sizing for desktop/tablet/mobile
- Color specifications (hex, RGB, HSL)
- Clear space & placement rules
- Page-by-page logo usage

✅ **IMPLEMENTATION_ROADMAP.md** (12-week development plan)
- Phase-by-phase breakdown
- Week-by-week tasks
- Team responsibilities
- Testing & deployment strategy

✅ **00_WEBSITE_INDEX_OGILVY.md**
- Navigation map for all pages
- API integration points
- Implementation phases

✅ **ENGLISH CONTENT (8 Pages - Ready to Use)**
1. 01_HOMEPAGE_OGILVY.md
2. 02_ABOUT_US_OGILVY.md
3. 03_SERVICES_OGILVY.md
4. 05_BRANDS_OGILVY.md
5. 06_PRODUCTS_OGILVY.md
6. 07_CONTACT_OGILVY.md
7. 08_FAQ_OGILVY.md

✅ **GREEK CONTENT (7 Pages - Professional Translation)**
1. 01_HOMEPAGE_GREEK_PROFESSIONAL.md
2. 02_ABOUT_US_GREEK_PROFESSIONAL.md
3. 03_SERVICES_GREEK_PROFESSIONAL.md
4. 05_BRANDS_GREEK_PROFESSIONAL.md
5. 06_PRODUCTS_GREEK_PROFESSIONAL.md
6. 07_CONTACT_GREEK_PROFESSIONAL.md
7. 08_FAQ_GREEK_PROFESSIONAL.md

---

## 🚀 WEEK 1 CHECKLIST

### Day 1: Read (1 hour)
- [ ] Read KOLLERIS_DESIGN_SYSTEM.md (Colors → Typography → Components → Animations)
- [ ] Read DESIGN_DIRECTIONS.md (Page layouts)
- [ ] Read KOLLERIS_LOGO_GUIDELINES.md (Logo placement)
- [ ] Skim IMPLEMENTATION_ROADMAP.md (Timeline overview)

### Day 2–3: Setup (4 hours)
- [ ] Create GitHub repository: `cloudzeus/kolleris-website`
- [ ] Initialize Next.js 16.2+ project:
```bash
npx create-next-app@latest kolleris \
  --typescript \
  --tailwind \
  --app-router \
  --import-alias '@/*'

cd kolleris
```

- [ ] Install required packages:
```bash
npm install \
  gsap \
  next-intl \
  shadcn-ui \
  next-auth \
  axios \
  @hookform/resolvers \
  react-hook-form \
  zod \
  @prisma/client \
  prisma
```

- [ ] Initialize Prisma:
```bash
npx prisma init
```

- [ ] Set up folder structure:
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── [lang]/
│   │   ├── page.tsx
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
│   ├── Forms/
│   ├── Hero/
│   ├── Navigation/
│   ├── Products/
│   ├── Services/
│   ├── Contact/
│   ├── FAQ/
│   └── Shared/
├── hooks/
│   ├── useGSAP.ts
│   ├── useLang.ts
│   └── useIntersectionObserver.ts
├── lib/
│   ├── animations.ts
│   ├── api-client.ts
│   ├── theme.ts
│   └── db.ts
├── styles/
│   └── globals.css
└── content/
    ├── en/
    │   ├── homepage.json
    │   ├── about.json
    │   ├── services.json
    │   ├── brands.json
    │   ├── products.json
    │   ├── contact.json
    │   └── faq.json
    └── el/
        ├── homepage.json
        ├── about.json
        ├── services.json
        ├── brands.json
        ├── products.json
        ├── contact.json
        └── faq.json
```

### Day 4–5: Design Tokens & Theme (3 hours)

**Create `src/lib/theme.ts`:**
```typescript
export const colors = {
  primary: '#1a3a52',
  secondary: '#e67e22',
  ink: '#1f1f1f',
  body: '#555555',
  mute: '#888888',
  canvas: '#ffffff',
  canvasSoft: '#f5f5f5',
  success: '#27ae60',
  error: '#e74c3c',
  info: '#3498db',
};

export const typography = {
  displayHero: {
    fontSize: '56px',
    fontWeight: 800,
    lineHeight: '64px',
    letterSpacing: '-0.5px',
  },
  displayXl: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '56px',
  },
  displayLg: {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '48px',
  },
  displayMd: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '40px',
  },
  displaySm: {
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: '36px',
  },
  bodyLg: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '32px',
  },
  bodyMd: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '28px',
  },
  bodyMdStrong: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '28px',
  },
  bodySm: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  bodySmStrong: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
  },
  caption: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },
  captionStrong: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
  },
  buttonMd: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
  },
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '48px',
  '5xl': '64px',
};

export const rounded = {
  none: '0px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  pill: '32px',
  pillLg: '48px',
  full: '9999px',
};
```

**Update `tailwind.config.ts`:**
```typescript
import type { Config } from 'tailwindcss';
import { colors, typography, spacing, rounded } from '@/lib/theme';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
      fontSize: {
        'display-hero': ['56px', { lineHeight: '64px' }],
        'display-xl': ['48px', { lineHeight: '56px' }],
        'display-lg': ['40px', { lineHeight: '48px' }],
        'display-md': ['32px', { lineHeight: '40px' }],
        'display-sm': ['28px', { lineHeight: '36px' }],
        'body-lg': ['20px', { lineHeight: '32px' }],
        'body-md': ['18px', { lineHeight: '28px' }],
        'body-sm': ['16px', { lineHeight: '24px' }],
      },
      spacing,
      borderRadius: rounded,
    },
  },
  plugins: [],
};

export default config;
```

### Day 5: Git & Database Setup (1 hour)

**Initialize Git:**
```bash
git init
git add .
git commit -m "Initial project setup"
git branch -M main
git remote add origin https://github.com/cloudzeus/kolleris-website.git
git push -u origin main
```

**Create `.env.local`:**
```
# Database
DATABASE_URL="mysql://root:password@localhost:3306/kolleris_dev"

# SoftOne API
SOFTONE_API_KEY="your_api_key_here"
SOFTONE_API_URL="https://s1services.softone.gr/api/v1"

# NextAuth
NEXTAUTH_SECRET="your_secret_here"
NEXTAUTH_URL="http://localhost:3000"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="noreply@kolleris.com"
SMTP_PASSWORD="your_password_here"
```

**Create Prisma schema (`prisma/schema.prisma`):**
```prisma
// This is your Prisma schema file
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  company   String?
  phone     String?
  category  String
  message   String   @db.Text
  createdAt DateTime @default(now())
}

model NewsletterSubscriber {
  id    String @id @default(cuid())
  email String @unique
  lang  String @default("en")
  createdAt DateTime @default(now())
}
```

**Run migration:**
```bash
npx prisma migrate dev --name init
```

---

## 📝 CONTENT STRUCTURE (Days 6–7)

Create JSON files from markdown content:

**`src/content/en/homepage.json`:**
```json
{
  "meta": {
    "title": "Why Greek Shipping Companies, Factories, and Repair Shops Trust Kolleris",
    "description": "46 years of industrial tools supply chain solutions"
  },
  "hero": {
    "headline": "Why Greek Shipping Companies, Factories, and Repair Shops Trust Kolleris",
    "subheading": "When your operation depends on having the right tool at the right time, Kolleris is where you turn."
  },
  "problemCards": [
    {
      "problem": "Downtime Costs More Than the Tool",
      "solution": "We stock what you need when you need it. No backorders. No delays."
    }
    // ... more cards
  ]
}
```

**`src/content/el/homepage.json`:**
```json
{
  "meta": {
    "title": "Γιατί οι Ελληνικές Ναυτιλιακές, Εργοστάσια και Συνεργεία Εμπιστεύονται την Kolleris",
    "description": "46 χρόνια προμήθειας βιομηχανικών εργαλείων"
  }
  // ... Greek content
}
```

---

## 🎨 COMPONENT EXAMPLES

**Create `src/components/Button/Primary.tsx`:**
```typescript
'use client';

import { ReactNode } from 'react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export const PrimaryButton = ({
  children,
  onClick,
  href,
  disabled,
}: PrimaryButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className="
        px-6 py-3
        bg-[#1a3a52] text-white
        rounded-full (rounded-pill-lg)
        font-semibold text-base
        hover:bg-[#0f2435]
        disabled:bg-gray-400 disabled:cursor-not-allowed
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-[#1a3a52] focus:ring-offset-2
      "
    >
      {children}
    </button>
  );
};
```

---

## ✨ FIRST RUN

```bash
# Start development server
npm run dev

# Open http://localhost:3000
# You should see a blank page (we haven't built homepage yet)

# Check for TypeScript errors
npm run type-check

# Format code
npm run format
```

---

## 📅 WHAT'S NEXT (Week 2+)

Follow **IMPLEMENTATION_ROADMAP.md**:
- Week 1–2: Foundation (design tokens, component stubs)
- Week 3–8: Development (build all pages, API integration)
- Week 9–12: Testing & launch

---

## ❓ COMMON QUESTIONS

**Q: Where do I find the design specs?**
A: KOLLERIS_DESIGN_SYSTEM.md (colors, typography, components, animations)

**Q: What about the logo?**
A: KOLLERIS_LOGO_GUIDELINES.md (sizing, placement, color specs)

**Q: How do I integrate SoftOne?**
A: See IMPLEMENTATION_ROADMAP.md Week 5 (api-client.ts)

**Q: What about Greek/English switching?**
A: Use `next-intl` (Week 5 in roadmap)

**Q: How do I deploy?**
A: See IMPLEMENTATION_ROADMAP.md Week 12 (Git → Vercel/Coolify auto-deploy)

---

## 🚀 YOU'RE READY TO BUILD

**Open your terminal. Start building. Ship in 12 weeks. 🎯**


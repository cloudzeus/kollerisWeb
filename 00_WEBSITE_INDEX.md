# KOLLERIS WEBSITE - Complete Content Structure

## Project Overview
Complete informational website for Kolleris - a professional tools and machinery distributor since 1978.
- **Primary Domain**: kolleris.com
- **Languages**: English & Greek (Parallel content)
- **Format**: Markdown files organized by section
- **API Integration**: Dynamic content from SoftOne web services (brands, products, customers)

---

## Website Structure & Files

### 1. **01_HOMEPAGE.md** - Main Landing Page
Hero section, value proposition, featured services, brands carousel, CTAs

### 2. **02_ABOUT_US.md** - Company Information
Company history, mission, vision, values, team, physical location, credentials

### 3. **03_SERVICES.md** - Service Offerings
Detailed descriptions of all services offered to different customer segments

### 4. **04_PIM_APPLICATION.md** - Product Information Management
Features, benefits, and capabilities of the Kolleris PIM system

### 5. **05_BRANDS.md** - Brand Partnerships
Showcase of brands distributed (API-integrated from SoftOne)

### 6. **06_PRODUCTS.md** - Product Categories
Featured products across categories (API-integrated)

### 7. **07_CONTACT.md** - Contact & Locations
Contact information, address, phone, email, contact form, business hours

### 8. **08_FAQ.md** - Frequently Asked Questions
Common questions from customers and partners

---

## API Integration Points

### SoftOne Web Services to Integrate:

**Brands Section (05_BRANDS.md)**
- Endpoint: `getObjects(BRAND)`
- Use to fetch: Brand names, logos, descriptions, categories
- Display: Brand carousel, brand filter, brand partnership details

**Products Section (06_PRODUCTS.md)**
- Endpoint: `getObjects(ITEM)` or `getObjects(PRODUCT)`
- Use to fetch: Product names, descriptions, categories, specifications
- Display: Product grid, featured products, category filters

**Customer References (02_ABOUT_US.md)**
- Endpoint: `getObjects(CUSTOMER)` with filters
- Use to fetch: Notable customer testimonials, case studies
- Display: Client logos, success stories

---

## Technical Notes

- **Dynamic Content Regions**: Marked with `[API INTEGRATION]` tags
- **Bilingual Structure**: English content followed by Greek equivalent
- **SEO Optimization**: Includes meta descriptions, keywords, heading hierarchy
- **Mobile Responsive**: Content structured for responsive design

---

## Next Steps

1. Review each markdown file for content accuracy
2. Integrate SoftOne API calls for dynamic sections
3. Design layout based on content structure
4. Implement translation management system
5. Set up content caching for API responses
6. Deploy to kolleris.com with Next.js/React frontend


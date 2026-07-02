# KOLLERIS - PRODUCTS

---

## PAGE OVERVIEW
Product showcase and discovery page. Dynamically pulls products from SoftOne API with filtering, search, and category browsing capabilities.

---

## PRODUCTS PAGE CONTENT

### HERO SECTION

#### Page Title

**ENGLISH:**
# Professional Tools & Industrial Equipment

**GREEK:**
# Επαγγελματικά Εργαλεία & Βιομηχανικός Εξοπλισμός

---

#### Page Subtitle

**ENGLISH:**
Discover our comprehensive range of quality tools and equipment. From hand tools to industrial machinery, find everything you need to get the job done right.

**GREEK:**
Ανακαλύψτε την ολοκληρωμένη σειρά ποιοτικών εργαλείων και εξοπλισμού μας. Από εργαλεία χεριού έως βιομηχανικές μηχανές, βρείτε όλα όσα χρειάζεστε.

---

### PRODUCT DISCOVERY & FILTERING

**SECTION TITLE**

**ENGLISH:**
Find Products by Category

**GREEK:**
Ανακαλύψτε Προϊόντα κατά Κατηγορία

---

#### API INTEGRATION NOTE

**Data Source**: SoftOne `getObjects('ITEM')` endpoint

**Fields to Display**:
- Product name/SKU
- Product image
- Brief description
- Category
- Price range (from SoftOne)
- In-stock status
- Manufacturer/Brand
- Key specifications

**Display Format**:
- Grid layout (2-4 columns, responsive)
- Search bar for keyword search
- Sidebar filters for category, brand, price range
- Sort options (popularity, price, newest)
- Product count display
- Pagination or infinite scroll

**Caching**: 12-hour cache with real-time inventory updates

---

### FEATURED PRODUCT CATEGORIES

#### Category 1: Hand Tools

**ENGLISH:**
**Icon**: 🔧
**Description**: Essential hand tools for professionals and DIY enthusiasts. From wrenches and pliers to screwdrivers and specialized tools, we have everything you need for precision work.

**Featured Products** [API INTEGRATION]:
- Adjustable Wrenches
- Hammer & Mallets
- Pliers Assortments
- Screwdriver Sets
- Socket Sets
- Specialized Hand Tools

**GREEK:**
**Εικονίδιο**: 🔧
**Περιγραφή**: Απαραίτητα εργαλεία χεριού για επαγγελματίες και ενθουσιώδεις DIY. Από κλειδιά και πένσες έως κατσαβίδια και εξειδικευμένα εργαλεία.

---

#### Category 2: Power Tools & Equipment

**ENGLISH:**
**Icon**: ⚡
**Description**: Heavy-duty power tools for demanding applications. Drills, impact drivers, saws, and more—all engineered for professional performance.

**Featured Products** [API INTEGRATION]:
- Cordless Drills
- Impact Drivers & Wrenches
- Circular & Hand Saws
- Angle Grinders
- Sanders & Polishers
- Rotary Hammers

**GREEK:**
**Εικονίδιο**: ⚡
**Περιγραφή**: Βαρέα ηλεκτρικά εργαλεία για απαιτητικές εφαρμογές.

---

#### Category 3: Air Tools & Pneumatic Equipment

**ENGLISH:**
**Icon**: 💨
**Description**: Efficient pneumatic tools and compressors for industrial applications. Perfect for high-volume production and heavy-duty work.

**Featured Products** [API INTEGRATION]:
- Air Compressors (various sizes)
- Pneumatic Drills
- Air Nailers & Staplers
- Air Impact Wrenches
- Air Sanders & Grinders
- Hoses & Fittings

**GREEK:**
**Εικονίδιο**: 💨
**Περιγραφή**: Αποδοτικά πνευματικά εργαλεία και συμπιεστές για βιομηχανικές εφαρμογές.

---

#### Category 4: Safety & Personal Protective Equipment

**ENGLISH:**
**Icon**: 🛡️
**Description**: Comprehensive safety solutions to protect your team. Hard hats, gloves, eyewear, fall protection, and more—all meeting international safety standards.

**Featured Products** [API INTEGRATION]:
- Hard Hats & Helmets
- Safety Gloves (various types)
- Eye & Face Protection
- Hearing Protection
- Respiratory Protection
- Fall Protection Systems
- High-Visibility Apparel

**GREEK:**
**Εικονίδιο**: 🛡️
**Περιγραφή**: Ολοκληρωμένες λύσεις ασφάλειας για προστασία της ομάδας σας.

---

#### Category 5: Maintenance & Cleaning

**ENGLISH:**
**Icon**: 🧹
**Description**: Keep your equipment and workspace clean and well-maintained. Cleaning solutions, pressure washers, brushes, and specialized maintenance tools.

**Featured Products** [API INTEGRATION]:
- Pressure Washers
- Wire Brushes
- Cleaning Solutions
- Maintenance Supplies
- Degreasing Products
- Industrial Vacuums

**GREEK:**
**Εικονίδιο**: 🧹
**Περιγραφή**: Κρατήστε τον εξοπλισμό και τον χώρο εργασίας σας καθαρό και συντηρημένο.

---

#### Category 6: Abrasives & Finishing Materials

**ENGLISH:**
**Icon**: ✨
**Description**: Premium abrasives for surface preparation and finishing. Sandpaper, grinding wheels, and polishing compounds for professional results.

**Featured Products** [API INTEGRATION]:
- Sandpaper Assortments
- Grinding Wheels
- Sanding Belts
- Polishing Compounds
- Sanding Sponges
- Finishing Pads

**GREEK:**
**Εικονίδιο**: ✨
**Περιγραφή**: Ποιοτικά αποξέστρο για προετοιμασία επιφάνειας και τελείωμα.

---

#### Category 7: Workwear & Safety Apparel

**ENGLISH:**
**Icon**: 👕
**Description**: Durable, comfortable work apparel designed for safety and functionality. Jackets, pants, boots, and accessories built for demanding environments.

**Featured Products** [API INTEGRATION]:
- Work Jackets & Coats
- Work Pants & Trousers
- Safety Boots & Shoes
- Work Gloves & Mittens
- Hard Hats & Caps
- Reflective Vests

**GREEK:**
**Εικονίδιο**: 👕
**Περιγραφή**: Ανθεκτικές, άνετες ρούχα εργασίας σχεδιασμένα για ασφάλεια και λειτουργικότητα.

---

#### Category 8: Electrical & Wiring Solutions

**ENGLISH:**
**Icon**: 🔌
**Description**: Comprehensive electrical supplies for installation, maintenance, and repair. Cables, connectors, switches, and specialized electrical equipment.

**Featured Products** [API INTEGRATION]:
- Power Cables
- Electrical Wire
- Circuit Breakers
- Electrical Connectors
- Junction Boxes
- Conduit Systems

**GREEK:**
**Εικονίδιο**: 🔌
**Περιγραφή**: Ολοκληρωμένες ηλεκτρικές προμήθειες για εγκατάσταση, συντήρηση και επισκευή.

---

### PRODUCT SEARCH & FILTERS

**SECTION TITLE**

**ENGLISH:**
Advanced Product Search

**GREEK:**
Προηγμένη Αναζήτηση Προϊόντων

---

**Search Features:**
- **Keyword Search**: Search by product name, SKU, or brand
- **Category Filters**: Browse by product category
- **Brand Filters**: Filter by specific brands
- **Price Range Slider**: Find products within your budget
- **In-Stock Filter**: Show only available products
- **Specification Filters**: Filter by specific product attributes
- **Sort Options**: Sort by relevance, price (low-high), popularity, newest

---

### PRODUCT DETAIL VIEW

**[API INTEGRATION]**

When users click on a product, the detailed view includes:
- Large product image(s) with zoom capability
- Full product name and SKU
- Brand and category
- Detailed product description
- Complete specifications
- Current pricing
- Stock availability
- Warranty information
- Related products
- Customer reviews (if available)
- "Request Quote" or "Add to Cart" buttons (for e-commerce integration)

---

### BEST SELLERS

**SECTION TITLE**

**ENGLISH:**
Top Performing Products

**GREEK:**
Κορυφαία Προϊόντα

---

**[API INTEGRATION]**
Display top 6-8 best-selling products with:
- Product image
- Name and brand
- Brief description
- Price
- Customer rating (if available)
- "View Details" link

---

### SPECIAL OFFERS & BUNDLES

**SECTION TITLE**

**ENGLISH:**
Value Packages & Bundles

**GREEK:**
Πακέτα Αξίας & Δέσματα

---

**ENGLISH:**
Take advantage of our curated product bundles that combine complementary items at special pricing.

**[API INTEGRATION]**
Display featured bundles:
- Bundle name
- Included products (with images)
- Original vs. bundle price
- Savings amount
- "View Bundle" link

---

### TECHNICAL SPECIFICATIONS COMPARISON

**SECTION TITLE**

**ENGLISH:**
Compare Products

**GREEK:**
Συγκρίνετε Προϊόντα

---

**ENGLISH:**
Need help deciding between products? Use our comparison tool to view side-by-side specifications and features.

**Comparison Features:**
- Select up to 4 products to compare
- View specifications in table format
- Highlight key differences
- Download comparison as PDF
- Share comparison with team members

---

### PRODUCT ORDERING OPTIONS

**SECTION TITLE**

**ENGLISH:**
How to Order

**GREEK:**
Πώς να Παραγγείλετε

---

**ENGLISH:**
Multiple ways to order:

1. **Online Store** (ecommerce.kolleris.com): Browse and purchase directly
2. **Request a Quote**: Submit inquiry for custom pricing
3. **Phone Orders**: Call our team at [phone number]
4. **Email Inquiry**: Send product requests to info@kolleris.com
5. **In-Person Visit**: Visit our showroom in Piraeus

**Bulk Orders**:
For bulk purchases and wholesale pricing, contact our sales team directly. We offer special discounts for volume orders.

**GREEK:**
Πολλοί τρόποι για να παραγγείλετε:

1. **Διαδικτυακό Κατάστημα**: Περιηγηθείτε και αγοράστε απευθείας
2. **Ζητήστε Προσφορά**: Υποβάλετε ερώτημα για προσαρμοσμένες τιμές
3. **Τηλεφωνικές Παραγγελίες**: Καλέστε την ομάδα μας
4. **Αίτημα Ηλεκτρονικού Ταχυδρομείου**: Στείλτε αιτήματα προϊόντων
5. **Επίσκεψη στο Κατάστημα**: Επισκεφθείτε το χώρο έκθεσής μας

---

### CALL-TO-ACTION

**SECTION TITLE**

**ENGLISH:**
Need Help Finding the Right Product?

**GREEK:**
Χρειάζεστε Βοήθεια για να Βρείτε το Κατάλληλο Προϊόν;

---

**ENGLISH:**
Our team of product specialists is ready to help. Get personalized recommendations based on your specific needs.

**GREEK:**
Η ομάδα των ειδικών προϊόντων μας είναι έτοιμη να βοηθήσει. Λάβετε εξατομικευμένες συστάσεις.

**CTA Buttons:**
- **Text (EN)**: "Contact Our Specialists"
- **Text (GR)**: "Επικοινωνήστε με τους Ειδικούς Μας"
- **Link**: Contact page

---

## SEO Metadata

**Page Title (EN):** Professional Tools & Equipment | Shop Online | Kolleris
**Page Title (GR):** Επαγγελματικά Εργαλεία & Εξοπλισμός | Αγοράστε Online | Kolleris

**Meta Description (EN):** Browse Kolleris' wide selection of professional tools, equipment, and supplies. Hand tools, power tools, safety gear, and more from trusted brands.

**Meta Description (GR):** Περιηγηθείτε την ευρεία σειρά επαγγελματικών εργαλείων, εξοπλισμού και προμηθειών της Kolleris.

---


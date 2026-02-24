# Bambrew Website - Premium Plastic-Free E-commerce Site

## Project Overview
Build a high-end, modern e-commerce landing page for Bambrew - a company selling compostable, plant-based plastic alternatives. The site should replicate the sophisticated design aesthetic of seed.com with overlapping rounded sections, glassmorphism effects, smooth animations, and a premium green color palette.

## Tech Stack
- Next.js 14+ (App Router)
- JavaScript
- Tailwind CSS
- Framer Motion (for animations)

## Design System

### Color Palette
```css
--primary-dark-green: #1a3a2e
--primary-green: #2d5a47
--medium-green: #4a7c59
--light-green: #a8d5ba
--accent-lime: #d4f4dd
--cream-bg: #f5f3ed
--white: #ffffff
--text-dark: #1a1a1a
--text-light: #666666
```

### Typography
- Font Family: System sans-serif stack (similar to Seed's clean aesthetic)
- Primary: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif
- Headings: Bold, large, generous letter-spacing
- Body: Regular weight, comfortable line-height (1.6-1.8)

### Spacing & Layout
- Max content width: 1440px
- Section padding: 120px vertical, 80px horizontal
- Border radius for sections: 48px (large, smooth curves)
- Section overlap: -60px (sections overlap into each other)

## Component Requirements

### 1. Header Component (Header.tsx)
**Features:**
- Sticky header that becomes glassmorphic on scroll
- Initial state: Transparent background, dark green text
- Scrolled state: backdrop-blur-xl, bg-white/70, subtle shadow
- Logo (image from /public/assets/images/logo.avif)
- Navigation: Shop | Impact | Science | Learn
- Right side: Login (text link) | Get Started (green button)
- Smooth transition between states (0.3s)
- Rounded pill-shaped buttons with generous padding

**Glassmorphism CSS:**
```css
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.7);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### 2. Hero Section (Hero.tsx)
**Content:**
- Headline: "A plastic-free life can change your world."
- Subheading: "Our advanced plant-based materials replace single-use plastic in the products you use every day — bags, liners, wraps, and more... without compromising strength, safety, or convenience."
- Two CTAs:
  - Primary: "Shop Everyday Essentials" (dark green filled button)
  - Secondary: "Find Your Plastic-Free Solution" (outlined button with arrow)
- Hero image: Large product visual positioned right side (/public/assets/images/hero-product.png)
- Background: Light cream (#f5f3ed)
- Rounded bottom border (48px) that overlaps into next section

**Layout:**
- Two-column: 50% text (left), 50% image (right)
- Centered vertically
- Image should have subtle floating animation (Framer Motion)

### 3. Product Showcase Section (ProductShowcase.tsx)
**Content:**
- Headline: "Whole home sustainability starts with what you use every day."
- Body text: "Each item is powered by our proprietary biopolymer blends and certified materials, so you get durability and reliability—with none of the plastic guilt."
- "Shop All →" link (top right)
- 4 Product Cards (see below)

**Product Cards Data:**
```javascript
[
  {
    badge: "Bestseller",
    title: "Daily Carry Bags",
    subtitle: "Compostable shopping and carry bags for groceries, errands, and everything in between.",
    image: "/assets/images/product-daily-carry.png",
    price: "Starting at ₹15/piece"
  },
  {
    badge: "New",
    title: "Home & Kitchen",
    subtitle: "Bin liners, food-safe pouches, and wraps that keep your space clean and your conscience clear.",
    image: "/assets/images/product-home-kitchen.png",
    price: "Starting at ₹20/piece"
  },
  {
    badge: "New",
    title: "Creator & Shipping Kits",
    subtitle: "Eco-friendly mailers, tapes, and fillers for small brands and creators who ship with intention.",
    image: "/assets/images/product-creator-shipping.png",
    price: "Starting at ₹18/piece"
  },
  {
    badge: "New",
    title: "Office & Gifting",
    subtitle: "Ready-to-go sustainable kits for teams, events, and responsible corporate gifting.",
    image: "/assets/images/product-office-gifting.png",
    price: "Starting at ₹25/piece"
  }
]
```

**Card Hover Animation (CRITICAL):**
This is the signature effect - when hovering over a card:
1. Hovered card: Shrinks width (90%), expands height (105%), scales up slightly (1.02)
2. Previously hovered card: Expands width (100%), shrinks height (100%), scales back (1.0)
3. Transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
4. Card image also scales up 1.05x on hover
5. Button appears/animates on hover

Use Framer Motion for this:
```jsx
<motion.div
  whileHover={{ 
    width: "90%", 
    height: "105%", 
    scale: 1.02 
  }}
  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
>
```

**Card Style:**
- Dark green background with slight transparency
- Rounded corners (24px)
- Product image centered, fills card
- Badge (Bestseller/New) top-left, small rounded pill, lime green bg
- Price at bottom in light text
- "Shop Now" button (white bg) at bottom, appears on hover

**Background:** Dark green (#1a3a2e)

### 4. Product Science Section (ProductScience.tsx)
**Content:**
- Background: Large nature/plant image (/public/assets/images/plants-background.jpg) with overlay
- Glassmorphic container in center with rounded corners
- Headline: "Most 'eco' plastics don't truly break down—ours are engineered to."
- Center: Looping video (/public/assets/videos/product-science.mp4)
  - Autoplay, muted, loop
  - No controls visible
  - Centered in glassmorphic frame
- Left side info box:
  - Badge: "Compostable core"
  - Text: "Engineered from plant-based polymers and fibers that break down under composting conditions into water, CO₂, and biomass—without microplastic residue."
- Right side info box:
  - Badge: "Proven performance"
  - Text: "Tested for strength, durability, and safety across demanding categories like e-commerce, FMCG, fresh produce, and agriculture—now adapted for your home."

**Video Implementation:**
```jsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
>
  <source src="/assets/videos/product-science.mp4" type="video/mp4" />
</video>
```

**Glassmorphic Frame:**
- backdrop-blur-xl
- bg-white/10
- border: 1px solid white/20
- Large border-radius (32px)
- Padding: 60px

### 5. Education Section (Education.tsx)
**Content:**
- Background: Cream (#f5f3ed)
- Two columns: 50/50
- Left side:
  - Headline: "You are more than a consumer."
  - Body: "Your daily choices connect you to forests, farms, oceans, and communities around the world. Every compostable bag you use and every plastic product you refuse shifts demand toward better materials and more responsible systems."
  - CTA: "Explore How Our Materials Work" button
  - Footer text: "SCIENCE / Materials 101"
- Right side:
  - Video player (/public/assets/videos/education-section.mp4)
  - Autoplay, loop, muted
  - Rounded corners (24px)
  - No controls
  - Subtle shadow

### 6. Seed Labs Section (SeedLabs.tsx)
**Layout:** Two cards side-by-side

**Left Card (Bambrew Labs):**
- Label: "Bambrew [Labs]"
- Headline: "Because a plastic-free future needs better materials."
- Body: "Our R&D teams develop next-generation biopolymers and composites that solve real-world packaging and product challenges—without shifting the burden to the planet. From agrifiber innovations to new compostable films, we're constantly prototyping what comes next."
- CTA: "Learn About Bambrew Labs"
- Background: Outdoor/rocky image (use placeholder or gradient)
- Dark overlay with white text

**Right Card (CTA):**
- Headline: "Change your plastic footprint for good."
- Body: "Start with one room, one drawer, or one business shipment. Our curated kits and subscriptions make it easy to phase out single-use plastics and stick with better choices long term."
- CTA: "Shop Now"
- Background: Solid green gradient
- White text

### 7. Footer Component (Footer.tsx)
**Structure:**
- Background: Dark green (#1a3a2e)
- White text
- Tagline: "Pioneering advanced biopolymer materials for human and planetary health—starting with the products you use every day."

**Columns:**
1. Products: Shop All, Daily Carry Bags, Home & Kitchen, Creator & Shipping Kits, Office & Gifting
2. About: Our Science, Sustainability, Bambrew Labs, Our Story
3. Partner: Business Inquiries, Creators & Small Brands, Corporate & Gifting
4. Learn: Materials 101, How to Compost, Impact Reports
5. Help: Help Center, Contact, My Account, Shipping & Returns
6. Social: Instagram, LinkedIn, Twitter, Community
7. Legal: Terms & Conditions, Privacy Policy, Accessibility, Cookie & Consent Preferences

**Newsletter Signup:**
- Heading: "Stay in the loop"
- Text: "Get stories, guides, and product drops on building a lower-waste life with better materials. By signing up, you consent to receive emails from Bambrew."
- Input field + Submit button

**Bottom Note:**
"Our materials and products are designed to help reduce reliance on conventional plastics. Always follow local guidelines for composting and waste disposal."

### 8. Stay Small Component (StaySmall.tsx)
**Content:**
- GIF animation (/public/assets/gifs/stay-small-leave-less.gif)
- Background: Medium green
- Centered, full-width
- Height: 200px
- GIF should cover entire section

## Animation Requirements

### Framer Motion Animations:
1. **Scroll-triggered fade-ins:** All sections fade in and slide up when scrolled into view
```jsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

2. **Hero image float:** Subtle up-down animation
```jsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
>
```

3. **Product card hover:** Width/height morphing (described above in ProductShowcase)

4. **Button hover:** Scale and background color transition

5. **Header scroll:** Glassmorphism activation when scrollY > 50px

## Responsive Design
- **Desktop-first approach** (1440px+)
- Ensure all sections look perfect on large screens
- Mobile optimization can come later (not priority for initial build)

## Critical Implementation Notes

### Overlapping Sections
Each section should have:
```jsx
<section className="relative -mt-16 bg-white rounded-t-[48px] z-10">
  {/* Section content */}
</section>
```
This creates the layered, overlapping effect where sections flow into each other.

### Z-index Layering
- Header: z-50 (always on top)
- Each subsequent section: z-10, z-20, z-30, etc. (stacking order)

### Video Performance
- Use `playsInline` attribute for mobile compatibility
- Preload="metadata" for faster loading
- Poster image fallback (optional)

### Smooth Scrolling
Add to globals.css:
```css
html {
  scroll-behavior: smooth;
}
```

## Asset Paths (IMPORTANT)
All assets are in `/public/assets/`:
- Images: `/assets/images/[filename]`
- Videos: `/assets/videos/[filename]`
- GIFs: `/assets/gifs/[filename]`

Use Next.js Image component for images:
```jsx
import Image from 'next/image';
<Image src="/assets/images/hero-product.png" alt="..." width={500} height={500} />
```

## Build Requirements
1. Use TypeScript for all components
2. Use Tailwind CSS for all styling (no custom CSS files except globals.css)
3. Implement Framer Motion for all animations
4. Ensure perfect pixel-matching to Seed.com aesthetic
5. No console errors or warnings
6. Semantic HTML5 elements
7. Accessibility: proper alt text, ARIA labels, keyboard navigation

## Success Criteria
- ✅ Sticky glassmorphic header works perfectly
- ✅ All sections overlap with rounded borders
- ✅ Product card hover animation is smooth and impressive
- ✅ Videos autoplay and loop seamlessly
- ✅ Color palette matches exactly
- ✅ Typography is clean and professional
- ✅ All animations are buttery smooth (60fps)
- ✅ Site feels premium and high-end

## Next Steps After Build
Once the initial build is complete, we can add:
- Shopping cart functionality
- Product detail pages
- Checkout flow
- Mobile responsiveness
- Performance optimizations

---

**Start by scaffolding all components, implementing the layout structure, then layer in animations and interactivity. Focus on getting the overlapping section structure perfect first, as it's the foundation of the entire design.**

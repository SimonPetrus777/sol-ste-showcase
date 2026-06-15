
# Soléste Cakes — Premium Landing Page

A single-route, editorial landing page built on the existing TanStack Start shell. No backend, no checkout — inquiry-commerce via WhatsApp deep links.

## Design system (src/styles.css)

Lock the brand tokens into `@theme` so they're usable as Tailwind utilities (`bg-ivory`, `text-chocolate`, `border-gold`, etc.):

- `--color-ivory: #F8F3EC`
- `--color-beige: #E8D8C3`
- `--color-gold: #C8A45D`
- `--color-champagne: #E2C98F`
- `--color-brown: #8A5F3D`
- `--color-chocolate: #3A2418`
- `--color-ink: #2A1A12`
- `--color-muted: #7A6A5D`
- `--color-border-soft: #E7D9C7`
- `--font-display: "Cormorant Garamond", serif`
- `--font-sans: "Inter", sans-serif`
- Custom utilities: `gold-divider` (thin gradient hairline), `editorial-heading`, `card-soft` (ivory card + soft shadow + soft border).
- Fonts loaded via `<link>` tags in `src/routes/__root.tsx` head (Google Fonts preconnect + Cormorant Garamond + Inter).
- Set ivory page background + ink text as defaults on `body`.

## Page assembly (src/routes/index.tsx)

Replace the placeholder with a composition of section components. Each section is its own file in `src/components/soleste/` to keep the route file readable.

Section order:
1. `<Navbar />` — sticky, ivory/glass background, thin gold bottom border, serif wordmark left, nav links center, gold "Order via WhatsApp" button right. Hamburger sheet on mobile.
2. `<Hero />` — two-column editorial on desktop, stacked on mobile. Left: eyebrow, serif H1 "Elegant Cakes for Unforgettable Moments", supporting copy, primary + secondary CTAs, 4 trust indicators in a thin gold-divided row. Right: large hero cake photo with soft shadow and gold corner accent.
3. `<FeaturedCollections />` — 4 ivory cards (Signature Cakes, Custom Cakes, Premium Hampers, Praline & Cookies), each with image, title, one-liner, "Explore Collection" link with gold arrow.
4. `<WhySoleste />` — 5 value pillars in a refined grid (Premium Ingredients, Elegant Design, Made to Order, Personal Consultation, Thoughtful Packaging) with thin line icons (lucide, restrained).
5. `<BestSellers />` — 4 product cards with image, name, occasion tag, "Starts from Rp…", lead time, "View Details" gold link. No discount badges.
6. `<CustomCakeShowcase />` — masonry-ish gallery left, copy right with 3-step process, occasion chips, "Start Custom Cake Inquiry" WhatsApp CTA.
7. `<Hampers />` — full-bleed beige band, packaging photo, dual CTA (Explore Hampers + Request Corporate Gift Proposal).
8. `<Occasions />` — headline + 12 refined occasion chips that prefill a WhatsApp message with the occasion.
9. `<HowToOrder />` — 5 numbered steps with serif numerals + thin gold dividers, important-notes callout in a beige card.
10. `<Testimonials />` — 3 ivory cards with serif quote mark, name, occasion.
11. `<InstagramGallery />` — 6-tile grid with consistent warm grading, follow CTA.
12. `<FaqPreview />` — radix accordion (shadcn) with 4 questions, "Read Full FAQ" link.
13. `<FinalCta />` — warm gradient (ivory → champagne), serif headline, dual CTA.
14. `<Footer />` — wordmark, blurb, link columns, contact, hours, service area, copyright.
15. `<StickyWhatsApp />` — fixed-bottom-right pill on mobile only, gold (not bright green) with subtle WhatsApp glyph.

## WhatsApp behavior

A single helper `src/lib/whatsapp.ts`:
```ts
export const WA_NUMBER = "62800000000"; // placeholder, user to replace
export function waLink(prefill: { product?: string; occasion?: string; ... }) {
  const msg = `Hi Soléste Cakes, I would like to inquire about an order.\nProduct / Collection: ${prefill.product ?? ""}\nOccasion: ${prefill.occasion ?? ""}\nDelivery date:\nDelivery area:\nNotes:\nThank you.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
```
Every WhatsApp CTA on the page calls this with the relevant context (product name, occasion chip, "Custom Cake", etc.) and opens in a new tab.

## Imagery

Generate ~10 premium cake/hamper/packaging photos with `imagegen` (fast tier, warm ivory + gold styling, soft natural light, shallow depth of field, minimal props) and save under `src/assets/soleste/`:
- hero cake, 4 collection covers, 4 best-seller products, 1 hampers packaging, 6 instagram tiles, 3–4 custom-cake gallery shots. Reuse where it makes sense to keep generation count reasonable (~12 images total).

## SEO

Route-level `head()` on `/`:
- title: "Soléste Cakes — Elegant Cakes & Hampers, Jakarta"
- meta description: premium cakes, custom creations, and hampers for meaningful celebrations in Jakarta.
- og:title, og:description, og:image (hero cake), twitter card.
- Single H1 in hero, semantic `<section>` per block, alt text on every image.

## Out of scope

- No Shop / Custom Cakes / Hampers / About / FAQ sub-routes yet. Nav links scroll to the relevant section IDs on the landing page; the brief is a landing page, not a full site. If you want those as real routes later, that's a follow-up.
- No CMS, no DB, no Lovable Cloud. Content is hard-coded in the section components.


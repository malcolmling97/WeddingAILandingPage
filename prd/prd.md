# PRD: Showcase Site for [Product Name] — AI Destination Photoshoots for Bridal Boutiques

Version 0.1 · Owner: Mal · Status: Draft for build

---

## 1. Summary

A single-page marketing site that converts bridal gown boutique owners into email leads. The product behind it: the boutique sends one photo of a client in a dress during her first fitting, plus the dress and a chosen location, and receives back a curated pseudo-photoshoot set (Jiangsu water town, Sapa mountains, Bali sunset, grand ballroom, or custom) before the client makes her rental decision.

The site's single job: make a shop owner think "this would help me close" and submit the contact form.

## 2. Audience and voice

- Primary: bridal boutique owners and managers, Singapore and SEA. Small-business buyers, browse on mobile, decide fast, value warmth over enterprise polish.
- Secondary: brides who see shared renders (they are the imagery, not the reader).
- Voice: shop-owner-facing throughout. Friendly and playful in tone, plain verbs, sentence case, zero jargon. The chrome is playful; the renders are premium. Never let the two blur.

## 3. Success metrics

- Primary: contact form submissions.
- Secondary: scroll depth past the how-it-works section, CTA click rate.
- Quality bar: zero uncanny renders visible anywhere on the page. One bad face costs more than ten good ones earn.

## 4. Page storyboard (single scroll, 8 frames)

A silk-ribbon line is the connective signature: it draws through the page linking the fitting photo to the destinations (see Design direction). Each frame below lists its job, visual, copy, and motion.

### Frame 1 · Hero

- Job: in five seconds, a shop owner understands that one fitting photo becomes a destination shoot, and that it helps her sell.
- Visual: headline block left (stacked on mobile), proof block right. Proof block mirrors the Interior AI hero on a light background: one real fitting-room photo, a hand-drawn ribbon arrow, three output renders stacked with slight tilt (Bali sunset, Sapa, ballroom). Same bride, same dress in all four images. Non-negotiable: the input photo must look like a genuine phone snap, not a studio shot, because ease is part of the proof.
- Copy:
  - H1: **Help your brides see the yes.**
  - Sub: Send us one photo from the fitting room. We send back her destination photoshoot, in your dress, before she decides.
  - Primary CTA button: **Get in touch** (smooth-scrolls to Frame 8)
  - Secondary link: See how it works ↓
- Motion: renders stagger in with a small settle rotation; ribbon arrow draws itself once on load. Honor prefers-reduced-motion with a static version.

### Frame 2 · Problem line

- Job: name the gap in one breath, then get out of the way.
- Visual: full-width type moment on the base background, nothing else. Quiet on purpose.
- Copy: **The mirror shows her the dress. You can show her the wedding.**

### Frame 3 · How it works (3 steps)

- Job: prove the workflow costs the shop almost nothing. Numbered markers are justified here: it is a real sequence.
- Visual: three cards connected by the ribbon line. Card 1 deliberately shows a raw phone-photo aesthetic; cards 2 and 3 escalate in polish, so the visual arc itself tells the story of the product.
- Copy:
  1. **Snap one photo.** All you need: your client, in your dress. Any phone, during her first fitting.
  2. **Pick the dress and the place.** Your collection, our destination library. Bali sunset, Sapa mountains, a private ballroom, or anywhere she dreams.
  3. **Send her the shoot.** A curated set arrives before her next visit. She decides with the wedding in view. [Insert turnaround promise once decided, e.g. "within 24 hours."]
- Motion: cards reveal on scroll, one at a time, left to right.

### Frame 4 · Your dresses, not stock gowns

- Job: kill the number-one objection: "will it look like MY dress?"
- Visual: horizontal rail of gown cards using a pilot boutique's actual catalog photos, one card in a selected state. On tap/hover, a detail chip highlights neckline or lace.
- Copy:
  - Header: **Your dresses, not stock gowns.**
  - Sub: Every render uses your exact piece. Neckline, lace, train, all of it.

### Frame 5 · Destination library

- Job: make the location choice feel like the fun part, and signal it is expandable.
- Visual: five playful cards with location tag chips: Jiangsu water town, Sapa mountains, Bali sunset, The grand ballroom, and a fifth outlined card labeled "Her idea here" to signal custom scenes. Cards tilt slightly on hover; tag chip stamps in.
- Copy:
  - Header: **Places, reimagined.**
  - Card captions: one short evocative line each (e.g. Bali: "Golden hour, no flight required.")
- Note: never market the ballroom with a celebrity or music-video name publicly. Describe the scene, not the reference.

### Frame 6 · Outcomes gallery

- Job: overwhelming visual proof, ruthlessly curated.
- Visual: masonry grid or slow horizontal marquee of 8 to 12 renders across all four destinations, each with a small destination chip. Multiple brides and dresses to show range.
- Copy:
  - Header: **Same bride. Same dress. New world.**
- Rule: every image in this frame passes human review for face and fabric fidelity. If in doubt, cut it. Twelve is the ceiling, not the target.

### Frame 7 · Why boutiques win

- Job: the money beat. Convert "cool" into "this pays for itself."
- Visual: three outcome cards plus a proof slot beneath.
- Copy:
  - Header: **Built to help you close.**
  - Card 1: **A faster yes.** Brides commit sooner when they can picture the day, not just the dress.
  - Card 2: **Sell the shoot, not just the rental.** The renders make your destination photoshoot packages the natural next question.
  - Card 3: **Marketing that makes itself.** With her permission, every set becomes shareable content for your boutique.
  - Proof slot: pilot boutique testimonial placeholder + "Trusted by boutiques in Singapore" strip. Ship with real proof or ship without the strip; never fake it.
  - Pricing line: Pricing scales with your boutique's volume. Tell us about your shop and we will send a quote.

### Frame 8 · Contact

- Job: frictionless email capture.
- Visual: short form on the base background, footer beneath.
- Copy:
  - Header: **Put your dresses everywhere.**
  - Fields: Name · Boutique · Email · City · Message (optional)
  - Button: **Send**
  - Success state: Got it. We will reply within one business day.
  - Error states: specific and calm, e.g. "Enter a valid email address." No apologies, no vagueness.
- Footer: wordmark, Instagram placeholder, and one trust line: "Client photos are used only with consent and deleted on request."

## 5. Design direction

- Feel: friendly and playful chrome around premium imagery. Warm, light, generous whitespace. The reference layout is Interior AI's hero, rebuilt on a light background.
- Palette (working names, tune during build):
  - Ivory silk `#FBF6EE` (base background)
  - Ink `#221D16` (text)
  - Peony `#E75A7C` (accent: CTAs, ribbon, tags). Chosen over the usual terracotta/clay accent on purpose; it belongs to the bridal world and reads playful without going pastel.
  - Water town teal `#3E7C6F` (secondary accent: destination chips)
  - Champagne gold `#C9A227` (sparing: selected states, small details)
- Type (Google Fonts, Lovable-friendly):
  - Display: Bricolage Grotesque (bold, characterful, friendly)
  - Body: Instrument Sans
  - Annotation: Shantell Sans, used only for hand-written touches next to the ribbon/arrow moments
- Signature element: the silk ribbon. One continuous drawn line that appears as the hero arrow, threads the three how-it-works cards, and underlines the gallery header. Spend the boldness here; keep everything else disciplined.
- References: Interior AI (hero layout), Lummi (playful brand + premium imagery), GlossGenius (friendly vertical B2B warmth), Airbnb host page (3-step conviction).
- Restraint rules: no gradients-as-decoration, no more than the two accent colors per screen, renders always on clean cards with soft shadow and slight tilt, never behind color overlays.

## 6. Functional requirements

- Single responsive page, mobile-first. Test at 375px first; boutique owners will open this on a phone.
- Stack: React (Lovable output) or Astro. Static hosting on Vercel or Cloudflare Pages.
- Form: Formspree, Basin, or a Resend endpoint. Include a honeypot field for spam. Submissions delivered to Mal's email.
- Images: WebP/AVIF, responsive srcset, lazy-load everything below the fold, preload the hero input photo. Target LCP under 2.5s on 4G.
- Analytics: Plausible (preferred) or GA4. Events: cta_click, form_submit, gallery_view.
- SEO/social: title, meta description, OG image = a composed before/after frame from the hero.
- Accessibility: descriptive alt text on every render, visible focus states, reduced-motion variant of all animations.
- No auth, no database, no CMS for v1. Content lives in the repo.

## 7. Asset checklist (blocking before build completes)

- [ ] 1 consented fitting-room input photo + 3 matching hero renders (same bride, same dress)
- [ ] 10 to 12 gallery renders across all four destinations, human-QA'd for face and fabric fidelity
- [ ] 6 to 8 dress catalog photos from a pilot boutique (or Mal's own controlled set)
- [ ] Wordmark/logo, favicon, OG composite image
- [ ] Signed consent for every real client image used; decide watermark policy
- [ ] Turnaround promise confirmed for Frame 3 copy

## 8. Out of scope for v1

Pricing page, online booking, client portal, bride-facing app, blog, multi-language toggle, CMS.

## 9. Open questions

1. Product name and domain. The page ships with a placeholder wordmark until decided.
2. Turnaround SLA to promise in Frame 3 (24h vs 48h). Promise only what the pipeline reliably hits.
3. English only, or English + Chinese? Meaningful share of SEA boutique owners operate in Mandarin; Mal can serve both. Recommend EN-only v1, decide before outreach to Chinese-speaking shops.
4. Watermark renders shown to brides, or deliver clean?
5. Later experiment: a "free sample shoot" secondary CTA. Deliberately excluded from v1 per decision to keep a single email-form CTA.

## 10. Acceptance criteria

- [ ] All 8 frames present in order, matching the copy deck above
- [ ] Hero proof block uses one real input photo and three real renders, tilted-stack layout, light background
- [ ] Ribbon signature appears in at least the hero, how-it-works, and gallery header
- [ ] Form submits successfully to Mal's inbox with success and error states working
- [ ] LCP under 2.5s on throttled 4G, mobile layout clean at 375px
- [ ] Zero em dashes in on-page copy; zero uncanny renders anywhere
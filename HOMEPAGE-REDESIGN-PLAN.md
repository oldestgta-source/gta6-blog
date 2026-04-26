# $GTA Homepage Redesign — Planning Doc

**Branch:** `redesign/homepage-v2`
**Status:** Awaiting approval before any code is written

---

## Current State

The homepage at oldestgta.com is a standard blog layout: centered logo, category pills, featured post card, recent posts grid, newsletter signup. It works, but it reads like a template — not like a community-driven project with its own identity.

The redesign turns the homepage into a full-bleed, section-driven landing page that communicates three things immediately: this is about GTA 6, this is community-built, and this is the most thorough source of intel on the game.

---

## Section Breakdown

### SECTION 1: HERO (Full Viewport)

**What it does:** Fills the entire screen on load. Establishes the brand and sets the tone before anything else.

**Layout:**
- Full viewport height (`100vh`), no scroll snap
- Deep navy-to-black gradient background (`#0a0e1a` → `#050710`) with a subtle radial glow in pink/cyan behind the logo
- CSS grain overlay (pseudo-element with noise SVG filter) at ~3% opacity for texture
- `$GTA` logo centered, large (7xl mobile, 9xl desktop), using the existing `gradient-text` class (pink→cyan)
- Subtitle: "Vice City Sentinel" in muted text beneath
- Tagline: "News, leaks, deep dives, and guides — from a curious community who does their homework."
- Down-scroll indicator (animated chevron or thin line pulse) at bottom

**Hero image/video slot:**
- If you provide a cinematic still or short loop, it sits behind the text as a full-bleed background with a heavy gradient overlay (bottom 60% fades to solid dark)
- If no asset provided, the gradient + grain + glow treatment carries the section on its own — no placeholder stock photos
- Recommended dimensions if providing: **1920×1080 minimum**, WebP or MP4 (under 8MB for the video)

**Technical:**
- Pure CSS (radial-gradient, mix-blend-mode for grain, keyframe for scroll indicator)
- No JS needed
- `prefers-reduced-motion` disables the scroll indicator animation

---

### SECTION 2: LEAKS & INTEL (Sticky Background)

**What it does:** Showcases the leaks thread and latest deep dives — the site's strongest content.

**Layout:**
- Section heading: "Intel" or "Latest Intel" in small caps teal
- Left column (60%): Featured content card — the leaks thread gets a permanent, prominent card here. Large title, excerpt, "45 min read" badge, pink CTA "Read the Full Thread →"
- Right column (40%): Stack of 2-3 latest post cards (compact format — title, category pill, date)
- On mobile: single column, leaks thread card first, then recent posts

**Sticky treatment:**
- The section background stays fixed (`position: sticky; top: 0`) while the content scrolls over it
- Background: a very subtle, desaturated Vice City skyline silhouette or abstract geometric shape in dark navy — not a photo, just a faint CSS/SVG shape at ~5% opacity

**Technical:**
- CSS `position: sticky` on the background div
- Server component — reads posts via `getAllPosts()` and `getPostBySlug()`
- No new dependencies

---

### SECTION 3: VICE CITY (Location Imagery)

**What it does:** Visual break. Shows the world of the game through location imagery from the leaks.

**Layout:**
- Full-bleed horizontal scroll gallery of location images (the map comparison images we already have: Ocean Beach, Edgewater, Highway, Margaret Pace, etc.)
- Each image card: rounded corners, subtle border, gradient overlay at bottom with location name
- CSS `overflow-x: auto` with `scroll-snap-type: x mandatory` on each card
- Hide scrollbar with `-webkit-scrollbar` styles (already in globals.css)

**Content:** Pulls from the existing 15 map images in `/public/images/posts/leaks-thread/`. No new assets needed.

**Technical:**
- Pure CSS scroll snap, no JS carousel library
- `next/image` with `sizes` prop for responsive loading
- Lazy loaded (below the fold)

---

### SECTION 4: CONTENT GRID (Latest Posts)

**What it does:** Standard content section for browsing all recent posts.

**Layout:**
- Section heading: "Recent" in small caps teal
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- Uses existing `PostCard` component — no redesign needed
- Category filter pills above the grid (reuse existing category array)
- "Browse All" links for each category at bottom

**Technical:**
- Existing `PostCard` component
- Server component, reads from `getAllPosts()`
- No changes needed to the card design

---

### SECTION 5: COMMUNITY TAKEOVER (Full Viewport)

**What it does:** The $GTA community section. Raw, underground feel. This is where visitors learn the site is community-funded and can support it.

**Layout:**
- Full viewport height, darker background than the rest (`#050710`)
- Headline: **"Built by the $GTA community"** — large, white, no gradient (raw, not polished)
- Subhead paragraph: "This site is funded and driven by holders of the oldest $GTA coin on Pump.fun. Every holder keeps the lights on. Not affiliated with Rockstar — just a community that cares about the game."
- **Stats row** (3 columns):
  - **Holders** — placeholder "—" with `TODO` comment for pump.fun API
  - **Market Cap** — placeholder "—" with `TODO` comment
  - **Community Age** — calculated from a hardcoded launch date (days since). This one is always live.
- **CA block:** Prominent code block with the contract address. Click-to-copy with a "Copied!" toast (small client component). Styled: monospace, dark card background, teal border on hover.
  ```
  CA: EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15
  ```
- **Two CTAs side by side:**
  - Primary: "Buy $GTA on Pump.fun" — pink fill, links to `https://pump.fun/coin/EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15`
  - Secondary: "Follow @oldestgta" — cyan outline, links to `https://x.com/oldestgta`
- **Disclaimer** at bottom of section: "Fan site, not affiliated with Rockstar Games or Take-Two Interactive. $GTA is a community token — not investment advice."

**Live stats (if reachable):**
- Pump.fun API: `https://frontend-api-v3.pump.fun/coins/EzL6hy8z79dv674kGipoL8VnEokQ5931iMk6Hj2zcN15`
- Solana RPC for holder count: `https://api.mainnet-beta.solana.com`
- Neither endpoint is reachable from the Vercel/Cowork sandbox right now. The component will be built with a `fetchStats()` function that tries the API and falls back to placeholders. When the endpoints become reachable (via Vercel serverless at deploy time, or by allowlisting), the stats will go live automatically.

**Technical:**
- Mostly server component
- Small client component (`CopyCA.tsx`) for the click-to-copy interaction
- `navigator.clipboard.writeText()` with fallback
- Stats: server-side fetch with `revalidate: 3600` (hourly) when endpoints are live, static placeholders until then

---

### SECTION 6: FOOTER / NEWSLETTER

**What it does:** Newsletter signup + site links + social links + disclaimers.

**Layout:**
- Newsletter block at top of footer area: "Get every leak and update in your inbox" — email input + submit button (existing `NewsletterSignup` component, restyled)
- Below: 4-column grid
  - Column 1: $GTA brand + tagline
  - Column 2: Content links (all categories)
  - Column 3: Community links (Twitter, Pump.fun)
  - Column 4: CA display
- Bottom bar: copyright, "Built with Next.js on Vercel", fan site disclaimer

**Technical:**
- Largely already built in the current Footer. Needs restyling to match the new design system but no structural changes.

---

## Design System Changes

### Colors (additions to existing theme)

```css
--color-vice-deep: #0a0e1a;      /* new deepest background */
--color-vice-abyss: #050710;     /* community section bg */
--color-accent-pink: #ff2d95;    /* hotter pink for CTAs (existing #FF1493 stays for text) */
--color-accent-cyan: #00d4ff;    /* brighter cyan for CTAs */
```

The existing color system (`vice-pink`, `vice-teal`, `vice-dark`, etc.) stays. These additions are for the hero and community sections only.

### Typography

- **Display:** Keep the existing system stack (Geist Sans). Adding a condensed display font would mean a new dependency and additional font loading. Not worth it for a few headings. If you want the GTA VI font feel, we can revisit with a self-hosted font file later.
- **Body:** Geist Sans (already configured)
- **Monospace:** Geist Mono (already configured) — used for CA address

### Motion

All motion implemented in CSS:

- **Section entry:** `@keyframes fadeUp` — 300ms ease, triggered by `IntersectionObserver` adding a `.visible` class (tiny inline script, no library)
- **Scroll indicator:** `@keyframes pulse` on the hero chevron, 2s infinite
- **Sticky backgrounds:** Pure `position: sticky` — no JS
- **`prefers-reduced-motion`:** All transforms and animations disabled

### Grain Overlay

```css
.grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,..."); /* inline noise SVG */
  opacity: 0.03;
  pointer-events: none;
}
```

---

## File Changes

### New Files

| File | Purpose |
|------|---------|
| `components/CopyCA.tsx` | Client component — click-to-copy CA with "Copied!" feedback |
| `components/HeroSection.tsx` | Hero section (server component) |
| `components/IntelSection.tsx` | Leaks + latest intel section |
| `components/ViceCityGallery.tsx` | Horizontal scroll gallery of location images |
| `components/CommunitySection.tsx` | $GTA community takeover section |
| `components/StatsRow.tsx` | Holder count, market cap, community age (server component with fetch) |
| `lib/pump.ts` | Fetch helper for pump.fun API stats (with fallback) |

### Modified Files

| File | Changes |
|------|---------|
| `app/page.tsx` | Complete rewrite — assembles new sections instead of current layout |
| `app/globals.css` | Add new color vars, grain overlay, fadeUp animation, section utilities |
| `components/Footer.tsx` | Restyle to match new design, newsletter integrated at top |
| `components/NewsletterSignup.tsx` | Updated copy: "Get every leak and update in your inbox" |

### Unchanged

| File | Why |
|------|-----|
| `app/layout.tsx` | Header/Footer wrapper stays the same |
| `components/Header.tsx` | Already rebranded, no changes needed |
| `components/PostCard.tsx` | Reused as-is in Section 4 |
| `app/leaks/page.tsx` | Dedicated page, not part of homepage |
| `app/category/[cat]/page.tsx` | Category pages unchanged |
| `content/posts/*` | All content stays |
| `lib/posts.ts`, `lib/mdx.tsx`, `lib/seo.ts` | Utilities unchanged |

---

## Dependencies

**No new npm packages.** Everything is built with:

- CSS (sticky, scroll-snap, gradients, keyframes, pseudo-elements)
- React Server Components (data fetching)
- One small client component (CopyCA.tsx — `navigator.clipboard`)
- `IntersectionObserver` for fade-in (inline, no library)

---

## Implementation Phases

| Phase | What | Merge? |
|-------|------|--------|
| **Phase 1** | This planning doc | No — awaiting your approval |
| **Phase 2** | Hero + Community sections | No — preview on feature branch |
| **Phase 3** | Intel + Vice City + Content Grid | No — preview on feature branch |
| **Phase 4** | Footer restyle, polish, motion, performance audit | No — preview on feature branch |
| **Phase 5** | You review deployed preview → merge to main | Yes |

All work happens on `redesign/homepage-v2`. Vercel will auto-deploy the branch to a preview URL. No merge to main until you approve.

---

## What I Need From You

1. **Hero imagery** — a cinematic still or short video loop (1920×1080+, WebP or MP4 under 8MB). Or confirm you want the gradient-only treatment.
2. **$GTA coin launch date** — so I can calculate "Community Age: X days" live.
3. **Approval of this plan** — then I start Phase 2.

---

## What I Source

- Location imagery from existing leaks-thread map images (already in `/public/images/posts/leaks-thread/`)
- Icons from lucide-react (already available via React, no install needed)
- All placeholder copy (you react and I revise)

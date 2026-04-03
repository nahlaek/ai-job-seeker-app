---
name: build-section
description: Builds a single landing page section as a Svelte 5 component with a fly.io-inspired light mauve design using Fraunces + Plus Jakarta Sans fonts. Use this skill whenever the user says "build section", "create the hero", "add the pricing section", "build the FAQ", or asks to implement any named part of the landing page. Always use this skill for landing page component work — never build sections ad-hoc without reading the design reference first.
---

# build-section

Build one landing page section at a time as a production-quality Svelte 5
component. Each section is self-contained and consistent with the design system.

Before writing any code, read both reference files in full:
- `references/design-system.md` — fonts, colors, spacing, every component pattern
- `references/page-content.md` — all copy, labels, and data for every section

---

## Section inventory

| User says | Section | Component file |
|---|---|---|
| "hero" / "section 1" | Hero | `Hero.svelte` |
| "pain points" / "section 2" | Pain Points | `PainPoints.svelte` |
| "pricing" / "section 3" | Pricing | `Pricing.svelte` |
| "how it works" / "section 4" | HowItWorks | `HowItWorks.svelte` |
| "faq" / "section 5" | FAQ | `Faq.svelte` |
| "footer" / "cta" / "section 6" | Final CTA + Footer | `Footer.svelte` |

All components live in `src/lib/components/sections/`.

---

## Pre-build checklist — run once before the very first section

### 1. Font setup in `src/app.html`

Check that `<head>` contains the Google Fonts import. Add if missing:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,700;1,9..144,800;1,9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### 2. `src/app.css` — replace entire contents with:

```css
@import 'tailwindcss';
@plugin '@tailwindcss/typography';
@plugin '@tailwindcss/forms';

@theme {
  --color-brand-bg:       #f8f7ff;
  --color-brand-surface:  #faf9ff;
  --color-brand-border:   #ede9fe;
  --color-brand-line:     #e5e0ff;
  --color-brand-ink:      #1a1040;
  --color-brand-muted:    #6b5f8a;
  --color-brand-hint:     #8b7baa;
  --color-brand-accent:   #7c3aed;
  --color-brand-mid:      #a78bfa;
  --color-brand-light:    #c4b5fd;
  --color-brand-pale:     #ede9fe;
  --font-display: 'Fraunces', Georgia, serif;
  --font-sans:    'Plus Jakarta Sans', system-ui, sans-serif;
}

html {
  background-color: #f8f7ff;
  color: #1a1040;
}

body {
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
}
```

### 3. Create sections directory

```bash
mkdir -p src/lib/components/sections
```

### 4. Update `src/routes/+page.svelte`

Replace with a clean shell that will receive section imports:

```svelte
<script lang="ts">
</script>

<svelte:head>
  <title>ai-job-seeker — Get hired in Germany faster</title>
</svelte:head>
```

---

## Build rules — every section

### Svelte 5 syntax
- `$props<{...}>()` for all props — never `export let`
- `$state()` for reactive local state (FAQ accordion, etc.)
- `{@render children?.()}` if slots are needed

### Typography
- `h1`, `h2`, `h3` automatically use Fraunces via the global `app.css` rule — do not add font-family classes to heading elements
- All other elements default to Plus Jakarta Sans — buttons need explicit `font-sans` class
- Price `<span>` elements need explicit `font-display` class since they are not heading elements
- See `references/design-system.md` → **Type Scale** for exact classes per element

### Tailwind classes
- Use only Tailwind utility classes — no `<style>` blocks inside components
- Use `bg-brand-*`, `text-brand-*`, `border-brand-*` for all color tokens
- Arbitrary values allowed for: `text-[clamp(...)]`, `text-[11px]`, `tracking-[0.22em]`, `decoration-[2px]`, `bg-[#100d2e]`
- Responsive: mobile-first — write base class first, then `md:` and `xl:` overrides

### Design fidelity
- Cards: `bg-white border border-brand-line rounded-2xl` on light sections
- Cards: `bg-brand-surface border border-brand-border rounded-2xl` on bg-brand-bg sections
- Featured pricing card: `bg-brand-ink border-2 border-brand-accent` with floating badge
- Pricing grid: always `xl:grid-cols-4` — the 4 cards must sit on one row on desktop
- Hover on cards: `hover:border-brand-light hover:shadow-lg hover:shadow-violet-100/80`

### Accessibility
- All `<button>` and `<a>` elements: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2`
- Decorative elements (sparkles, blobs): `aria-hidden="true"`
- Feature lists: `role="list"` on `<ul>`, items in `<li>`
- One `<h1>` per page — only Hero gets it, all others use `<h2>`

---

## Section-specific guidance

### Hero
- Full-width with background glow blobs (see design-system.md → glow blobs)
- `<h1>` at display size with italic accent word + coloured underline
- Both CTA buttons inline on desktop (`flex-row`), stacked on mobile (`flex-col sm:flex-row`)
- Decorative sparkles (`✦`) placed absolutely — see design-system.md → sparkles
- Trust badge line below CTAs

### Pain Points
- White background (`bg-white`) for contrast against hero
- `xl:grid-cols-4` card grid
- Each card: icon div + h3 + body paragraph
- Icon: 40×40px `bg-brand-pale rounded-xl` container with emoji

### Pricing
- `bg-brand-bg` background
- `xl:grid-cols-4 items-start` — the featured card is naturally taller (badge)
- Featured card (`IT Complete`): dark navy, violet border, floating "MOST POPULAR" badge
- All 3 standard cards: white background, dark ink CTA button
- Featured card: violet CTA button
- Fine print below the grid: `text-center text-xs text-brand-hint`

### How It Works
- 3 steps in `md:grid-cols-3`
- Step number: large mono-style display number in `text-brand-pale` (faint, decorative)
  `<span class="font-display text-6xl font-black text-brand-light/40 mb-2 block">01</span>`
- Title and body below the number
- No connecting lines — whitespace conveys the sequence

### FAQ
- `$state<number | null>(null)` for open item index
- Each item: full-width button with question + `+`/`−` indicator
- Open answer: `text-brand-muted text-[15px] leading-relaxed pb-5`
- Dividers: `border-t border-brand-border`

### Footer / Final CTA
- Section: `bg-brand-ink` with purple glow blob
- Headline uses Fraunces naturally, large, white, with italic accent
- Footer bar: `bg-[#100d2e]` with left copyright + right nav links

---

## After writing each component

1. Import and add to `src/routes/+page.svelte`:
   ```svelte
   <script lang="ts">
     import Hero from '$lib/components/sections/Hero.svelte'
     import PainPoints from '$lib/components/sections/PainPoints.svelte'
   </script>
   <Hero />
   <PainPoints />
   ```

2. Run verification:
   ```bash
   pnpm check --output machine
   pnpm lint
   ```

3. Tell the user: "Section complete. Run `pnpm dev` and open http://localhost:5173 to review. Confirm it looks correct before I build the next section."

4. Do not proceed to the next section until the user confirms.

---

## Definition of done

A section is done when:
- Component file exists at `src/lib/components/sections/[Name].svelte`
- It is imported and rendered in `src/routes/+page.svelte`
- `pnpm check` passes — zero TypeScript errors
- `pnpm lint` passes — zero lint errors
- Fraunces renders on all headings and prices
- Plus Jakarta Sans renders on all body text and buttons
- The user has confirmed it looks correct in the browser

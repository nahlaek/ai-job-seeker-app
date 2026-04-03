# Design System Reference — fly.io inspired, light mauve palette

Single source of truth for all visual decisions. Read this entire file
before writing any component. Never deviate from these tokens.

---

## Design Philosophy

Light, airy, and confident. The feeling is "premium product, human touch."
Key traits extracted from the fly.io screenshot:

- Near-white background with a warm lavender tint — never pure white or grey
- Deep navy-purple headlines — rich, not harsh
- One vivid accent (violet/purple) used for CTAs and highlights only
- Pill-shaped nav bar with subtle border — fly.io's signature nav pattern
- Italic serif on the hero accent word with a coloured underline
- Generous whitespace — sections breathe
- Cards defined by a faint border, not shadows
- Decorative star/sparkle elements in the hero for personality
- Dark navy footer as a clean contrast to the light body

---

## Fonts — the most important decision

### The pairing: Fraunces + Plus Jakarta Sans

**Fraunces** — display serif, all headings and prices
- Character: optical-size variable serif with personality and warmth
- Weights used: 800 (section headings), 900 (hero h1, prices)
- The italic variant is exceptional — use it on the hero accent word
- Tracking: always negative on large sizes (`tracking-tight` or tighter)

**Plus Jakarta Sans** — geometric sans, all body text and UI
- Character: modern, rounded, premium — more personality than Inter
- Weights used: 400 (body), 500 (nav links), 600 (labels), 700 (buttons)
- Far superior to Inter for marketing pages — feels intentional, not default

### Google Fonts import — add to `src/app.html` inside `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,700;1,9..144,800;1,9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### app.css — complete file contents

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

---

## Color Palette

```
Page base:        #f8f7ff   →  bg-brand-bg
Card/surface:     #faf9ff   →  bg-brand-surface
White sections:   #ffffff   →  bg-white
Card border:      #ede9fe   →  border-brand-border
Nav border:       #e5e0ff   →  border-brand-line
Dark navy:        #1a1040   →  bg-brand-ink  (CTA section bg)
Footer navy:      #100d2e   →  bg-[#100d2e]

Headlines:        #1a1040   →  text-brand-ink
Body copy:        #6b5f8a   →  text-brand-muted
Captions:         #8b7baa   →  text-brand-hint

Primary CTA:      #7c3aed   →  bg-brand-accent
Dark bg purple:   #a78bfa   →  text-brand-mid
Light purple:     #c4b5fd   →  text-brand-light / border-brand-light
Pale tint:        #ede9fe   →  bg-brand-pale
```

---

## Type Scale

```
Hero h1:       font-display text-[clamp(40px,5.5vw,70px)] font-black
               leading-[1.05] tracking-[-0.05em] text-brand-ink

Section h2:    font-display text-[clamp(28px,4vw,44px)] font-extrabold
               leading-[1.1] tracking-[-0.04em] text-brand-ink

Card h3:       font-display text-lg font-bold tracking-[-0.02em] text-brand-ink

Pricing €:     font-display text-[44px] font-black tracking-[-0.05em]

Eyebrow:       font-sans text-[11px] font-bold tracking-[0.22em] uppercase
               text-brand-accent

Body large:    font-sans text-lg font-normal leading-[1.7] text-brand-muted

Body:          font-sans text-[15px] font-normal leading-[1.65] text-brand-muted

Small:         font-sans text-[13px] font-medium leading-[1.65] text-brand-muted

Button:        font-sans text-sm font-bold

Fine print:    font-sans text-xs font-medium text-brand-hint

Italic accent: italic text-brand-accent underline decoration-brand-light
               underline-offset-8 decoration-[2px]
```

---

## Component Patterns

### Section wrapper

```svelte
<section class="relative py-20 md:py-24 overflow-hidden">
  <div class="relative max-w-6xl mx-auto px-9">
    <!-- content -->
  </div>
</section>
```

### Background glow blobs (hero and CTA sections only)

```svelte
<div class="absolute inset-0 pointer-events-none" aria-hidden="true">
  <div class="absolute -top-24 -left-20 w-[500px] h-[500px]
              bg-violet-300/20 blur-3xl rounded-full"></div>
  <div class="absolute -top-10 -right-16 w-[420px] h-[420px]
              bg-amber-200/15 blur-3xl rounded-full"></div>
</div>
```

### Eyebrow label

```svelte
<p class="text-[11px] font-bold tracking-[0.22em] uppercase
           text-brand-accent mb-3">
  Section label here
</p>
```

### Hero h1 with italic accent

```svelte
<h1 class="text-[clamp(40px,5.5vw,70px)] font-black
            leading-[1.05] tracking-[-0.05em] text-brand-ink mb-5">
  Get hired in Germany —<br>
  <em class="italic text-brand-accent underline decoration-brand-light
              underline-offset-8 decoration-[2px]">faster.</em>
</h1>
```

Note: h1 inherits `font-display` from the global `h1` rule in `app.css`.

### Primary button — pill

```svelte
<button class="inline-flex items-center gap-2 px-7 py-3.5
               bg-brand-accent hover:bg-violet-700 text-white
               font-bold text-[15px] rounded-full
               shadow-lg shadow-violet-400/30
               transition-colors duration-200
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-brand-accent focus-visible:ring-offset-2">
  See pricing →
</button>
```

### Ghost button — pill

```svelte
<button class="inline-flex items-center gap-2 px-7 py-3.5
               border border-brand-light hover:border-brand-accent
               text-violet-800 hover:bg-brand-pale
               font-semibold text-[15px] rounded-full
               transition-colors duration-200">
  How it works
</button>
```

### Nav pill wrapper (fly.io pattern)

```svelte
<div class="flex gap-0.5 bg-white border border-brand-line
             rounded-full px-1.5 py-1">
  <a href="#" class="px-4 py-1.5 text-[13px] font-medium text-violet-800
                      rounded-full hover:bg-brand-pale transition-colors">
    How it works
  </a>
</div>
```

### Standard card

```svelte
<div class="bg-brand-surface border border-brand-border rounded-2xl p-7
             hover:border-brand-light hover:shadow-lg hover:shadow-violet-100/80
             transition-all duration-200">
  <div class="w-10 h-10 bg-brand-pale rounded-xl flex items-center
               justify-center mb-4 text-lg" aria-hidden="true">
    <!-- emoji or SVG icon -->
  </div>
  <h3 class="text-lg font-bold text-brand-ink mb-2 tracking-[-0.02em]">
    Title
  </h3>
  <p class="text-[13px] text-brand-muted leading-[1.65] font-medium">
    Body text.
  </p>
</div>
```

### Pricing card — standard tier

```svelte
<div class="bg-white border border-brand-line rounded-2xl p-7
             flex flex-col">
  <h3 class="text-lg font-extrabold text-brand-ink tracking-[-0.02em] mb-1">
    CV Rewrite
  </h3>
  <p class="text-xs font-semibold text-brand-accent mb-5">
    Perfect to get started
  </p>
  <div class="mb-6">
    <span class="text-[44px] font-black text-brand-ink tracking-[-0.05em]">
      €59
    </span>
    <span class="text-[10px] font-semibold text-brand-hint
                  uppercase tracking-[0.08em] ml-1">one-time</span>
  </div>
  <ul class="flex flex-col gap-2.5 mb-7 flex-1 list-none" role="list">
    <li class="flex items-center gap-2 text-[13px] font-medium text-brand-ink/80">
      <span class="w-[18px] h-[18px] rounded-full bg-brand-pale shrink-0
                    flex items-center justify-center
                    text-[9px] font-bold text-brand-accent"
            aria-hidden="true">✓</span>
      Feature text
    </li>
  </ul>
  <button class="w-full py-3 bg-brand-ink hover:bg-violet-950 text-white
                  font-bold text-[13px] rounded-xl transition-colors duration-200">
    Get CV Rewrite
  </button>
</div>
```

### Pricing card — featured (dark navy, same grid row)

```svelte
<div class="relative bg-brand-ink border-2 border-brand-accent
             rounded-2xl p-7 flex flex-col
             shadow-2xl shadow-violet-500/25">
  <!-- badge floats above card top edge -->
  <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
    <span class="px-4 py-1 rounded-full text-[10px] font-bold uppercase
                  tracking-[0.08em] bg-brand-accent text-white whitespace-nowrap">
      MOST POPULAR
    </span>
  </div>
  <h3 class="text-lg font-extrabold text-white tracking-[-0.02em] mb-1">
    IT Complete
  </h3>
  <p class="text-xs font-semibold text-brand-mid mb-5">For IT professionals</p>
  <div class="mb-6">
    <span class="text-[44px] font-black text-white tracking-[-0.05em]">€149</span>
    <span class="text-[10px] font-semibold text-brand-mid
                  uppercase tracking-[0.08em] ml-1">one-time</span>
  </div>
  <ul class="flex flex-col gap-2.5 mb-7 flex-1 list-none" role="list">
    <li class="flex items-center gap-2 text-[13px] font-medium text-brand-light">
      <span class="w-[18px] h-[18px] rounded-full bg-violet-800/40 shrink-0
                    flex items-center justify-center
                    text-[9px] font-bold text-brand-mid"
            aria-hidden="true">✓</span>
      Feature text
    </li>
  </ul>
  <button class="w-full py-3 bg-brand-accent hover:bg-violet-700 text-white
                  font-bold text-[13px] rounded-xl transition-colors duration-200
                  shadow-lg shadow-violet-900/40">
    Get IT Complete
  </button>
</div>
```

### Decorative sparkles (hero only)

```svelte
<span class="absolute top-20 left-[15%] text-brand-light text-xl
              opacity-60 pointer-events-none select-none" aria-hidden="true">✦</span>
<span class="absolute top-32 right-[18%] text-brand-light text-sm
              opacity-45 pointer-events-none select-none" aria-hidden="true">✦</span>
<span class="absolute bottom-24 left-[8%] text-amber-300 text-xs
              opacity-50 pointer-events-none select-none" aria-hidden="true">✦</span>
```

### Trust badge line

```svelte
<div class="flex flex-wrap items-center gap-x-5 gap-y-2
             text-[13px] font-medium text-brand-hint">
  <span>✓ ATS-optimized</span>
  <span>✓ DIN 5008 compliant</span>
  <span>✓ Tax-deductible</span>
  <span>✓ GDPR-compliant</span>
</div>
```

---

## Layout Patterns

```svelte
<!-- Pricing grid: 4 columns on xl, 2 on md, 1 on mobile -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3.5 items-start">

<!-- Pain points: 4 on xl, 2 on sm, 1 on mobile -->
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">

<!-- How it works: 3 horizontal -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
```

---

## Section background sequence

```
Hero           → bg-brand-bg   (lavender-white)
Pain Points    → bg-white      (clean white, contrast)
Pricing        → bg-brand-bg
How it works   → bg-white
FAQ            → bg-brand-bg
Final CTA      → bg-brand-ink  (dark navy)
Footer         → bg-[#100d2e]
```

---

## Critical rules

- `h1`, `h2`, `h3` automatically use `font-display` via `app.css` — do not add font-family classes to headings
- All other text is `font-sans` by default — buttons must have `font-sans` class explicitly since they don't inherit from body in all browsers
- Price numbers (`€59`) use `font-display` class explicitly since they are `<span>` not `<h*>`
- Pricing grid must be `xl:grid-cols-4` — never wrap to 3 on desktop
- Featured card is visually taller due to the floating badge — `items-start` on the grid prevents stretching
- Never use `font-family: 'Inter'` — the project uses Plus Jakarta Sans
- Never use Tailwind's built-in `font-sans` variable — it maps to Inter unless overridden in `@theme`

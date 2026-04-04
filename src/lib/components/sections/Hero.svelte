<section class="relative flex min-h-screen items-center overflow-hidden bg-[#f8f7ff] py-16">
  <!-- background image — single source ensures identical rendering on all platforms -->
  <div
    aria-hidden="true"
    style="background-image: url('/images/hero/bg-1920x1080.webp')"
    class="absolute inset-0 bg-cover bg-center"
  ></div>

  <!-- white overlay with subtle blur -->
  <div class="absolute inset-0 bg-white/35"></div>

  <!-- decorative glow blobs — sit above overlay, below content -->
  <div class="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
    <div
      class="absolute -top-24 -left-20 h-[500px] w-[500px] rounded-full bg-violet-300/20 blur-3xl"
    ></div>
    <div
      class="absolute -top-10 -right-16 h-[420px] w-[420px] rounded-full bg-amber-200/15 blur-3xl"
    ></div>
  </div>

  <!-- decorative sparkles -->
  <span
    class="text-brand-light pointer-events-none absolute top-20 left-[15%] z-10 text-xl opacity-60 select-none"
    aria-hidden="true">✦</span
  >
  <span
    class="text-brand-light pointer-events-none absolute top-32 right-[18%] z-10 text-sm opacity-45 select-none"
    aria-hidden="true">✦</span
  >
  <span
    class="pointer-events-none absolute bottom-24 left-[8%] z-10 text-xs text-amber-300 opacity-50 select-none"
    aria-hidden="true">✦</span
  >

  <!-- content -->
  <div class="relative z-20 mx-auto max-w-6xl px-9">
    <div class="max-w-3xl">
      <!-- eyebrow -->
      <p class="text-brand-accent mb-5 text-[11px] font-bold tracking-[0.22em] uppercase">
        AI-Powered Job Applications
      </p>

      <!-- h1 -->
      <h1
        class="text-brand-ink mb-6 text-[clamp(40px,5.5vw,70px)] leading-[1.05] font-black tracking-[-0.05em]"
      >
        Get hired in Germany —<br />
        <em
          class="text-brand-accent decoration-brand-light italic underline decoration-[2px] underline-offset-8"
          >faster.</em
        >
      </h1>

      <!-- subheadline -->
      <p class="text-brand-muted mb-10 max-w-xl font-sans text-lg leading-[1.7] font-normal">
        AI-powered CV, cover letter, LinkedIn, and GitHub optimization built for the German job
        market. Delivered in minutes, not days. From €59.
      </p>

      <!-- CTAs -->
      <div class="mb-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="#pricing"
          class="bg-brand-accent focus-visible:ring-brand-accent inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-[15px] font-bold text-white shadow-lg shadow-violet-400/30 transition-colors duration-200 hover:bg-violet-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          See pricing →
        </a>
        <a
          href="#pain-points"
          class="border-brand-light hover:border-brand-accent hover:bg-brand-pale focus-visible:ring-brand-accent inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 font-sans text-[15px] font-semibold text-violet-800 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          How it works
        </a>
      </div>

      <!-- trust badges -->
      <div
        class="text-brand-hint flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-[13px] font-medium"
      >
        <span>✓ ATS-optimized</span>
        <span>✓ DIN 5008 compliant</span>
        <span>✓ Tax-deductible (Werbungskosten)</span>
        <span>✓ GDPR-compliant</span>
      </div>
    </div>
  </div>
</section>

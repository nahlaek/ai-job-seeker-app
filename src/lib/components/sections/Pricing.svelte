<script lang="ts">
  type Tier = {
    name: string
    tagline: string
    price: string
    cadence: string
    features: string[]
    cta: string
    featured?: boolean
    badge?: string
  }

  const tiers: Tier[] = [
    {
      name: 'CV Rewrite',
      tagline: 'Perfect to get started',
      price: '€59',
      cadence: 'one-time',
      cta: 'Get started',
      features: [
        'ATS-optimized CV rewrite',
        'German market formatting (DIN 5008)',
        'Keyword optimization for your target role',
        'Bilingual support (DE/EN)',
        'PDF + DOCX delivery',
      ],
    },
    {
      name: 'Full Application',
      tagline: 'Stand out from the first line',
      price: '€109',
      cadence: 'one-time',
      cta: 'Get started',
      features: [
        'Everything in CV Rewrite',
        'Personalized cover letter tailored to your target job',
        'LinkedIn profile optimization',
        'ATS keyword strategy document',
        'Delivered same day',
      ],
    },
    {
      name: 'IT Complete',
      tagline: 'For IT professionals',
      price: '€149',
      cadence: 'one-time · for IT professionals',
      cta: 'Get started',
      featured: true,
      badge: 'MOST POPULAR',
      features: [
        'Everything in Full Application',
        'GitHub profile optimization',
        'README and profile page rewrite',
        'Project descriptions refined for recruiters',
        'Tech stack keyword alignment',
      ],
    },
    {
      name: '90-Day Accelerator',
      tagline: 'Complete job search support',
      price: '€249',
      cadence: 'one-time · for IT professionals',
      cta: 'Get started',
      features: [
        'Everything in IT Complete',
        'AI-powered mock interview sessions',
        'Technical interview prep (system design, coding)',
        'Behavioral coaching (STAR method)',
        'Ongoing CV updates for new applications',
        'Weekly job market insights for your niche',
        '90 days of support',
      ],
    },
  ]
</script>

<section id="pricing" class="flex flex-col justify-center bg-white py-8 md:min-h-[100dvh] md:py-10">
  <div class="mx-auto max-w-6xl px-9">
    <!-- header -->
    <div class="mb-6 text-center">
      <p class="text-brand-accent mb-3 text-[11px] font-bold tracking-[0.22em] uppercase">
        PRICING
      </p>
      <h2
        class="text-brand-ink mb-3 text-[clamp(28px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.04em]"
      >
        Choose your plan
      </h2>
      <p class="text-brand-muted font-sans text-base leading-[1.6]">
        All plans include instant delivery, ATS optimization, and German market formatting.
        Tax-deductible as Werbungskosten.
      </p>
    </div>

    <!-- grid -->
    <div class="mb-4 grid grid-cols-1 items-start gap-3.5 md:grid-cols-2 xl:grid-cols-4">
      {#each tiers as tier (tier.name)}
        {#if tier.featured}
          <!-- featured card -->
          <div
            class="border-brand-accent bg-brand-ink relative flex flex-col rounded-2xl border-2 p-5 shadow-2xl shadow-violet-500/25"
          >
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span
                class="bg-brand-accent rounded-full px-4 py-1 text-[10px] font-bold tracking-[0.08em] whitespace-nowrap text-white uppercase"
              >
                {tier.badge}
              </span>
            </div>
            <h3 class="mb-1 text-lg font-extrabold tracking-[-0.02em] text-white">
              {tier.name}
            </h3>
            <p class="text-brand-mid mb-3 text-xs font-semibold">{tier.tagline}</p>
            <div class="mb-3">
              <span class="font-display text-[36px] font-black tracking-[-0.05em] text-white">
                {tier.price}
              </span>
              <span
                class="text-brand-mid ml-1 text-[10px] font-semibold tracking-[0.08em] uppercase"
              >
                {tier.cadence}
              </span>
            </div>
            <ul class="mb-4 flex flex-1 flex-col gap-1.5" role="list">
              {#each tier.features as feature (feature)}
                <li class="text-brand-light flex items-center gap-2 text-[13px] font-medium">
                  <span
                    class="text-brand-mid flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-violet-800/40 text-[9px] font-bold"
                    aria-hidden="true">✓</span
                  >
                  {feature}
                </li>
              {/each}
            </ul>
            <button
              class="bg-brand-accent w-full rounded-xl py-2 font-sans text-[13px] font-bold text-white shadow-lg shadow-violet-900/40 transition-colors duration-200 hover:bg-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {tier.cta}
            </button>
          </div>
        {:else}
          <!-- standard card -->
          <div class="border-brand-line flex flex-col rounded-2xl border bg-white p-5">
            <h3 class="text-brand-ink mb-1 text-lg font-extrabold tracking-[-0.02em]">
              {tier.name}
            </h3>
            <p class="text-brand-accent mb-3 text-xs font-semibold">{tier.tagline}</p>
            <div class="mb-3">
              <span class="font-display text-brand-ink text-[36px] font-black tracking-[-0.05em]">
                {tier.price}
              </span>
              <span
                class="text-brand-hint ml-1 text-[10px] font-semibold tracking-[0.08em] uppercase"
              >
                {tier.cadence}
              </span>
            </div>
            <ul class="mb-4 flex flex-1 flex-col gap-1.5" role="list">
              {#each tier.features as feature (feature)}
                <li class="text-brand-ink/80 flex items-center gap-2 text-[13px] font-medium">
                  <span
                    class="text-brand-accent bg-brand-pale flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-[9px] font-bold"
                    aria-hidden="true">✓</span
                  >
                  {feature}
                </li>
              {/each}
            </ul>
            <button
              class="bg-brand-ink focus-visible:ring-brand-accent w-full rounded-xl py-2 font-sans text-[13px] font-bold text-white transition-colors duration-200 hover:bg-violet-950 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {tier.cta}
            </button>
          </div>
        {/if}
      {/each}
    </div>

    <!-- fine print -->
    <p class="text-brand-hint text-center text-xs font-medium">
      All prices include VAT. Costs are fully tax-deductible as Werbungskosten in Germany (§9 EStG).
      Effective cost after tax: €34–145 depending on your tax bracket.
    </p>
  </div>
</section>

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
        'Technical interview prep (system design, coding)',
        'Behavioral coaching (STAR method)',
        'Ongoing CV updates for new applications',
        '90 days of support',
      ],
    },
  ]

  const trustBadges = [
    'Delivered in 24 hours',
    'DIN 5008 formatted',
    'Tax-deductible (Werbungskosten)',
  ]
</script>

<section id="pricing" class="flex flex-col bg-white py-4 md:h-[calc(100dvh-3.5rem)] md:py-5">
  <div class="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 md:flex-1 lg:px-8">
    <!-- header -->
    <div class="mb-1.5 text-center">
      <p class="text-brand-accent mb-1 text-[11px] font-bold tracking-[0.22em] uppercase">
        PRICING
      </p>
      <h2
        class="text-brand-ink text-[clamp(24px,3.5vw,36px)] leading-[1.05] font-black tracking-[-0.05em]"
      >
        Choose your plan
      </h2>
    </div>

    <!-- trust badges -->
    <div class="mb-2 flex flex-wrap justify-center gap-2">
      {#each trustBadges as badge (badge)}
        <span
          class="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-sans text-[13px] font-medium text-emerald-700"
        >
          <span class="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true"></span>
          {badge}
        </span>
      {/each}
    </div>

    <!-- grid -->
    <div class="mb-2 grid grid-cols-1 items-stretch gap-3 md:flex-1 md:grid-cols-2 xl:grid-cols-4">
      {#each tiers as tier (tier.name)}
        {#if tier.featured}
          <!-- featured card -->
          <div
            class="border-brand-accent bg-brand-ink relative flex h-full flex-col rounded-2xl border-2 p-4 shadow-2xl shadow-violet-500/25"
          >
            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
              <span
                class="bg-brand-accent rounded-full px-3 py-0.5 text-[10px] font-bold tracking-[0.08em] whitespace-nowrap text-white uppercase"
              >
                {tier.badge}
              </span>
            </div>
            <div class="min-h-[3.25rem]">
              <h3 class="mb-0.5 text-base font-extrabold tracking-[-0.02em] text-white">
                {tier.name}
              </h3>
              <p class="text-brand-mid text-xs font-semibold">{tier.tagline}</p>
            </div>
            <div class="mt-2 mb-2">
              <span class="font-display text-[32px] font-black tracking-[-0.05em] text-white">
                {tier.price}
              </span>
              <span
                class="text-brand-mid ml-1 text-[10px] font-semibold tracking-[0.08em] uppercase"
              >
                {tier.cadence}
              </span>
            </div>
            <ul class="mb-3 flex flex-1 flex-col gap-1" role="list">
              {#each tier.features as feature (feature)}
                <li class="text-brand-light flex items-center gap-1.5 text-sm font-medium">
                  <span
                    class="text-brand-mid flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-800/40 text-[8px] font-bold"
                    aria-hidden="true">✓</span
                  >
                  {feature}
                </li>
              {/each}
            </ul>
            <button
              class="bg-brand-accent mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 font-sans text-[13px] font-bold text-white shadow-lg shadow-violet-400/30 transition-colors duration-200 hover:bg-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {tier.cta} →
            </button>
          </div>
        {:else}
          <!-- standard card -->
          <div class="border-brand-line flex h-full flex-col rounded-2xl border bg-white p-4">
            <div class="min-h-[3.25rem]">
              <h3 class="text-brand-ink mb-0.5 text-base font-extrabold tracking-[-0.02em]">
                {tier.name}
              </h3>
              <p class="text-brand-accent text-xs font-semibold">{tier.tagline}</p>
            </div>
            <div class="mt-2 mb-2">
              <span class="font-display text-brand-ink text-[32px] font-black tracking-[-0.05em]">
                {tier.price}
              </span>
              <span
                class="text-brand-hint ml-1 text-[10px] font-semibold tracking-[0.08em] uppercase"
              >
                {tier.cadence}
              </span>
            </div>
            <ul class="mb-3 flex flex-1 flex-col gap-1" role="list">
              {#each tier.features as feature (feature)}
                <li class="text-brand-ink/80 flex items-center gap-1.5 text-sm font-medium">
                  <span
                    class="text-brand-accent bg-brand-pale flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] font-bold"
                    aria-hidden="true">✓</span
                  >
                  {feature}
                </li>
              {/each}
            </ul>
            <button
              class="bg-brand-ink focus-visible:ring-brand-accent mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 font-sans text-[13px] font-bold text-white transition-colors duration-200 hover:bg-violet-950 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {tier.cta} →
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

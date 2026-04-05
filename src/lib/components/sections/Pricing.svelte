<script lang="ts">
  type Tier = {
    name: string
    tagline: string
    price: string
    cadence: string
    features: string[]
    cta: string
    delivery: string
    featured?: boolean
    badge?: string
  }

  const tiers: Tier[] = [
    {
      name: 'CV Rewrite',
      tagline: 'Perfect to get started',
      price: '€79',
      cadence: 'one-time',
      cta: 'Get started',
      delivery: 'Delivered same day',
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
      price: '€139',
      cadence: 'one-time',
      cta: 'Get started',
      delivery: 'Delivered in ~48h',
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
      price: '€249',
      cadence: 'one-time · for IT professionals',
      cta: 'Get started',
      delivery: 'Delivered in ~48h',
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
      price: '€449',
      cadence: 'one-time · for IT professionals',
      cta: 'Get started',
      delivery: 'Active for 90 days',
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
    'Delivered in 24-48h',
    'DIN 5008 formatted',
    'Tax-deductible (Werbungskosten)',
  ]
</script>

<section id="pricing" class="bg-brand-bg relative overflow-hidden py-12 md:py-16">
  <div class="mx-auto w-full max-w-7xl px-6 lg:px-10">
    <!-- header -->
    <div class="mb-4 text-center">
      <p class="text-brand-accent mb-3 text-[11px] font-bold tracking-[0.22em] uppercase">
        ONE-TIME INVESTMENT
      </p>
      <h2
        class="text-brand-ink mb-4 text-[clamp(24px,3.5vw,36px)] leading-[1.05] font-black tracking-[-0.05em]"
      >
        Get your documents done right. Pay once. Land the job.
      </h2>
      <p class="text-brand-muted mx-auto max-w-xl text-lg leading-[1.7]">
        No subscription. No calls. Upload your CV, receive professionally crafted documents within
        hours.
      </p>
    </div>

    <!-- trust badges -->
    <div class="mb-8 flex flex-wrap justify-center gap-2">
      {#each trustBadges as badge (badge)}
        <span
          class="flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-sans text-[13px] font-medium text-teal-700"
        >
          <span class="h-2 w-2 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
          {badge}
        </span>
      {/each}
    </div>

    <!-- grid -->
    <div class="mb-6 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
      {#each tiers as tier (tier.name)}
        {#if tier.featured}
          <!-- featured card -->
          <div
            class="relative flex h-full flex-col rounded-2xl border border-teal-400/60 bg-gradient-to-br from-[#6d28d9] to-[#5b21b6] p-6 shadow-xl shadow-purple-900/20"
          >
            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
              <span
                class="rounded-full bg-teal-500 px-3 py-0.5 text-[10px] font-bold tracking-[0.08em] whitespace-nowrap text-white uppercase"
              >
                {tier.badge}
              </span>
            </div>
            <div class="mb-4">
              <h3 class="mb-0.5 text-base font-extrabold tracking-[-0.02em] text-white">
                {tier.name}
              </h3>
              <p class="text-xs font-semibold text-teal-300">{tier.tagline}</p>
            </div>
            <div class="mb-5">
              <span class="font-display text-[32px] font-black tracking-[-0.05em] text-white">
                {tier.price}
              </span>
              <span
                class="text-brand-light ml-1 text-[10px] font-semibold tracking-[0.08em] uppercase"
              >
                {tier.cadence}
              </span>
            </div>
            <ul class="mb-6 flex flex-1 flex-col gap-2.5" role="list">
              {#each tier.features as feature (feature)}
                <li
                  class="text-brand-light flex items-start gap-2 text-sm leading-snug font-medium"
                >
                  <span
                    class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-[8px] font-bold text-teal-400"
                    aria-hidden="true">✓</span
                  >
                  {feature}
                </li>
              {/each}
            </ul>
            <button
              class="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 py-3 font-sans text-[13px] font-bold text-white shadow-lg shadow-teal-600/30 transition-colors duration-200 hover:bg-teal-400 focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {tier.cta} →
            </button>
            <p
              class="mt-3 flex items-center justify-center gap-1.5 text-[12px] font-medium text-white/60"
            >
              <svg
                class="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {tier.delivery}
            </p>
          </div>
        {:else}
          <!-- standard card -->
          <div
            class="border-brand-border flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm shadow-purple-900/5"
          >
            <div class="mb-4">
              <h3 class="text-brand-ink mb-0.5 text-base font-extrabold tracking-[-0.02em]">
                {tier.name}
              </h3>
              <p class="text-brand-accent text-xs font-semibold">{tier.tagline}</p>
            </div>
            <div class="mb-5">
              <span class="font-display text-brand-ink text-[32px] font-black tracking-[-0.05em]">
                {tier.price}
              </span>
              <span
                class="text-brand-hint ml-1 text-[10px] font-semibold tracking-[0.08em] uppercase"
              >
                {tier.cadence}
              </span>
            </div>
            <ul class="mb-6 flex flex-1 flex-col gap-2.5" role="list">
              {#each tier.features as feature (feature)}
                <li
                  class="text-brand-ink/80 flex items-start gap-2 text-sm leading-snug font-medium"
                >
                  <span
                    class="text-brand-accent bg-brand-pale mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] font-bold"
                    aria-hidden="true">✓</span
                  >
                  {feature}
                </li>
              {/each}
            </ul>
            <button
              class="bg-brand-accent mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg py-3 font-sans text-[13px] font-bold text-white transition-colors duration-200 hover:bg-purple-800 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {tier.cta} →
            </button>
            <p
              class="text-brand-hint mt-3 flex items-center justify-center gap-1.5 text-[12px] font-medium"
            >
              <svg
                class="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {tier.delivery}
            </p>
          </div>
        {/if}
      {/each}
    </div>

    <!-- fine print -->
    <p class="text-brand-hint text-center text-xs font-medium">
      All prices include VAT. Costs are fully tax-deductible as Werbungskosten in Germany (§9 EStG).
      Effective cost after tax: €46–261 depending on your tax bracket.
    </p>
  </div>
</section>

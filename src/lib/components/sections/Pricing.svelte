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
      cta: 'Get CV Rewrite',
      features: [
        'ATS-optimized CV rewrite',
        'DIN 5008 formatting',
        'Keyword research for your target role',
        '1 revision round',
        'Delivered in 48 hours (PDF + DOCX)',
      ],
    },
    {
      name: 'Cover Letter',
      tagline: 'Stand out from the first line',
      price: '€39',
      cadence: 'one-time',
      cta: 'Get Cover Letter',
      features: [
        'Tailored cover letter (Anschreiben)',
        'Role-specific tone and phrasing',
        'Addresses the job posting directly',
        '1 revision round',
        'Delivered in 48 hours (PDF + DOCX)',
      ],
    },
    {
      name: 'IT Complete',
      tagline: 'For IT professionals',
      price: '€149',
      cadence: 'one-time',
      cta: 'Get IT Complete',
      featured: true,
      badge: 'MOST POPULAR',
      features: [
        'Everything in CV Rewrite',
        'Everything in Cover Letter',
        'LinkedIn headline + summary rewrite',
        'GitHub / portfolio framing tips',
        '2 revision rounds',
        'Priority delivery in 24 hours',
      ],
    },
    {
      name: 'Full Package',
      tagline: 'Complete job search support',
      price: '€249',
      cadence: 'one-time',
      cta: 'Get Full Package',
      features: [
        'Everything in IT Complete',
        '30-min strategy call (video)',
        'Interview preparation guide',
        'Salary negotiation talking points',
        '3 revision rounds',
        'Dedicated account manager',
      ],
    },
  ]
</script>

<section id="pricing" class="bg-brand-bg flex min-h-screen flex-col justify-center py-16">
  <div class="mx-auto max-w-6xl px-9">
    <!-- header -->
    <div class="mb-12 text-center">
      <p class="text-brand-accent mb-3 text-[11px] font-bold tracking-[0.22em] uppercase">
        Pricing
      </p>
      <h2
        class="text-brand-ink mb-4 text-[clamp(28px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.04em]"
      >
        One-time. No subscription.
      </h2>
      <p class="text-brand-muted text-lg leading-[1.7]">
        Pay once, own the result. Every document delivered within 48 hours.
      </p>
    </div>

    <!-- grid -->
    <div class="mb-6 grid grid-cols-1 items-start gap-3.5 md:grid-cols-2 xl:grid-cols-4">
      {#each tiers as tier (tier.name)}
        {#if tier.featured}
          <!-- featured card -->
          <div
            class="border-brand-accent bg-brand-ink relative flex flex-col rounded-2xl border-2 p-7 shadow-2xl shadow-violet-500/25"
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
            <p class="text-brand-mid mb-5 text-xs font-semibold">{tier.tagline}</p>
            <div class="mb-6">
              <span class="font-display text-[44px] font-black tracking-[-0.05em] text-white">
                {tier.price}
              </span>
              <span
                class="text-brand-mid ml-1 text-[10px] font-semibold tracking-[0.08em] uppercase"
              >
                {tier.cadence}
              </span>
            </div>
            <ul class="mb-7 flex flex-1 flex-col gap-2.5" role="list">
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
              class="bg-brand-accent w-full rounded-xl py-3 font-sans text-[13px] font-bold text-white shadow-lg shadow-violet-900/40 transition-colors duration-200 hover:bg-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {tier.cta}
            </button>
          </div>
        {:else}
          <!-- standard card -->
          <div class="border-brand-line flex flex-col rounded-2xl border bg-white p-7">
            <h3 class="text-brand-ink mb-1 text-lg font-extrabold tracking-[-0.02em]">
              {tier.name}
            </h3>
            <p class="text-brand-accent mb-5 text-xs font-semibold">{tier.tagline}</p>
            <div class="mb-6">
              <span class="font-display text-brand-ink text-[44px] font-black tracking-[-0.05em]">
                {tier.price}
              </span>
              <span
                class="text-brand-hint ml-1 text-[10px] font-semibold tracking-[0.08em] uppercase"
              >
                {tier.cadence}
              </span>
            </div>
            <ul class="mb-7 flex flex-1 flex-col gap-2.5" role="list">
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
              class="bg-brand-ink focus-visible:ring-brand-accent w-full rounded-xl py-3 font-sans text-[13px] font-bold text-white transition-colors duration-200 hover:bg-violet-950 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {tier.cta}
            </button>
          </div>
        {/if}
      {/each}
    </div>

    <!-- fine print -->
    <p class="text-brand-hint text-center text-xs font-medium">
      Prices include VAT. All documents are tax-deductible as job-seeking expenses under §9 EStG.
    </p>
  </div>
</section>

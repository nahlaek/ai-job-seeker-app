<script lang="ts">
  const cards = [
    {
      icon: '📄',
      title: 'ATS black hole',
      body: 'Your CV gets rejected by software before a human ever reads it. 75% of applications are filtered out by Applicant Tracking Systems.',
    },
    {
      icon: '🤖',
      title: 'Wrong format',
      body: 'International CVs don\'t match German standards. Missing Deckblatt, wrong photo placement, no DIN 5008 compliance — instant rejection.',
    },
    {
      icon: '🌐',
      title: 'Generic AI output',
      body: "ChatGPT doesn't know German market conventions. Cookie-cutter text gets flagged by recruiters who've seen it a hundred times.",
    },
    {
      icon: '⏱',
      title: 'Invisible on LinkedIn & GitHub',
      body: 'Recruiters search LinkedIn and check GitHub before they call you. An unoptimized profile means you never show up.',
    },
  ]
</script>

<section id="pain-points" class="flex min-h-screen flex-col justify-center bg-white py-16">
  <div class="relative mx-auto max-w-6xl px-9">
    <!-- header -->
    <div class="mb-12 max-w-2xl">
      <p class="text-brand-accent mb-3 text-[11px] font-bold tracking-[0.22em] uppercase">
        WHY YOUR APPLICATION ISN'T WORKING
      </p>
      <h2
        class="text-brand-ink mb-4 text-[clamp(28px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.04em]"
      >
        Most applications never make it past the first filter.
      </h2>
      <p class="text-brand-muted text-lg leading-[1.7]">
        80% of recruiters in Germany rate applications as mediocre at best. Generic AI tools don't
        understand DIN 5008 formatting, German cover letter conventions, or how ATS systems filter
        candidates in the DACH market. IT roles take an average of 7.7 months to fill — not because
        there aren't candidates, but because most applications never make it past the first filter.
      </p>
    </div>

    <!-- cards -->
    <div class="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
      {#each cards as card (card.title)}
        <div
          class="border-brand-border bg-brand-surface hover:border-brand-light rounded-2xl border p-7 transition-all duration-200 hover:shadow-lg hover:shadow-violet-100/80"
        >
          <div
            class="bg-brand-pale mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-lg"
            aria-hidden="true"
          >
            {card.icon}
          </div>
          <h3 class="text-brand-ink mb-2 text-lg font-bold tracking-[-0.02em]">
            {card.title}
          </h3>
          <p class="text-brand-muted text-[13px] leading-[1.65] font-medium">
            {card.body}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

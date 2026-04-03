<script lang="ts">
  const cards = [
    {
      icon: '📄',
      title: 'Wrong format',
      body: 'German employers expect DIN 5008 structure, a photo, and specific section order. International CVs look unprofessional by default.',
    },
    {
      icon: '🤖',
      title: 'ATS rejection',
      body: "Applicant tracking systems filter out CVs that lack the right keywords. Most candidates never make it to a recruiter's inbox.",
    },
    {
      icon: '🌐',
      title: 'Language mismatch',
      body: 'Even fluent German speakers miss the industry-specific phrasing that signals cultural fit and domain expertise to hiring managers.',
    },
    {
      icon: '⏱',
      title: 'Hours wasted',
      body: 'Rewriting a CV for each application takes hours. Most people send the same document everywhere — and get silence back.',
    },
  ]
</script>

<section class="flex min-h-screen flex-col justify-center bg-white py-16">
  <div class="relative mx-auto max-w-6xl px-9">
    <!-- header -->
    <div class="mb-12 max-w-2xl">
      <p class="text-brand-accent mb-3 text-[11px] font-bold tracking-[0.22em] uppercase">
        The problem
      </p>
      <h2
        class="text-brand-ink mb-4 text-[clamp(28px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.04em]"
      >
        The German job market plays by different rules
      </h2>
      <p class="text-brand-muted text-lg leading-[1.7]">
        Most CVs from outside Germany get rejected before a human ever reads them.
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

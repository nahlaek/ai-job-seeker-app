<script lang="ts">
  type FaqItem = { question: string; answer: string }

  const items: FaqItem[] = [
    {
      question: 'Do I need to speak German to use this service?',
      answer:
        'No. We work in English and German. If you are applying to German-language roles, we write your documents in German. For English-speaking companies in Germany (many tech firms), we write in English.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Standard delivery is 48 hours after we receive your completed intake form. IT Complete orders are delivered within 24 hours. Full Package includes a scheduled strategy call which may extend the timeline by one day.',
    },
    {
      question: 'What do you need from me?',
      answer:
        'Your current CV (any format), the job posting or role description you are targeting, and a short intake form that takes about 10 minutes to complete.',
    },
    {
      question: 'Can I request revisions?',
      answer:
        'Yes. CV Rewrite and Cover Letter include 1 revision round. IT Complete includes 2 rounds. Full Package includes 3 rounds. Additional revisions can be requested for a flat fee of €19 each.',
    },
    {
      question: 'Is this tax-deductible in Germany?',
      answer:
        'Yes. Job-seeking expenses (Bewerbungskosten) are deductible under §9 EStG. We provide a proper invoice you can submit with your Steuererklärung.',
    },
    {
      question: 'What if I am not satisfied?',
      answer:
        'If after your revision rounds the result still does not meet your expectations, contact us. We review every case individually and either redo the work or issue a refund.',
    },
  ]

  let openIndex = $state<number | null>(null)

  function toggle(i: number) {
    openIndex = openIndex === i ? null : i
  }
</script>

<section class="bg-brand-bg py-20 md:py-24">
  <div class="mx-auto max-w-6xl px-9">
    <!-- header -->
    <div class="mb-12 max-w-2xl">
      <p class="text-brand-accent mb-3 text-[11px] font-bold tracking-[0.22em] uppercase">FAQ</p>
      <h2
        class="text-brand-ink text-[clamp(28px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.04em]"
      >
        Questions we get a lot
      </h2>
    </div>

    <!-- accordion -->
    <div class="max-w-3xl">
      {#each items as item, i (item.question)}
        <div class="border-brand-border border-t">
          <button
            onclick={() => toggle(i)}
            class="text-brand-ink focus-visible:ring-brand-accent flex w-full items-center justify-between gap-4 py-5 text-left font-sans text-[15px] font-semibold transition-colors duration-150 hover:text-violet-700 focus-visible:ring-2 focus-visible:outline-none"
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <span
              class="text-brand-accent shrink-0 text-xl font-light transition-transform duration-200"
              class:rotate-45={openIndex === i}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          {#if openIndex === i}
            <p class="text-brand-muted pb-5 text-[15px] leading-relaxed">
              {item.answer}
            </p>
          {/if}
        </div>
      {/each}
      <div class="border-brand-border border-t"></div>
    </div>
  </div>
</section>

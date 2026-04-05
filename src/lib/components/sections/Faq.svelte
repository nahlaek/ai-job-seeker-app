<script lang="ts">
  type FaqItem = { question: string; answer: string }

  const items: FaqItem[] = [
    {
      question: 'Is this just ChatGPT with a wrapper?',
      answer:
        'No. Our system uses custom AI pipelines specifically trained on German application standards — DIN 5008 formatting, DACH-specific cover letter conventions, ATS keyword strategies used by German employers, and recruiter preferences in the German market. The output is reviewed for quality before delivery. This is not a generic AI tool.',
    },
    {
      question: 'Can I really deduct this from my taxes?',
      answer:
        'Yes. In Germany, all job application costs (Bewerbungskosten) are fully tax-deductible as Werbungskosten under §9 EStG. This applies whether you are employed or unemployed. Keep your receipt — our invoice is accepted by the Finanzamt.',
    },
    {
      question: 'How is my data handled?',
      answer:
        'We are fully GDPR-compliant. Your personal data is processed solely for the purpose of creating your application documents. We do not share, sell, or retain your data beyond the service delivery period. You can request deletion at any time. Our Datenschutzerklärung is available on this page.',
    },
  ]

  let openIndex = $state<number | null>(null)

  function toggle(i: number) {
    openIndex = openIndex === i ? null : i
  }
</script>

<section id="faq" class="bg-brand-bg flex flex-col justify-center py-8 md:min-h-[100dvh] md:py-10">
  <div class="mx-auto max-w-6xl px-9">
    <!-- header -->
    <div class="mb-8 max-w-2xl">
      <p class="text-brand-accent mb-3 text-[11px] font-bold tracking-[0.22em] uppercase">FAQ</p>
      <h2
        class="text-brand-ink text-[clamp(28px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.04em]"
      >
        Frequently asked questions
      </h2>
    </div>

    <!-- accordion -->
    <div class="max-w-3xl">
      {#each items as item, i (item.question)}
        <div class="border-brand-border border-t">
          <button
            onclick={() => toggle(i)}
            class="text-brand-ink focus-visible:ring-brand-accent flex w-full items-center justify-between gap-4 py-4 text-left font-sans text-[15px] font-semibold transition-colors duration-150 hover:text-purple-800 focus-visible:ring-2 focus-visible:outline-none"
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <span
              class="text-brand-accent bg-brand-pale flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-light transition-transform duration-200"
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

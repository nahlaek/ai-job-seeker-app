<script lang="ts">
  const steps = [
    {
      number: '01',
      title: 'Upload',
      body: 'Submit your current CV and target job description through our secure form. Tell us your goals.',
    },
    {
      number: '02',
      title: 'We optimize',
      body: 'Our AI analyzes your profile against German market standards, ATS requirements, and your target role. Every document is reviewed for quality.',
    },
    {
      number: '03',
      title: 'Get hired',
      body: 'Receive your optimized documents within minutes. Start applying with confidence.',
    },
  ]
</script>

<section
  id="how-it-works"
  class="flex flex-col justify-center bg-white py-8 md:min-h-[100dvh] md:py-10"
>
  <div class="mx-auto max-w-6xl px-9">
    <!-- header -->
    <div class="mb-8 max-w-2xl">
      <p class="text-brand-accent mb-3 text-[11px] font-bold tracking-[0.22em] uppercase">
        HOW IT WORKS
      </p>
      <h2
        class="text-brand-ink mb-4 text-[clamp(28px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.04em]"
      >
        Three steps. Done in minutes.
      </h2>
      <p class="text-brand-muted text-lg leading-[1.7]">
        No calls, no back-and-forth. Just a clean handoff and a polished result.
      </p>
    </div>

    <!-- steps -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      {#each steps as step (step.number)}
        <div>
          <span
            class="font-display text-brand-light/40 mb-1 block text-5xl font-black"
            aria-hidden="true"
          >
            {step.number}
          </span>
          <h3 class="text-brand-ink mb-3 text-lg font-bold tracking-[-0.02em]">
            {step.title}
          </h3>
          <p class="text-brand-muted text-[15px] leading-[1.65]">
            {step.body}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

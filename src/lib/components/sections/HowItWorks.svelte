<script lang="ts">
  const steps = [
    {
      number: '01',
      title: 'Share your details',
      body: 'Fill out a short form: your current CV, target role, and the job posting you are applying for. Takes about 10 minutes.',
    },
    {
      number: '02',
      title: 'We rewrite everything',
      body: 'Our AI — guided by German HR specialists — rewrites your CV and cover letter to match the role, the ATS filters, and German market expectations.',
    },
    {
      number: '03',
      title: 'Review and apply',
      body: 'You receive polished PDF and DOCX files within 48 hours. One revision round included. Then apply with confidence.',
    },
  ]
</script>

<section id="how-it-works" class="bg-white py-20 md:py-24">
  <div class="mx-auto max-w-6xl px-9">
    <!-- header -->
    <div class="mb-14 max-w-2xl">
      <p class="text-brand-accent mb-3 text-[11px] font-bold tracking-[0.22em] uppercase">
        The process
      </p>
      <h2
        class="text-brand-ink mb-4 text-[clamp(28px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.04em]"
      >
        Three steps to a job-ready application
      </h2>
      <p class="text-brand-muted text-lg leading-[1.7]">
        No calls, no back-and-forth. Just a clean handoff and a polished result.
      </p>
    </div>

    <!-- steps -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
      {#each steps as step (step.number)}
        <div>
          <span
            class="font-display text-brand-light/40 mb-2 block text-6xl font-black"
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

<script lang="ts">
  const stats = [
    { value: '80%', descriptor: 'of German recruiters rate CVs as inadequate' },
    { value: '7.7 months', descriptor: 'average time to fill an IT role in Germany' },
    { value: '75%', descriptor: 'filtered out before a human ever reads them' },
  ]

  const cards = [
    {
      title: 'ATS black hole',
      body: 'Your CV may never reach a human. Three in four applications are eliminated by Applicant Tracking Systems before anyone reads them.',
    },
    {
      title: 'Wrong format',
      body: "A CV that works in London or Bangalore won't pass in Berlin. Missing Deckblatt, incorrect photo placement, no DIN 5008 compliance. German recruiters notice immediately.",
    },
    {
      title: 'Generic AI output',
      body: "ChatGPT doesn't know German hiring conventions. Templated language stands out to DACH recruiters for the wrong reasons.",
    },
    {
      title: 'Invisible on LinkedIn & GitHub',
      body: "German recruiters check your LinkedIn and GitHub before they call. If your profiles aren't optimised for how they search, you won't appear.",
    },
  ]
</script>

<section
  id="pain-points"
  class="bg-brand-bg flex flex-col justify-center py-8 md:min-h-[100dvh] md:py-10"
>
  <div class="relative mx-auto max-w-6xl px-9">
    <!-- header -->
    <div class="mb-6 max-w-2xl">
      <p class="text-brand-accent mb-3 text-[11px] font-bold tracking-[0.22em] uppercase">
        WHY YOUR APPLICATION ISN'T WORKING
      </p>
      <h2
        class="text-brand-ink mb-5 text-[clamp(28px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.04em]"
      >
        Most applications never make it past the first filter.
      </h2>

      <!-- stat strip -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {#each stats as stat (stat.value)}
          <div>
            <p
              class="font-display text-brand-ink text-[clamp(26px,3vw,38px)] leading-none font-black tracking-[-0.04em] whitespace-nowrap"
            >
              {stat.value}
            </p>
            <p class="text-brand-muted mt-1.5 font-sans text-[13px] leading-[1.5]">
              {stat.descriptor}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- cards -->
    <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {#each cards as card, i (card.title)}
        <div
          class="border-brand-border flex flex-col rounded-2xl border bg-white p-5 transition-all duration-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-200/40"
        >
          <div
            class="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10"
            aria-hidden="true"
          >
            {#if i === 0}
              <!-- shield-x: automated rejection / ATS blocking -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-teal-600"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="9.5" y1="9.5" x2="14.5" y2="14.5" />
                <line x1="14.5" y1="9.5" x2="9.5" y2="14.5" />
              </svg>
            {:else if i === 1}
              <!-- file-x: rejected / non-compliant document -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-teal-600"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9.5" y1="13" x2="14.5" y2="18" />
                <line x1="14.5" y1="13" x2="9.5" y2="18" />
              </svg>
            {:else if i === 2}
              <!-- sparkles: AI-generated generic content -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-teal-600"
              >
                <path
                  d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
            {:else}
              <!-- eye-off: invisible to recruiters -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-teal-600"
              >
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                />
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line x1="2" y1="2" x2="22" y2="22" />
              </svg>
            {/if}
          </div>
          <h3 class="text-brand-ink mb-2 text-lg font-bold tracking-[-0.02em]">
            {card.title}
          </h3>
          <p class="text-brand-muted font-sans text-[13px] leading-[1.65]">
            {card.body}
          </p>
        </div>
      {/each}
    </div>

    <!-- bridge CTA -->
    <div class="border-brand-border rounded-2xl border bg-white px-6 py-5 text-center">
      <p class="text-brand-ink mb-3 font-sans text-base font-medium">
        These are fixable. Here's how we approach them.
      </p>
      <a
        href="#how-it-works"
        class="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-2.5 font-sans text-[13px] font-semibold text-white shadow-sm shadow-teal-500/20 transition-colors duration-200 hover:bg-teal-400 focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        See How It Works →
      </a>
    </div>
  </div>
</section>

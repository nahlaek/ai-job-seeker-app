<script lang="ts">
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  import {
    PUBLIC_PLAN_1_NAME,
    PUBLIC_PLAN_1_PRICE,
    PUBLIC_PLAN_1_CURRENCY,
    PUBLIC_PLAN_1_DELIVERY,
    PUBLIC_PLAN_1_FORMAT,
    PUBLIC_PLAN_1_DESCRIPTION,
    PUBLIC_PLAN_2_NAME,
    PUBLIC_PLAN_2_PRICE,
    PUBLIC_PLAN_2_CURRENCY,
    PUBLIC_PLAN_2_DELIVERY,
    PUBLIC_PLAN_2_FORMAT,
    PUBLIC_PLAN_2_DESCRIPTION,
    PUBLIC_PLAN_3_NAME,
    PUBLIC_PLAN_3_PRICE,
    PUBLIC_PLAN_3_CURRENCY,
    PUBLIC_PLAN_3_DELIVERY,
    PUBLIC_PLAN_3_FORMAT,
    PUBLIC_PLAN_3_DESCRIPTION,
    PUBLIC_PLAN_4_NAME,
    PUBLIC_PLAN_4_PRICE,
    PUBLIC_PLAN_4_CURRENCY,
    PUBLIC_PLAN_4_DELIVERY,
    PUBLIC_PLAN_4_FORMAT,
    PUBLIC_PLAN_4_DESCRIPTION,
  } from '$env/static/public'

  type PlanInfo = {
    name: string
    price: string
    currency: string
    delivery: string
    format: string
    description: string
  }

  const CURRENCY_SYMBOLS: Record<string, string> = {
    EUR: '\u20AC',
    GBP: '\u00A3',
    USD: '$',
  }

  function formatPrice(price: string, currency: string): string {
    const symbol = CURRENCY_SYMBOLS[currency] ?? currency
    const num = parseFloat(price)
    return `${symbol}${num.toFixed(2)}`
  }

  const plans: Record<string, PlanInfo> = {
    '1': {
      name: PUBLIC_PLAN_1_NAME,
      price: PUBLIC_PLAN_1_PRICE,
      currency: PUBLIC_PLAN_1_CURRENCY,
      delivery: PUBLIC_PLAN_1_DELIVERY,
      format: PUBLIC_PLAN_1_FORMAT,
      description: PUBLIC_PLAN_1_DESCRIPTION,
    },
    '2': {
      name: PUBLIC_PLAN_2_NAME,
      price: PUBLIC_PLAN_2_PRICE,
      currency: PUBLIC_PLAN_2_CURRENCY,
      delivery: PUBLIC_PLAN_2_DELIVERY,
      format: PUBLIC_PLAN_2_FORMAT,
      description: PUBLIC_PLAN_2_DESCRIPTION,
    },
    '3': {
      name: PUBLIC_PLAN_3_NAME,
      price: PUBLIC_PLAN_3_PRICE,
      currency: PUBLIC_PLAN_3_CURRENCY,
      delivery: PUBLIC_PLAN_3_DELIVERY,
      format: PUBLIC_PLAN_3_FORMAT,
      description: PUBLIC_PLAN_3_DESCRIPTION,
    },
    '4': {
      name: PUBLIC_PLAN_4_NAME,
      price: PUBLIC_PLAN_4_PRICE,
      currency: PUBLIC_PLAN_4_CURRENCY,
      delivery: PUBLIC_PLAN_4_DELIVERY,
      format: PUBLIC_PLAN_4_FORMAT,
      description: PUBLIC_PLAN_4_DESCRIPTION,
    },
  }

  const planKey = $derived($page.url.searchParams.get('plan') ?? '')
  const activePlan = $derived(plans[planKey] ?? null)

  $effect(() => {
    if (browser && !activePlan) {
      goto('/', { replaceState: true })
    }
  })
</script>

<svelte:head>
  <title>Order confirmed — bewerbA</title>
  <meta
    name="description"
    content="Your order is confirmed. Check your inbox for a confirmation email with next steps."
  />
</svelte:head>

<section
  class="bg-brand-bg flex flex-col items-center justify-center px-4 py-6 md:min-h-[100dvh] md:py-6"
>
  <div
    class="border-brand-border w-full max-w-3xl rounded-2xl border bg-white px-6 py-6 shadow-sm shadow-purple-900/5 md:px-10"
  >
    <!-- Checkmark icon -->
    <div class="mb-4 flex justify-center">
      <div
        class="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 ring-[6px] ring-teal-500/10"
        aria-hidden="true"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>

    <!-- Heading -->
    <h1
      class="font-display text-brand-ink mb-2 text-center text-[clamp(24px,3.5vw,32px)] leading-[1.1] font-extrabold tracking-[-0.04em]"
    >
      Your order is confirmed, we're on it.
    </h1>
    <p class="text-brand-muted mb-5 text-center text-[15px] leading-[1.65]">
      Check your inbox for a confirmation email within the next few minutes.
    </p>

    <hr class="border-brand-border mb-5" />

    <!-- Order summary (shown only when a valid plan param is present) -->
    {#if activePlan}
      <div class="bg-brand-surface border-brand-border mb-5 rounded-xl border p-4">
        <p
          class="text-brand-accent mb-3 font-sans text-[11px] font-bold tracking-[0.22em] uppercase"
        >
          Order summary
        </p>
        <div class="mb-2 flex items-baseline justify-between gap-4">
          <span class="text-brand-ink font-display text-base font-bold tracking-[-0.02em]"
            >{activePlan.name}</span
          >
          <span class="font-display text-brand-ink text-xl font-black tracking-tight">
            {formatPrice(activePlan.price, activePlan.currency)}
          </span>
        </div>
        <div class="text-brand-muted flex flex-col gap-1 font-sans text-sm leading-[1.6]">
          <p>
            <span class="text-brand-hint font-medium">Format:</span>
            {activePlan.format}
          </p>
          <p class="mt-1">{activePlan.description}</p>
        </div>
      </div>
    {/if}

    <!-- Timeline -->
    <div class="mb-5 flex flex-col gap-4">
      <!-- Item 1: Now -->
      <div class="flex items-start gap-3.5">
        <span
          class="mt-0.5 inline-flex h-7 shrink-0 items-center justify-center rounded-full bg-teal-500 px-2.5 font-sans text-[11px] font-bold text-white"
        >
          Now
        </span>
        <div>
          <h3 class="text-brand-ink mb-1 text-[15px] font-bold tracking-[-0.02em]">
            Confirmation email on its way
          </h3>
          <p class="text-brand-muted font-sans text-[15px] leading-[1.65]">
            Check your inbox. A summary of your order lands in your inbox shortly. If you don't see
            it within a few minutes, check your spam folder.
          </p>
        </div>
      </div>

      <!-- Item 2: 1h -->
      <div class="flex items-start gap-3.5">
        <span
          class="bg-brand-pale text-brand-accent mt-0.5 inline-flex h-7 shrink-0 items-center justify-center rounded-full px-2.5 font-sans text-[11px] font-bold"
        >
          1h
        </span>
        <div>
          <h3 class="text-brand-ink mb-1 text-[15px] font-bold tracking-[-0.02em]">
            CV optimisation begins
          </h3>
          <p class="text-brand-muted font-sans text-[15px] leading-[1.65]">
            Your CV is matched against German ATS requirements and the job ad you provided. We may
            reach out. If we have a question about your role or target position, we'll email you
            directly. Most orders need nothing from you at this stage.
          </p>
        </div>
      </div>

      <!-- Item 3: 24h -->
      <div class="flex items-start gap-3.5">
        <span
          class="bg-brand-pale text-brand-accent mt-0.5 inline-flex h-7 shrink-0 items-center justify-center rounded-full px-2.5 font-sans text-[11px] font-bold"
        >
          24h
        </span>
        <div>
          <h3 class="text-brand-ink mb-1 text-[15px] font-bold tracking-[-0.02em]">
            Your rewritten CV arrives
          </h3>
          <p class="text-brand-muted font-sans text-[15px] leading-[1.65]">
            Your rewritten CV lands in your inbox as DOCX and PDF, matched to your target role,
            formatted to German market standards, DIN 5008 formatted, ATS-ready and bilingual if
            selected.
          </p>
          <p class="text-brand-hint mt-1 font-sans text-[13px] leading-[1.5] italic">
            (orders placed after 16:00 CET roll to the next business day)
          </p>
        </div>
      </div>
    </div>

    {#if planKey !== '4'}
      <hr class="border-brand-border mb-5" />

      <!-- Info box -->
      <div class="bg-brand-pale mb-5 flex items-start gap-3 rounded-xl px-4 py-3">
        <span
          class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500"
          aria-hidden="true"
        >
          <svg
            class="h-3 w-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <p class="text-brand-ink font-sans text-[15px] leading-[1.65]">
          One free revision is included. If anything needs adjusting, simply reply to your
          confirmation email within 7 days.
        </p>
      </div>
    {/if}

    <hr class="border-brand-border mb-5" />

    <!-- CTA -->
    <div class="text-center">
      <a
        href="/#pricing"
        class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 py-3 font-sans text-[13px] font-bold text-white shadow-lg shadow-teal-600/30 transition-colors duration-200 hover:bg-teal-400 focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Explore our other services &rarr;
      </a>
      <p class="text-brand-hint mt-3 font-sans text-[13px]">
        Questions?
        <a href="mailto:hello@bewerbA.de" class="text-brand-accent hover:underline">
          hello@bewerbA.de
        </a>
      </p>
    </div>
  </div>
</section>

<script lang="ts">
  import { APP_NAME } from '$lib/constants'
  import Logo from '$lib/components/Logo.svelte'

  const year = new Date().getFullYear()

  const exploreLinks = [
    { label: 'The Problem', href: '/#pain-points' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
  ]

  const companyLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ]
</script>

<footer class="border-t border-purple-800/20 bg-gradient-to-r from-[#1e0e3e] to-[#2b1555]">
  <div class="mx-auto max-w-6xl px-6 pt-12 pb-8 lg:px-10">
    <!-- row 1 -->
    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-[2fr_1fr_1fr] md:gap-12">
      <!-- left: logo + tagline -->
      <div>
        <Logo variant="dark" />
        <p class="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
          Your German job application, done right.
        </p>
      </div>

      <!-- middle: explore -->
      <div>
        <h4 class="mb-4 font-mono text-xs font-semibold tracking-widest text-white/50 uppercase">
          Explore
        </h4>
        <ul class="flex flex-col gap-2.5">
          {#each exploreLinks as link (link.href)}
            <li>
              <a href={link.href} class="text-sm text-white/70 transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- right: company -->
      <div>
        <h4 class="mb-4 font-mono text-xs font-semibold tracking-widest text-white/50 uppercase">
          Company
        </h4>
        <ul class="flex flex-col gap-2.5">
          {#each companyLinks as link (link.href)}
            <li>
              <a href={link.href} class="text-sm text-white/70 transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- row 2: bottom bar -->
    <div
      class="mx-auto mt-10 max-w-5xl border-t border-white/10 pt-6 text-center text-sm text-white/50"
    >
      <span class="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" aria-hidden="true"
      ></span>
      &copy; {year}
      {APP_NAME}
    </div>
  </div>
</footer>

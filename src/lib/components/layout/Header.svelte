<script lang="ts">
  import Logo from '$lib/components/Logo.svelte'

  const navLinks = [
    { label: 'The Problem', href: '#pain-points' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]
</script>

<header class="border-brand-line bg-brand-surface/80 sticky top-0 z-50 border-b backdrop-blur-sm">
  <div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-9">
    <!-- logo -->
    <Logo />

    <!-- nav pill -->
    <nav class="hidden items-center sm:flex">
      <div class="border-brand-line flex gap-0.5 rounded-full border bg-white px-1.5 py-1">
        {#each navLinks as link (link.href)}
          <a
            href={link.href}
            class="text-brand-muted hover:bg-brand-pale focus-visible:ring-brand-accent rounded-full px-4 py-1.5 font-sans text-[13px] font-medium transition-colors hover:text-purple-800 focus-visible:ring-2 focus-visible:outline-none"
          >
            {link.label}
          </a>
        {/each}
      </div>
    </nav>

    <!-- cta -->
    <a
      href="#pricing"
      class="hidden rounded-full bg-teal-500 px-5 py-2 font-sans text-[13px] font-bold text-white transition-colors duration-200 hover:bg-teal-400 focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:outline-none sm:inline-flex"
    >
      Get started →
    </a>
  </div>
</header>

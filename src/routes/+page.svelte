<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte'
  import PainPoints from '$lib/components/sections/PainPoints.svelte'
  import Pricing from '$lib/components/sections/Pricing.svelte'
  import HowItWorks from '$lib/components/sections/HowItWorks.svelte'
  import BeforeAfter from '$lib/components/sections/BeforeAfter.svelte'
  import Faq from '$lib/components/sections/Faq.svelte'
</script>

<svelte:head>
  <title>ai-job-seeker — Get hired in Germany faster</title>
  <meta
    name="description"
    content="AI-powered CV, cover letter, LinkedIn, and GitHub optimization built for the German job market. ATS-optimized, DIN 5008 compliant, delivered in minutes."
  />
</svelte:head>

<Hero />
<PainPoints />
<BeforeAfter />
<Pricing />
<HowItWorks />
<Faq />

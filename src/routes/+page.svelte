<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte'
  import PainPoints from '$lib/components/sections/PainPoints.svelte'
  import Pricing from '$lib/components/sections/Pricing.svelte'
  import HowItWorks from '$lib/components/sections/HowItWorks.svelte'
  import Faq from '$lib/components/sections/Faq.svelte'
</script>

<svelte:head>
  <title>ai-job-seeker — Get hired in Germany faster</title>
  <meta
    name="description"
    content="AI-powered CV and cover letter writing for the German job market. ATS-optimized, DIN 5008 compliant, built for IT professionals."
  />
</svelte:head>

<Hero />
<PainPoints />
<Pricing />
<HowItWorks />
<Faq />

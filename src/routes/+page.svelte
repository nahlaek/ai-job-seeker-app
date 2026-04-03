<script lang="ts">
  import { APP_NAME } from '$lib/constants'
</script>

<svelte:head>
  <title>{APP_NAME}</title>
</svelte:head>

<section class="container mx-auto px-4 py-16">
  <h1 class="text-4xl font-bold tracking-tight">{APP_NAME}</h1>
  <p class="mt-4 text-lg text-gray-600">Your project is ready.</p>
</section>

<script lang="ts">
  import { APP_NAME } from '$lib/constants'

  const year = new Date().getFullYear()
</script>

<footer class="bg-brand-hero border-t border-purple-900/30">
  <div class="container mx-auto px-4 py-8 text-center text-sm text-white/50">
    &copy; {year}
    {APP_NAME}
  </div>
</footer>

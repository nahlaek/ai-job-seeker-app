<script lang="ts">
  import { APP_NAME } from '$lib/constants'

  const year = new Date().getFullYear()
</script>

<footer class="border-t border-purple-800/20 bg-gradient-to-r from-[#1e0e3e] to-[#2b1555]">
  <div class="container mx-auto px-4 py-8 text-center text-sm text-white/50">
    <span class="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" aria-hidden="true"></span>
    &copy; {year}
    {APP_NAME}
  </div>
</footer>

<script lang="ts">
  import { APP_NAME } from '$lib/constants'

  const year = new Date().getFullYear()
</script>

<footer class="border-t border-gray-200 bg-white">
  <div class="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
    &copy; {year}
    {APP_NAME}
  </div>
</footer>

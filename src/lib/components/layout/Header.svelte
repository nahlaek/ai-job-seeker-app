<script lang="ts">
  import { APP_NAME } from '$lib/constants'
</script>

<header class="border-b border-gray-200 bg-white">
  <div class="container mx-auto flex h-16 items-center justify-between px-4">
    <a href="/" class="text-lg font-semibold">{APP_NAME}</a>
    <nav class="flex items-center gap-6">
      <a href="/" class="text-sm text-gray-600 hover:text-gray-900">Home</a>
    </nav>
  </div>
</header>

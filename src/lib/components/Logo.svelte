<script lang="ts">
  let { variant = 'light' }: { variant?: 'light' | 'dark' | 'purple' } = $props()
</script>

<a href="/" class="logo" aria-label="BewerbA home" data-variant={variant}>
  <div class="icon">
    <span class="letter">B</span>
    <span class="dot"></span>
  </div>
  <div class="text">
    <span class="wordmark">ewerb<span class="highlight">A</span></span>
    <span class="tagline">f&#xFC;r Deutschland</span>
  </div>
</a>

<style>
  .logo {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    user-select: none;
  }
  .icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: #5b21b6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
  }
  .letter {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 26px;
    font-weight: 700;
    color: white;
    line-height: 1;
    margin-top: 2px;
  }
  .dot {
    position: absolute;
    top: -3px;
    right: -3px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #1d9e75;
    border: 2px solid white;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .wordmark {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.5px;
    color: #26215c;
  }
  .highlight {
    color: #14b8a6;
  }
  .tagline {
    font-family: Arial, sans-serif;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #7f77dd;
    line-height: 1;
  }
</style>

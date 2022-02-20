<script lang="ts">
  import Header from '@/lib/header/Header.svelte';
  import '../app.css';
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <p>
    visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
  </p>
</footer>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    width: 100%;
    height: 90vh;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5vh;
  }

  footer a {
    font-weight: bold;
  }
</style>

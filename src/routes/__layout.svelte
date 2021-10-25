<script>
  import NavBar from "../components/shared/NavBar.svelte";
</script>

<NavBar />
<div class="__main-__layout-container">
  <slot></slot>
</div>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .__main-__layout-container{
        @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5;
    }
</style>
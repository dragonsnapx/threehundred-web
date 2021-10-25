<script>
  export let delta;
  export let symbol;

  import ArrowUp from 'svelte-material-icons/ArrowUp.svelte';
  import ArrowDown from 'svelte-material-icons/ArrowDown.svelte';
</script>

<div class="delta">
  {#if delta > 0}
    <ArrowUp />
  {:else if delta < 0}
    <ArrowDown />
  {:else if delta == 0}
    -
  {/if}
  {Math.abs(delta) + (symbol ?? "")}
</div>

<style>
    .delta{
        @apply text-sm flex flex-row items-center self-end mb-1 ml-1;
    }
</style>
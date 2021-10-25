<script>
  import Delta from "./Delta.svelte";

  export let ranking_num;
  export let ranking_src;
  export let ranking_delta;
</script>

<div class="container">
  <div class="inner">
    <div class="ranking">
      <span class="ranking-symbol"> # </span>
      {ranking_num}
    </div>
    <Delta delta={ranking_delta} />
  </div>
  <p class="caption"> {ranking_src} </p>
</div>

<style>

    .container{
        padding: .25em;
        @apply mr-3;
    }

    .inner{
        @apply flex flex-row;
    }

    .ranking{
        @apply text-4xl tracking-tight;
    }

    .ranking-symbol{
        @apply text-lg -mr-2;
    }

    .caption{
        @apply text-gray-600 text-sm -mt-1;
    }
</style>
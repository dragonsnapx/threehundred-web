<script>
  import Delta from "./Delta.svelte";

  export let percentage_num;
  export let percentage_src;
  export let percentage_delta;
</script>

<div class="container">
  <div class="inner">
    <div class="ranking">
      {percentage_num}
    </div>
    <span class="ranking-symbol"> % </span>
    <Delta delta={percentage_delta} symbol="%"/>
  </div>
  <p class="caption"> {percentage_src} </p>
</div>

<style>

    .container{
        padding: .25em;
        max-width: 8rem;
        @apply mr-3;
    }

    .inner{
        @apply flex flex-row;
    }

    .ranking{
        @apply text-4xl tracking-tight;
    }

    .ranking-symbol{
        @apply text-lg -mr-2 self-end ml-0.5 mr-0.5;
    }

    .caption{
        @apply text-gray-600 text-sm -mt-1;
    }
</style>
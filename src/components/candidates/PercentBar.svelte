<script>
  export let hasPercentage = true;
  export let percentage;
  export let caption = "";
</script>

<div class="container">
  <div class="percentage"> {percentage}
    {#if hasPercentage}
      <span class="percentage-symbol"> % </span>
    {/if}
  </div>

  <div class="bar-container">
    <div class="bar">
      <div style="width: {hasPercentage ? percentage : 0}%" class="bar-color" ></div>
    </div>
  </div>

  <p class="caption"> {caption} </p>
</div>

<style>

    .container{
        padding: .25em;
        @apply mr-3 w-36;
    }

    .bar-container{
        @apply relative pt-0.5 pb-1;
    }

    .bar{
        @apply overflow-hidden h-1.5 text-xs flex rounded bg-blue-200;
    }

    .bar-color{
        @apply shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500;
    }

    .percentage{
        @apply text-4xl tracking-tight;
    }

    .percentage-symbol{
        @apply text-lg -ml-2.5;
    }

    .caption{
        @apply text-gray-600 text-sm;
    }
</style>
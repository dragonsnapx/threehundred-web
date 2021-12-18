<script>
	import HelperText from "./HelperText.svelte";
  export let IconComponent;
  export let placeHolder;
  export let helperText;
  export let hasMarginBottom;
</script>

<div>
  {#if helperText}
    <HelperText helperText={helperText} />
  {/if}
  <div class="text-inner-container">
    {#if IconComponent}
      <div class="absolute p-2 text-xl text-gray-300 ">
        <svelte:component this={IconComponent} />
      </div>
    {/if}
    <input class="text-input  {IconComponent ? 'pl-8' : 'pl-3'}"
           type="text"
           placeholder={placeHolder}>
  </div>
</div>

<style lang="scss">

  .text-inner-container{
    @apply relative focus:outline-none;
    width: 32rem;
  }
  .text-input{
    @apply w-full border-2 border-gray-300 bg-white p-3 h-9 rounded-lg hover:border-gray-400 focus:outline-none focus:border-gray-400 focus:shadow-sm cursor-auto focus:ring-transparent;
  }

</style>

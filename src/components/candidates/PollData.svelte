<script>
	import Spacer from "../forms/Spacer.svelte";

  export let poll_data = {
    name: "서울시장 후보 적합도 - 국민의힘",
    provider: "PNR 여론조사"
  };
</script>

<div class="outer">
  <div class="container">
    <p class="name">{poll_data.name}</p>
    <p class="provider">{poll_data.provider}</p>
    <Spacer n="1" />
  </div>
</div>

<style>
  .container{
      @apply bg-gray-100 p-2 max-w-md rounded-md;
  }

  .outer{
      @apply p-1 max-w-md;
  }

  .name{
      @apply font-semibold text-lg;
  }

  .provider{
      @apply text-gray-600 text-xs;
  }
</style>

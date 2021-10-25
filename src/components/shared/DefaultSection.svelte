<script>
  export let title;
  export let flexRow = true;
</script>

<h2 class="section-title">
  {title}
</h2>
<div class="section-container" style="flex-direction: {flexRow ? 'row' : 'column' }">
  <slot></slot>
</div>

<style>
    .section-title{
        @apply text-2xl text-gray-600 font-semibold tracking-tight mb-2;
    }

    .section-container{
        @apply flex mb-8;
    }
</style>
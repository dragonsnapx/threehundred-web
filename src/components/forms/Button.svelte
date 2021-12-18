<script>
  export let label;
</script>

<button class="container">
  {label}
</button>

<style>
  .container{
      @apply text-blue-600 bg-transparent border border-solid text-sm border-blue-600
              hover:bg-blue-600 hover:text-white rounded-md text-sm font-medium
              justify-center py-2 px-4 duration-150 ease-linear transition-all
              outline-none mb-1 mr-1;
  }

  .icon{
    @apply h-5 w-5 text-sm;
  }
</style>

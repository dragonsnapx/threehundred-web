<script>
  export let title = "";
  export let subtitle = "";
</script>

<div class="container">
  <h1 class="title"> {title} </h1>
  <p class="subtitle"> {subtitle} </p>
</div>

<style>
    .title{
        @apply text-3xl font-semibold;
    }

    .container{
        @apply mb-4;
    }
</style>
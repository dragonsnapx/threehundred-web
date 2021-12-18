<script>
  import Routes from "../../constants/routes";
  import Magnify from 'svelte-material-icons/Magnify.svelte';
  import TextBox from "../forms/TextBox.svelte";
  import Bell from 'svelte-material-icons/Bell.svelte';
  import clickOutside from "../../utils/useClickOutside";
  let hidden;
  $: hidden = true;
</script>

<div>
  <nav class="outer-container">
    <div class="desktop-container">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 text-black text-lg mr-8">
            <div class="flex font-bold">Dest </div>
          </div>
          <div class="search-container space-x-4">
            <div class="hidden md:block">
              <TextBox IconComponent={Magnify} placeHolder="선거, 정치인 검색하기..." />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        {#each Routes as {name, route}, i}
          <a href={route} class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">{name}</a>
        {/each}
      </div>
    </div>
  </nav>
</div>

<style lang="scss">
  .outer-container{
    @apply bg-gray-50 border-b border-gray-300 sticky top-0;
  }

  .desktop-container{
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .profile-menu{
    @apply origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10;
  }

  .search-container{
    @apply flex items-baseline flex-col;
  }
</style>

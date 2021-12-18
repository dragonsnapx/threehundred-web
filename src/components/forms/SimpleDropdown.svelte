<script>
  import Transition from 'svelte-class-transition';
  import clickOutside from "../../utils/useClickOutside";

  let toggle = false;

  export let name;
</script>

<div class="relative inline-block text-left"
    use:clickOutside
    on:click_outside={() => toggle = false}
>
  <div on:click={() => toggle = !toggle}>
    <button type="button" class="btn-text" aria-expanded="true" aria-haspopup="true">
      {name}
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <Transition
    {toggle}
    inTransition="ease-out duration-100"
    inState="opacity-0 scale-95"
    onState="opacity-100 scale-100"
    outState="transform opacity-0 scale-95"
    outTransition="ease-in duration-75"
  >
    <div class="options-container" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1" role="none">
        <a class="option" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
        <a class="option" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
        <a class="option" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      </div>
    </div>
  </Transition>
</div>

<style>
  .btn-text{
      @apply inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm
      font-medium text-gray-700 hover:bg-gray-50 focus:outline-none
      focus:bg-gray-100;
  }

  .options-container{
      @apply origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none;
  }

  .option{
      @apply text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-sm cursor-pointer;
  }
</style>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  mobileMenuOpen: Boolean,
  toggleMobileMenu: Function,
})
</script>

<template>
  <!-- button menu mobile -->
  <div class="flex items-center lg:hidden py-3">
    <button
      @click="toggleMobileMenu"
      id="mobile-menu-btn"
      type="button"
      class="relative inline-flex items-center justify-center rounded-md p-2 text-[#00aa4f] hover:bg-slate-500 hover:text-[#f4ead9] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span class="sr-only">Toggle menu principal</span>
      <!-- Icon quand menu est fermé -->
      <svg
        id="open-mobile-menu-btn"
        class="h-6 w-6"
        :class="mobileMenuOpen ? 'hidden' : 'block'"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <!-- Icon quand menu est ouvert -->
      <svg
        id="close-mobile-menu-btn"
        class="h-6 w-6"
        :class="mobileMenuOpen ? 'block' : 'hidden'"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

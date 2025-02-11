<script setup>
const props = defineProps({
  mobileMenuOpen: Boolean,
  toggleMobileMenu: Function,
})
</script>

<template>
  <!-- button menu mobile -->
  <div class="btn-container flex items-center lg:hidden py-3">
    <button @click="toggleMobileMenu" type="button" class="btn-container--btn">
      <span class="sr-only">Toggle menu principal</span>
      <!-- Icon quand menu est fermé -->
      <svg
        class="btn-container__icon"
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
        class="btn-container__icon"
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

<style scoped>
.btn-container {
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
}

.btn-container--btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: var(--green);
  background-color: var(--sand);
  transition:
    background-color 0.3s,
    color 0.3s;
}

.btn-container--btn:hover {
  background-color: var(--green);
  color: var(--sand);
}

.btn-container__icon {
  height: 1.5rem;
  width: 1.5rem;
}

@media (min-width: 1024px) {
  .btn-container {
    display: none;
  }
}
</style>

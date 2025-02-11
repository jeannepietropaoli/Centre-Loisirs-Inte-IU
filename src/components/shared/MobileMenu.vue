<script setup>
const props = defineProps({
  mobileMenuOpen: Boolean,
  mainNavLinks: Array,
})
</script>

<template>
  <div class="menu" :class="mobileMenuOpen ? 'block' : 'hidden'">
    <ul class="menu__links">
      <li v-for="link in mainNavLinks" :key="link.name">
        <RouterLink :to="link.path" class="menu__link">{{ link.name }}</RouterLink>
      </li>
      <!-- liens ou section customs (profil, connexion...) -->
      <slot></slot>
    </ul>
  </div>
</template>

<style scoped>
.menu__links {
  margin: 0 2rem;
  padding-top: 0.5rem;
  border-top: 2px solid var(--green);
  color: var(--sand);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu__link {
  display: block;
  margin: 0.4rem 0;
  padding: 0.2rem;
  border-bottom: 3px solid transparent;
  color: var(--sand);
  text-align: center;
  transition: all 200ms ease-in-out;
  font-weight: 500;
}

.menu__link:hover {
  border-bottom-color: var(--green);
}

@media (min-width: 1024px) {
  .menu {
    display: none;
  }
}
</style>

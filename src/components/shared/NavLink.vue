<script setup>
const props = defineProps({
  link: Object,
})
</script>

<template>
  <div class="nav-link-container group">
    <img src="@/assets/arrow.png" class="nav-link__ornament" alt="ornement" />
    <RouterLink :to="link.path" class="nav-link__a">{{ link.name }}</RouterLink>
  </div>
</template>

<style scoped>
.nav-link-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-bottom: 4px solid transparent;
  transition: all 200ms ease-in-out;
}

.nav-link-container:hover {
  border-bottom-color: var(--green);
}

.nav-link__ornament {
  height: 2.5rem;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: -72%;
  opacity: 0;
  transition: all 200ms ease-in-out;
}

.nav-link-container:hover .nav-link__ornament {
  opacity: 1;
}

.nav-link__a {
  color: var(--sand);
  display: block;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
}
</style>

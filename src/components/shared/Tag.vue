<script setup>
const props = defineProps({
  text: String,
})
</script>

<template>
  <span class="tag xl:mx-0 mx-auto">{{ text }}</span>
</template>

<style scoped>
.tag {
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  background-color: var(--green);
  color: var(--sand);
  padding: 0.25rem 1.25rem;
  width: max-content;
  border-radius: 100px;
}
</style>

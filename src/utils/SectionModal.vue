<script setup>
import bgImgDefaut from '../assets/banner-v3.jpg'

const props = defineProps({
  bgImg: String,
})
</script>

<template>
  <section class="flex-grow h-full flex flex-col">
    <img class="bg-image" :src="bgImg ? bgImg : bgImgDefaut" alt="Photo de fond" />
    <div class="modal">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  flex-grow: 1;
  height: max-content;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 50px;
}

.bg-image {
  position: absolute;
  object-fit: cover;
  object-position: center;
  inset: 0;
  max-height: 100%;
  width: 100%;
  z-index: 0;
}

.modal {
  background-color: white;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: relative;
  max-width: 80%;
}

.modal::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #00aa4f;
  height: 8px;
  width: 0%;
  border-radius: 10px;
  transition: all 300ms ease-in-out;
}

.modal:hover::after {
  width: 100%;
}
</style>

<script setup>
import SectionModal from '@/utils/SectionModal.vue'
import bgImage from '../assets/banner-v3.jpg'
</script>

<template>
  <div class="flex-grow flex flex-col">
    <SectionModal :bgImg="bgImage">
      <!-- Contenu du modal -->
      <slot></slot>
    </SectionModal>
  </div>
</template>

<style scoped></style>

<script setup>
import SectionModal from '@/utils/SectionModal.vue'
import { ref } from 'vue'
import bgImage from '../assets/banner-v3.jpg'

const client = ref(true)
</script>

<template>
  <SectionModal :bgImg="bgImage">
    <p>Vous y etes presque...</p>
    <p>Etes-vous un client ou un admin?</p>
    <ul>
      <li><RouterLink to="client/accueil">Client</RouterLink></li>
      <li><RouterLink to="admin/connexion">Admin</RouterLink></li>
    </ul>
  </SectionModal>
</template>

<style scoped>
ul {
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

li:hover {
  color: #00aa4f;
}
</style>

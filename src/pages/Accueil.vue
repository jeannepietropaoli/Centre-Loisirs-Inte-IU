<script setup>
import SectionAvecModal from '@/components/shared/SectionAvecModal.vue'
import bgImage from '@/assets/img/banner-v3.jpg'
</script>

<template>
  <SectionAvecModal :bgImg="bgImage">
    <p>Vous y etes presque...</p>
    <p>Etes-vous un client ou un admin?</p>
    <ul>
      <li><RouterLink to="client/accueil">Client</RouterLink></li>
      <li><RouterLink to="admin/connexion">Admin</RouterLink></li>
    </ul>
  </SectionAvecModal>
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

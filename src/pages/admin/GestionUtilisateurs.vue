<script setup>
import { useUtilisateurStore } from '@/store/storeUtilisateur'
import { onMounted } from 'vue'
import TableauUtilisateursAdmin from '@/components/admin/TableauUtilisateursAdmin.vue'

const utilisateurStore = useUtilisateurStore()

onMounted(() => {
  utilisateurStore.getUtilisateursFromFirestore()
})
</script>

<template>
  <section>
    <div class="container section-container section-container--flex-col">
      <TableauUtilisateursAdmin></TableauUtilisateursAdmin>
    </div>
  </section>
</template>

<style scoped></style>

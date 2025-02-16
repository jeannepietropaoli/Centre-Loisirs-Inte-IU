<script setup>
import { useUtilisateurStore } from '@/store/storeUtilisateur'
import { onMounted } from 'vue'
import TableauUtilisateursAdmin from '@/components/admin/TableauUtilisateursAdmin.vue'
import { useAdminStore } from '@/store/storeAdmin'
import router from '@/router'

const utilisateurStore = useUtilisateurStore()
const adminStore = useAdminStore()

onMounted(() => {
  if (!adminStore.adminConnecte) {
    router.push({ name: 'connexion-admin' })
  } else {
    utilisateurStore.getUtilisateursFromFirestore()
  }
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

<script setup>
import { useUtilisateurStore } from '@/store/storeUtilisateur'
import { onMounted } from 'vue'
import TableauUtilisateurs from '../components/TableauUtilisateurs.vue'

const utilisateurStore = useUtilisateurStore()

onMounted(() => {
  utilisateurStore.getUtilisateursFromFirestore()
})
</script>

<template>
  <section>
    <div class="container mx-auto py-16 px-10 flex flex-col items-center">
      <TableauUtilisateurs></TableauUtilisateurs>
    </div>
  </section>
</template>

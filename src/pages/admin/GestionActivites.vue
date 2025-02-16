<script setup lang="ts">
import { useActivitesStore } from '@/store/storeActivites'
import TableauActivitesAdmin from '@/components/admin/TableauActivitesAdmin.vue'
import { onMounted, ref } from 'vue'
import ModalFullPage from '@/components/shared/ModalFullPage.vue'
import FormulaireActivite from '@/components/admin/FormulaireActivite.vue'
import { useAdminStore } from '@/store/storeAdmin'
import router from '@/router'

const activitesStore = useActivitesStore()
const adminStore = useAdminStore()

const modalAjoutVisible = ref(false)

const ouvrirModalAjout = () => {
  modalAjoutVisible.value = true
}

const fermerModalAjout = () => {
  modalAjoutVisible.value = false
}

const ajouterActivite = async (activite) => {
  await activitesStore.ajouterActivite(activite)
  fermerModalAjout()
  alert(activitesStore.message)
}

onMounted(() => {
  if (!adminStore.adminConnecte) {
    router.push({ name: 'connexion-admin' })
  }
})
</script>

<template>
  <section>
    <div class="container section-container section-container--flex-col">
      <h2 class="font-semibold text-xl">Gestion activites</h2>

      <button @click="ouvrirModalAjout" class="m-4">Ajouter une activite</button>

      <h2>Voici la liste de toutes les activites.</h2>
      <TableauActivitesAdmin></TableauActivitesAdmin>

      <ModalFullPage v-if="modalAjoutVisible">
        <button @click="fermerModalAjout">x</button>
        <FormulaireActivite
          titre="Ajouter une activite"
          :soumettreForm="ajouterActivite"
        ></FormulaireActivite>
      </ModalFullPage>
    </div>
  </section>
</template>

<style scoped></style>

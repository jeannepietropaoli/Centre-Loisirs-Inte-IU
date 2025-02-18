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

const modalVisible = ref(false)
const edition = ref(false)
const ajout = ref(false)
const activiteSelectionnee = ref(null)

const ouvrirModalEdition = (activite) => {
  activiteSelectionnee.value = activite
  modalVisible.value = true
  ajout.value = false
  edition.value = true
}

const ouvrirModalAjout = () => {
  activiteSelectionnee.value = null
  modalVisible.value = true
  edition.value = false
  ajout.value = true
}

const fermerModal = () => {
  modalVisible.value = false
}

const ajouterActivite = async (activite) => {
  await activitesStore.ajouterActivite(activite)
  fermerModal()
  alert(activitesStore.message)
}

const editerActivite = async (activite) => {
  await activitesStore.editerActivite(activite.id, activite)
  fermerModal()
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
      <h2 class="font-semibold text-xl">Gestion activités</h2>

      <button @click="ouvrirModalAjout" class="m-4">Ajouter une activité</button>

      <h2>Voici la liste de toutes les activites.</h2>
      <TableauActivitesAdmin :ouvrirModal="ouvrirModalEdition"></TableauActivitesAdmin>

      <ModalFullPage v-if="modalVisible">
        <button @click="fermerModal">x</button>
        <FormulaireActivite
          titre="Gerez l'activite"
          :soumettreForm="edition ? editerActivite : ajouterActivite"
          :nom="activiteSelectionnee?.nom"
          :imgUrl="activiteSelectionnee?.imgUrl"
          :description="activiteSelectionnee?.description"
          :date="activiteSelectionnee?.date"
          :heure="activiteSelectionnee?.heure"
          :prix="activiteSelectionnee?.prix"
          :type="activiteSelectionnee?.type"
          :activiteId="activiteSelectionnee?.id"
        ></FormulaireActivite>
      </ModalFullPage>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin: 15px 0;
}
</style>

<script setup lang="ts">
import { useActivitesStore } from '@/store/storeActivites'
import TableauActivites from '../components/TableauActivites.vue'
import { ref } from 'vue'
import ModalFlottant from '@/utils/ModalFlottant.vue'
import FormulaireActivite from '../components/FormulaireActivite.vue'

const activitesStore = useActivitesStore()

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
</script>

<template>
  <section>
    <div class="container mx-auto py-16 px-10 flex flex-col items-center">
      Gestion activites

      <button @click="ouvrirModalAjout" class="m-4">Ajouter une activite</button>

      <h2>Voici la liste de toutes les activites.</h2>
      <TableauActivites></TableauActivites>

      <ModalFlottant v-if="modalAjoutVisible">
        <button @click="fermerModalAjout">x</button>
        <FormulaireActivite
          titre="Ajouter une activite"
          :soumettreForm="ajouterActivite"
        ></FormulaireActivite>
      </ModalFlottant>
    </div>
  </section>
</template>

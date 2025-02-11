<script setup>
import { useActivitesStore } from '@/store/storeActivites'
import { onMounted, ref } from 'vue'
import Tag from '@/components/shared/Tag.vue'
import ActiviteCard from '@/components/shared/ActiviteCard.vue'
import ModalFullPage from '@/components/shared/ModalFullPage.vue'
import FormulaireActivite from '@/components/admin/FormulaireActivite.vue'

const activitesStore = useActivitesStore()

const modalEditionVisible = ref(false)
const activiteSelectionnee = ref(null)
const afficherEnTableau = ref(false)

onMounted(() => {
  activitesStore.getActivites()
})

const ouvrirModalEdition = (activite) => {
  console.log(activite)
  modalEditionVisible.value = true
  activiteSelectionnee.value = activite
}

const fermerModalEdition = () => {
  modalEditionVisible.value = false
}

const editerActivite = async (activite) => {
  await activitesStore.editerActivite(activiteSelectionnee.value.id, activite)
  fermerModalEdition()
  alert(activitesStore.message)
}

const supprimerActivite = async (activiteId) => {
  const confirmation = confirm('Voulez-vous vraiment supprimer cette activite ?')
  if (confirmation) {
    await activitesStore.supprimerActivite(activiteId)
    alert(activitesStore.message)
  }
}

const switchFormatAffichage = () => {
  afficherEnTableau.value = !afficherEnTableau.value
}
</script>

<template>
  <!-- Possibilite sur grands ecrans de switcher de l'affichage tableau a affichage en cards -->
  <button @click="switchFormatAffichage" class="self-end my-4 hidden xl:block">
    {{ afficherEnTableau ? 'Afficher en card' : 'Afficher en tableau' }}
  </button>

  <!-- Affichage en tableau (dispo sur grands ecrans) -->
  <table v-if="afficherEnTableau" class="hidden xl:block">
    <thead>
      <tr>
        <th>#id</th>
        <th>Nom</th>
        <th>Description</th>
        <th>Date</th>
        <th>Heure</th>
        <th>Prix</th>
        <th>Type</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="activite in activitesStore.activites" :key="activite.id">
        <td>{{ activite.id }}</td>
        <td>{{ activite.nom }}</td>
        <td>{{ activite.description }}</td>
        <td>{{ activite.date }}</td>
        <td>{{ activite.heure }}</td>
        <td>{{ activite.prix }}$</td>
        <td>
          <Tag :text="activite.type"></Tag>
        </td>
        <td class="w-[200px]">
          <img :src="activite.imgUrl" alt="Photo de l'activite" />
        </td>
        <td class="flex flex-col gap-2 min-h-full">
          <button @click="ouvrirModalEdition(activite)">Editer</button>
          <button @click="supprimerActivite(activite.id)">Supprimer</button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Affichage en cards -->
  <div class="block" :class="{ 'xl:hidden': afficherEnTableau }">
    <div v-for="(activite, index) in activitesStore.activites" :key="activite.id">
      <ActiviteCard
        :nom="activite.nom"
        :imgUrl="activite.imgUrl"
        :description="activite.description"
        :date="activite.date"
        :heure="activite.heure"
        :prix="activite.prix"
        :type="activite.type"
        :activiteId="activite.id"
        :darkTheme="index % 2 === 0"
        :inOrder="index % 2 === 0"
      >
        <button class="mx-auto xl:mx-0" @click="ouvrirModalEdition(activite)">Editer</button>
        <button class="mx-auto xl:mx-0" @click="supprimerActivite(activite.id)">Supprimer</button>
      </ActiviteCard>
    </div>
  </div>

  <!-- Modal d'edition d'une activite - triggered par le bouton 'editer' une activite -->
  <ModalFullPage v-if="modalEditionVisible">
    <button @click="fermerModalEdition">x</button>
    <FormulaireActivite
      :nom="activiteSelectionnee.nom"
      :imgUrl="activiteSelectionnee.imgUrl"
      :description="activiteSelectionnee.description"
      :date="activiteSelectionnee.date"
      :heure="activiteSelectionnee.heure"
      :prix="activiteSelectionnee.prix"
      :type="activiteSelectionnee.type"
      :activiteId="activiteSelectionnee.id"
      :soumettreForm="editerActivite"
    ></FormulaireActivite>
  </ModalFullPage>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid lightgray;
  padding: 12px;
}
</style>

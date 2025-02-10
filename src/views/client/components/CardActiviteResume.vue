<script setup>
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import { usePanierStore } from '@/store/storePanier'
import { computed } from 'vue'

const props = defineProps({
  nom: String,
  imgUrl: String,
  description: String,
  date: String,
  heure: String,
  prix: Number,
  type: String,
  activiteId: Number,
  index: Number,
})

const panierStore = usePanierStore()

const supprimerDuPanier = () => {
  panierStore.supprimerDuPanier(props.activiteId)
}
</script>

<template>
  <div
    class="bg-slate-50 p-6 flex flex-col sm:flex-row gap-2 justify-between items-center card hover:bg-slate-100 transition-all"
  >
    <img
      :src="imgUrl"
      alt="Photo de l'activite"
      class="w-24 md:w-40 aspect-square object-cover rounded-md"
    />
    <div class="space-y-2 text-center sm:text-left">
      <p>{{ nom }}</p>
      <p>{{ date }}</p>
      <p>{{ heure }}</p>
    </div>
    <p class="text-center sm:text-left">{{ prix }}$</p>
    <div class="h-fit">
      <button class="mx-auto sm:mx-0" @click="supprimerDuPanier">Supprimer</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}
</style>

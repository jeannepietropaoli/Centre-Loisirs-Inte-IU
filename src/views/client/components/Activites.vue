<script setup>
import { useActivitesStore } from '@/store/storeActivites'
import { computed, onMounted } from 'vue'
import CardActivite from '../../../utils/CardActivite.vue'
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import { usePanierStore } from '@/store/storePanier'

const activitesStore = useActivitesStore()
// Note importante: l'object destructuring const { activites } = useActivitesStore() fait perdre la reactive nature de la variable activites !! OK pour les fonctions. Pas OK pour les variables reactives.

// const activites = storeActivites.activites n'est plus reactif : it unwraps the ref and returns its value, breaking reactivity.
// il faut utiliser directement storeActivites.activites dans le template OU BIEN utiliser une valeur computed:

// const activites = computed(() => activitesStore.activites)

const authentificationStore = useAuthentificationStore()
const panierStore = usePanierStore()

const dejaDansLePanier = (produitId) => panierStore.dejaDansLePanier(produitId)

const ajouterActiviteAuPanier = (produit) => {
  panierStore.ajouterAuPanier({ ...produit })
}

const supprimerActiviteDuPanier = (produitId) => {
  panierStore.supprimerDuPanier(produitId)
}

onMounted(() => {
  activitesStore.getActivites()
})
</script>

<template>
  <div v-for="(activite, index) in activitesStore.activites" :key="activite.id">
    <CardActivite
      :nom="activite.nom"
      :imgUrl="activite.imgUrl"
      :description="activite.description"
      :date="activite.date"
      :heure="activite.heure"
      :prix="activite.prix"
      :type="activite.type"
      :activiteId="activite.id"
      :index="index"
    >
      <RouterLink to="connexion" class="button" v-if="!authentificationStore.connecte"
        >Connectez-vous pour reserver</RouterLink
      >
      <button
        v-if="authentificationStore.connecte && !dejaDansLePanier(activite.id)"
        @click="ajouterActiviteAuPanier(activite)"
      >
        Reserver
      </button>
      <button
        v-if="authentificationStore.connecte && dejaDansLePanier(activite.id)"
        @click="supprimerActiviteDuPanier(activite.id)"
      >
        Annuler la reservation
      </button>
    </CardActivite>
  </div>
</template>

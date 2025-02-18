<script setup>
import ActiviteCard from '@/components/shared/ActiviteCard.vue'
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
  darkTheme: Boolean,
  inOrder: Boolean,
})

const activite = computed(() => ({
  id: props.activiteId,
  nom: props.nom,
  imgUrl: props.imgUrl,
  description: props.description,
  date: props.date,
  heure: props.heure,
  prix: props.prix,
  type: props.type,
}))

const authentificationStore = useAuthentificationStore()
const panierStore = usePanierStore()

const dejaDansLePanier = (produitId) => panierStore.dejaDansLePanier(produitId)

const ajouterActiviteAuPanier = (produit) => {
  panierStore.ajouterAuPanier({ ...produit })
}

const supprimerActiviteDuPanier = (produitId) => {
  panierStore.supprimerDuPanier(produitId)
}
</script>

<template>
  <ActiviteCard
    :nom="nom"
    :imgUrl="imgUrl"
    :description="description"
    :date="date"
    :heure="heure"
    :prix="prix"
    :type="type"
    :activiteId="activiteId"
    :darkTheme="darkTheme"
    :inOrder="inOrder"
    ><div>
      <RouterLink
        to="connexion"
        class="button mx-auto xl:mx-0"
        v-if="!authentificationStore.connecte"
        >Connectez-vous pour réserver</RouterLink
      >
      <button
        class="mx-auto xl:mx-0"
        v-if="authentificationStore.connecte && !dejaDansLePanier(activite.id)"
        @click="ajouterActiviteAuPanier(activite)"
      >
        Reserver
      </button>
      <button
        class="mx-auto xl:mx-0"
        v-if="authentificationStore.connecte && dejaDansLePanier(activite.id)"
        @click="supprimerActiviteDuPanier(activite.id)"
      >
        Annuler la réservation
      </button>
    </div>
  </ActiviteCard>
</template>

<script setup>
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import { usePanierStore } from '@/store/storePanier'
import { computed, ref } from 'vue'
import CardActiviteResume from '../components/CardActiviteResume.vue'
import TotalPanier from '../components/TotalPanier.vue'

const panierStore = usePanierStore()

const authentificationStore = useAuthentificationStore()

const panierVide = computed(() => panierStore.panier.length === 0)

const commandeConfirmee = ref(false)

const confirmerCommande = () => {
  console.log('en cours')
  panierStore.resetPanier()
  commandeConfirmee.value = true
}
</script>

<template>
  <section>
    <div class="container mx-auto py-16 px-10 flex flex-col items-center">
      <div v-if="panierVide" class="flex flex-col items-center gap-4">
        <h2 v-if="commandeConfirmee">Votre commande est confirmee, merci pour votre achat !</h2>
        <h3>Votre panier est vide.</h3>
        <RouterLink v-if="authentificationStore.connecte" to="accueil" class="button">
          Faire le plein d'activites
        </RouterLink>
        <RouterLink v-else to="connexion" class="button"> Se connecter pour reserver </RouterLink>
      </div>
      <div v-else class="w-full">
        <ul class="flex flex-col gap-6">
          <li v-for="activite in panierStore.panier" :key="activite.id">
            <CardActiviteResume
              :nom="activite.nom"
              :imgUrl="activite.imgUrl"
              :description="activite.description"
              :date="activite.date"
              :heure="activite.heure"
              :prix="activite.prix"
              :type="activite.type"
              :activiteId="activite.id"
            ></CardActiviteResume>
          </li>
        </ul>
        <TotalPanier :confirmerCommande="confirmerCommande"></TotalPanier>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

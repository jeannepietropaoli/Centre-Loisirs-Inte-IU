<script setup>
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import { usePanierStore } from '@/store/storePanier'
import { computed, ref } from 'vue'
import ActivitePanierCard from '@/components/client/ActivitePanierCard.vue'
import TotalPanier from '@/components/client/TotalPanier.vue'

const panierStore = usePanierStore()

const authentificationStore = useAuthentificationStore()

const panierVide = computed(() => panierStore.panier.length === 0)

const commandeConfirmee = ref(false)

const confirmerCommande = () => {
  panierStore.resetPanier()
  commandeConfirmee.value = true
}
</script>

<template>
  <section>
    <div class="container section-container section-container--flex-col panier">
      <div v-if="panierVide" class="panier__message">
        <h2 v-if="commandeConfirmee">Votre commande est confirmee, merci pour votre achat !</h2>
        <h3>Votre panier est vide.</h3>
        <RouterLink v-if="authentificationStore.connecte" to="accueil" class="button">
          Faire le plein d'activites
        </RouterLink>
        <RouterLink v-else to="connexion" class="button"> Se connecter pour reserver </RouterLink>
      </div>
      <div v-else class="panier__contenu">
        <ul class="panier__items-list">
          <li v-for="activite in panierStore.panier" :key="activite.id">
            <ActivitePanierCard
              :nom="activite.nom"
              :imgUrl="activite.imgUrl"
              :description="activite.description"
              :date="activite.date"
              :heure="activite.heure"
              :prix="activite.prix"
              :type="activite.type"
              :activiteId="activite.id"
            ></ActivitePanierCard>
          </li>
        </ul>
        <TotalPanier :confirmerCommande="confirmerCommande"></TotalPanier>
      </div>
    </div>
  </section>
</template>

<style scoped>
.panier__message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.panier__contenu {
  width: 100%;
}

.panier__items-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>

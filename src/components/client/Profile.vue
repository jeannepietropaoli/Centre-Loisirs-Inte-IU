<script setup>
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import { usePanierStore } from '@/store/storePanier'
import { useUtilisateurStore } from '@/store/storeUtilisateur'

const authentificationStore = useAuthentificationStore()
const utilisateurStore = useUtilisateurStore()
const panierStore = usePanierStore()

const gererDeconnexion = () => {
  authentificationStore.seDeconnecter()
  panierStore.resetPanier()
}
</script>

<template>
  <div class="profile">
    <p class="profile__txt">Bienvenue, {{ utilisateurStore.utilisateur.displayName }} !</p>
    <button v-on:click="gererDeconnexion">Se déconnecter</button>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 4px solid transparent;
  padding: 0 1.25rem;
}

.profile__txt {
  color: var(--sand);
  font-weight: 600;
}
</style>

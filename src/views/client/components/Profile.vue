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
  <div class="flex items-center px-5 gap-2 border-b-4 border-transparent">
    <p class="font-semibold">Bienvenue, {{ utilisateurStore.utilisateur.displayName }} !</p>
    <button v-on:click="gererDeconnexion">Se deconnecter</button>
  </div>
</template>

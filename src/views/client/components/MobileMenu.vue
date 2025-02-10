<script setup>
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import Profile from './Profile.vue'

const authentificationStore = useAuthentificationStore()

const props = defineProps({
  mobileMenuOpen: Boolean,
})
</script>

<template>
  <!-- Menu mobile- ouvre le menu au clic de open-mobile-menu-btn / ferme le menu au clic de close-mobile-menu-btn -->
  <div class="lg:hidden" id="mobile-menu" :class="mobileMenuOpen ? 'block' : 'hidden'">
    <div class="mx-8 pt-2 border-t-2 border-[#00aa4f]">
      <RouterLink
        to="accueil"
        class="block border-b-4 border-transparent px-3 py-2 text-md font-medium hover:border-[#00aa4f] transition-all"
        >Accueil</RouterLink
      >
      <RouterLink
        to=""
        class="block border-b-4 border-transparent px-3 py-2 text-md font-medium hover:border-[#00aa4f] transition-all"
        >A propos</RouterLink
      >
      <RouterLink
        to="panier"
        class="block border-b-4 border-transparent px-3 py-2 text-md font-medium hover:border-[#00aa4f] transition-all"
        >Panier</RouterLink
      >
      <div v-if="authentificationStore.connecte"><Profile /></div>
      <div
        v-else
        class="block border-b-4 border-transparent px-3 py-2 hover:border-[#00aa4f] transition-all"
      >
        <RouterLink to="connexion" class="text-md font-medium">Connexion</RouterLink>
        |
        <RouterLink to="inscription" class="text-md font-medium">Inscription</RouterLink>
      </div>
    </div>
  </div>
</template>

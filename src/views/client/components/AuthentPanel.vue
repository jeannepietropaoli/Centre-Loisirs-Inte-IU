<script setup>
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import NavLink from './NavLink.vue'

const authentificationStore = useAuthentificationStore()

const connexionLink = { name: 'Connexion', path: 'connexion' }
const inscriptionLink = { name: 'Inscription', path: 'inscription' }
</script>

<template>
  <div class="px-2 mx-2">
    <div class="border-b-4 border-transparent" v-if="authentificationStore.connecte">
      <Profile></Profile>
    </div>
    <div v-else class="flex items-center">
      <NavLink :link="connexionLink"></NavLink>
      |
      <NavLink :link="inscriptionLink"></NavLink>
    </div>
  </div>
</template>

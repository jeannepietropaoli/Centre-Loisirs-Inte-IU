<script setup>
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import { RouterView } from 'vue-router'
import Header from '../../utils/Header.vue'
import Footer from '../../utils/Footer.vue'
import Profile from './components/Profile.vue'
import AuthentPanel from './components/AuthentPanel.vue'

const authentificationStore = useAuthentificationStore()

const mainNavLinks = [
  { name: 'Accueil', path: 'accueil' },
  { name: 'Panier', path: 'panier' },
]
</script>

<template>
  <Header :mainNavLinks="mainNavLinks">
    <div class="border-l-2 border-white">
      <Profile v-if="authentificationStore.connecte"></Profile>
      <AuthentPanel v-else></AuthentPanel>
    </div>
  </Header>

  <div class="mt-[100px] flex-grow flex flex-col">
    <RouterView />
  </div>

  <Footer></Footer>
</template>

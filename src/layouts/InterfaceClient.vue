<script setup>
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import { RouterView } from 'vue-router'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import Profile from '@/components/client/Profile.vue'
import AuthentPanelClient from '@/components/client/AuthentPanelClient.vue'

const authentificationStore = useAuthentificationStore()

const mainNavLinks = [
  { name: 'Accueil', path: 'accueil' },
  { name: 'Panier', path: 'panier' },
]
</script>

<template>
  <Header :mainNavLinks="mainNavLinks">
    <span v-if="$slots" class="separation"></span>
    <div>
      <Profile v-if="authentificationStore.connecte"></Profile>
      <AuthentPanelClient v-else></AuthentPanelClient>
    </div>
  </Header>

  <div class="main">
    <RouterView />
  </div>

  <Footer></Footer>
</template>

<style scoped>
.separation {
  color: var(--green);
  height: 33px;
  border-left: 2px solid white;
}

@media (max-width: 1024px) {
  .separation {
    display: none;
  }
}
</style>

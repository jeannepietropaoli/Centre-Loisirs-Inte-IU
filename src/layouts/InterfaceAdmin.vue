<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import { useAdminStore } from '@/store/storeAdmin'
import router from '@/router'

const adminStore = useAdminStore()

const gererDeconnexion = () => {
  adminStore.deconnecterAdmin()
  router.push({ name: 'connexion-admin' })
}

const mainNavLinks = [
  { name: 'Utilisateurs', path: 'gestion-utilisateurs' },
  { name: 'Activites', path: 'gestion-activites' },
]
</script>

<template>
  <Header :mainNavLinks="adminStore.adminConnecte ? mainNavLinks : []">
    <button v-if="adminStore.adminConnecte" @click="gererDeconnexion">Se deconnecter</button>
  </Header>

  <div class="main">
    <RouterView />
  </div>

  <Footer></Footer>
</template>

<style scoped></style>

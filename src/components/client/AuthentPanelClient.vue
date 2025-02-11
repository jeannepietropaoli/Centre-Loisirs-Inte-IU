<script setup>
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import NavLink from '@/components/shared/NavLink.vue'

const authentificationStore = useAuthentificationStore()

const connexionLink = { name: 'Connexion', path: 'connexion' }
const inscriptionLink = { name: 'Inscription', path: 'inscription' }
</script>

<template>
  <div class="authent-panel">
    <div class="authent-panel__profile" v-if="authentificationStore.connecte">
      <Profile></Profile>
    </div>
    <div v-else class="authent-panel__connexion">
      <NavLink :link="connexionLink"></NavLink>
      |
      <NavLink :link="inscriptionLink"></NavLink>
    </div>
  </div>
</template>

<style scoped>
.authent-panel {
  padding: 0 0.5rem;
}

.authent-panel__profile {
  border-bottom: 4px solid transparent;
}

.authent-panel__connexion {
  display: flex;
  align-items: center;
}
</style>

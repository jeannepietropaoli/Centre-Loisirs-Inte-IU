<script setup>
import { ref } from 'vue'
import router from '@/router'
import { useAdminStore } from '@/store/storeAdmin'

const adminStore = useAdminStore()

const usernameInput = ref('')
const mdpInput = ref('')
const authErreur = ref('')

const adminUserName = 'admin'
const adminMdp = 'adminmdp'

const validerConnexion = () => {
  if (usernameInput.value === adminUserName && mdpInput.value === adminMdp) {
    adminStore.connecterAdmin()
    router.push({ name: 'gestion-activites' })
  } else {
    authErreur.value = "Nom d'utilisateur ou mot de passe incorrect"
  }
}
</script>

<template>
  <h2 class="form-section__title">Connexion Admin</h2>

  <form class="form" action="" v-on:submit.prevent="validerConnexion">
    <div class="form__input-group">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        v-model="usernameInput"
        required
        placeholder="nom_utilisateur"
        class="form__input"
      />
    </div>

    <div class="form__input-group">
      <label for="mdp">Mot de passe</label>
      <input
        class="form__input"
        type="password"
        id="mdp"
        v-model="mdpInput"
        required
        placeholder="Mot de passe..."
      />
    </div>
    <div class="form__error-message" v-if="authErreur">
      {{ authErreur }}
    </div>
    <input class="button button--centered" type="submit" value="Se connecter" />
  </form>
</template>

<style></style>

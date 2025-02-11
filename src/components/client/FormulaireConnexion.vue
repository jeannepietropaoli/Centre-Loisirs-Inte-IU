<script setup>
import { ref } from 'vue'
import router from '@/router'
import { useAuthentificationStore } from '@/store/storeAuthentfication'

const emailInput = ref('')
const mdpInput = ref('')

const authentificationStore = useAuthentificationStore()

const seConnecterParEmail = async () => {
  await authentificationStore.seConnecter(emailInput.value, mdpInput.value)
  validerConnexion()
}

const seConnecterAvecGoogle = async () => {
  await authentificationStore.seConnecterAvecGoogle()
  validerConnexion()
}

const validerConnexion = () => {
  if (authentificationStore.connecte) {
    // si connexion reussie
    router.push({ name: 'accueil-client' })
  }
}
</script>

<template>
  <h2 class="form-section__title">Connexion a votre compte PISTE VERTE</h2>

  <form class="form" action="" v-on:submit.prevent="seConnecterParEmail">
    <div class="form__input-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="emailInput"
        required
        placeholder="utilisateur@mail.com"
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
    <div class="form__error-message" v-if="authentificationStore.erreurAuth">
      {{ authentificationStore.erreurAuth }}
    </div>
    <input class="button button--centered" type="submit" value="Se connecter" />
  </form>

  <button v-on:click="seConnecterAvecGoogle">Se connecter avec Google</button>

  <p>
    Vous n'avez pas encore de compte ? Inscrivez-vous
    <RouterLink to="inscription" class="text-link">ici</RouterLink>.
  </p>
</template>

<style></style>

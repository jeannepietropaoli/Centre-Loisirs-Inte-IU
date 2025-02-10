<script setup>
import { computed, reactive, ref } from 'vue'
import router from '@/router'
import { useAuthentificationStore } from '@/store/storeAuthentfication'

const emailInput = ref('')
const mdpInput = ref('')
const nomInput = ref('')
const profileImgInput = ref(null)
const form = ref(null)

const formulaireErreurs = reactive({
  email: '',
  mdp: '',
  nom: '',
  auth: '',
})

const authentificationStore = useAuthentificationStore()

authentificationStore.resetErreurAuth()

const sInscrireParEmail = async () => {
  if (formulaireValide()) {
    await authentificationStore.sInscrire(
      emailInput.value,
      mdpInput.value,
      nomInput.value,
      profileImgInput.value,
    )
    validerConnexion()
  }
}

const seConnecterAvecGoogle = async () => {
  if (formulaireValide()) {
    await authentificationStore.seConnecterAvecGoogle()
    validerConnexion()
  }
}

const validerConnexion = () => {
  if (authentificationStore.connecte) {
    // si connexion reussie
    router.push({ name: 'accueil-client' })
  }
}

const estVide = (val) => {
  return val.trim() === ''
}

const emailInputValide = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (estVide(emailInput.value)) {
    formulaireErreurs.email = "L'adresse mail est requise."
    return false
  } else if (!emailPattern.test(emailInput.value)) {
    formulaireErreurs.email =
      "L'adresse mail doit comporter un @ et un . et doit etre une adresse valide."
    return false
  } else {
    formulaireErreurs.email = ''
    return true
  }
}

const mdpValide = () => {
  if (mdpInput.value.length < 6) {
    formulaireErreurs.mdp = 'Le mot de passe doit comporter au moins 6 caracteres.'
    return false
  } else {
    formulaireErreurs.mdp = ''
    return true
  }
}

const nomValide = () => {
  if (estVide(nomInput.value)) {
    formulaireErreurs.nom = 'Le nom est requis.'
    return false
  } else if (nomInput.value.length < 4) {
    formulaireErreurs.nom = 'Le nom doit comporter au moins 4 caracteres.'
    return false
  } else {
    formulaireErreurs.nom = ''
    return true
  }
}

const formulaireValide = () => {
  let valide = true
  if (!nomValide()) {
    valide = false
  }
  if (!emailInputValide()) {
    valide = false
  }
  if (!mdpValide()) {
    valide = false
  }
  return valide
}
</script>

<template>
  <h2 class="form-section__title">- Creez votre compte PISTE VERTE -</h2>

  <form class="form" action="" ref="form" v-on:submit.prevent="sInscrireParEmail">
    <div class="form__input-group">
      <label for="nom">Nom</label>
      <input class="form__input" type="text" id="nom" v-model="nomInput" />
      <div class="form__error-message" v-if="formulaireErreurs.nom">
        {{ formulaireErreurs.nom }}
      </div>
    </div>
    <div class="form__input-group">
      <label for="profileImg">Photo de profil</label>
      <input class="form__input" type="text" id="profileImg" v-model="profileImgInput" />
    </div>
    <div class="form__input-group">
      <label for="email">Email</label>
      <input class="form__input" type="email" id="email" v-model="emailInput" />
      <div class="form__error-message" v-if="formulaireErreurs.email">
        {{ formulaireErreurs.email }}
      </div>
    </div>
    <div class="form__input-group">
      <label for="mdp">Mot de passe</label>
      <input class="form__input" type="password" id="mdp" v-model="mdpInput" />
      <div class="form__error-message" v-if="formulaireErreurs.mdp">
        {{ formulaireErreurs.mdp }}
      </div>
    </div>
    <div class="form__error-message" v-if="authentificationStore.erreurAuth">
      {{ authentificationStore.erreurAuth }}
    </div>
    <input class="button button--centered" type="submit" value="Creer un compte" />
  </form>

  <button v-on:click="seConnecterAvecGoogle">Se connecter avec Google</button>

  <p>Vous avez deja un compte ? Connectez-vous <RouterLink to="connexion">ici</RouterLink>.</p>
</template>

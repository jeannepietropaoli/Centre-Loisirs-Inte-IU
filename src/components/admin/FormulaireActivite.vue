<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  nom: String,
  description: String,
  date: String,
  heure: String,
  prix: String,
  imgUrl: String,
  activiteId: Number,
  type: Number,
  editerActivite: Function,
  titre: String,
  soumettreForm: Function,
})

//seraient idealement a recuperer de la base de donnees (avec l'API)
const types = [
  { id: 1, nom: 'randonnee' },
  { id: 2, nom: 'kayak' },
  { id: 3, nom: 'fitness' },
  { id: 4, nom: 'danse' },
  { id: 5, nom: 'raquette' },
]

const getTypeId = (type) => {
  return types.find((t) => t.nom === type).id
}

const nomInput = ref(props.nom ? props.nom : '')
const descriptionInput = ref(props.description ? props.description : '')
const dateInput = ref(props.date ? props.date : '')
const heureInput = ref(props.heure ? props.heure : '')
const prixInput = ref(props.prix ? props.prix : '')
const imgUrlInput = ref(props.imgUrl ? props.imgUrl : '')
const typeInput = ref(props.type ? getTypeId(props.type) : 1)

const erreurs = ref({
  nom: '',
  description: '',
  date: '',
  heure: '',
  prix: '',
  imgUrl: '',
})

const activite = computed(() => {
  return {
    nom: nomInput.value,
    description: descriptionInput.value,
    date: dateInput.value,
    heure: heureInput.value,
    prix: prixInput.value,
    imgUrl: imgUrlInput.value,
    type: typeInput.value,
  }
})

const validerNom = () => {
  if (nomInput.value.trim().length === 0) {
    erreurs.value.nom = 'Le nom est requis'
    return false
  } else if (nomInput.value.length < 2) {
    erreurs.value.nom = 'Le nom doit contenir au moins 3 caractères'
    return false
  } else {
    erreurs.value.nom = ''
    return true
  }
}

const validerDescription = () => {
  if (descriptionInput.value.trim().length === 0) {
    erreurs.value.description = 'La description est requise'
    return false
  } else if (descriptionInput.value.length < 10) {
    erreurs.value.description = 'La description doit contenir au moins 10 caractères'
    return false
  } else {
    erreurs.value.description = ''
    return true
  }
}

const validerDate = () => {
  if (dateInput.value.trim().length === 0 || dateInput.value === null) {
    erreurs.value.date = 'La date est requise'
    return false
  } else {
    erreurs.value.date = ''
    return true
  }
}

const validerHeure = () => {
  if (heureInput.value.trim().length === 0 || heureInput.value === null) {
    erreurs.value.heure = "L'heure est requise"
    return false
  } else {
    erreurs.value.heure = ''
    return true
  }
}

const validerPrix = () => {
  if (prixInput.value < 0) {
    erreurs.value.prix = 'Le prix doit être positif'
    return false
  } else {
    erreurs.value.prix = ''
    return true
  }
}

const validerImgUrl = () => {
  if (imgUrlInput.value.trim().length === 0) {
    erreurs.value.imgUrl = "L'url de l'image est requise"
    return false
  } else {
    erreurs.value.imgUrl = ''
    return true
  }
}

const validerType = () => {
  if (typeInput.value === null) {
    erreurs.value.type = 'Le type est requis'
    return false
  } else {
    erreurs.value.type = ''
    return true
  }
}

const validerForm = () => {
  let valide = true

  validerNom()
  validerDescription()
  validerDate()
  validerHeure()
  validerPrix()
  validerImgUrl()
  validerType()

  if (
    erreurs.value.nom ||
    erreurs.value.description ||
    erreurs.value.date ||
    erreurs.value.heure ||
    erreurs.value.prix ||
    erreurs.value.imgUrl ||
    erreurs.value.type
  ) {
    valide = false
  }

  if (valide) {
    props.soumettreForm(activite.value)
  }
}
</script>

<template>
  <h2 class="form__titre">{{ titre }}</h2>
  <form class="form" action="" v-on:submit.prevent="validerForm">
    <div class="form__input-group">
      <label for="nom">Nom</label>
      <input
        type="text"
        id="username"
        v-model="nomInput"
        placeholder="nom de l'activite..."
        class="form__input"
      />
      <div class="form__error-message">{{ erreurs.nom }}</div>
    </div>

    <div class="form__input-group">
      <label for="type">Type</label>
      <select v-model="typeInput" id="type" class="form__input">
        <option value="1">Randonnée</option>
        <option value="2">Kayak</option>
        <option value="3">Fitness</option>
        <option value="4">Danse</option>
        <option value="5">Raquette</option>
      </select>
      <div class="form__error-message">{{ erreurs.type }}</div>
    </div>

    <div class="form__input-group">
      <label for="nom">Description</label>
      <textarea
        id="description"
        v-model="descriptionInput"
        placeholder="description..."
        class="form__input"
        cols="40"
        rows="12"
      ></textarea>
      <div class="form__error-message">{{ erreurs.description }}</div>
    </div>

    <div class="form__input-group">
      <label for="nom">Date</label>
      <input type="date" id="date" v-model="dateInput" class="form__input" />
      <div class="form__error-message">{{ erreurs.date }}</div>
    </div>

    <div class="form__input-group">
      <label for="nom">Heure</label>
      <input type="time" id="heure" v-model="heureInput" class="form__input" />
      <div class="form__error-message">{{ erreurs.heure }}</div>
    </div>

    <div class="form__input-group">
      <label for="nom">Prix</label>
      <input type="number" id="prix" v-model="prixInput" class="form__input" />
      <div class="form__error-message">{{ erreurs.prix }}</div>
    </div>

    <div class="form__input-group">
      <label for="nom">Image url</label>
      <input
        type="text"
        id="imgUrl"
        v-model="imgUrlInput"
        placeholder="url de l'image..."
        class="form__input"
      />
      <div class="form__error-message">{{ erreurs.imgUrl }}</div>
    </div>

    <input class="button button--centered" type="submit" value="Valider" />
  </form>
</template>

<style scoped></style>

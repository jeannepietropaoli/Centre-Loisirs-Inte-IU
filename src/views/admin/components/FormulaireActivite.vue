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
</script>

<template>
  <h2 class="text-center text-2xl font-bold mb-8">{{ titre }}</h2>
  <form class="form" action="" v-on:submit.prevent="soumettreForm(activite)">
    <div class="form__input-group">
      <label for="nom">Nom</label>
      <input
        type="text"
        id="username"
        v-model="nomInput"
        required
        placeholder="nom de l'activite..."
        class="form__input"
      />
      <div>{{ erreurs.nom }}</div>
    </div>

    <div class="form__input-group">
      <label for="type">Type</label>
      <select v-model="typeInput" id="type" required class="form__input">
        <option value="1">Randonnée</option>
        <option value="2">Kayak</option>
        <option value="3">Fitness</option>
        <option value="4">Danse</option>
        <option value="5">Raquette</option>
      </select>
    </div>

    <div class="form__input-group">
      <label for="nom">Description</label>
      <textarea
        id="description"
        v-model="descriptionInput"
        required
        placeholder="description..."
        class="form__input"
        cols="40"
        rows="12"
      ></textarea>
      <div>{{ erreurs.description }}</div>
    </div>

    <div class="form__input-group">
      <label for="nom">Date</label>
      <input type="date" id="date" v-model="dateInput" required class="form__input" />
      <div>{{ erreurs.date }}</div>
    </div>

    <div class="form__input-group">
      <label for="nom">Heure</label>
      <input type="time" id="heure" v-model="heureInput" required class="form__input" />
      <div>{{ erreurs.heure }}</div>
    </div>

    <div class="form__input-group">
      <label for="nom">Prix</label>
      <input type="number" id="prix" v-model="prixInput" required class="form__input" />
      <div>{{ erreurs.prix }}</div>
    </div>

    <div class="form__input-group">
      <label for="nom">Image url</label>
      <input
        type="text"
        id="imgUrl"
        v-model="imgUrlInput"
        required
        placeholder="url de l'image..."
        class="form__input"
      />
      <div>{{ erreurs.imgUrl }}</div>
    </div>

    <input class="button button--centered" type="submit" value="Valider" />
  </form>
</template>

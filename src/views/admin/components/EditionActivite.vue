<script setup>
import { computed, ref } from 'vue'
import FormulaireActivite from './FormulaireActivite.vue'

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
  <FormulaireActivite titre="Modifier l'activite" :soumettreForm="eidterActivite" />
</template>

<script setup>
import { computed } from 'vue'
import Tag from '@/components/shared/Tag.vue'
import SectionTxtEtImg from './SectionTxtEtImg.vue'

const props = defineProps({
  nom: String,
  imgUrl: String,
  description: String,
  date: String,
  heure: String,
  prix: Number,
  type: String,
  activiteId: Number,
  darkTheme: Boolean,
  inOrder: Boolean,
})
</script>

<template>
  <SectionTxtEtImg
    :title="nom"
    :imgUrl="imgUrl"
    imgAlt="Photo de l'activite"
    :darkTheme="darkTheme"
    :inOrder="inOrder"
  >
    <Tag :text="type"></Tag>
    <p>{{ description }}</p>
    <div class="flex flex-col gap-2">
      <p v-if="date">Date: {{ date }}</p>
      <p v-if="heure">Heure: {{ heure }}</p>
      <p v-if="heure">Prix: {{ prix }}$</p>
    </div>
    <!-- boutons d'actions -->
    <slot></slot>
  </SectionTxtEtImg>
</template>

<style scoped>
img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>

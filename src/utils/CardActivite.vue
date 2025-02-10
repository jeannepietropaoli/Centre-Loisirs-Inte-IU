<script setup>
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import { usePanierStore } from '@/store/storePanier'
import { computed } from 'vue'
import Tag from './Tag.vue'

const props = defineProps({
  nom: String,
  imgUrl: String,
  description: String,
  date: String,
  heure: String,
  prix: Number,
  type: String,
  activiteId: Number,
  index: Number,
})

const cardClasses = computed(() =>
  props.index % 2 === 0 ? 'bg-[#1c454b] text-white' : 'bg-[#f4ead9] text-black',
)

const cardContainerClasses = computed(() => (props.index % 2 === 0 ? 'order-0' : 'order-1'))
</script>

<template>
  <section class="group" :class="cardClasses">
    <div class="container grid grid-cols-12 mx-auto py-16 px-10 border-b-4 border-[#00aa4f]">
      <img
        :src="imgUrl"
        alt="Photo de l'activite"
        class="col-span-6 px-10 group-hover:scale-105 transition-all duration-500"
        :class="cardContainerClasses"
      />
      <div class="col-span-6 px-10 flex flex-col gap-8 justify-center">
        <Tag :text="type"></Tag>
        <h3 class="uppercase text-3xl font-bold">{{ nom }}</h3>
        <p>{{ description }}</p>
        <div class="flex flex-col gap-2">
          <p v-if="date">Date: {{ date }}</p>
          <p v-if="heure">Heure: {{ heure }}</p>
          <p v-if="heure">Prix: {{ prix }}</p>
        </div>

        <div class="buttons flex flex-col md:flex-row gap-2">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>

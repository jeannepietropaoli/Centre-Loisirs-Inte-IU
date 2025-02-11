<script setup>
import { usePanierStore } from '@/store/storePanier'

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

const panierStore = usePanierStore()

const supprimerDuPanier = () => {
  panierStore.supprimerDuPanier(props.activiteId)
}
</script>

<template>
  <div class="card">
    <img :src="imgUrl" alt="Photo de l'activite" class="card__img" />
    <div class="card__details">
      <p>{{ nom }}</p>
      <p>{{ date }}</p>
      <p>{{ heure }}</p>
    </div>
    <p class="card__price">{{ prix }}$</p>
    <div class="h-fit">
      <button class="card__btn" @click="supprimerDuPanier">Supprimer</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  background-color: #f8fafc;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  transition: all 300ms ease-in-out;
}

.card:hover {
  background-color: #f1f5f9;
}

.card__img {
  width: 6rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 0.375rem;
}

.card__details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  flex-grow: 1;
  margin: 0 20px;
}

.card__price {
  text-align: center;
  margin-right: 0;
}

.card__btn {
  margin: 0 auto;
}

@media (min-width: 640px) {
  .card {
    flex-direction: row;
  }

  .card__details {
    text-align: left;
  }

  .card__price {
    text-align: left;
    margin-right: 20px;
  }

  .card__btn {
    margin: 0 0;
  }
}

@media (min-width: 768px) {
  .card__img {
    width: 10rem;
  }
}
</style>

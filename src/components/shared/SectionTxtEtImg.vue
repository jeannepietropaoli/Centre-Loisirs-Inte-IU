<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  imgUrl: String,
  imgAlt: String,
  darkTheme: String,
  inOrder: Boolean,
})
</script>

<template>
  <section
    class="card-section"
    :class="darkTheme ? 'text-[#f4ead9] bg-[#1c454b]' : 'text-[#1c454b] bg-[#f4ead9]'"
  >
    <div
      class="container section-container card"
      :class="inOrder ? 'flex-row' : 'flex-row-reverse'"
    >
      <div class="card__block">
        <h3 class="card__title">{{ title }}</h3>
        <slot></slot>
      </div>
      <img :src="imgUrl" :alt="imgAlt" class="card__img col-span-6" />
    </div>
  </section>
</template>

<style scoped>
.card {
  border-width: 4px 0;
  border-color: var(--green);
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 10px;
}

.card__block,
.card__img {
  width: 50%;
}

.card__block {
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}

.card__title {
  text-transform: uppercase;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
}

.card__img {
  padding: 0 2.5rem;
  transition: all 500ms ease-in-out;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: right;
}

.card-section:hover .card__img {
  transform: scale(1.05);
}

@media (max-width: 1280px) {
  .card {
    flex-direction: column;
    text-align: center;
  }

  .card__block,
  .card__img {
    width: 100%;
  }

  .card__img {
    aspect-ratio: 16/9;
    margin-top: 35px;
  }
}
</style>

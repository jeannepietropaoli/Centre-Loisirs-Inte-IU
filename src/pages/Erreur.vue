<script setup></script>

<template>
  <section>
    <div class="erreur-container container">
      <h1>Erreur :(</h1>
      <p class="erreur-container__text">La page que vous cherchez n'existe pas.</p>
      <RouterLink class="button" :to="{ name: 'accueil-client' }">Retourner a l'accueil</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.erreur-container {
  margin: 0 auto;
  text-align: center;
  padding: 2.5rem;
  font-weight: 600;
}

.erreur-container__text {
  margin: 2.25rem 0;
}
</style>

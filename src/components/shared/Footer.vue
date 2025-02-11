<template>
  <footer>
    <div class="footer__container container">
      <p>Fevrier 2025 - Integration Interface Utilisateur</p>
      <div>
        <p class="footer__credits">
          Créé par
          <a
            href="https://github.com/jeannepietropaoli"
            target="_blank"
            class="footer__link text-link"
            ><img src="@/assets/github-g-trs.png" alt="Logo github" class="footer__logo" /> Jeanne
            Pietropaoli</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto;
}

.footer__container {
  margin: 0 auto;
  padding: 2rem 0.5rem;
  border-top: 2px solid var(--green);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__credits {
  display: flex;
  align-items: center;
}

.footer__link {
  display: flex;
  align-items: center;
}

.footer__logo {
  height: 2rem;
  margin: 0 0.5rem;
}
</style>

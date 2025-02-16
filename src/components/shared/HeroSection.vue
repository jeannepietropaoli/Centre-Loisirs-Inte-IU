<template>
  <section class="hero-section">
    <img
      src="@/assets/img/banner-v3.jpg"
      alt="Photo velos de montagne"
      class="hero-section__bg-img"
    />
    <div class="hero-section__containercontainer">
      <div class="animated-title bebas-neue-regular animated-title">
        <img src="@/assets/img/arrow.png" alt="" class="w-20 animated-title__item" />
        <p class="animated-title__item text-[#f4ead9]">BIENVENUE A</p>
        <p class="animated-title__item text-[#f4ead9]">LA PISTE VERTE</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.hero-section {
  min-height: calc(100vh - 60px);
  flex-grow: 1;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-section__bg-img {
  position: absolute;
  object-fit: cover;
  object-position: left top;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.hero-section__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bebas-neue-regular {
  font-family: 'Bebas Neue', serif;
  font-weight: 400;
  font-style: normal;
}

.animated-title {
  z-index: 20;
  position: relative;
  background-color: transparent;
  text-align: center;
  margin: 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.animated-title__item {
  display: block;
  overflow: hidden;
  transform: translateY(100%);
  opacity: 0;
  transition:
    transform 0.5s,
    opacity 0.5s;
  font-size: 72px;
  color: var(--sand);
}

.animated-title__item:nth-child(1) {
  animation: showup 700ms 100ms forwards;
}

.animated-title__item:nth-child(2) {
  animation: showup 700ms 200ms forwards;
  border-bottom: 4px solid white;
}

.animated-title__item:nth-child(3) {
  animation: showup 700ms 400ms forwards;
  border-bottom: 4px solid white;
}

@keyframes showup {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .animated-title__item {
    font-size: 50px;
  }

  .animated-title {
    background-color: rgba(1, 1, 1, 0.5);
    margin: 1rem 0;
  }
}
</style>

<script setup>
import { computed, onMounted } from 'vue'
import Activites from '@/views/client/components/Activites.vue'
</script>

<template>
  <section class="flex-grow hero relative w-full flex items-center justify-center hero-section">
    <img
      src="../../../assets/banner-v3.jpg"
      alt="Photo velos de montagne"
      class="absolute object-cover object-left object-top h-full w-full z-0 inset-0 bg-img"
    />
    <div class="flex flex-col items-center justify-center container">
      <div
        class="animated-title bebas-neue-regular z-20 relative bg-[rgba(1,1,1,0.5)] md:bg-transparent text-white text-[4.5rem] text-center my-4 md:my-0 mx-4 flex flex-col items-center animated-title"
      >
        <img src="../../../assets/arrow.png" alt="" class="w-20 animated-title__item" />
        <p class="animated-title__item text-[#f4ead9]">BIENVENUE A</p>
        <p class="animated-title__item text-[#f4ead9]">LA PISTE VERTE</p>
      </div>
    </div>
  </section>

  <div id="section-activites">
    <section>
      <div class="container grid grid-cols-12 mx-auto py-16 px-10 border-y-4 border-[#00aa4f]">
        <div class="col-span-6 px-10 flex flex-col gap-8 justify-center">
          <h3 class="uppercase text-3xl font-bold">Nos activites</h3>
          <p>
            Bienvenue à la Piste Verte, votre centre de loisirs en pleine nature, conçu pour offrir
            des activités accessibles à tous, quel que soit votre niveau. Que vous soyez amateur de
            détente en plein air ou passionné d’aventure, notre cadre forestier vous invite à
            explorer, vous dépasser et profiter pleinement de chaque instant. Au programme : kayak
            sur des eaux paisibles, randonnées à travers des sentiers enchanteurs, sorties en VTT
            pour les plus téméraires et bien d’autres expériences adaptées à chacun. Notre mission
            est simple : rendre la nature et ses bienfaits accessibles à tous, dans un environnement
            convivial et ressourçant. Préparez-vous à vivre des moments uniques, seul, en famille ou
            entre amis. Respirez, explorez, amusez-vous ! Decouvrez nos activites et reservez
            maintenant.
          </p>
          <div class="flex flex-col gap-2">
            <p class="text-sm">
              **Pour pouvoir reserver une activite, il faut etre connecte a votre compte.
            </p>
            <p class="text-sm">
              ***La reservation des activites ne peut se faire que pour la personne connectee. Pour
              reserver plusieurs fois, veuillez utiliser le compte de chacun des participants.
            </p>
          </div>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1686090450800-d6ca456243c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Photo de notre centre de loisirs"
          class="col-span-6 px-10 group-hover:scale-105 transition-all duration-500 aspect-square object-cover object-right"
        />
      </div>
    </section>
    <Activites></Activites>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.hero-section {
  min-height: calc(100vh - 60px);
}

.bebas-neue-regular {
  font-family: 'Bebas Neue', serif;
  font-weight: 400;
  font-style: normal;
}

.animated-title__item {
  display: block;
  overflow: hidden;
  transform: translateY(100%);
  opacity: 0;
  transition:
    transform 0.5s,
    opacity 0.5s;
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
</style>

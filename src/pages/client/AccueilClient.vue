<script setup>
import ActiviteAReserverCard from '@/components/client/ActiviteAReserverCard.vue'
import HeroSection from '@/components/shared/HeroSection.vue'
import SectionTxtEtImg from '@/components/shared/SectionTxtEtImg.vue'
import { useActivitesStore } from '@/store/storeActivites'
import { onMounted } from 'vue'

const activitesStore = useActivitesStore()
// Note importante: l'object destructuring const { activites } = useActivitesStore() fait perdre la reactive nature de la variable activites !! OK pour les fonctions. Pas OK pour les variables reactives.

// const activites = storeActivites.activites n'est plus reactif : it unwraps the ref and returns its value, breaking reactivity.
// il faut utiliser directement storeActivites.activites dans le template OU BIEN utiliser une valeur computed:

// const activites = computed(() => activitesStore.activites)

onMounted(() => {
  activitesStore.getActivites()
})
</script>

<template>
  <HeroSection></HeroSection>

  <!-- Activites -->

  <!-- Section Presentation -->
  <SectionTxtEtImg
    title="Nos activités"
    imgUrl="https://plus.unsplash.com/premium_photo-1686090450800-d6ca456243c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    imgAlt="Photo de notre centre de loisirs"
    :inOrder="true"
    :darkTheme="false"
  >
    <p>
      Bienvenue à la Piste Verte, votre centre de loisirs en pleine nature, conçu pour offrir des
      activités accessibles à tous, quel que soit votre niveau. Que vous soyez amateur de détente en
      plein air ou passionné d’aventure, notre cadre forestier vous invite à explorer, vous dépasser
      et profiter pleinement de chaque instant. Au programme : kayak sur des eaux paisibles,
      randonnées à travers des sentiers enchanteurs, sorties en VTT pour les plus téméraires et bien
      d’autres expériences adaptées à chacun. Notre mission est simple : rendre la nature et ses
      bienfaits accessibles à tous, dans un environnement convivial et ressourçant. Préparez-vous à
      vivre des moments uniques, seul, en famille ou entre amis. Respirez, explorez, amusez-vous !
      Découvrez nos activités et réservez maintenant.
    </p>
    <div class="presentation__details">
      <p class="text-sm">
        **Pour pouvoir réserver une activité, il faut etre connecté à votre compte.
      </p>
      <p class="text-sm">
        ***La réservation des activités ne peut se faire que pour la personne connectée. Pour
        réserver plusieurs fois, veuillez utiliser le compte de chacun des participants.
      </p>
    </div>
  </SectionTxtEtImg>

  <!-- Section Liste Activites -->
  <template v-for="(activite, index) in activitesStore.activites" :key="activite.id">
    <ActiviteAReserverCard
      :nom="activite.nom"
      :imgUrl="activite.imgUrl"
      :description="activite.description"
      :date="activite.date"
      :heure="activite.heure"
      :prix="activite.prix"
      :type="activite.type"
      :activiteId="activite.id"
      :darkTheme="index % 2 === 0"
      :inOrder="index % 2 !== 0"
    ></ActiviteAReserverCard>
  </template>
</template>

<style scoped>
.presentation__details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>

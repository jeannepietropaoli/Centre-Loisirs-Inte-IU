<script setup>
import Profile from '@/views/client/components/Profile.vue'
import { useAuthentificationStore } from '@/store/storeAuthentfication'
import { RouterLink, RouterView } from 'vue-router'
import logo from '../assets/logo-v3.png'
import { ref } from 'vue'
import MobileMenuBtn from '@/views/client/components/MobileMenuBtn.vue'
import MobileMenu from '@/views/client/components/MobileMenu.vue'
import NavLink from '@/views/client/components/NavLink.vue'
import AuthentPanel from '@/views/client/components/AuthentPanel.vue'

const authentificationStore = useAuthentificationStore()

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const props = defineProps({
  mainNavLinks: Array,
})
</script>

<template>
  <header class="bg-[#1c454b] text-[#f4ead9] shadow-lg fixed top-0 right-0 left-0 z-30">
    <nav class="container mx-auto border-b-2 border-[#00aa4f]">
      <!-- Logo + Bouton menu mobile || menu grands ecrans -->
      <div class="container mx-auto px-6 py-4 relative flex items-end justify-between">
        <!-- Logo -->
        <RouterLink to="accueil" class="flex items-center"
          ><img class="h-20 p-1 mx-auto" :src="logo" alt="Logo" />
        </RouterLink>

        <!-- #OPTION 1 : Bouton menu mobile - visible sur petits ecrans -->
        <MobileMenuBtn
          :mobileMenuOpen="mobileMenuOpen"
          :toggleMobileMenu="toggleMobileMenu"
        ></MobileMenuBtn>

        <!-- #OPTION 2 : Menu grands écrans - visible sur grands ecrans -->
        <div class="hidden lg:ml-6 lg:flex items-center lg:gap-6">
          <div v-for="link in mainNavLinks" :key="link.name">
            <NavLink :link="link"></NavLink>
          </div>
          <slot></slot>
        </div>
      </div>

      <!-- Menu mobile - visible sur petits ecrans -->
      <MobileMenu :mobileMenuOpen="mobileMenuOpen"></MobileMenu>
    </nav>
  </header>
</template>

<style></style>

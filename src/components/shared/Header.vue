<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/img/logo-v3.png'
import { ref } from 'vue'
import MobileMenuBtn from '@/components/shared/MobileMenuBtn.vue'
import MobileMenu from '@/components/shared/MobileMenu.vue'
import NavLink from '@/components/shared/NavLink.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const props = defineProps({
  mainNavLinks: Array,
})
</script>

<template>
  <header>
    <nav class="container nav">
      <!-- Nav = Logo + (Bouton menu mobile || menu grands ecrans) -->
      <div class="container nav__logo-container">
        <!-- Logo -->
        <RouterLink :to="{ name: 'app' }" class="nav__img-link"
          ><img class="nav__logo" :src="logo" alt="Logo" />
        </RouterLink>

        <!-- #OPTION 1 : Bouton menu mobile - visible sur petits ecrans -->
        <MobileMenuBtn
          :mobileMenuOpen="mobileMenuOpen"
          :toggleMobileMenu="toggleMobileMenu"
        ></MobileMenuBtn>

        <!-- #OPTION 2 : Menu grands écrans - visible sur grands ecrans -->
        <div class="nav__menu--desktop">
          <div v-for="link in mainNavLinks" :key="link.name">
            <NavLink :link="link"></NavLink>
          </div>
          <!-- liens ou section customs (profil, connexion...) -->
          <slot></slot>
        </div>
      </div>

      <!-- Menu mobile - visible sur petits ecrans quand mobileMenuOpen est true (au clic du bouton menu mobile) -->
      <MobileMenu :mobileMenuOpen="mobileMenuOpen" :mainNavLinks="mainNavLinks">
        <!-- liens ou section customs -->
        <slot></slot>
      </MobileMenu>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--blue);
  color: var(--sable);
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 30;
}

.nav {
  border-bottom: 2px solid var(--green);
  margin: 0 auto;
}

.nav__logo-container {
  margin: 0 auto;
  padding: 1rem 1.5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.nav__img-link {
  display: flex;
  align-items: center;
}

.nav__logo {
  height: 5rem;
  padding: 0.25rem;
  margin: 0 auto;
}

.nav__menu--desktop {
  display: none;
}

@media (min-width: 1024px) {
  .nav__menu--desktop {
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
    gap: 1.5rem;
  }
}
</style>

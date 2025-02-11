import { createRouter, createWebHistory } from 'vue-router'
import Erreur from '@/pages/Erreur.vue'
import Accueil from '@/pages/Accueil.vue'
import AccueilClient from '@/pages/client/AccueilClient.vue'
import Panier from '@/pages/client/Panier.vue'
import ConnexionClient from '@/pages/client/ConnexionClient.vue'
import Inscription from '@/pages/client/Inscription.vue'
import InterfaceClient from '@/layouts/InterfaceClient.vue'
import InterfaceAdmin from '@/layouts/InterfaceAdmin.vue'
import ConnexionAdmin from '@/pages/admin/ConnexionAdmin.vue'
import GestionUtilisateurs from '@/pages/admin/GestionUtilisateurs.vue'
import GestionActivites from '@/pages/admin/GestionActivites.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: Accueil,
    },
    {
      path: '/client',
      name: 'client',
      component: InterfaceClient,
      children: [
        {
          path: 'accueil',
          name: 'accueil-client',
          component: AccueilClient,
        },
        {
          path: 'panier',
          name: 'panier',
          component: Panier,
        },
        {
          path: 'connexion',
          name: 'connexion-client',
          component: ConnexionClient,
        },
        {
          path: 'inscription',
          name: 'inscription-client',
          component: Inscription,
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: InterfaceAdmin,
      children: [
        {
          path: 'connexion',
          name: 'connexion-admin',
          component: ConnexionAdmin,
        },
        {
          path: 'gestion-utilisateurs',
          name: 'gestion-utilisateurs',
          component: GestionUtilisateurs,
        },
        {
          path: 'gestion-activites',
          name: 'gestion-activites',
          component: GestionActivites,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'erreur',
      component: Erreur,
    },
  ],
})

export default router

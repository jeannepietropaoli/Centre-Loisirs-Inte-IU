import { createRouter, createWebHistory } from 'vue-router'
import Erreur from '@/views/Erreur.vue'
import Accueil from '@/views/Accueil.vue'
import AccueilClient from '@/views/client/pages/AccueilClient.vue'
import ActiviteDetaillee from '@/views/client/pages/ActiviteDetaillee.vue'
import Panier from '@/views/client/pages/Panier.vue'
import ConfirmationAchat from '@/views/client/pages/ConfirmationAchat.vue'
import Connexion from '@/views/client/pages/ConnexionClient.vue'
import Inscription from '@/views/client/pages/Inscription.vue'
import InterfaceClient from '@/views/client/InterfaceClient.vue'
import InterfaceAdmin from '@/views/admin/InterfaceAdmin.vue'
import ConnexionAdmin from '@/views/admin/pages/ConnexionAdmin.vue'
import GestionUtilisateurs from '@/views/admin/pages/GestionUtilisateurs.vue'
import GestionActivites from '@/views/admin/pages/GestionActivites.vue'

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
          path: 'activite/:id',
          name: 'activite-detaillee',
          component: ActiviteDetaillee,
        },
        {
          path: 'panier',
          name: 'panier',
          component: Panier,
        },
        {
          path: 'confirmation-achat',
          name: 'confirmation-achat',
          component: ConfirmationAchat,
        },
        {
          path: 'connexion',
          name: 'connexion-client',
          component: Connexion,
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

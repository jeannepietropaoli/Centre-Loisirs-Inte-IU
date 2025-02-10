import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { auth, provider } from '@/firebase'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useUtilisateurStore } from './storeUtilisateur'

export const useUtilisateursStore = defineStore('utilisateurs', () => {
  const utilisateurs = ref([])

  return {
    utilisateurs,
  }
})

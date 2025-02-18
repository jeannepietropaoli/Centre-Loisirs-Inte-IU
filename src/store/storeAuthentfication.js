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

export const useAuthentificationStore = defineStore('authentification', () => {
  const connecte = ref(false)
  const erreurAuth = ref(null)
  const utilisateurStore = useUtilisateurStore()

  const sInscrire = async (email, mdp, nom, profileImg) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, mdp)
      utilisateurStore.setUtilisateur(res.user) // set l'utilisateur actuel
      utilisateurStore.setUtilisateurs(res.user) // ajoute le nouvel utilisateur a la liste des utilisateurs
      await utilisateurStore.ajouterUtilisateurAFirestore(res.user, nom, profileImg) // ajoute l'utilisateur a Firestore
      connecte.value = true
      erreurAuth.value = null
      await utilisateurStore.modifierUtilisateur(nom, profileImg)
    } catch (error) {
      erreurAuth.value = 'Des informations sur manquantes ou erronees.'
      console.error('Echec de la creation de l utilisateur', error)
    }
  }

  const seConnecterAvecGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider)
      await utilisateurStore.setUtilisateur(res.user)
      await utilisateurStore.ajouterUtilisateurAFirestore(
        res.user,
        res.user.displayName,
        res.user.photoURL,
      ) // ajoute l'utilisateur a Firestore
      connecte.value = true
      erreurAuth.value = null
    } catch (error) {
      erreurAuth.value = "Echec de l'inscription, essayez une autre methode."
      console.error('Echec de la creation de l utilisateur', error)
    }
  }

  const seConnecter = async (email, mdp) => {
    erreurAuth.value = null
    try {
      const res = await signInWithEmailAndPassword(auth, email, mdp)
      utilisateurStore.setUtilisateur(res.user)
      connecte.value = true
      erreurAuth.value = null
    } catch (error) {
      erreurAuth.value = 'Adresse email ou mot de passe incorrect.'
      console.error('Echec de la connexion de l utilisateur', error)
    }
  }

  const seDeconnecter = async () => {
    try {
      await signOut(auth)
      utilisateurStore.resetUtilisateur()
      connecte.value = false
      erreurAuth.value = null
    } catch (error) {
      erreurAuth.value = 'Echec de la deconnexion.'
      console.error('Echec de la deconnexion de l utilisateur', error)
    }
  }

  const resetErreurAuth = () => {
    erreurAuth.value = null
  }

  return {
    erreurAuth,
    connecte,
    sInscrire,
    seConnecter,
    seDeconnecter,
    seConnecterAvecGoogle,
    resetErreurAuth,
  }
})

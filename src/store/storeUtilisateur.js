import { updateProfile } from 'firebase/auth'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import photoProfileParDefaut from '@/assets/account.png'
import { doc, setDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '@/firebase'

export const useUtilisateurStore = defineStore('utilisateur', () => {
  const utilisateur = ref(null)
  const utilisateurs = ref([])

  const setUtilisateur = async (utilisateurData) => {
    utilisateur.value = utilisateurData
  }

  const setUtilisateurs = (utilisateurData) => {
    utilisateurs.value.push(utilisateurData)
  }

  const ajouterUtilisateurAFirestore = async (utilisateurData, nom, profileImg) => {
    const utilisateurRef = doc(db, 'utilisateurs', utilisateurData.uid)
    try {
      await setDoc(
        utilisateurRef,
        {
          displayName: nom,
          email: utilisateurData.email,
          photoURL: profileImg,
        },
        { merge: true }, // Merges with existing data
      )

      console.log('Utilisateur ajouté avec succès dans Firestore:', utilisateurData.uid)
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur dans Firestore:", error)
    }
  }

  const modifierUtilisateur = async (nom, profileImg) => {
    await updateProfile(utilisateur.value, {
      displayName: nom ? nom : 'Inconnu',
      photoURL: profileImg ? profileImg : photoProfileParDefaut,
    })
  }

  const resetUtilisateur = () => {
    utilisateur.value = null
  }

  const getUtilisateursFromFirestore = async () => {
    try {
      const utilisateursCollection = collection(db, 'utilisateurs')
      const utilisateursSnapshot = await getDocs(utilisateursCollection)

      utilisateurs.value = utilisateursSnapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error)
      return []
    }
  }

  return {
    utilisateur,
    utilisateurs,
    setUtilisateur,
    ajouterUtilisateurAFirestore,
    resetUtilisateur,
    modifierUtilisateur,
    setUtilisateurs,
    getUtilisateursFromFirestore,
  }
})

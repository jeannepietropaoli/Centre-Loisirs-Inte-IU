import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAdminStore = defineStore('admin', () => {
  const adminConnecte = ref(false)

  const connecterAdmin = () => (adminConnecte.value = true)

  const deconnecterAdmin = () => (adminConnecte.value = false)

  return {
    connecterAdmin,
    deconnecterAdmin,
    adminConnecte,
  }
})

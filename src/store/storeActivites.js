import useApi from '@/composables/useApi'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useActivitesStore = defineStore('activite', () => {
  const activites = ref([])
  const message = ref('')

  const getActivites = async () => {
    const { fetchDataApi } = useApi(
      'https://api.pisteverte.jeannepietropaoli.dev/api/activites/',
      'GET',
      null,
    )
    const data = await fetchDataApi()
    activites.value = data.activites
    activites.value = activites.value.map((activite) => ({
      ...activite,
      id: Number(activite.id),
      prix: parseFloat(activite.prix),
    }))
  }

  const editerActivite = async (id, activite) => {
    const activiteJson = JSON.stringify(activite)
    const { fetchDataApi } = useApi(
      `https://api.pisteverte.jeannepietropaoli.dev/api/activites/?id=${id}`,
      'PUT',
      activiteJson,
    )
    const data = await fetchDataApi()
    message.value = data.message
    getActivites() // Rafraîchir la liste des activités
  }

  const supprimerActivite = async (id) => {
    const { fetchDataApi } = useApi(
      `https://api.pisteverte.jeannepietropaoli.dev/api/activites/?id=${id}`,
      'DELETE',
      null,
    )
    const data = await fetchDataApi()
    message.value = data.message
    getActivites() // Rafraîchir la liste des activités
  }

  const ajouterActivite = async (activite) => {
    const activiteJson = JSON.stringify(activite)
    const { fetchDataApi } = useApi(
      `https://api.pisteverte.jeannepietropaoli.dev/api/activites/`,
      'POST',
      activiteJson,
    )
    const data = await fetchDataApi()
    message.value = data.message
    getActivites() // Rafraîchir la liste des activités
  }

  return { activites, getActivites, editerActivite, supprimerActivite, ajouterActivite, message }
})

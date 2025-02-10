export default function useApi(url, method = 'GET', body = null) {
  const fetchDataApi = async () => {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? body : null,
      })
      const data = await res.json()
      return data
    } catch (error) {
      console.error('Erreur:', error)
      return {}
    }
  }

  return { fetchDataApi }
}

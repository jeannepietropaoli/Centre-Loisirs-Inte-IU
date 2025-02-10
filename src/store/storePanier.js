import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePanierStore = defineStore('panier', () => {
  const panier = ref([])

  const dejaDansLePanier = (idProduit) => {
    return panier.value.some((produit) => produit.id === idProduit)
  }

  const ajouterAuPanier = (produit) => {
    if (!dejaDansLePanier(produit.id)) {
      panier.value.push(produit)
    }
  }

  const supprimerDuPanier = (idProduit) => {
    panier.value = panier.value.filter((produit) => produit.id !== idProduit)
  }

  const totalPanierAvantTaxes = computed(() =>
    panier.value.reduce((acc, produit) => acc + +produit.prix, 0),
  )

  const taxes = computed(() => totalPanierAvantTaxes.value * 0.15)

  const totalPanierAvecTaxes = computed(() => totalPanierAvantTaxes.value + taxes.value)

  const resetPanier = () => {
    panier.value = []
  }

  return {
    panier,
    dejaDansLePanier,
    ajouterAuPanier,
    supprimerDuPanier,
    resetPanier,
    totalPanierAvantTaxes,
    taxes,
    totalPanierAvecTaxes,
  }
})

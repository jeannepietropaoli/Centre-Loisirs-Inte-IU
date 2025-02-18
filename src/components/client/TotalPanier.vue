<script setup>
import { usePanierStore } from '@/store/storePanier'

const panierStore = usePanierStore()

const props = defineProps({
  confirmerCommande: Function,
})
</script>

<template>
  <section className="order-summary">
    <h3 className="secondary-title">Résumé de la commande</h3>
    <div className="order-summary__category">
      <h4>Sous-total</h4>
      <p>{{ panierStore.totalPanierAvantTaxes }}$</p>
    </div>
    <div className="order-summary__category">
      <h4>Taxes (15%)</h4>
      <p>{{ panierStore.taxes }}$</p>
    </div>
    <div className="order-summary__category order-summary__category--total">
      <h4>Total</h4>
      <p>{{ panierStore.totalPanierAvecTaxes }}$</p>
    </div>
    <button className="order-summary__btn" @click="confirmerCommande">Confirmer</button>
  </section>
</template>

<style>
.order-summary {
  padding: 30px 6%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: fit-content;
  text-align: center;
  background-color: #f1f5f9;
  width: 100%;
  margin: 2.5rem auto;
}

.order-summary__category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.secondary-title {
  font-weight: 700;
  margin: 10px 0 30px 0;
}

.order-summary__category > * {
  margin: 0;
}

.order-summary__category--total {
  padding-top: 20px;
  position: relative;
  border-top: 1px solid lightgrey;
}

.order-summary__btn {
  width: 100%;
}

@media (min-width: 1024px) {
  .order-summary {
    width: 50%;
  }
}
</style>

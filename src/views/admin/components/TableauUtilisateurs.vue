<script setup>
import { useUtilisateurStore } from '@/store/storeUtilisateur'
import { onMounted } from 'vue'

const utilisateurStore = useUtilisateurStore()

onMounted(() => {
  utilisateurStore.getUtilisateursFromFirestore()
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Email</th>
        <th>Photo url (facultatif)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="utilisateur in utilisateurStore.utilisateurs" :key="utilisateur.email">
        <td>{{ utilisateur.displayName }}</td>
        <td>{{ utilisateur.email }}</td>
        <td>{{ utilisateur.photoUrl ? utilisateur.photoUrl : 'Aucune photo' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid lightgray;
  padding: 12px;
}
</style>

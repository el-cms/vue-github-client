<template>
  <div>
    <h1>Dépôts utilisateurs</h1>
    <!-- <pre>{{retoursAPI}}</pre> -->
  <pre v-if="error !== null">Erreur: {{error}}</pre>
    <div>
      <label for="name">Nom : </label>
      <input type="text" 
             id="name"
             name="name"
             v-model="nameToSearch"
             @keypress.enter="search"
             :disabled="loading"/>
      <button @click="search" :disabled="loading">
        Rechercher
      </button>

    </div>

    <hr>

  <div v-if="!loading">
    <div v-for="repo in retoursAPI">
      <div>Id: {{repo.id}}</div>
      <div>Name: {{repo.name}}</div>
      <hr>
    </div>
  </div>
  <div v-else>Chargement...</div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      retoursAPI: {},
      nameToSearch: '',
      loading: false,
      error: null
    }
  },
  methods: {
    search () {
      this.loading = true
      this.retoursAPI = {}
      // Définition de l'URL avec le nom donné
      const URL = `https://api.github.com/users/${this.nameToSearch}/repos`

      // Récupération des données de l'API
      this.$http.get(URL)
      .then((data) => {
        this.retoursAPI = data.body
        this.loading = false
      })
      .catch((error) => {
        this.error = error
      })
    }
  }
}
</script>

<style>
  
</style>

<template>
  <div @submit="search">
    <!-- Error message -->
    <div class="alert alert-danger" v-if="error">{{error}}</div>

    <!-- Search input -->
    <div class="input-group">
      <input type="text"
             class="form-control"
             v-model="name"
             @keypress.enter="search"
             :disabled="loading"
             placeholder="Nom d'utilisateur">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="search" :disabled="loading">
          <i class="glyphicon glyphicon-search"></i>
        </button>
      </span>
    </div>

    <!-- Results -->
    <div v-if="!loading && !firstSearch && results !== null">
      <div v-if="results.total_count > 0">

        <!-- Number of items found -->
        <div class="disabled">Total: {{results.total_count}}</div>

        <!-- List -->
        <div v-for="u in results.items">
          <!-- Main data -->
          <div class="media user-entry" @click>
            <!-- Avatar -->
            <div class="media-left">
              <img :src="u.avatar_url" alt="" class="media-object avatar avatar-sm">
            </div>

            <!-- Name -->
            <div class="media-body">
              <h4 class="media-heading">
                {{u.login}}
                <small>[<a :href="u.html_url" target="_blank"><i class="glyphicon glyphicon-link"></i> Github</a>]</small>
              </h4>
              <!--{{u.type}}-->
            </div>

            <!-- Arrow -->
            <div class="media-right">
              <i class="glyphicon glyphicon-chevron-right"></i>
            </div>

          </div>
        </div>
        <!-- /List -->
      </div>
      <div v-else>Aucun résultat</div>
      <!--<pre>{{results}}</pre>-->
    </div>

    <div v-if="loading">Chargement...</div>

    <div class="alert alert-info" v-if="firstSearch">
      Utilisez le formulaire ci-dessus pour rechercher un utilisateur.
    </div>
  </div>
</template>

<script>
  // import fake from '../../fakedata'

  export default {

    // name: 'element-search-user',
    data () {
      return {
        name: '',
        // results: fake,
        results: null,
        loading: false,
        firstSearch: false,
        error: ''
      }
    },
    methods: {
      search () {
        if (!this.loading) {
          this.firstSearch = false
          this.loading = true

          if (this.name !== '' && this.name.length > 3) {
            this.$http.get('https://api.github.com/search/users', {params: {q: this.name}})
              .then(({body}) => {
                this.results = body
                this.loading = false
              })
              .catch((error) => {
                console.log('ERROR', error)
                this.error = error.body.message
                this.loading = false
              })
          } else {
            this.error = 'Veuillez entrer un nom de plus de 4 caractères'
          }
        }
      }
    }
  }
</script>

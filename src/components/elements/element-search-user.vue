<template>
  <div @submit="search">
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
          <i class="fa fa-search"></i>
        </button>
      </span>
    </div>

    <!-- Results -->
    <div v-if="!loading && !firstSearch && results !== null">
      <div v-if="results.total_count > 0">

        <!-- Number of items found -->
        <div class="disabled">Total: {{results.total_count}}</div>

        <!-- List -->
        <div class="list-group clickable">
          <div class="list-group-item"
               :class="{shadowed: u.id !== selectedUser && selectedUser}"
               @click="select(u)"
               v-for="u in results.items">

            <!-- Arrow -->
            <div class="pull-right">
              <i class="fa fa-chevron-right fa-2x"></i>
            </div>
            <!-- Avatar -->
            <div class="pull-left">
              <img :src="u.avatar_url" alt="" class="media-object avatar avatar-sm">
            </div>

            <!-- Name -->
            <div>
              <h4 class="list-group-header">
                {{u.login}}
                <small>
                  [<a :href="u.html_url" target="_blank"><i class="glyphicon glyphicon-link"></i> Github</a>]
                </small>
              </h4>

              <!--{{u.type}}-->
            </div>

          </div>
        </div>
        <!-- /List -->
      </div>
      <div v-else>Aucun résultat</div>
      <!--<pre>{{results}}</pre>-->
    </div>

    <div v-if="loading">Chargement...</div>

    <!-- First search info -->
    <div class="text-info" v-if="firstSearch">
      <i class="fa fa-info-circle"></i> Utilisez le formulaire ci-dessus pour rechercher un utilisateur.
    </div>
    <!-- Error message -->
    <div class="text-danger" v-if="error"><i class="fa fa-exclamation-triangle"></i> {{error}}</div>
  </div>
</template>

<script>
  export default {

    name: 'element-search-user',
    data () {
      return {
        name: '',
        results: null,
        loading: false,
        firstSearch: true,
        error: '',
        selectedUser: null
      }
    },
    methods: {
      search () {
        if (!this.loading) {
          this.$emit('resetUI')
          if (this.name !== '' && this.name.length > 3) {
            this.firstSearch = false
            this.loading = true
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
      },
      select (user) {
        this.selectedUser = user.id
        this.$emit('selectUser', user)
      }
    }
  }
</script>

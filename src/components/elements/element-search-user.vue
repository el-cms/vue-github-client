<template>
  <div>
    <h2>User</h2>

    <!-- Search input -->
    <div class="input-group">
      <input type="text"
             class="form-control"
             v-model="name"
             @keypress.enter="search"
             :disabled="loading"
             placeholder="Username">
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
        <div class="clickable">
          <div class="list-group-item"
               :class="{shadowed: u.id !== selectedUser && selectedUser}"
               @click="select(u)"
               v-for="u in results.items">

            <h4 class="list-group-header">
              <img :src="u.avatar_url" alt="" class="avatar avatar-sm">
              {{u.login}}

              <i class="pull-right fa fa-chevron-right fa-2x"></i>
            </h4>

          </div>
        </div>
        <!-- /List -->

      </div>
      <div v-else>No results</div>
    </div>

    <div v-if="loading">Loading...</div>

    <!-- First search info -->
    <div class="text-info" v-if="firstSearch">
      <i class="fa fa-info-circle"></i> Use the input above to search for an user/organization.
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
            this.error = 'Please, search for an user with more than 3 chars.'
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

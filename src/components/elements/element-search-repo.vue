<template>
  <div>
    <div class="alert alert-danger" v-if="error !==null">{{error}}</div>
    <div v-if="user !== null">
      <h2>
        <a :href="user.html_url" target="_blank"><i class="fa fa-github"></i> {{user.login}}</a>
      </h2>
      <ul class="list-group" v-if="repos !== null && !loading">
        <li v-for="r in repos"
            class="list-group-item clickable"
            :class="{shadowed: selectedRepo !== r.id && selectedRepo !== null}"
            @click="select(r)">

          <i class="pull-right fa fa-chevron-right fa-2x"></i>

          <div><strong>{{r.name}}</strong></div>
          <small>{{r.description}}</small>

        </li>
      </ul>
      <div v-if="loading">Loading...</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'element-search-repo',
    props: {
      user: {required: false, type: Object}
    },
    methods: {
      loadUserRepos (user) {
        this.loading = true
        this.selectedRepo = null
        this.$http.get(`https://api.github.com/users/${user}/repos`)
          .then(({body}) => {
            this.repos = body
            this.loading = false
          })
          .catch((e) => {
            this.error = e.body.message
            this.loading = false
          })
      },
      select (repo) {
        this.selectedRepo = repo.id
        this.$emit('selectRepo', repo)
      }
    },
    data () {
      return {
        error: null,
        repos: null,
        loading: false,
        selectedRepo: null
      }
    },
    watch: {
      user (newUser) {
        this.loadUserRepos(newUser.login)
      }
    }
  }
</script>

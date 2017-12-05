<template>
  <div>
    <div class="alert alert-danger" v-if="error !==null">{{error}}</div>
    <div v-if="user !== null">
      <!--<pre>{{user}}</pre>-->

      <!--<h2>Dépôts de {{user.login}}</h2>-->
      <ul class="list-group" v-if="repos !== null && !loading">
        <li v-for="r in repos"
            class="list-group-item clickable"
            :class="{shadowed: selectedRepo !== r.id && selectedRepo}"
            @click="select(r)">
          <div>#{{r.id}} - <strong>{{r.name}}</strong></div>
          <div>{{r.description}}</div>
          <!--<pre>{{r}}</pre>-->
        </li>
      </ul>
      <div v-if="loading">Chargement...</div>
    </div>
    <div v-else>Veuillez selectionner un utilisateur</div>
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

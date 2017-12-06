<template>
  <div id="app">

    <nav class="navbar navbar-fixed-top navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">VueJS - Github client</a>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="ui-col" :class="{'col-sm-4' : selectedUser === null, 'col-sm-2': selectedUser !== null}">
          <elt-search-user @selectUser="setUser" @resetUI="reset"/>
        </div>
        <div class="ui-col" :class="{'col-sm-4' : selectedRepo === null, 'col-sm-2': selectedRepo !== null}">
          <elt-search-repo :user="selectedUser" @selectRepo="setRepo"/>
        </div>
        <div class="ui-col" :class="{'col-sm-4' : selectedRepo === null, 'col-sm-8': selectedRepo !== null}">
          <elt-repo :repo="selectedRepo"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import EltSearchUser from '@/components/elements/element-search-user'
  import EltSearchRepo from '@/components/elements/element-search-repo'
  import EltRepo from '@/components/elements/element-repo'

  export default {
    name: 'App',
    components: {EltSearchRepo, EltSearchUser, EltRepo},
    data () {
      return {
        selectedUser: null,
        selectedRepo: null
      }
    },
    methods: {
      setUser (user) {
        this.selectedUser = user
        this.selectedRepo = null
      },
      setRepo (repo) {
        this.selectedRepo = repo
      },
      reset () {
        this.selectedUser = null
        this.selectedRepo = null
      }
    }
  }
</script>

<style lang="scss">
  @import "./stylesheets/style";
</style>

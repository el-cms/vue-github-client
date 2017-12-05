<template>
  <div>
    <div class="row">
      <div :class="{'col-sm-4' : selectedUser === null, 'col-sm-2': selectedUser !== null}">
        <h2>Utilisateur</h2>
        <elt-search-user @selectUser="setUser" @resetUI="reset"/>
      </div>
      <div :class="{'col-sm-4' : selectedRepo === null, 'col-sm-2': selectedRepo !== null}">
        <h2>Dépôts</h2>
        <elt-search-repo :user="selectedUser" @selectRepo="setRepo"/>
      </div>
      <div :class="{'col-sm-4' : selectedRepo === null, 'col-sm-8': selectedRepo !== null}">
        <h2>Informations de dépôt</h2>
        <elt-repo :repo="selectedRepo"/>
      </div>
    </div>
  </div>
</template>

<script>
  import EltSearchUser from '@/components/elements/element-search-user'
  import EltSearchRepo from '@/components/elements/element-search-repo'
  import EltRepo from '@/components/elements/element-repo'

  export default {
    name: 'Home',
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

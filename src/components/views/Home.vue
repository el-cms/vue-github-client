<template>
  <div>
    <div class="row">
      <div class="col-sm-4">
        <h2>Recherche d'utilisateur</h2>
        <elt-search-user/>
      </div>
      <div class="col-sm-4">
        <h2>Dépôts</h2>
        <elt-search-repo/>
      </div>
      <div class="col-sm-4">
        <h2>Informations de dépôt</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import EltSearchUser from '@/components/elements/element-search-user'
  import EltSearchRepo from '@/components/elements/element-search-repo'

  export default {
    name: 'Home',
    components: {EltSearchRepo, EltSearchUser}
  }
</script>

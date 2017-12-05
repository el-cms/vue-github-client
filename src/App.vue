<template>
  <div id="app">
    <div>
      <router-link :to="{name: 'Home'}">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "./stylesheets/style"
</style>

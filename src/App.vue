<template>
  <div id="app">

    <nav class="navbar navbar-default">
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
    <!--<div>-->
    <!--<router-link :to="{name: 'Home'}">Home</router-link>-->
    <!--</div>-->
    <router-view class="container-fluid"/>
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

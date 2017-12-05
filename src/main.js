// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Resource from 'vue-resource'
import App from './App'
import router from './router'
import ApiToken from './githubToken'

Vue.config.productionTip = false

// Vue-resource pour les requêtes Ajax
Vue.use(Resource)
// Modification des headers des requêtes
Vue.http.headers.common.Authorization = `token ${ApiToken}`

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

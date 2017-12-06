// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'
import App from './App'
import ApiToken from './githubToken'

Vue.config.productionTip = false

// Vue-resource pour les requêtes Ajax
Vue.use(VueResource)
// Vue-moment pour les dates
Vue.use(VueMoment)
// Modification des headers des requêtes
Vue.http.headers.common.Authorization = `token ${ApiToken}`

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})

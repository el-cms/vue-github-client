// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'
import App from './App'
import ApiToken from './githubToken'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueMoment)
// Change headers if token is not empty.
if (ApiToken.length > 0) {
  Vue.http.headers.common.Authorization = `token ${ApiToken}`
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})

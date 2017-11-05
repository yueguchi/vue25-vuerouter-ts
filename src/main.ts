// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import Vuex from 'vuex'
import VueOnsen from 'vue-onsenui'
import stores from './store/store'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueOnsen)

/* tslint:disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store: new Vuex.Store(stores),
  components: { App }
})

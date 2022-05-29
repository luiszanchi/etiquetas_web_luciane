import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import RowLineGrid from './components/grid/RowLineGrid.vue'

Vue.component(RowLineGrid.name, RowLineGrid);

import UploadForm from './components/form/UploadForm.vue'
import router from './router'
import store from './store'

Vue.component(UploadForm.name, UploadForm)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const routes = require('/src/routes/router.ts')

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router: new VueRouter({
    routes: routes.default
  })
}).$mount('#app')


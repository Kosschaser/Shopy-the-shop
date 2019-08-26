import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import store from './store'

Vue.component('font-awesome-i', FontAwesomeIcon);
Vue.use(VueResource);

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

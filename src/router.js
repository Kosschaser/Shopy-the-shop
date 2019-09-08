import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import ItemView from './views/ItemView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/item/:id',
      name: 'itemView',
      component: ItemView
    },
    {
      path: '*', redirect: '/'
    }
  ],
  mode: 'history',
  scrollBehavior(){
    return {x: 0, y: 0};
  }
})

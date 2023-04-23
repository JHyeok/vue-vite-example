import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './home/Home.vue'
import SignIn from './sign-in/SignIn.vue'
import Cart from './cart/Cart.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },

  {
    path: '/sign-in/',
    component: SignIn,
  },

  {
    path: '/cart/',
    component: Cart,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

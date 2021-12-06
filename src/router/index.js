import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cachorros from '../views/Cachorros.vue'
import bike from '../views/bike.vue'
import Gatos from '../views/Gatos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cachorros',
    name: 'Cachorros',
    component: Cachorros
  },
  {
    path: '/bike',
    name: 'bike',
    component: bike
  },
  {
    path: '/gatos',
    name: 'Gatos',
    component: Gatos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

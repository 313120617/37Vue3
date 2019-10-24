import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import third from "../views/third.vue"
import fourth from "../views/fourth.vue"
import About from "../views/About.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },{
    path: '/fourth',
    name: 'fourth',
    component: fourth
  },
  {
    path: '/third',
    name: 'third',
    component: third
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

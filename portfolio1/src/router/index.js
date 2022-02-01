import Vue from 'vue'
import VueRouter from 'vue-router'


import home from '../views/home.vue'
import about from '../views/about.vue'
import what from '../views/what.vue'
import recentProject from '../views/recentProject.vue'
import contact from '../views/contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/what',
    name: 'what',
    component: what
  },
  {
    path: '/recentProject',
    name: 'recentProject',
    component: recentProject
  },
  {
    path: '/Contact',
    name: 'contact',
    component: contact
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

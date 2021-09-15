import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue')

  },
  {
    path: '/container',
    name: 'Container',
    component: () => import(/* webpackChunkName: "about" */ '../views/Container.vue')

  },
  {
    path: '/iconlink',
    name: 'IconLink',
    component: () => import(/* webpackChunkName: "about" */ '../views/IconLink.vue')

  },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "about" */ '../views/Button.vue')

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

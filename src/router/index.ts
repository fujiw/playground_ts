import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/views/layout.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('@/views/Home'),
      layout: Layout
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: () => import('@/views/About'),
      layout: Layout
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/views/layout.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('@/views/Home.vue'),
      layout: Layout
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: () => import('@/views/About.vue'),
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

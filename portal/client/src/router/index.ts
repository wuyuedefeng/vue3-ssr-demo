import { createRouter as createVueRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from '../views/home.vue'

export function createRouter() {
  const router = createVueRouter({
    history: import.meta.env.SSR ? createMemoryHistory(import.meta.env.BASE_URL) : createWebHistory(import.meta.env.BASE_URL),
    routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/about', name: 'about', component: () => import('@/views/about.vue') },
      { path: '/asyncSSR', name: 'asyncSSR', component: () => import('@/views/asyncSSR/index.vue') }
    ]
  })
  return router
}

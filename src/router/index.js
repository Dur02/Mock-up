import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/FormA',
    name: 'FormA',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormA.vue')
  },
  {
    path: '/FormB',
    name: 'FormB',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormB.vue')
  },
  {
    path: '/Plan',
    name: 'Plan',
    component: () => import('../views/Plan')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

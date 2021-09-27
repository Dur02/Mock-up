import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import FormA from "@/views/FormA";
// import FormB from "@/views/FormB";
// import Plan from "@/views/Plan";
//懒加载可能出现问题，把上方的注释取消然后注册组件

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/FormA',
    name: 'FormA',
    component: () => import('../views/FormA.vue')
  },
  {
    path: '/FormB',
    name: 'FormB',
    component: () => import('../views/FormB.vue')
  },
  {
    path: '/Plan',
    name: 'Plan',
    component: () => import('../views/Plan.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
  ]
})

export default router

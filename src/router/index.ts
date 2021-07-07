import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Empty from '../views/Empty.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',

    component: () => import('../views/Cart.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Empty',
    component: () => import('../views/Empty.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router

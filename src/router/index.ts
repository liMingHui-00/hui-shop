import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const layout = () => import('@/layout/Layout.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/', redirect: '/home'
  },

  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home/Home.vue'),
        children: [{
          path: ':categoryId',
          component: () => import('@/views/Home/Home.vue'),
        }]
      },
    ],
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/search',
        component: () => import('@/views/Search.vue'),
      },
    ],
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'cart',
        component: () => import('@/views/Cart.vue'),
      },
    ],
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'user',
        component: () => import('@/views/User.vue'),
      },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

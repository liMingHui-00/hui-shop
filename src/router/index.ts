import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:()=>import('@/layout/Layout.vue'),
      children:[{
        path:'cart',
        component:()=>import('@/views/Cart.vue') 
      },{
        path: 'search',
        component:()=>import('@/views/Search.vue')
      },{
        path: 'user',
        component:()=>import('@/views/User.vue')
      },{
        path: 'home',
        component:()=>import('@/views/Home.vue')
      }]
    },
  ]
})

export default router

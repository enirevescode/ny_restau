import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/public/Homepage.vue'
import navbar from '@/views/public/navbar.vue'

const routes = [
 
  {
    path: '/navbar', name: 'navbar', component: navbar
  },
 
  {
    path: '/Homepage', name: 'Homepage', component: Homepage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

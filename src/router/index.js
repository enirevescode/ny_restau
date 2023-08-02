import { createRouter, createWebHistory } from 'vue-router'
//import page
import Homepage from '@/views/public/Homepage.vue'
import Menu from '@/views/public/menu.vue'
import contact from '@/views/public/contact.vue'
import apropos from '@/views/public/apropos.vue'

import redirection from '@/views/public/redirection.vue'

//import composants
import navbar from '@/components/navbar.vue'

const routes = [
  { path: '/', name: 'Homepage', component: Homepage},
  { path: '/menu', name: 'menu', component: Menu},
  { path: '/contact', name: 'contact', component: contact},
  { path: '/apropos', name: 'apropos', component: apropos},


  //404
  { path: '/:pathMatch(.*)*', name: 'redirection', component: redirection},

  
  {
    path: '/navbar', name: 'navbar', component: navbar
  },
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

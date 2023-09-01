import { createRouter, createWebHistory } from 'vue-router'

//import des pages /view
import * as Public from '@/views/public'


import redirection from '@/views/public/redirection.vue'


const routes = [

  { path: '/',
    name: 'Homepage',
    component: Public.Homepage,
  },

  { path: '/menu', name: 'menu', component: Public.Menu},
  { path: '/contact', name: 'contact', component: Public.contact},
  { path: '/apropos', name: 'apropos', component: Public.apropos},
  { path: '/resa', name: 'resa', component: Public.resa},
  
  //404
  { path: '/:pathMatch(.*)*', name: 'redirection', component: redirection},
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
//import page
import Homepage from '@/views/public/Homepage.vue'
import Menu from '@/views/public/menu.vue'
import contact from '@/views/public/contact.vue'
import apropos from '@/views/public/apropos.vue'
import resa from '@/views/public/resa.vue'

import redirection from '@/views/public/redirection.vue'

//import composants
import navbar from '@/components/navbar.vue'

const routes = [

  { path: '/',
    name: 'Homepage',
    component: Homepage,
    children: [
      { path: '/menu', name: 'menu', component: Menu},
      { path: '/contact', name: 'contact', component: contact},
      { path: '/apropos', name: 'apropos', component: apropos},
      { path: '/resa', name: 'resa', component: resa},
    ]
  },

  
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

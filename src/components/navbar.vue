<template>
   <div>
      <v-toolbar height="150">
         <v-app-bar-nav-icon></v-app-bar-nav-icon>


         <v-toolbar-title><img v-bind:src="require('@/assets/favicon.png')"
               alt="logo" /><span id="brand">N Y U S</span></v-toolbar-title><v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h6" to="/">Accueil</router-link>
         </v-btn>
        
         <v-btn>
            <router-link class="text-h6" to="/menu">Menu</router-link>
         </v-btn>
        
         <v-btn>
            <router-link class="text-h6" to="/contact">Contact</router-link>
         </v-btn>
       
         <v-btn>
            <router-link class="text-h6" to="/apropos">A propos</router-link>
         </v-btn>
        
         <v-btn>
            <router-link class="text-h6" to="/resa">Réservation</router-link>
         </v-btn>
               
      </v-toolbar>
   </div>
</template>

<script>
export default {
   name: "navbar"
}
</script>

<style>
header{
   background-color: transparent !important;
}

img {
   width: 35px;
   height: 35px;
   float: left;
   vertical-align: middle;
   }

#brand{
   float: left;
   vertical-align: middle;
}   
</style>
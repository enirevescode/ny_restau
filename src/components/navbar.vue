<template>
   <!-- <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/menu">Menu</router-link>  |
    <router-link to="/contact">Contact</router-link>  |
    <router-link to="/apropos">A propos</router-link>
  </nav> -->
  <div>
      <v-toolbar :color="transparent" dark prominent height="150">
         <v-app-bar-nav-icon></v-app-bar-nav-icon>


         <v-toolbar-title><img v-bind:src="require('@/assets/favicon.png')"
               alt="logo" />N Y U S</v-toolbar-title><v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h5" to="/">ACCUEIL</router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h5" to="/menu">Menu</router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h5" to="/contact">Contact</router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h5" to="/apropos">A propos</router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h5" to="/resa">Réservation</router-link>
         </v-btn>
         <v-spacer></v-spacer>       
      </v-toolbar>
   </div>
</template>

<script>
export default {
   name: "navbar"
}
</script>

<style>

</style>
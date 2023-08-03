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
               alt="logo" /></v-toolbar-title><v-spacer></v-spacer>
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
            <router-link class="text-h5" to="/Contact">Contact</router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h5" to="/apropos">A Propos</router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn icon>
            <router-link to="/admin/Dashboard"><v-icon class="text-h4" icon="$admin"></v-icon></router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn icon>
            <router-link to="/login"><v-icon class="text-h4" icon="$connexion"></v-icon></router-link>
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
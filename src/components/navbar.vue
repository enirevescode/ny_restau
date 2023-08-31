<template>
   <div>
      <v-toolbar height="120">
         <v-img v-bind:src="require('@/assets/logo.webp')"
               alt="logo" />


         <v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h6" to="/">Accueil</router-link>
         </v-btn>
        
         <!-- <v-btn> -->
            
            <md-menu>
      <md-button md-menu-trigger class="text-h6">Menu</md-button>

      <md-menu-content>
         <router-link class="text-h6" to="/menu"><md-menu-item>My Item 1</md-menu-item></router-link>
        <md-menu-item>My Item 2</md-menu-item>
       
      </md-menu-content>
    </md-menu>
         <!-- </v-btn> -->

         <md-menu md-size="medium" md-align-trigger>
      <md-button md-menu-trigger>Align with trigger</md-button>

      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>
        
         <v-btn>
            <router-link class="text-h6" to="/contact">Contact</router-link>
         </v-btn>
       
         <v-btn>
            <router-link class="text-h6" to="/apropos">A propos</router-link>
         </v-btn>
        
                  
         <v-col cols="auto">
           <v-btn size="x-large" 
           variant="outlined"
           color="white"><router-link class="text-h6" to="/resa">Réservation</router-link></v-btn>
         </v-col>

      </v-toolbar>
   </div>
</template>

<script>
export default {
   name: "navbar"
}
</script>

<style scoped>
header{
   background-color: transparent !important;
   position: absolute;
}

img {
   width: 90px;
   height: 35px;
   float: left;
   margin-left: 250px;
   }

.text-h6 {
   color: white;
   font-size: 15px;
   text-decoration: none;
}

.md-menu {
    margin: 24px;
    color: white;
  }
</style>
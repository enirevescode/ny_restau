<template>
   <div>
      <v-toolbar height="120">
         <v-img v-bind:src="require('@/assets/logo.webp')" alt="logo" />


         <v-spacer></v-spacer>
         <v-btn>
            <router-link active-class="active" to="/">Accueil</router-link>
         </v-btn>

         <!-- <v-btn> -->

            <v-btn>
            <router-link active-class="active" to="/menu">Menu</router-link>
         </v-btn>

         <v-btn>
            <router-link active-class="active" to="/contact">Contact</router-link>
         </v-btn>

         <v-btn>
            <router-link active-class="active" to="/apropos">A propos</router-link>
         </v-btn>


         <v-col cols="auto">
            <v-btn size="x-large" variant="outlined" color="white"><router-link active-class="active"
                  to="/resa">Réservation</router-link></v-btn>
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
header {
   background-color: transparent !important;
   position: absolute;
}

img {
   width: 90px;
   height: 35px;
   float: left;
   margin-left: 250px;
}

.active {
   font-weight: 900;
   color: rgb(250, 211, 144);
   font-size: 15px;
   text-decoration: none;
   letter-spacing: 1.2;
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
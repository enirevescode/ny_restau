<template>
   <div>
      <v-toolbar height="90">
         <v-img :src="require('@/assets/logo.webp')" alt="logo" height="50" class="ml-n16"  />


         <v-spacer></v-spacer>
         
    <navbar_route/>

         <v-col cols="auto" class="mr-16">
            <v-btn size="x-large" variant="outlined" color="white"><router-link active-class="active"
                  to="/resa">Réservation</router-link></v-btn>
         </v-col>
  
      </v-toolbar>
   </div>
</template>

<script>
import navbar_route from "@/components/navbar_route.vue"
export default {
    name: "navbar",
    component: 'navbar_route',
 
}
</script>

<style scoped>

.navbar {
   display: inline-flex;
   vertical-align: auto;
}

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

a {
   text-decoration: none;
   color: white;
}
.active {
   font-weight: 900;
   color: rgb(250, 211, 144);
   font-size: 15px;
   text-decoration: none;
   letter-spacing: 1.2;
}

/* .text-h6 {
   color: white;
   font-size: 15px;
   text-decoration: none;
} */

/* .md-menu {
   margin: 24px;
   color: white;
} */
</style>
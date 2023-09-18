<template>
   <div>
     
      <div class="navbar ml-n16">
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
      </div>
   </div>
</template>

<script>
export default {
   name: "navbar_route"
}
</script>

<style scoped>

.navbar {
   display: inline-flex;
   vertical-align: auto;
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
</style>
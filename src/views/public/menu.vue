<template>
    <v-container>
      <v-img :src="require('@/assets/architecture.jpg')">
      
   <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center px-4 text-white"
    elevation="0"
    height="auto"
    rounded
    width="100%"
    color="transparent"
   
  >
    <div class="section_titre">
      <h1 class="text-h2 font-weight"></h1>
      <br>

      <div class="text-h5 font-weight-medium mb-2 mx-16 px-16">
        
      </div>
    
    </div>
       
  </v-sheet>
</v-img>
  <v-divider
    :thickness="4"
    class="border-opacity-50"
    color="#fad390"
    max-width="10"
    vertical
  ></v-divider>
  <div class="titre">OUR LOCATION</div>
  <div class="sous-titre"><p class="text-center">3 E 19th St, 123 Fifth Avenue, NY 10160, New York, USA</p></div>

      <card_resa/>
      <formulaire/>
      <Footer1/>
      <router-view/>
   </v-container>
</template>
<script>
</script>
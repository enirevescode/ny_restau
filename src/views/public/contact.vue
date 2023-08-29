<template>
   <div class="bg-img-contact">
                
      <navbar/>
      
      <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 text-white"
    elevation="0"
    height="550"
    rounded
    max-width="900"
    width="100%"
    color="transparent"
  >
    <div>
      <h1 class="text-h2 font-weight">Contact Us !</h1>
      <br>

      <div class="text-h5 font-weight-medium mb-2">
         Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id. 
      </div>
    </div>
    
    <v-divider
    :thickness="5"
    class="border-opacity-100"
    color="#fad390"
    vertical
  ></v-divider>
    
  </v-sheet>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>     
      <card_signature/>
      <grid_photo/>
      <card_testimonial/>
      <card_resa/>
      <Footer1/>
      <router-view/>
   </div>
</template>

<script>
import navbar from '@/components/navbar.vue'

import card_signature from '@/components/card_signature.vue'
import grid_photo from '@/components/grid_photo.vue'
import card_testimonial from '@/components/card_testimonial.vue'
import card_resa from '@/components/card_resa.vue'
import Footer1 from '@/components/Footer1.vue'

export default {
   name: 'contact',
   component: 'contact',
   components: {
      navbar,
      card_signature,
      grid_photo,
      card_testimonial,
      card_resa,
      Footer1
   }
}
</script>
<style scoped>
.bg-img-contact{
   z-index: 1000;
   width: 100vw;
   height: 100vh;
   background-image: url('@/assets/contact-us.webp');
   background-size: cover;
  }

  .scroll{
   z-index: -1000;
   border-right: 10px;
   height: 100px;
   border-right-color: white;
}
</style>
 
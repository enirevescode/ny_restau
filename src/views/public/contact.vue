<template>
   <div class="bg-img-contact">
                
      
   <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center px-4 text-white"
    elevation="0"
    height="auto"
    rounded
    width="100%"
    color="transparent"
  >
    <div>
      <h1 class="text-h2 font-weight">Contact Us !</h1>
      <br>

      <div class="text-h5 font-weight-medium mb-2 mx-16 px-16">
         Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id.
      </div>
    
    </div>
       
  </v-sheet>

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
   </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import card_resa from '@/components/card_resa.vue'
import formulaire from '@/components/formulaire.vue'

import Footer1 from '@/components/Footer1.vue'

export default {
   name: 'contact',
   component: 'contact',
   components: {
      navbar,
      card_resa,
      formulaire,
      Footer1
   }
}
</script>
<style scoped>
.bg-img-contact{
   z-index: 1000;
   width: 100vw;
   height: 550px;
   background-image: url('@/assets/contact-us.webp');
   background-size: cover;
  }

  .titre{
   margin-top: 130px;
   margin-bottom: 40px;
   letter-spacing: 2px;
   font-size: 18px;
   font-weight: 700;
  }

.sous-titre {
   font-size: 5rem;
   font-weight: 700;
   margin-left: 205px;
   margin-right: 205px;
   line-height: 1.3;
}
</style>
 
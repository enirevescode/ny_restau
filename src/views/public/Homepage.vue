<template>
   <div class="bg-img-accueil">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <hero_accueil/>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <ambiance/>
      <Card_Menu/>
      <card_signature/>
      <grid_photo/>
      <our_teams/>
      <card_testimonial/>
      <card_resa/>
      <card_img_cake/>
      <Footer1/>
   </div>
</template>

<script>

import hero_accueil from '@/components/hero_accueil.vue'
import ambiance from '@/components/ambiance.vue'
import Card_Menu from '@/components/Card_Menu.vue'
import card_signature from '@/components/card_signature.vue'
import grid_photo from '@/components/grid_photo.vue'
import our_teams from '@/components/our_teams.vue'
import card_testimonial from '@/components/card_testimonial.vue'
import card_resa from '@/components/card_resa.vue'
import card_img_cake from '@/components/card_img_cake.vue'
import Footer1 from '@/components/Footer1.vue'

export default {
   name: 'Homepage',
   component: 'Homepage',
   components: {
      
      hero_accueil,
      ambiance,
      Card_Menu,
      card_signature,
      grid_photo,
      our_teams,
      card_testimonial,
      card_resa,
      card_img_cake,
      Footer1
   }
}
</script>
<style scoped>
.bg-img-accueil{
   width: 100vw;
   height: 100vh;
   background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(102, 99, 99, 0.56)),
   url('@/assets/homepage.webp');
   background-size: cover;
  }
</style>
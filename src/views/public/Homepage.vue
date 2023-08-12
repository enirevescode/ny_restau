<template>
   <div class="bg-img-accueil">
                
      <navbar/>
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
      <carte_menu/>
      <card_resa/>
      <footer1/>
      <router-view/>
   </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import hero_accueil from '@/components/hero_accueil.vue'
import ambiance from '@/components/ambiance.vue'
import carte_menu from '@/components/carte_menu.vue'
import card_resa from '@/components/card_resa.vue'
import footer1 from '@/components/footer1.vue'

export default {
   name: 'Homepage',
   component: 'Homepage',
   components: {
      navbar,
      hero_accueil,
      ambiance,
      carte_menu,
      card_resa,
      footer1
   }
}
</script>
<style>
.bg-img-accueil{
   z-index: 1000;
   width: 100vw;
   height: 100vh;
   background-image: url('@/assets/homepage.webp');
   background-size: cover;
  }
</style>
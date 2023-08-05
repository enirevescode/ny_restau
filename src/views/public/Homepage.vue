<template>
   <div class="bg-img-accueil">
                
      <navbar/>
      <hero_accueil/> 
      <router-view/>
   </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import hero_accueil from '@/components/hero_accueil.vue'
export default {
   name: 'Homepage',
   component: 'Homepage',
   components: {
      navbar,
      hero_accueil
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
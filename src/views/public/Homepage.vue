<template>
   <div class="bg-img-accueil">
           
     
      <navbar/>
    
      
      
      <router-view/>
   </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
   name: 'Homepage',
   component: 'Homepage',
   components: {
      navbar
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
   position: absolute;
   top: 0;
   display: block;
}
</style>
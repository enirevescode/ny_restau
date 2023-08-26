<template>
   <!-- 1ere card sans img -->
   <v-container>
      <v-row class="mt-6">
         <v-col
         v-for="photo in photos"
         :key="photo.src"
         alt="preparation plat"
         cols="4" 
         max-width ="410" 
         height="274" 
         class="mb-6">
            

                     <v-img 
                     :src="photo.src" 
                     cover hide-delimiter>

                     </v-img>
                 
         </v-col>
      </v-row>      
   </v-container>
</template>
<script>
export default {
   name: "grid_photo",
   data: () => ({
    
      photos: [
        { src: "require('@/assets/fine-dining-food.webp')", flex: 4 },
        { src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      ],
   }),
    
}

</script>
<style>
.v-container{
   max-width: 100%;
}
</style>
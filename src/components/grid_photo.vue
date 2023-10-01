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
                     :alt="photo.alt"
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
        { src: require('@/assets/fine-dining-food.webp'), alt:"dining", flex: 4 },
        { src: require('@/assets/lunch-together.webp'), alt:"lunch together", flex: 4 },
        { src: require('@/assets/lunch.webp'), alt:"lunch", flex: 4 },
        { src: require('@/assets/food-on-the-table.webp'), alt:"sort of food", flex: 4 },
        { src: require('@/assets/drink-at-daytime.webp'), alt:"drinking", flex: 4 },
        { src: require('@/assets/chef-in-restaurant-kitchen.webp'), alt:"Our Chief", flex: 4 },
        
      ],
   }),
    
}

</script>
<style scoped>
.v-container{
   max-width: 100%;
}
</style>
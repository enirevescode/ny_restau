<template>
   <!-- 1ere card sans img -->
   <v-container >
      <v-row>
         <v-col cols="6" max-width ="600" class="mb-6">
            <v-card class="my-10" variant="text">
               <v-card-text>
                  <p class="text-h2 font-weight-bold text--primary mb-3">
                     Meet The Team of NYUS</p>
                  <div class="text-disabled text-justify ml-2 mr-3 text-h6">Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non. Leo ut id vel nec nisi odio nisi. Auctor egestas nibh augue enim, ornare blandit.</div>
               </v-card-text>
            </v-card>

            <v-card class="my-10" variant="text">
               <v-card-item>
                  <div>
                     <v-img width ="600" height ="900" :src="require('@/assets/chef-2.webp')" :aspect-ratio="1" class= "d-flex justify-center align-center" 
                     alt="présentation plat par 1 serveur, fond noir" cover>

                     </v-img>

                  </div>
               </v-card-item>
            </v-card>

         </v-col>

         <v-col max-width="600" class="mb-6">
            <v-card max-width="488" class="mb-10" variant="text">
               <v-card-item>
                  <div>
                     <v-img width ="360" height ="540" :src="require('@/assets/chef.webp')" :aspect-ratio="1" class= "d-flex justify-center align-center" 
                     alt="serveur présentant 1 milkshake" cover>

                     </v-img>
                    
                  </div>
               </v-card-item>
            </v-card>
            <v-card class="my-10" variant="text">
               <v-card-item>
                  <div>
                     <v-img width ="520" height ="684" :src="require('@/assets/chef-3.webp')" :aspect-ratio="1" 
                     alt="serveur regard éloquant !" cover>
                     </v-img>
                    
                  </div>
               </v-card-item>
            </v-card>
         </v-col>

      </v-row>      
   </v-container>
</template>
<script>
export default {
   name: "our_teams"
}
</script>
<style scoped>
.v-container{
   max-width: 100%;
}

</style>
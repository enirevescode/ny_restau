<template>
   <!-- 1ere card sans img -->
   <v-container >
      <v-row>
         <v-col cols="6" max-width ="520" class="mb-6">
            <v-card class="my-10">
               <v-card-text>
                  <p class="text-h3 font-weight-bold text--primary mb-3">
                     Discover the Good Atmosphere of NYUS.</p>
                  <div class="text-body-2 text-justify">Greyhound divisely hello coldly fonwderfull. Neque elit, rutrum in
                     laoreet nec eget scelerisque volutpat sit. Bibendum tincidunt a scelerisque consectetur ultrices
                     elementum pulvinar non. Leo ut id vel nec nisi odio nisi. Auctor egestas nibh augue enim, ornare
                     blandit. Purus augue sagittis, risus phasellus egestas ipsum.</div>
               </v-card-text>
            </v-card>

            <v-card class="my-10">
               <v-card-item>
                  <div>
                     <v-img width ="520" height ="360" :src="require('@/assets/good-vibes.webp')" :aspect-ratio="1" class= "d-flex justify-center align-center" cover>

                     </v-img>
                     <div class="font-weight-bold text-left mt-6 mb-1 mr-10">Good Vibes</div>
                     <v-card-text>
                        <div class="text-body-2 text-left font-weight-regular ">
                           In total 650m² of hand-crafted decor, mix of styles and colors.
                        </div>
                     </v-card-text>

                  </div>
               </v-card-item>
            </v-card>

            <v-card>
               <v-card-item>
                  <div>
                     <v-img width ="520" height ="360" :src="require('@/assets/bg-image-cake.webp')" :aspect-ratio="1" cover hide-delimiter>

                     </v-img>
                  </div>
               </v-card-item>
            </v-card>
         </v-col>

         

         <v-col max-width="520" class="mb-6">
            <v-card max-width="488" class="mb-10">
               <v-card-item>
                  <div>
                     <v-img width ="520" height ="360" :src="require('@/assets/cozy-place.webp')" :aspect-ratio="1" cover>

                     </v-img>
                    
                        <div class="font-weight-bold text-left mt-2 mb-2">Cozy Place</div>
                     <v-card-text>
                        <div class="text-body-2 text-left font-weight-regular">
                           To make everyone entering the establishment feel at home and find their atmosphere.
                        </div>
                     </v-card-text>

                  </div>
               </v-card-item>
            </v-card>
            <v-card class="my-10">
               <v-card-item>
                  <div>
                     <v-img width ="520" height ="360" :src="require('@/assets/relax.webp')" :aspect-ratio="1" cover>
                     </v-img>
                     <div class="font-weight-bold text-left my-2">Relax Atmosphere</div>
                     <v-card-text>
                        <div class="text-body-2 text-left font-weight-regular">
                           Take refuge in our exclusive haven of greenery and away from the crowds. Live music and performances every Friday night!						
                        </div>
                     </v-card-text>
                  </div>
               </v-card-item>
            </v-card>
         </v-col>

      </v-row>      
   </v-container>
</template>
<script>
export default {
   name: "ambiance"
}
</script>
<style scoped>
.v-container{
   max-width: 100%;
}
</style>
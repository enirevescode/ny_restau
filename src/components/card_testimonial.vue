<template>
   <div class="testi">
   <h3 class="text-h5">TESTIMONIAL</h3>
   <h2 class="text-h2">What They Say</h2>
   
     
  <v-container pa-16>
    <v-row no-gutters>
      <v-col order="last">
        <v-sheet 
        class="pa-6 ma-2 bg-black"
        width="367px"
        height="319px"
        rounded="lg"
        >
          
         Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel.
         Kyle Smith


        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet 
        class="pa-6 mb-16 bg-black"
        width="367px"
        height="319px"
        rounded="lg"
        >
          
Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel.
Dian Annakin

        </v-sheet>
      </v-col>
      <v-col order="first">
        <v-sheet 
        class="pa-6 ma-2 bg-black"
        width="367px"
        height="319px"
        rounded="lg"
        >
         Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel.
Emma Odinson
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

   </div>
</template>
<script>
export default {
   name: "card_testimonial"
}
</script>
<style scoped>
.testi{
   background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgb(255, 255, 255, 0.8)),
   url('@/assets/testimonail-section.webp');
   opacity: 1;
   transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
   height: 669px;
}


.text-h5{
   color: white;
   font-weight: 700;
   padding-bottom: 70px;
   padding-top: 70px;
   letter-spacing: 2px;
   line-height: 1.7;
}

.text-h2{
   line-height: 1.3;
   color: white;
   font-size: 3rem;
   font-weight: 700;
   letter-spacing: 2px;
}
</style>
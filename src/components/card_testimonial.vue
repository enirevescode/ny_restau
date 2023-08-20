<template>
   <div class="testi">
   <h3 class="text-h5">TESTIMONIAL</h3>
   <h2 class="text-h2">What They Say</h2>
   
     
  <v-container>
    <v-row no-gutters>
      <v-col order="last">
        <v-avatar size="95" color="#f5c61c">
         <v-img width ="80" height ="80" :src="require('@/assets/kyle.png')" :aspect-ratio="1" class= "mx-auto" >
        </v-img>
        </v-avatar>
        <v-sheet 
        class="pt-16 px-6 mb-n16 bg-black text-h6"
        width="367px"
        height="319px"
        rounded="lg"
        >
          
         Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel.

         Kyle Smith

        </v-sheet>
      </v-col>
      <v-col>

        <v-avatar size="95" color="#f5c61c">
         <v-img width ="80" height ="80" :src="require('@/assets/diana.png')" :aspect-ratio="1" class= "mx-auto" >
        </v-img>
        </v-avatar>

        <v-sheet 
        class="pt-16 px-6 mb-n16 bg-black text-h6"
        width="367px"
        height="319px"
        rounded="lg"
        >
          
Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel.
Diana Annakin

        </v-sheet>
      </v-col>
      <v-col order="first">
        <v-avatar size="95" color="#f5c61c">
         <v-img width ="80" height ="80" :src="require('@/assets/emma.png')" :aspect-ratio="1" class= "mx-auto" >
        </v-img>
        </v-avatar>
        <v-sheet 
        class="pt-16 px-6 mb-n16 bg-black text-h6"
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
   background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)),
   url('@/assets/testimonail-section.webp');
   opacity: 1;
   transition: background 0.8s, border-radius 0.8s, opacity 0.8s;
   height: 669px;
}


.text-h5{
   color: white;
   font-weight: 700;
   padding-bottom: 50px;
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

.v-avatar {
  z-index: 1000;
  margin-bottom: -40px;
}

.v-container {
  margin-top: 120px;
}

</style>
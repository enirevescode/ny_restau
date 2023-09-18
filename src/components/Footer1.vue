<template>
<v-container class="mt-10">

 <v-row class="bg-black">
  
<v-col cols="3">
  <br>
  <br>
  <br>
  <br>
  <br>
  <v-card class="bg-black ml-1">
<v-img 
v-bind:src="require('@/assets/logo.webp')"
:width="120"
alt="logo" />
<v-card-text class="text-justify">
  Egestas sit in lobortis duis viverra enim eros ornare. Et tincidunt pretium curabitur vehicula turpis adipiscing donec. Et ut morbi magna quis purus aliquet.
</v-card-text>
<v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-3"
        :icon="icon"
        variant="plain"
        size="small"
        ></v-btn>
</v-card>
</v-col>
<v-col cols="3">
  <br>
  <br>
  <br>
  <br>
  <br>
  <v-card class="bg-black ml-1" title="Our Location">
    <div class="text-left">
      <p> 3 E 19th St, 123 Fifth Avenue,</p>
      <p>NY 10160, New York, USA </p>
      <p>1 234 567 890</p>
    </div>
     
    
  <v-card-actions>
    <v-btn>Get location</v-btn>
  </v-card-actions>
</v-card>
</v-col>
<v-col cols='3'>
  <br>
  <br>
  <br>
  <br>
  <br>
  <v-card class="bg-black ml-1" title="Quick Links">
    <navbar_route/>
  </v-card>
</v-col>
<v-col>
  <br>
  <br>
  <br>
  <br>
  <br>
  <v-card title="Opening Hours" class="bg-black">
    <div >
<p>

Sunday to Wednesday<br>

9AM - 10.30PM<br><br>

Thursday, Friday, Saturday<br>

9AM - 12.30AM
</p>
    </div>
  </v-card>
</v-col>
 </v-row>
</v-container>
</template>
<script>
import navbar_route from '@/components/navbar_route.vue'
export default {

   data: () => ({
  name: ''
  components: 'navbar_route',

    icons: [
       'mdi-facebook',
       'mdi-twitter',
       'mdi-linkedin',
       'mdi-instagram',
      ],
    }),
}
</script>
<style scoped>
.v-container{
  
  max-width: 100%;
  
}

 
</style>
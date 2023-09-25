<template>
<v-row>
    <v-col cols="4" class="appetizer">
        <v-img
        :src="require('@/assets/appetizer.webp')"
        width="480"
        height="445"
        ></v-img>

    </v-col>
    <v-col cols="8" class="appetizer">
  
    <h2 class="mt-10">Appetizer</h2>
   
        <p class="text-left">Lorem sollicitudin quis amet, pellentesque et proin. Venenatis iaculis nibh neque sit ullamcorper ac dictumst. Amet dignissim nunc gravida eu vestibulum elit. In lorem ornare sollicitudin aliquet nunc cum massa.</p>
   
    <v-col cols="3" class="float-left mt-6">
        <v-img
        :src="require('@/assets/plate-of-cookie.webp')"
        height="100"
        ></v-img>
    </v-col>
    <v-col cols="6" class="float-left mt-6">
        <div class="titre">SIGNATURE</div>
        <div class="font-weight-bold">Strawberry And Grapes Cake</div>
        <div class="text-disabled">In lorem ornare sollicitudin aliquet nunc cum massa.</div>
        <div class="font-weight-bold">8.00</div>
    </v-col>
</v-col>
</v-row>


    <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-16"
    color="transparent"
    elevation="0"
    height="550"
    rounded
    max-width="900"
    width="100%"
  >
  
    <div>
      <h1 class="text-h4 font-weight-black mt-16">Réservation</h1>

      <div class="text-h6 font-weight-medium my-2">
        Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non.
      </div>

      <v-btn variant="outlined"
      class="text-h5"
      >Book A Table</v-btn>
      <v-spacer></v-spacer>

      <p class="text-h3 my-4">
        
       <v-icon icon="mdiPhone"></v-icon>Telephone Reservations
      </p>
<p class="tel">12 34 56 7829</p>
      </div>

      <v-img
      :src="require('@/assets/cake.webp')"
      width="275"
      height="400"
      id="cake"
      ></v-img>
  </v-sheet>
</template>
<script>

export default {
   name: "appetizer"
}
</script>
<style scoped>

.appetizer{
    margin-top: 164px;
    left: 0;
    padding: 0;
    margin-left: 0;
}

.titre {
    color: rgb(250, 211, 144);
    font-weight: 500;
}


</style>
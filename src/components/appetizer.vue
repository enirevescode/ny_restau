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
        class="img"
        ></v-img>
    </v-col>
    <v-col cols="6" class="float-left mt-6">
        <div class="titre">SIGNATURE</div>
        <div class="font-weight-bold">Strawberry And Grapes Cake</div>
        <div class="text-disabled">In lorem ornare sollicitudin aliquet nunc cum massa.</div>
        <div class="font-weight-bold">9.00</div>
    </v-col>
</v-col>
</v-row>
</template>
<script>

export default {
   name: "appetizer"
}
</script>
<style scoped>

.appetizer{
    margin-top: 171px;
    padding: 0;
}

.titre {
    color: rgb(250, 211, 144);
    font-weight: 500;
}

h2 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0% 10% 0% 16%;
}
.text-left {
    margin: 0% 10% 0% 16%;
}
.img {
    margin: 0% 10% 0% 56%;
}
</style>
<template>
  <!-- <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
    color="transparent"
    elevation="0"
    height="550"
    rounded
    max-width="900"
    width="100%"
  > -->
      <v-img
      :src="require('@/assets/cake.webp')"
      width="275"
      height="400"
      id="cake"
      ></v-img>
  <!-- </v-sheet> -->

</template>
<script>
export default {
   name: "card_img_cake"
}
</script>
<style scoped>

#cake {
  position: relative;
  top: 110px;
  left: 1470px;
}
</style>
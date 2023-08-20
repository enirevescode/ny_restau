<template>
  <v-container>
    <h2 class="text-h5">OUR MENU</h2>
    <br />
    <br />
    <v-row>
      <v-col cols="4">
        <v-divider :thickness="1" class="border-opacity-100 ms-12 my-5" color="white" inset
          ><span class="divider"></span
        ></v-divider>
      </v-col>
      <v-col cols="4">
        <h2 class="text-h3">Get Relax. Eat.</h2>
      </v-col>
      <v-col cols="4">
        <v-divider :thickness="1" class="border-opacity-100 ms-1 my-5" color="white" inset
          ><span class="divider"></span
        ></v-divider>
      </v-col>
    </v-row>

    <v-table> </v-table>
  </v-container>
</template>
<script>
export default {
  name: "ourmenu",
};
</script>
<style scoped>
/* .divider {
  width: 408px !important;
  margin-top: 50px;
  display: inline; */
/* direction: ltr; */

/* } */

.v-container {
  background-color: black;
  max-width: 100%;
}

.text-h5,
.text-h3 {
  color: white;
}
</style>

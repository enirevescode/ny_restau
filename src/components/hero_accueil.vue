
<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 text-white"
    elevation="0"
    height="550"
    rounded
    max-width="900"
    width="100%"
    color="transparent"
  >
    <div>
      <h1 class="text-h2 font-weight">A Really Good Place to Eat In the City of New York!</h1>
      <br>

      <div class="text-h6 font-weight-medium mb-2">
        You are officially a part of the Vuetify Community!
      </div>

      <p class="text-body-2 mb-4">
        Please head over to your inbox/spam or others folder to find our verificaiton email.
      </p>

      <v-btn variant="text">Go to Login</v-btn>

      
    </div>
    
    <v-divider
        :thickness="5"
    class="border-opacity-100"
    color="#fad390"
    vertical
  ></v-divider>
    
  </v-sheet>
</template>


<script>
export default {
   name: "hero_accueil"
}
</script>
<style scoped>
.scroll{
   z-index: -1000;
   border-right: 10px;
   height: 100px;
   border-right-color: white;
}
</style>
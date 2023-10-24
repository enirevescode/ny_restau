<!-- CARD MENU - PRESENTATION SUR HOMEPAGE DE QUELQUES PLATS -->
<template>
  <v-container>
    <h2 class="text-h5" align="center">OUR MENU</h2>
    <br />
    <br />
    <v-row>
      <v-col cols="4">
        <v-divider :thickness="1" class="border-opacity-100 ms-12 my-5" color="white" inset></v-divider>
      </v-col>
      <v-col cols="4">
        <h2 class="text-h3" align="center">Get Relax. Eat.</h2>
      </v-col>
      <v-col cols="4">
        <v-divider :thickness="1" class="border-opacity-100 ms-1 my-5" color="white" inset></v-divider>
      </v-col>
    </v-row>
    <div class="text-h5 text-center font-weight-100 mt-10">Neque elit, rutrum in laoreet nec eget scelerisque volutpat
      sit. Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non.</div>

    <v-container class="mt-10">
      <v-row align="start" no-gutters style="height: 120px;">
        <v-col v-for="n in 2" :key="n">
          <v-sheet class="px-3 mx-3" color= "#1a1a1a">
            <p class="text-h6 text-left">LEMON AND GARLIC GREEN BEANS - 15.00</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">Lemon / Garlic / Beans</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="white" inset></v-divider>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row align="start" no-gutters style="height: 120px;">
        <v-col v-for="n in 2" :key="n">
          <v-sheet class="px-3 mx-3" color= "#1a1a1a">
            <p class="text-h6 text-left">BACON-WRAPPED SHRIMP WITH GARLIC - 21.50</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">Bacon / Shrimp / Garlic</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="white" inset></v-divider>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row align="start" no-gutters style="height: 120px;">
        <v-col v-for="n in 2" :key="n">
          <v-sheet class="px-3 mx-3" color= "#1a1a1a">
            <p class="text-h6 text-left">LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI - 18.50</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">Lamb / Wine / Butter</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="white" inset></v-divider>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row align="start" no-gutters style="height: 120px;">
        <v-col v-for="n in 2" :key="n">
          <v-sheet class="px-3 mx-3" color= "#1a1a1a">
            <p class="text-h6 text-left">IMPORTED OYSTER GRILL (5 Pieces) - 20.00</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">Oysters / Veggie / Ginger</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="white" inset></v-divider>
          </v-sheet>
        </v-col>
      </v-row>

      <v-card-actions>
        <v-btn variant="outlined" color="white" @click="reveal = true" class="mx-auto">
          VIEW ALL MENU
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <v-row align="start" no-gutters style="height: 100%;" v-if="reveal" class="v-card--reveal">
          <v-col v-for="n in 2" :key="n">
            <v-sheet class="px-3 mx-3" color= "#1a1a1a">
              <p class="text-h6 text-left">IMPORTED OYSTER GRILL (5 Pieces) - 20.00</p>
              <p class="text-subtitle-1 text-left" color="#7a7a7a">Oysters / Veggie / Ginger</p>
              <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="white" inset></v-divider>
            </v-sheet>
          </v-col>
          <v-card-actions class="pt-0">
            <v-btn variant="outlined" color="white" @click="reveal = false">
              Fermer
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-expand-transition>
    </v-container>

  </v-container>
</template>
<script>
export default {
  name: "ourmenu",
  data: () => ({
    reveal: false,
  }),
};
</script>
<style scoped>
.v-container {
  background-color: #1a1a1a;
  max-width: 100%;
}

.text-h5,
.text-h3, .text-h6 {
  color: white;
}

.text-center {
  margin-left: 260px;
  margin-right: 260px;
}

.text-subtitle-1 {
  color: #7a7a7a;
}
</style>

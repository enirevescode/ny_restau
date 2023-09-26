<template>
   <v-container class="my-16 mx-16">
      <v-row align="strech" no-gutters style="height: 150px;" v-for="menu in menus" :key="menu.id">
        <v-col>
          <v-sheet class="px-3 mx-6 mt-6" color="black">
            <p class="text-h6 text-left">{{menu.plat}} - {{ menu.prix }}</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">{{menu.ingredient}}</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="#7a7a7a" inset></v-divider>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="px-3 mx-6 mt-6" color="black">
            <p class="text-h6 text-left">{{menu.plat}} - {{ menu.prix }}</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">{{menu.ingredient}}</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="#7a7a7a" inset></v-divider>
          </v-sheet>
        </v-col>
      </v-row>
   </v-container>
</template>
<script>
export default {
   name: "carte_menu", 
   data: () => ({

   menus : [
         {
       id: 1,
       plat: "LEMON AND GARLIC GREEN BEANS",
       prix: "15.00",
       ingredient: "Lemon / Garlic / Beans",
         },
         {
       id: 2,
       plat: "BACON-WRAPPED SHRIMP WITH GARLIC",
       prix: "21.50",
       ingredient: "Bacon / Shrimp / Garlic",
         },
         {
       id: 3,
       plat: "LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI",
       prix: "18.50",
       ingredient: "Lamb / Wine / Butter",
         },
         {
       id: 4,
       plat: "IMPORTED OYSTERS GRILL (5 PIECES)",
       prix: "20.00",
       ingredient: "Oysters / Veggie / Ginger",
         },
         {
         id: 5,
       plat: "LEMON AND GARLIC GREEN BEANS",
       prix: "15.00",
       ingredient: "Lemon / Garlic / Beans",
         },
         {
       id: 6,
       plat: "BACON-WRAPPED SHRIMP WITH GARLIC",
       prix: "21.50",
       ingredient: "Bacon / Shrimp / Garlic",
         },
         {
       id: 7,
       plat: "LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI",
       prix: "18.50",
       ingredient: "Lamb / Wine / Butter",
         },
         {
       id: 8,
       plat: "IMPORTED OYSTERS GRILL (5 PIECES)",
       prix: "20.00",
       ingredient: "Oysters / Veggie / Ginger",
         },
         ]
      }),
   }
</script>
<style scoped>
.v-container {
  background-color: black;
  max-width: 100%;
}

.text-subtitle-1 {
  color: #7a7a7a;
}
</style>
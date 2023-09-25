<template>
   <v-container class="mt-15" >
      <v-row align="strech" no-gutters style="height: 120px;" v-for="menu in menus" :key="menu.id">
        <v-col>
          <v-sheet class="px-3 mx-6" color="black">
            <p class="text-h6 text-left">{{menu.plat}} - {{ menu.prix }}</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">{{ingredient}}</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="white" inset></v-divider>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="px-3 mx-6" color="black">
            <p class="text-h6 text-left">{{menu.plat}} - {{ menu.prix }}</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">{{ingredient}}</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="white" inset></v-divider>
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

.text-center {
  margin-left: 260px;
  margin-right: 260px;
}

.text-subtitle-1 {
  color: #7a7a7a;
}
</style>
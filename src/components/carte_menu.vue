<template>
   <v-container class="my-16 mx-16">
      <v-row align="strech" no-gutters style="height: 120px;">
        <v-col>
          <v-sheet class="px-3 mx-6 mt-6" color="transparent" :id=menu.id+menu.category>
            <p class="text-h6 text-left">{{menu.plat}} - {{ menu.prix }}</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">{{menu.ingredient}}</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="#7a7a7a" inset></v-divider>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="px-3 mx-6 mt-6" color="transparent">
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
          category: "appetizer",
          plat: "LEMON AND GARLIC GREEN BEANS",
          prix: "15.00",
          ingredient: "Lemon / Garlic / Beans",
            },
            {
          id: 2,
          category: "appetizer",
          plat: "BACON-WRAPPED SHRIMP WITH GARLIC",
          prix: "21.50",
          ingredient: "Bacon / Shrimp / Garlic",
            },
            {
          id: 3,
          category: "appetizer",
          plat: "LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI",
          prix: "18.50",
          ingredient: "Lamb / Wine / Butter",
            },
            {
          id: 4,
          category: "appetizer",
          plat: "IMPORTED OYSTERS GRILL (5 PIECES)",
          prix: "20.00",
          ingredient: "Oysters / Veggie / Ginger",
            },
            {
            id: 5,
            category: "appetizer",
          plat: "LEMON AND GARLIC GREEN BEANS",
          prix: "15.00",
          ingredient: "Lemon / Garlic / Beans",
            },
            {
          id: 6,
          category: "appetizer",
          plat: "BACON-WRAPPED SHRIMP WITH GARLIC",
          prix: "21.50",
          ingredient: "Bacon / Shrimp / Garlic",
            },
            {
          id: 7,
          category: "appetizer",
          plat: "LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI",
          prix: "18.50",
          ingredient: "Lamb / Wine / Butter",
            },
            {
          id: 8,
          category: "appetizer",
          plat: "IMPORTED OYSTERS GRILL (5 PIECES)",
          prix: "20.00",
          ingredient: "Oysters / Veggie / Ginger",
            },
            {
          id: 9,
          category: "main",
          plat: "Entrecôte - French Fries",
          prix: "20.00",
          ingredient: "Beef / Veggie / Potatoes",
            },
            {
          id: 10,
          category: "main",
          plat: "Cassoulet - Saucisses",
          prix: "20.00",
          ingredient: "Beans / Saucisses",
            },
            {
            id: 11,
          category: "main",
          plat: "Entrecôte - French Fries",
          prix: "20.00",
          ingredient: "Beef / Veggie / Potatoes",
            },
            {
          id: 12,
          category: "main",
          plat: "Cassoulet - Saucisses",
          prix: "20.00",
          ingredient: "Beans / Saucisses",
            },
            {
            id: 13,
          category: "main",
          plat: "Moules - French Fries",
          prix: "20.00",
          ingredient: "Moules / Veggie / Potatoes",
            },
            {
          id: 14,
          category: "main",
          plat: "Saucisses - Lentilles",
          prix: "20.00",
          ingredient: "Lentilles Vertes / Saucisses",
            },
          ]
      }),
   }
</script>
<style scoped>
.v-container {
  background-color: #1a1a1a;
  padding: 104px 104px 104px 104px!important;
}

.text-subtitle-1 {
  color: #7a7a7a;
}

.text-h6 {
  color: white;
}
</style>
<script>
export default {
  name: "Card_menu",
  data: () => ({
    entrees : [
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
    ]
  })
}
</script>
<template>
   <v-container class="my-16 mx-16">
      <v-row align-content='stretch' no-gutters style="height: 110px;" v-for="entree in entrees" :key="entree.id">
        <v-col cols="6" v-for="n in 2">
          <v-sheet class="px-3 mx-6 mt-6" color="transparent">
            <p class="text-h6 text-left"> {{ entree.plat }} - {{entree.prix }}€</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">{{ entree.ingredient }}</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="#7a7a7a" inset></v-divider>
          </v-sheet>
        </v-col>
      </v-row>
   </v-container>
</template>

<style scoped>
.v-container {
  background-color: #1a1a1a;
  padding: 50px 50px 50px 50px!important;
  margin: auto !important;;
  width: 100rem;
}

.text-subtitle-1 {
  color: #7a7a7a;
}

.text-h6 {
  color: white;
  font-weight: 200;
}
</style>
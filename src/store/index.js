import { createStore } from 'vuex'

export default createStore({
  state: {
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
      ],
      desserts : [
        {
          id: 9,
          category: "sweet",
          plat: "Tiramisu",
          prix: "10.00",
          ingredient: "Mascarpone / Amaretto / Café / Biscuit",
        },
        {
          id: 10,
          category: "sweet",
          plat: "Tiramisu Fraise",
          prix: "12.00",
          ingredient: "Mascarpone / Amaretto / Fraises / Biscuit",
        },
        {
          id: 11,
          category: "sweet",
          plat: "Tiramisu Framboise",
          prix: "15.00",
          ingredient: "Mascarpone / Amaretto / Framboises / Biscuit",
        },
        {
          id: 11,
          category: "sweet",
          plat: "3 Profitéroles au chocolat",
          prix: "15.00",
          ingredient: "Choux / Glace / Coulis choco",
        },
        {
          id: 12,
          category: "sweet",
          plat: "3 Profitéroles Fraise",
          prix: "15.00",
          ingredient: "Choux / Glace / Coulis fruits rouges",
        },
      ]
    
  },
  getters: {
    getEntreesInMenu: (state) => {
      return state.entrees;
    },
    getDessertInMenu: (state) => {
      return state.desserts;
    }


  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

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
    
  },
  getters: {
    getEntreesInMenu: (state) => {
      return state.entrees;
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

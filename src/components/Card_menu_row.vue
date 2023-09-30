<template>
    <div class="menu_row">
     <Card_menu v-for="(card, index) in 2" :key="index"/>
    </div>
     
 </template>
 <script>
 import Card_menu from '@/components/Card_menu.vue'
 export default {
    name: "Card_menu_row",
    components: {Card_menu}
    }
 </script>
 <style scoped>
 .menu_row {
   display: flex;
   flex-direction: row;
   align-items: center;
 }
 </style>
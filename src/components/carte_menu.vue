<template>
 
  <Card_menu_row/>

</template>
<script>
//IMPORT SRCES
import Data_menu from '@/data/Data_menu.json';


//COMPONENTS
import Card_menu_row from '@/components/Card_menu_row.vue'

export default {

 name: "carte_menu",
 components: { Card_menu_row, Data_menu },
}
</script>
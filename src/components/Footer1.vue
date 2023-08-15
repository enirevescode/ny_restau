<template>
<v-container>
 <v-row class="bg-black">
<v-col cols="4">
  <v-card class="bg-black">
<v-img 
v-bind:src="require('@/assets/favicon.png')"
:width="32"
alt="logo" /><v-card-text>N Y U S</v-card-text>
<v-card-text>
  Egestas sit in lobortis duis viverra enim eros ornare. Et tincidunt pretium curabitur vehicula turpis adipiscing donec. Et ut morbi magna quis purus aliquet.
</v-card-text>
<v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
        
      ></v-btn>
</v-card>
</v-col>
 </v-row>
</v-container>
</template>
<script>
export default {
  
   data: () => ({
    value: 0,
    links: [
        'Homepage',
        'apropos',
        'menu',
        'resa',
        'Contact',
      ],
    icons: [
       'mdi-facebook',
       'mdi-twitter',
       'mdi-linkedin',
       'mdi-instagram',
      ],
    }),
}
</script>
<style scoped>

</style>
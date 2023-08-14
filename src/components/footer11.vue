<template>
      
      <v-footer class="bg-black">
         <v-row justify="center" no-gutters>
            <v-col cols="4">
               <v-app-bar-nav-icon><img v-bind:src="require('@/assets/favicon.png')"
               alt="logo" /></v-app-bar-nav-icon>
            </v-col>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>

      </v-footer>
</template>
<script>
export default {
   name: "footer1",
   data: () => ({
      links: [
        'Homepage',
        'apropos',
        'menu',
        'resa',
        'Contact',
      ],
    }),
}
</script>
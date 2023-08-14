<template>
   <div>
      oh ! La boulette, la boulette ! Cette page n'existe pas !
   </div>
   <div class="position-absolute d-flex align-center justify-center w-100 h-100">
      <v-btn
        size="x-large"
        @click="goHome()"
      >
        Retour à l'accueil
      </v-btn>
    </div>
</template>

<script>
export default {
   name: 'redirection',
   component: 'redirection',
   methods: {
      goHome (){
         this.$router.push(('/'))
      }
   }
}
</script>
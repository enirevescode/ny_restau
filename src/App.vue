<template>
  <navbar/>
  <router-view/>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  components: {
    navbar
  }
}
</script>
<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg-img {
  z-index: 1000;
   width: 100vw;
   height: 550px;
   background-size: cover;
}

.v-container {
  max-width: 100%;
}
body {
  margin: 0;
  padding: 0;
}
</style>

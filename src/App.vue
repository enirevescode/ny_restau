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

.v-container {
  max-width: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>

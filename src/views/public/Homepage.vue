<template>
   <div>
      <navbar/>
      <router-view/>
   </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
   name: 'Homepage',
   component: 'Homepage',
   components: {
      navbar
   }
}
</script>
<style>

</style>
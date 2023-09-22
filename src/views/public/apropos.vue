<template>
   <div id="about" :class="bg-img">
      
   </div>
</template>

<script>
export default {
   name: 'apropos',
   component: 'apropos'
}
</script>
<style module>
#about {
   background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)),
   url('@/assets/about-section.webp');
}
</style>
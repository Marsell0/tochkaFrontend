<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
    MainLayout
  }
}
</script>


<style>

</style>

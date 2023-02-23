<template>
  <div class="w-screen">
    <NavHeader />
  </div>
</template>
<script>
import { ref } from 'vue'
import NavHeader from './Navbar.vue'

export default {
  name: 'HeaderComp',
  components: {
    NavHeader,
  },
}
</script>

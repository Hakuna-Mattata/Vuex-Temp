<template>
  <HeaderComp />
  <TopComp />
</template>
<script>
import HeaderComp from './components/header/Header.vue'
import TopComp from './components/top-comp/TopComp.vue'
export default {
  name: 'AppComp',
  components: {
    HeaderComp,
    TopComp,
  },
}
</script>

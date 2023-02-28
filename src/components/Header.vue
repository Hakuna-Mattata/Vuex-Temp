<template>
  <header>
    <div class="text-6xl text-red w-[200px]">
      {{ title }}
    </div>
    <img class="fixed top-10 right-14 w-30 h-60" src="./logo-right.png" />
    <ButtonItem
      v-show="homePage"
      @add-click="$emit('show-add')"
      :color="showAddText ? 'red' : 'black'"
      :text="showAddText ? 'close' : 'Add Task'"
    />
  </header>
</template>

<script>
import ButtonItem from './Button'
export default {
  name: 'HeaderItem',
  props: {
    title: {
      type: String,
      default: 'Hello World!',
    },
    showAddText: Boolean,
  },
  components: {
    ButtonItem,
  },
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
</style>

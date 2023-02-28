<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    color: String,
    text: String,
  },
  methods: {
    onClick() {
      this.$emit('add-click')
    },
  },
}
</script>

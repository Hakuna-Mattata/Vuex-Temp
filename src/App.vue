<template>
  <div class="container">
    <HeaderItem
      title="Steal What?"
      @show-add="showAdd"
      :showAddText="showAddTask"
    />
    <router-view :showAddTask="showAddTask"></router-view>
    <FooterComp />
  </div>
</template>

<script>
import HeaderItem from './components/Header'
import FooterComp from './components/Footer'
export default {
  name: 'App',
  components: {
    HeaderItem,
    FooterComp,
  },
  data() {
    return {
      showAddTask: false,
    }
  },
  methods: {
    showAdd() {
      this.showAddTask = !this.showAddTask
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: cursive;
}

.container {
  max-width: 500px !important;
  margin: 40px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>

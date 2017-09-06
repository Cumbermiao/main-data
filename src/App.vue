<template>
  <div id="app">
    <menu-bar></menu-bar>
    <div class="main">
      <home></home>
    </div>

  </div>
</template>

<script>

import Home from './container/home/home'
import MenuBar from './components/menubar'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components:{
    Home,
    MenuBar
  }
  
}
</script>

<style>
.main{
  padding: 0 30px;
  box-sizing: border-box;
  width: 1330px;
  margin: 0 auto;
}
</style>

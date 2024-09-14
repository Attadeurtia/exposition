<template>
  <div id="app">
  </div>
  <HeaderWithArrow />
  <ImageWithText />
</template>

<script>
import ImageWithText from './components/GalerieDeDOeuvres.vue'
import HeaderWithArrow from './components/HeaderWithArrow.vue'

export default {
  name: 'App',
  components: {
    ImageWithText,
    HeaderWithArrow

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
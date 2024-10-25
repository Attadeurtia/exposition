<template>
  <div id="app">
  </div>
  <HeaderWithArrow />
  <MapComponent />
  <ImageWithText />
  <FooterHeures />
  <RouterView/>
</template>

<script>
import ImageWithText from './components/GalerieDeDOeuvres.vue'
import HeaderWithArrow from './components/HeaderWithArrow.vue'
import FooterHeures from './components/FooterHeures.vue'
import MapComponent from './components/MapComponent.vue'


export default {
  name: 'App',
  components: {
    ImageWithText,
    HeaderWithArrow,
    MapComponent,
    FooterHeures
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c3bec8;
}
</style>
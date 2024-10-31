<template>
  <div id="HomePage">
  </div>
  <HeaderWithArrow />
  <MapComponent />
  <DuchessesTimeline />
  <FooterHeures />
  <RouterLink :to="{ name: 'newpage' }">Go to new page</RouterLink>

</template>

<script>
import HeaderWithArrow from './HeaderWithArrow.vue'
import FooterHeures from './FooterHeures.vue'
import MapComponent from './MapComponent.vue'
import DuchessesTimeline from './DuchessesTimeline.vue';



export default {
  name: 'HomePage',
  components: {
    HeaderWithArrow,
    MapComponent,
    FooterHeures,
    DuchessesTimeline
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #A3BAC3;
}
</style>
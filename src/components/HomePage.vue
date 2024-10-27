<template>
  <div id="HomePage">
  </div>
  <HeaderWithArrow />
  <MapComponent />
  <ImageWithText />
  <DuchessesCard />
  <FooterHeures />
  <RouterLink :to="{name: 'newpage'}">Go to new page</RouterLink>

  <RouterView/>
</template>

<script>
import ImageWithText from './GalerieDeDOeuvres.vue'
import HeaderWithArrow from './HeaderWithArrow.vue'
import FooterHeures from './FooterHeures.vue'
import MapComponent from './MapComponent.vue'
import DuchessesCard from './DuchessesCard.vue';



export default {
  name: 'HomePage',
  components: {
    ImageWithText,
    HeaderWithArrow,
    MapComponent,
    FooterHeures,
    DuchessesCard
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
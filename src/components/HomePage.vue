<template>
  <div id="HomePage">
  </div>
  <HeaderWithArrow />
  <MapComponent />
  <DuchessesTimeline />
  <FooterHeures />
</template>

<script>
import HeaderWithArrow from './HeaderWithArrow.vue'
import FooterHeures from './FooterHeures.vue'
import DuchessesTimeline from './DuchessesTimeline.vue';


export default {
  name: 'HomePage',
  components: {
    HeaderWithArrow,
    FooterHeures,
    DuchessesTimeline
  }
}

</script>

<style>
@import '../assets/css/couleurs.css';

#app {
  font-family: 'Luciole', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
  text-align: start;
  color: var(--text-color);
}

</style>
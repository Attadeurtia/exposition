<template>
  <h1 class="titre">Marguerite de Foix</h1>
  <p class="descriptif">Duchesse de Bretagne et reine de France, elle a joué un rôle clé dans l'histoire de la Bretagne.</p>
  <MapComponent />


<div class="container">
  <div class="item" v-for="(image, index) in images" :key="index">
    <img :src="image.src" :alt="image.alt">
    <!-- rect: Rectangle -->
    <div class="shape rect rectangle-32bfb2516c1d">
      <div class="shape circle ellipse-haut-droite"></div>
      <div class="shape circle ellipse-haut-gauche"></div>
      <div class="shape circle ellipse-bas-droite"></div>
      <div class="shape circle ellipse-bas-gauche"></div>

      <div class="texte" v-html="image.text"></div>
    </div>
  </div>

</div>


<button @click="goBack" class="back-button">←</button>
</template>

<script>
import MarkdownIt from 'markdown-it';
import MapComponent from '../MapComponent.vue'

import '@/assets/css/duchesses.css';



export default {
name: 'MargueriteDeFoix',
components: {
  MapComponent
},

data() {
  return {
    images: []
  };
},
async created() {
  const context = require.context('@/assets/Duchesses/Marguerite de Foix', false, /\.(jpeg|jpg|png)$/);
  this.images = context.keys().map((key, index) => ({
    id: index + 1,
    src: context(key),
    title: `Image ${index + 1}`,
    text: ''
  }));
},
mounted() {
  this.loadMarkdownTexts();
},
methods: {
  async loadMarkdownTexts() {
    const md = new MarkdownIt();
    for (let image of this.images) {
      try {
        // Charger le fichier Markdown correspondant à l'image
        const response = await import(`@/assets/Duchesses/Marguerite de Foix/${image.id} cartel.md`);
        image.text = md.render(response.default);
      } catch (error) {
          console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${image.id}:`, error);
        }
      }
    },
    goBack() {
      window.history.back();
    }
  }
}
</script>
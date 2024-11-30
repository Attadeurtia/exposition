<template>
  <p class="descriptif" v-html="introHtml"></p>

  <MapComponent />

  <div class="container">
    <div class="item" v-for="(image, index) in images" :key="index">
      <div class="cartel">
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
      <div class="justification">
        <div class="text-justification" v-html="image.text2"></div>
        <div class="trais-3"></div>
        <div class="trais-4"></div>
        <div class="trais-1"></div>
        <div class="trais-2"></div>
      </div>
    </div>
  </div>



  <button @click="goBack" class="back-button">←</button>
</template>

<script>
import MarkdownIt from 'markdown-it';
import MapComponent from '../MapComponent.vue';
import '@/assets/css/duchesses.css';
import introMarkdown from '@/assets/Duchesses/Marguerite de Bretagne/introduction.md';

export default {
  name: 'MargueriteDeBretagne',
  components: {
    MapComponent
  },
  data() {
    return {
      images: [],
      introHtml: ''
    };
  },
  async created() {
    await this.loadImages();
    await this.loadMarkdownTexts(); await this.loadJustificationTexts(); // Ajout de cette ligne

    this.loadIntroMarkdown();
  },
  methods: {
    async loadImages() {
      const context = require.context('@/assets/Duchesses/Marguerite de Bretagne', false, /\.(jpeg|jpg|png)$/);
      this.images = await Promise.all(
        context.keys().map(async (key, index) => ({
          id: index + 1,
          src: context(key),
          title: `Image ${index + 1}`,
          text: ''
        }))
      );
    },
    async loadMarkdownTexts() {
      const md = new MarkdownIt();
      await Promise.all(
        this.images.map(async (image) => {
          try {
            const response = await import(`@/assets/Duchesses/Marguerite de Bretagne/${image.id} cartel.md`);
            image.text = md.render(response.default);
          } catch (error) {
            console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${image.id}:`, error);
          }
        })
      );
    },
    async loadJustificationTexts() {
      const md = new MarkdownIt();
      await Promise.all(
        this.images.map(async (image) => {
          try {
            const response = await import(`@/assets/Duchesses/Marguerite de Bretagne/${image.id} justification.md`);
            image.text2 = md.render(response.default);
          } catch (error) {
            console.error(`Erreur lors du chargement du fichier Markdown de justification pour l'image ${image.id}:`, error);
          }
        })
      );
    },

    loadIntroMarkdown() {
      const md = new MarkdownIt();
      this.introHtml = md.render(introMarkdown);
    },
    goBack() {
      window.history.back();
    }
  }
}
</script>

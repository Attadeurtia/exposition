<template>
  <h1 class="titre">Jeanne de Flandres</h1>
  <h2 class="sous-titre">1295 - 1374</h2>
  <p class="descriptif">Fille de Louis Ier de Flandre, comte de Nevers, et de Jeanne de Rethel, comtesse de Rethel.  
C’est l'épouse de Jean de Montfort en 1329, comte de Montfort (1293-1345), prétendant au duché de Bretagne de 1341 à 1345 lors de la guerre de Succession de Bretagne. Ils ont 2 enfants, Jean de Montfort, futur Jean IV (né entre 1339 et 1341) et Jeanne, comtesse de Richemont (1341-1399). Veuve en 1345.  
Elle a continué la lutte de son mari lors de la captivité de ce dernier, et elle doit son surnom à un incendie provoqué lors du siège d'Hennebont.  
Elle est restée célèbre pour une action d'éclat. Alors que les troupes de Charles de Blois assiégeaient en juin 1342 Hennebont, dans laquelle était retranchée Jeanne, celle-ci parvint à galvaniser les troupes et les civils si bien que toutes les attaques furent repoussées. Une nuit, à la tête d'un détachement de soldats, elle sortit de la ville et mit le feu aux tentes des troupes adverses. Puis, grâce à cette diversion, elle parvint à rejoindre Auray d'où elle put ramener 600 chevaliers, ce qui permit la libération de la ville. Après cela, Jeanne de Flandre fut surnommée Jeanne la Flamme.</p>
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
  name: 'JeanneDeFlandres',
  components: {
    MapComponent
  },

  data() {
    return {
      images: []
    };
  },
  async created() {
    const context = require.context('@/assets/Duchesses/Jeanne de Flandre/', false, /\.(jpeg|jpg|png)$/);
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
          const response = await import(`@/assets/Duchesses/Jeanne de Flandre/${image.id} cartel.md`);
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
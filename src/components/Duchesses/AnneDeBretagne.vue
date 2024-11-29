<template>
  <h1 class="titre">Anne de Bretagne</h1>
  <h2 class="sous-titre">1488 – 1514</h2>
  <p class="descriptif">Fille du duc François II de Bretagne et de Marguerite de Foix. En tant qu’héritière du duché, elle a été au cœur de la politique européenne dès son plus jeune âge.  
Anne de Bretagne (1477-1514) fut une figure politique centrale de la fin du Moyen Âge et du début de la Renaissance en France. Elle est surtout connue pour avoir été duchesse de Bretagne et reine de France à deux reprises. Son mariage avec deux rois français successifs, Charles VIII et Louis XII, a marqué une étape importante dans l’histoire de la France et de la Bretagne, contribuant à l’union du duché de Bretagne avec le royaume de France.

<b>Premier mariage (1491) :</b> Anne a épousé Charles VIII de France, un mariage arrangé dans un contexte de guerre entre la Bretagne et la France. Cette union a marqué le début de la soumission politique de la Bretagne à la couronne française. En tant que reine, elle a conservé une certaine autonomie sur ses terres bretonnes.  
<b>Deuxième mariage (1499) :</b> Après la mort de Charles VIII, elle épouse Louis XII, qui devient roi de France la même année. Louis XII, conscient de l’importance stratégique de la Bretagne, s’assura que le duché resterait dans le giron français.  
Anne a joué un rôle actif dans la gestion de ses terres et dans la politique du royaume. Elle a œuvré pour préserver les privilèges de la Bretagne, tout en respectant ses obligations en tant que reine de France. Elle a également été une grande mécène des arts et de la culture. Sous son patronage, la musique et l’art de la Renaissance ont prospéré en Bretagne et à la cour de France.

Anne est morte en 1514 à l'âge de 36 ans, et son décès a ouvert la voie à l'annexion officielle de la Bretagne par la France, une étape qui sera accomplie après la mort de son successeur, Claude de France, sa fille et héritière.</p>
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
import MapComponent from '../MapComponent.vue';
import '@/assets/css/duchesses.css';

export default {
  name: 'AnneDeBretagne',
  components: {
    MapComponent
  },

  data() {
    return {
      images: []
    };
  },
  async created() {
    const context = require.context('@/assets/Duchesses/Anne de Bretagne', false, /\.(jpeg|jpg|png)$/);
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
          const response = await import(`@/assets/Duchesses/Anne de Bretagne/${image.id} cartel.md`);
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



<template>
  <h1 class="titre">Anne de Bretagne</h1>
  <p>Duchesse de Bretagne et reine de France, elle a joué un rôle clé dans l'histoire de la Bretagne.</p>
  <MapComponent />
  <CartelPenpot />


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



</template>

<script>
import MarkdownIt from 'markdown-it';
import MapComponent from '../MapComponent.vue'

import CartelPenpot from './CartelPenpot.vue';

export default {
  name: 'AnneDeBretagne',
  components: {
    MapComponent,
    CartelPenpot
  },

  data() {
    return {
      images: [
        { id: 1, src: require('@/assets/images/image1.jpeg'), title: 'Image 1', text: '' },
        { id: 2, src: require('@/assets/images/image2.jpeg'), title: 'Image 2', text: '' },
        { id: 3, src: require('@/assets/images/image3.jpeg'), title: 'Image 3', text: '' },
        { id: 4, src: require('@/assets/images/image4.jpeg'), title: 'Image 4', text: '' },
      ],
    };
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
          const response = await import(`@/assets/markdown/text${image.id}.md`);
          image.text = md.render(response.default);
        } catch (error) {
          console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${image.id}:`, error);
        }
      }
    }
    ,
  },
}
</script>


<style>
/* Rectangle */
.rectangle-32bfb2516c1d {
  margin: 60px;

  background: #EAEBED;
  border-radius: 0px;
  box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.2);
  padding: 40px 60px 40px;
  position: relative;


}





.container {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px;
  gap: 20px;
  padding: 20px;
}

.item {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin: 50px;
  margin-top: 40px;
  text-align: left;

}

.item img {
  max-height: 30rem;
  display: block;
}

.titre {
  font-size: 2rem;
  font-family: 'Inknut Antiqua', Arial, Helvetica, sans-serif;


}

h1 {
  color: #01A7C2;
  font-size: 2 rem;
  font-weight: bold;


}

h2 {

  font-size: 1.3rem;
  font-style: italic;
  /* Met le texte en italique */

  color: #01A7C2;
}

h3 {
  font-weight: bold;
  /* ou vous pouvez utiliser un nombre comme 700 */

}

p {
  font-size: 1rem;
  align-self: top;
  font-family: "Ibarra Real Nova", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

.texte {
  margin-left: 20px;
  font-size: 1rem;
  align-self: top;
  font-family: "Ibarra Real Nova", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;

}

@media (max-width: 768px) {
  .item {
    flex-direction: column;
    margin: 0px;

  }

  .texte {
    margin-left: 0;
    margin-top: 10px;
    font-size: 0.875rem;
  }

  .rectangle-32bfb2516c1d {
    margin: 25px 10px;
    padding: 45px 20px 45px;

  }
}

@media (max-width: 480px) {
  .item {
    flex-direction: column;
    margin: 0px;

  }

  .texte {
    font-size: 0.75rem;
  }
}

/* Ellipse */
.ellipse-haut-droite {
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
}

/* Ellipse */
.ellipse-haut-gauche {
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 20px;
}

/* Ellipse */
.ellipse-bas-droite {
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

/* Ellipse */
.ellipse-bas-gauche {
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
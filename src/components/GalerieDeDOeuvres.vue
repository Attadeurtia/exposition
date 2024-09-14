<template>
  <div class="container">
    <div class="item" v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt">
      <div class="text">{{ image.text }}</div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  name: 'GalerieDeDOeuvres',
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
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin : 5rem;
}
.item {
  display: flex;
  align-items: center;
  margin-bottom: 100px;

}
.item img {
  height: 300px; /* Hauteur fixe pour toutes les images */
  margin-right: 100px;
}


.text
{
  font-size: 1rem;
  font-weight: bold;
  color: #2c3e50;
  text-align: left;
}
</style>
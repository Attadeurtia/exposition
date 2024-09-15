<template>
  <div class="container">
    <div class="item" v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt">
      <div class="texte" v-html="image.text"></div>
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


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;
  padding: 20px;
}

.item {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  margin: 10px;
  text-align: left;
}

.item img {
  max-width: 100%;
  max-height: 300px;
  height: auto;
  display: block;
}

.texte {
  margin-left: 20px;
  font-size: 1rem;
  align-self: center;
}

@media (max-width: 768px) {
  .item {
    flex-direction: column;
  }

  .texte {
    margin-left: 0;
    margin-top: 10px;
    font-size: 0.875rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .item {
    flex-direction: column;
  }

  .texte {
    font-size: 0.75rem;
  }
}
</style>
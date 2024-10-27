<template>
    <div class="duchesses-container">
        <h1>Duchesses de Bretagne</h1>
        <div class="card-container">
            <router-link v-for="duchesse in duchesses" :key="duchesse.name" :to="duchesse.route" class="card">
                <img :src="duchesse.image" alt="Portrait de {{ duchesse.name }}" />
                <h2>{{ duchesse.name }}</h2>
                <p>{{ duchesse.description }}</p>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
  name: 'DuchessesCard',
  data() {
    return {
      duchesses: [
        {
          name: 'Anne de Bretagne',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Anne_de_Bretagne.jpg/800px-Anne_de_Bretagne.jpg',
          description: 'Duchesse de Bretagne et reine de France, elle a joué un rôle clé dans l\'histoire de la Bretagne.',
          route: '/anne-de-bretagne', // Ajoutez la route ici
        },
        {
          name: 'Catherine de Médicis',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Catherine_de_M%C3%A9dicis.jpg/800px-Catherine_de_M%C3%A9dicis.jpg',
          description: 'Reine de France, elle a été duchesse de Bretagne par son mariage avec Henri II.',
          route: '/catherine-de-medicis', // Ajoutez la route ici
        },
        // Ajoutez les autres duchesses ici
      ],
    };
  },
};
</script>


<style scoped>
.duchesses-container {
  text-align: center;
  padding: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 200px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  text-decoration: none; /* Ajoutez cette ligne pour supprimer le soulignement */
  color: inherit; /* Pour garder la couleur du texte normale */
}

.card img {
  width: 100%;
  border-radius: 8px;
}
</style>
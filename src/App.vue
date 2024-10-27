<template>
  <div id="app">
  </div>
  
  <!--<RouterLink :to="{name: 'homepage'}" class="enter-link">Entrez dans l'expo</RouterLink>-->


  <RouterView/>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c3bec8;
}

.enter-link {
  font-size: 1.5em; /* Taille de police pour le lien */
  color: #ffffff; /* Couleur du lien */
  text-decoration: none; /* Supprime le soulignement */
  padding: 10px 20px; /* Ajoute un peu d'espace autour du lien */
  background-color: #007bff; /* Couleur de fond du lien */
  border-radius: 5px; /* Coins arrondis */
}

.enter-link:hover {
  background-color: #0056b3; /* Couleur de fond au survol */
}


</style>
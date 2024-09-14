<template>
  <footer class="footer">
    <div class="container">
      <h2>Heures d'ouverture</h2>
      <ul>
        <li>Lundi - Vendredi: 9h00 - 18h00</li>
        <li>Samedi: 10h00 - 17h00</li>
        <li>Dimanche: Fermé</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterHeures',
};
</script>

<style scoped>
.footer {
  padding: 20px;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
  font-size: 1rem;
}
</style>
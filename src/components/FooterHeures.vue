```vue
<template>
  <footer class="footer">
    <div class="container">
      <div class="hours-and-link">
        <div class="hours">
          <h2>Heures d'ouverture</h2>
          <ul>
            <li>Lundi - Vendredi: 9h00 - 18h00</li>
            <li>Samedi: 10h00 - 17h00</li>
            <li>Dimanche: Fermé</li>
          </ul>
        </div>
        <div class="site-link">
          <a href="https://attadeurtia.github.io/blog/" target="_blank">Auteur</a>
        </div>
      </div>
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
  text-align: left;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.hours-and-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hours {
  flex: 1;
}

.site-link {
  margin-left: 20px;
}

.site-link a {
  color: #007BFF;
  text-decoration: none;
}

.site-link a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .hours-and-link {
    flex-direction: column;
    align-items: flex-start;
  }

  .site-link {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>
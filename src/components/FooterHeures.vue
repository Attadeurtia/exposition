```vue
<template>
  <footer class="footer">
    <h2>À propos</h2>
    <ul>
      <li><router-link to="/consigne">Consigne</router-link></li>
      <li><a href="https://attadeurtia.github.io/blog/" target="_blank" rel="noopener noreferrer">Technicien</a></li>
      <li><a href="https://github.com/Attadeurtia/exposition" target="_blank" rel="noopener noreferrer">Code source</a>
      </li>
    </ul>

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
  background-color: #aab3bd;
  margin-top: 200px;
}
h2{ 
  font-size: 1.5rem;
  font-weight: bold;
  color: #c29961;

}

router-link,
.site-link {
  margin-left: 20px;
}

.site-link a,
router-link-active {
  color: #007BFF;
  text-decoration: none;
}

.site-link a:hover,
.router-link-active:hover {
  text-decoration: underline;
}
</style>
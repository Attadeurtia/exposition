```vue
<template>
  <footer class="footer">

          <h2>À propos</h2>
          <ul>
            <li><router-link to="/consigne">Consigne</router-link></li>
            <li>
              <div class="site-link">
                <a href="https://attadeurtia.github.io/blog/" target="_blank" rel="noopener noreferrer">Technicien</a>
              </div>
            </li>
            <li><a href="https://github.com/Attadeurtia/exposition" target="_blank" rel="noopener noreferrer">Code
                source>
              </a></li>
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
<template>
  <footer class="footer">
    
    <ul>
      <h2>À propos</h2>
      <li><router-link to="/consigne">Consigne</router-link></li>
      <li><a href="https://attadeurtia.github.io/blog/" target="_blank" rel="noopener noreferrer">Technicien</a></li>
      <li><a href="https://github.com/Attadeurtia/exposition" target="_blank" rel="noopener noreferrer">Code source</a>
      </li>
    </ul>
    <img src="@/assets/images/logo_LEMANS_UNIVERSITE_Blanc.png" alt="Logo" class="footer-logo">
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
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  flex-wrap: wrap;
}
h2{ 
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

router-link,
.site-link {
  margin-left: 20px;
}

.site-link a,
router-link-active {
  color: var(--like-color);
  text-decoration: none;
}

.site-link a:hover,
.router-link-active:hover {
  color: var(--success-color);
}

.footer-logo {
  height: 5rem;
  bottom: -020;

}

@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-logo {
    order: -1;
    margin-bottom: 20px;
    align-self: center;
  }
} 
</style>
<template>
  <footer class="footer">
    <div class="social-icons">
      <a :href="contactLinks.mintscan" target="_blank">
        <img src="logo-mintscan.png" alt="Mintscan">
      </a>
      <a :href="contactLinks.github" target="_blank">
        <img src="github-mark.png" alt="GitHub">
      </a>
      <a :href="contactLinks.gmail" target="_blank">
        <img src="email.png" alt="Email">
      </a>
    </div>
  </footer>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppFooter',
  data() {
    return {
      contactLinks: {}
    };
  },
  created() {
    axios.get('/BlockchainsData.json').then(response => {
      this.contactLinks = response.data.contactLinks;
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }
}
</script>

<style scoped>
.footer {
  background-color: transparent;
  padding: 10px;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-icons img {
  width: 48px;
  height: 48px;
  margin: 0 10px;
  transition: transform 0.3s;
  margin: 20px 20px;
}

.social-icons img:hover {
  transform: scale(1.2);
}

/* Responsive styles */
@media (max-width: 768px) {
  .footer {
    padding: 20px;
  }

  .social-icons img {
    margin: 10px 10px;
  }

  .social-icons img {
  width: 36px;
  height: 36px;
  margin: 0 10px;
  transition: transform 0.3s;
}
}
</style>

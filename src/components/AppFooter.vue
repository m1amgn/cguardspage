<template>
  <footer class="footer">
    <div class="social-icons">
      <a :href="contactLinks.mintscan" target="_blank">
        <img :src="mintscanIcon" alt="Mintscan">
      </a>
      <a :href="contactLinks.pingpub" target="_blank">
        <img :src="pingpubIcon" alt="Pingpub">
      </a>
      <a :href="contactLinks.github" target="_blank">
        <img :src="githubIcon" alt="GitHub">
      </a>
      <a :href="contactLinks.gmail" target="_blank">
        <img :src="emailIcon" alt="Email">
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
  computed: {
    mintscanIcon() {
      return `${window.location.origin}/logo-mintscan.png`;
    },
    pingpubIcon() {
      return `${window.location.origin}/pingpub.svg`;
    },
    githubIcon() {
      return `${window.location.origin}/github-mark-white.svg`;
    },
    emailIcon() {
      return `${window.location.origin}/email.png`;
    }
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
  transition: transform 0.3s;
  margin: 10px 20px;
}

.social-icons img:hover {
  transform: scale(1.2);
}

/* Responsive styles */
@media (max-width: 767.98px) {
  .footer {
    padding: 10px;
  }

  .social-icons img {
    width: 24px;
    height: 24px;
    margin: 0 10px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .footer {
    padding: 15px;
  }

  .social-icons img {
    width: 28px;
    height: 28px;
    margin: 0 15px;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .footer {
    padding: 20px;
  }

  .social-icons img {
    width: 32px;
    height: 32px;
    margin: 0 20px;
  }
}

@media (min-width: 1200px) {
  .footer {
    padding: 25px;
  }

  .social-icons img {
    width: 36px;
    height: 36px;
    margin: 0 25px;
  }
}
</style>

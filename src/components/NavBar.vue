<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/logo.png" alt="Logo">
      <p>Better than just a validator</p>
    </div>
    <ul class="nav-links">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/mainnets">Mainnets</router-link></li>
      <li><router-link to="/testnets">Testnets</router-link></li>
      <li><router-link to="/community-contributions">Community</router-link></li>
      <li><router-link to="/technical-contributions">Technical</router-link></li>
      <li><router-link to="/guides">Guides</router-link></li>
    </ul>
    <div class="burger" @click="toggleNav">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    toggleNav() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('nav-active');
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.logo {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;
  margin: 10px;
}

.logo img {
  height: 60px;
}

.logo p {
  color: rgba(255, 255, 255, 0.466);
  margin: 5px 0 0 0; /* Add margin above the text */
  font-size: 16px;
  font-weight: bold;
  text-align: center; /* Center text */
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  margin-right: 20px;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links li a {
  color: #ffffff;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.nav-links li a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

.burger {
  display: none;
  cursor: pointer;
  flex-direction: column;
}

.burger div {
  width: 25px;
  height: 3px;
  background: #fff;
  margin: 5px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    right: 0;
    height: 92vh;
    top: 8vh;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }

  .nav-links.nav-active {
    transform: translateX(0);
  }

  .nav-links li {
    opacity: 0;
  }

  .nav-links.nav-active li {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  .burger {
    display: flex;
  }
}
</style>

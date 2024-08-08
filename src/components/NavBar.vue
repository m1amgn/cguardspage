<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/logo.png" alt="Logo">
      <p>Better than just a validator</p>
    </div>
    <ul :class="['nav-links', { 'nav-active': isNavActive }]">
      <li><router-link to="/" @click="closeNav">Home</router-link></li>
      <li><router-link to="/validate" @click="closeNav">Validate</router-link></li>
      <li><router-link to="/mainnets" @click="closeNav">Mainnets</router-link></li>
      <li><router-link to="/testnets" @click="closeNav">Testnets</router-link></li>
      <li><router-link to="/community-contributions" @click="closeNav">Community</router-link></li>
      <li><router-link to="/technical-contributions" @click="closeNav">Technical</router-link></li>
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
  data() {
    return {
      isNavActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavActive = !this.isNavActive;
    },
    closeNav() {
      this.isNavActive = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 98%;
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 10px;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo img {
  height: 40px;
}

.logo p {
  color: rgba(255, 255, 255, 0.466);
  margin: 5px 0 0 0;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
}

.nav-links li {
  margin-left: 5px;
}

.nav-links li a {
  color: #ffffff;
  text-decoration: none;
  padding: 8px 10px;
  font-size: 14px;
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
  z-index: 1001;
  /* Ensure burger is on top */
}

.burger div {
  width: 25px;
  height: 3px;
  background: #fff;
  margin: 5px;
  transition: all 0.3s ease;
}

@media (max-width: 767.98px) {
  .nav-links {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    visibility: hidden;
  }

  .nav-links.nav-active {
    transform: translateX(0);
    visibility: visible;
  }

  .nav-links li {
    opacity: 0;
    margin-top: 50px;
  }

  .nav-links.nav-active li {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  .burger {
    display: flex;
  }

  .logo img {
    height: 30px;
  }

  .logo p {
    font-size: 10px;
  }

  .logo {
    margin: 3px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .navbar {
    padding: 10px;
  }

  .logo img {
    height: 35px;
  }

  .logo p {
    font-size: 12px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-links li {
    margin-left: 3px;
    margin-right: 3px;
  }

  .nav-links li a {
    font-size: 12px;
    padding: 6px 8px;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .navbar {
    padding: 15px;
  }

  .logo img {
    height: 40px;
  }

  .logo p {
    font-size: 14px;
  }

  .nav-links li {
    margin-left: 5px;
    margin-right: 5px;
  }

  .nav-links li a {
    font-size: 14px;
    padding: 8px 10px;
  }
}

@media (min-width: 1200px) {
  .navbar {
    padding: 20px;
  }

  .logo img {
    height: 50px;
  }

  .logo p {
    font-size: 16px;
  }

  .nav-links li {
    margin-left: 5px;
    margin-right: 5px;
  }

  .nav-links li a {
    font-size: 16px;
    padding: 10px 12px;
  }
}
</style>

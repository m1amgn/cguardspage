<template>
    <div class="home">
        <div class="section" @click="navigateTo('/validate')">
            <h2>Validate</h2>
            <p>Useful information for validators</p>
            <router-link to="/validate" class="read-more">Explore</router-link>
        </div>
        <div class="section" @click="navigateTo('/mainnets')">
            <h2>Mainnets</h2>
            <p>We ensure the security of the mainnets</p>
            <router-link to="/mainnets" class="read-more">Explore</router-link>
        </div>
        <div class="section" @click="navigateTo('/testnets')">
            <h2>Testnets</h2>
            <p>We ensure the testnets run smoothly</p>
            <router-link to="/testnets" class="read-more">Explore</router-link>
        </div>
        <div class="section" @click="navigateTo('/community-contributions')">
            <h2>Community</h2>
            <p>Participate in the crypto community and bring mass adoption closer</p>
            <router-link to="/community-contributions" class="read-more">Explore</router-link>
        </div>
        <div class="section" @click="navigateTo('/technical-contributions')">
            <h2>Technical</h2>
            <p>Helping the community and ensuring network security</p>
            <router-link to="/technical-contributions" class="read-more">Explore</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        navigateTo(route) {
            if (window.innerWidth <= 767.98) {
                this.$router.push(route);
            }
        }
    }
}
</script>

<style scoped>
body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
}

.home {
    text-align: center;
    padding: 80px 10px 60px 10px;
    /* Ensure space for fixed navbar and footer */
    background-color: rgba(0, 0, 0, 0.1);
    min-height: calc(100vh - 500px);
    /* Adjust for footer height */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* Add gap between sections */
    overflow-y: auto;
    /* Enable vertical scrolling */
}

.section {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
    cursor: pointer;
}

.section:hover {
    background-color: rgba(17, 13, 13, 0.493);
}

.section h2 {
    margin-bottom: 10px;
    color: #fff;
    font-size: 1.5em;
}

.section p {
    color: #ddd;
    font-size: 1em;
}

.read-more {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    color: #8178f7;
    background-color: rgba(31, 35, 41, 0.63);
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s, font-size 0.3s;
}

.read-more:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: #000000;
}

@media (max-width: 767.98px) {
    .home {
        padding: 10px 10px 10px 10px;
        /* Adjust for smaller screens */
    }

    .section {
        width: 90%;
        padding: 0px;
        /* Reduce padding on smaller screens */
    }

    .section h2 {
        font-size: 1em;
    }

    .section p {
        font-size: 0.7em;
    }

    .read-more {
        display: none;
        /* Hide button on smaller screens */
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .home {
        padding: 10px 10px 10px 10px;
        /* Adjust for medium screens */
    }

    .section {
        width: 45%;
        max-width: none;
    }

    .section h2 {
        font-size: 1em;
    }

    .section p {
        font-size: 0.8em;
    }

    .read-more {
        display: none;
        /* Hide button on smaller screens */
    }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
    .home {
        padding: 120px 40px 100px 40px;
        /* Adjust for larger screens */
    }

    .section {
        width: 25%;
        max-width: none;
    }

    .section h2 {
        font-size: 1.25em;
    }

    .section p {
        font-size: 0.8em;
    }

    .read-more {
        font-size: 0.8em;
        padding: 10px 24px;
        /* Adjust padding for button */
    }
}

@media (min-width: 1200px) {
    .section {
        width: 25%;
        max-width: none;
    }

    .section h2 {
        font-size: 1.5em;
    }

    .section p {
        font-size: 1em;
    }

    .read-more {
        font-size: 0.9em;
        padding: 12px 28px;
        /* Adjust padding for button */
    }
}
</style>
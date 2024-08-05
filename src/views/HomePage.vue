<template>
    <div class="home">
        <div class="sections">
            <div class="section">
                <h2>Mainnets</h2>
                <p>We ensure the security of the mainnets</p>
                <router-link to="/mainnets" class="read-more">Explore</router-link>
            </div>
            <div class="section">
                <h2>Testnets</h2>
                <p>We ensure the testnets runs smoothly</p>
                <router-link to="/testnets" class="read-more">Explore</router-link>
            </div>
        </div>
        <div class="sections">
            <div class="section">
                <h2>Community</h2>
                <p>Participate in the crypto community and bring massadoption closer</p>
                <router-link to="/community-contributions" class="read-more">Explore</router-link>
            </div>
            <div class="section">
                <h2>Technical contributions</h2>
                <p>Helping the community and ensuring network security</p>
                <router-link to="/technical-contributions" class="read-more">Explore</router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
.home {
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
}

.subheading {
    font-size: 1.2em;
    margin: 10px 0;
}

.sections {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.section {
    background-color: rgba(72, 49, 110, 0);
    padding: 20px;
    border-radius: 10px;
    width: 30%;
}

.section h2 {
    margin-bottom: 10px;
}

.read-more {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.read-more:hover {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>
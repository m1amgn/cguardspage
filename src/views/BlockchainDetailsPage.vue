<template>
  <div class="blockchain-details" v-if="blockchain">
    <div class="details-section">
      <h2>{{ blockchain.name }}</h2>
    </div>
    <div class="details-section">
      <h3>Website</h3>
      <p><a :href="blockchain.address" target="_blank">{{ blockchain.address }}</a></p>
    </div>
    <div class="details-section">
      <h3>Useful links</h3>
      <p><strong>Github:</strong> <a :href="blockchain.github" target="_blank">{{ blockchain.github }}</a></p>
      <p><strong>Mintscan:</strong> <a :href="blockchain.mintscan" target="_blank">{{ blockchain.mintscan }}</a></p>
      <p><strong>Ping.pub:</strong> <a :href="blockchain.pingpub" target="_blank">{{ blockchain.pingpub }}</a></p>
      <p><strong>Docs:</strong> <a :href="blockchain.documentation" target="_blank">{{ blockchain.documentation }}</a>
      </p>
    </div>
    <div class="details-section">
      <h3>Ecosystem</h3>
      <ul>
        <li v-for="eco in blockchain.ecosystem" :key="eco.name">
          <strong>{{ eco.name }} ({{ eco.type }}):</strong> <a :href="eco.link" target="_blank">{{ eco.link }}</a>
        </li>
      </ul>
    </div>
    <div class="details-section">
      <h3>Technical contributions</h3>
      <ul>
        <li v-for="contribution in blockchain.technical_contributions" :key="contribution.contribution">
          <p>{{ contribution.contribution }}</p>
        </li>
      </ul>
    </div>
    <div class="details-section">
      <h3>Community contributions</h3>
      <ul>
        <li v-for="contribution in blockchain.community_contributions" :key="contribution.contribution">
          <p>{{ contribution.contribution }}</p>
        </li>
      </ul>
    </div>
    <div class="details-section">
      <h3>System requirements for nodes</h3>
      <ul>
        <li><strong>CPU:</strong> {{ blockchain.requirements.cpu }}</li>
        <li><strong>RAM:</strong> {{ blockchain.requirements.ram }}</li>
        <li><strong>SSD:</strong> {{ blockchain.requirements.ssd }}</li>
      </ul>
    </div>
    <div class="details-section">
      <h3>Nodes install guides</h3>
      <ul>
        <li v-for="tutorial in blockchain.installation_tutorials" :key="tutorial.tutorial">
          <p>{{ tutorial.tutorial }}</p>
          <a :href="tutorial.link" target="_blank">{{ tutorial.link }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BlockchainDetailsPage',
  data() {
    return {
      blockchain: null
    };
  },
  created() {
    const blockchainName = this.$route.params.name;
    axios.get('/validate.json')
      .then(response => {
        this.blockchain = response.data.blockchains.find(bc => bc.name === blockchainName);
        console.log(this.blockchain.installation_tutorials)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>

<style scoped>
.blockchain-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 10px;
  color: white;
  max-height: 600px;
  max-width: 800px;
  overflow-y: auto;
}

/* Custom scrollbar styles */
.blockchain-details::-webkit-scrollbar {
  width: 10px;
}

.blockchain-details::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.blockchain-details::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.blockchain-details::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.7);
}

.details-section {
  background-color: rgba(133, 121, 153, 0.2);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 1 1 auto;
}

.details-section h2 {
  margin: 0;
  text-align: center;
}

.details-section ul {
  list-style-type: none;
  padding: 0;
}

.details-section li {
  margin-bottom: 10px;
}

a {
  color: #3b82f6;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .blockchain-details {
    padding: 10px;
  }

  .details-section {
    padding: 15px;
  }
}
</style>

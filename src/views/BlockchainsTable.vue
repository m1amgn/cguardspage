<template>
    <div class="blockchains-table">
        <h2>Networks</h2>
        <div class="search-container">
            <input type="text" v-model="searchQuery" placeholder="Search for a network..." class="search-input">
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Network</th>
                        <th>TOKEN</th>
                        <th>CPU</th>
                        <th>RAM</th>
                        <th>SSD</th>
                        <th>Quantity of validators</th>
                        <th>Minimum tokens in active set</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="blockchain in filteredBlockchains" :key="blockchain.name"
                        @click="goToDetails(blockchain.name)">
                        <td>{{ blockchain.name }}</td>
                        <td>{{ blockchain.cryptocurrency }}</td>
                        <td>{{ blockchain.requirements.cpu }}</td>
                        <td>{{ blockchain.requirements.ram }}</td>
                        <td>{{ blockchain.requirements.ssd }}</td>
                        <td>{{ blockchain.quantityOfValidators }}</td>
                        <td>{{ blockchain.minimumTokensToBeActive }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'BlockchainsTable',
    data() {
        return {
            blockchains: [],
            searchQuery: ''
        };
    },
    computed: {
        filteredBlockchains() {
            return this.blockchains.filter(blockchain =>
                blockchain.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    created() {
        axios.get('/validate.json')
            .then(response => {
                this.blockchains = response.data.blockchains;
                this.blockchains.forEach(blockchain => {
                    if (blockchain.api_validators) {
                        axios.get(blockchain.api_validators)
                            .then(response => {
                                if (response && response.data.validators) {
                                    const validators = response.data.validators;
                                    const votingPower = Number(validators[validators.length - 1]?.voting_power) + 2;
                                    let total = response.data.pagination.total;

                                    if (total === 0 || total === undefined) {
                                        total = validators.length;
                                    }

                                    blockchain.quantityOfValidators = `${total} / ${blockchain.max_validators}`;
                                    blockchain.minimumTokensToBeActive = votingPower;
                                } else if (blockchain.current_amount_of_validators) {
                                    blockchain.quantityOfValidators = `${blockchain.current_amount_of_validators} / ${blockchain.max_validators}`;
                                }
                            })
                            .catch(error => {
                                console.error(`Error fetching validators data for ${blockchain.name}:`, error);
                            });
                    } else {
                        blockchain.quantityOfValidators = blockchain.current_amount_of_validators ? `${blockchain.current_amount_of_validators} / ${blockchain.max_validators}` : '';
                        blockchain.minimumTokensToBeActive = '';
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },
    methods: {
        goToDetails(name) {
            this.$router.push({ name: 'BlockchainDetails', params: { name } });
        }
    }
};
</script>

<style scoped>
.blockchains-table {
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
}

.search-container {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}

.search-input {
    padding: 10px;
    width: 80%;
    max-width: 400px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    font-size: 16px;
    transition: border-color 0.3s, background-color 0.3s;
}

.search-input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.search-input:focus {
    border-color: rgba(255, 255, 255, 0.5);
    background-color: rgba(0, 0, 0, 0.7);
    outline: none;
}

.table-container {
    max-height: 400px;
    overflow-y: auto;
    margin-top: 20px;
    background-color: rgba(102, 81, 153, 0.1);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: left;
    color: #ffffff;
    word-break: break-all;
}

th {
    background-color: rgba(117, 123, 158, 0.267);
}

tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.1);
}

tr:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
}

/* Custom scrollbar styles */
.table-container::-webkit-scrollbar {
    width: 10px;
}

.table-container::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.table-container::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.1);
}

.table-container::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.7);
}

/* Responsive styles */
@media (max-width: 767.98px) {
    .blockchains-table {
        padding: 10px;
    }

    .search-input {
        font-size: 0.5em;
    }

    th,
    td {
        font-size: 0.5em;
    }

    h2 {
        font-size: 1em;
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .blockchains-table {
        padding: 20px;
    }

    .search-input {
        font-size: 0.8em;
    }

    th,
    td {
        font-size: 0.8em;
    }

    h2 {
        font-size: 1.25em;
    }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
    .blockchains-table {
        padding: 10px;
    }

    .search-input {
        font-size: 0.75em;
    }

    th,
    td {
        font-size: 1em;
    }

    h2 {
        font-size: 1.25em;
    }
}

@media (min-width: 1200px) {
    .blockchains-table {
        padding: 30px;
    }

    .search-input {
        font-size: 1em;
    }

    th,
    td {
        font-size: 1em;
    }

    h2 {
        font-size: 1.5em;
    }
}
</style>
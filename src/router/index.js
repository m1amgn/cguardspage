import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MainnetsPage from '../views/MainnetsPage.vue';
import TestnetsPage from '../views/TestnetsPage.vue';
import CommunityContributionsPage from '../views/CommunityContributionsPage.vue';
import TechnicalContributionsPage from '../views/TechnicalContributionsPage.vue';
import ValidatePage from '../views/ValidatePage.vue';
import BlockchainDetailsPage from '../views/BlockchainDetailsPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/mainnets', name: 'Mainnets', component: MainnetsPage },
  { path: '/testnets', name: 'Testnets', component: TestnetsPage },
  { path: '/community-contributions', name: 'CommunityContributions', component: CommunityContributionsPage },
  { path: '/technical-contributions', name: 'TechnicalContributions', component: TechnicalContributionsPage },
  { path: '/validate', name: 'Validate', component: ValidatePage },
  { path: '/validate/:name', name: 'BlockchainDetails', component: BlockchainDetailsPage, props: true }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

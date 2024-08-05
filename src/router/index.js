import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MainnetsPage from '../views/MainnetsPage.vue';
import TestnetsPage from '../views/TestnetsPage.vue';
import CommunityContributionsPage from '../views/CommunityContributionsPage.vue';
import TechnicalContributionsPage from '../views/TechnicalContributionsPage.vue';
import GuidesPage from '../views/GuidesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/mainnets',
    name: 'mainnets',
    component: MainnetsPage
  },
  {
    path: '/testnets',
    name: 'testnets',
    component: TestnetsPage
  },
  {
    path: '/community-contributions',
    name: 'community-contributions',
    component: CommunityContributionsPage
  },
  {
    path: '/technical-contributions',
    name: 'technical-contributions',
    component: TechnicalContributionsPage
  },
  {
    path: '/guides',
    name: 'guides',
    component: GuidesPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

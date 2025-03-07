import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Home from '@/components/Home.vue';
import Dashboard from '../components/Dashboard.vue';


const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home},
  { path: '/dashboard', component: Dashboard },

];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Services from './views/Services.vue';
import Contact from './views/Contact.vue'
import './assets/style/index.scss'

const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Services},
    { path: '/contact', component: Contact },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  

const app = createApp(App);
app.use(router);
app.mount('#app');
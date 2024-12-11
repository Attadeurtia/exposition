import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes.js';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        // Retourne la position de défilement souhaitée
        return { top: 0 }
    }
});

createApp(App)
    .use(router)
    .mount('#app');

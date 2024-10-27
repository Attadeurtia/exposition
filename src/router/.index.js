import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue'; // Assurez-vous que ce fichier existe
import NewPage from '../components/NewPage.vue'; // Importez le composant NewPage

const routes = [
    {
        path: '/HomePage',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/new-page',
        name: 'NewPage',
        component: NewPage // Ajoutez la route pour NewPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

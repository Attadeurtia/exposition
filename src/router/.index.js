import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/FooterHeures.vue'; // Assurez-vous que ce fichier existe
import NewPage from '../components/NewPage.vue'; // Importez le composant NewPage

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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

import App from './App.vue'
import HomePage from './components/HomePage.vue';
import NewPage from './components/NewPage.vue'
import AnneDeBretagne from './components/Duchesses/AnneDeBretagne.vue';


export const routes = [
    {path: '/', component: App},
    {path: '/homepage', component: HomePage, name: 'homepage'},
    {path: '/newpage', component: NewPage, name: 'newpage'},
    { path: '/anne-de-bretagne', component: AnneDeBretagne, name: 'anne-de-bretagne' },

    //{path: "/:pathMatch(.*)*", redirect: '/'},
    
];
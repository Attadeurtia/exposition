import App from './App.vue'
import HomePage from './components/HomePage.vue';
import NewPage from './components/NewPage.vue'

import AnneDeBretagne from './components/Duchesses/AnneDeBretagne.vue';
import MargueriteDeBretagne from './components/Duchesses/MargueriteDeBretagne.vue';
import FrançoisedAmboise from './components/Duchesses/FrançoisedAmboise.vue';
import JeanneDeFlandres from './components/Duchesses/JeanneDeFlandres.vue';
import JeanneDePenthievre from './components/Duchesses/JeanneDePenthievre.vue';



export const routes = [
    {path: '/', component: App},
    {path: '/homepage', component: HomePage, name: 'homepage'},
    {path: '/newpage', component: NewPage, name: 'newpage'},
    { path: '/Anne-de-Bretagne', component: AnneDeBretagne, name: 'Anne-de-Bretagne' },
    { path: '/Marguerite-de-Bretagne', component: MargueriteDeBretagne, name: 'Marguerite-de-Bretagne' },
    { path: '/Françoise-d-Amboise', component: FrançoisedAmboise, name: 'Françoise-d-Amboise' },
    { path: '/Jeanne-de-Flandres', component: JeanneDeFlandres, name: 'Jeanne-de-Flandres' },
    { path: '/Jeanne-de-Penthièvre', component: JeanneDePenthievre, name: 'Jeanne-de-Penthièvre' },


    //{path: "/:pathMatch(.*)*", redirect: '/'},
    
];
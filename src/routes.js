import HomePage from './components/HomePage.vue';
import NewPage from './components/NewPage.vue';

import AnneDeBretagne from './components/Duchesses/AnneDeBretagne.vue';
import MargueriteDeBretagne from './components/Duchesses/MargueriteDeBretagne.vue';
import MargueriteDeFoix from './components/Duchesses/MargueriteDeFoix.vue';
import JeanneDeFlandres from './components/Duchesses/JeanneDeFlandres.vue';
import JeanneDePenthièvre from './components/Duchesses/JeanneDePenthievre.vue';
import Consigne from './components/ConsignePage.vue';

export const routes = [
    { path: '/', component: HomePage, name: 'homepage' },
    { path: '/newpage', component: NewPage, name: 'newpage' },
    { path: '/Anne-de-Bretagne', component: AnneDeBretagne, name: 'Anne-de-Bretagne' },
    { path: '/Marguerite-de-Bretagne', component: MargueriteDeBretagne, name: 'Marguerite-de-Bretagne' },
    { path: '/Marguerite-de-Foix', component: MargueriteDeFoix, name: 'Marguerite-de-Foix' },
    { path: '/Jeanne-de-Flandres', component: JeanneDeFlandres, name: 'Jeanne-de-Flandres' },
    { path: '/Jeanne-de-Penthievre', component: JeanneDePenthièvre, name: 'Jeanne-de-Penthievre' },
    { path: '/consigne', component: Consigne, name: 'Consigne' }
    
];
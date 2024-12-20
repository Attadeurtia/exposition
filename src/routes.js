import HomePage from './components/HomePage.vue';
import NewPage from './components/NewPage.vue';

import AnneDeBretagne from './components/Duchesses/AnneDeBretagne.vue';
import MargueriteDeBretagne from './components/Duchesses/MargueriteDeBretagne.vue';
import MargueriteDeFoix from './components/Duchesses/MargueriteDeFoix.vue';
import JeannedeFlandre from './components/Duchesses/JeanneDeFlandre.vue';
import JeanneDePenthièvre from './components/Duchesses/JeanneDePenthievre.vue';
import Consigne from './components/ConsignePage.vue';
import BibliographieGeneral from './components/Sources/BibliographieGeneral.vue';
import GlossaireExpo from './components/GlossaireExpo.vue';

export const routes = [
    { path: '/', component: HomePage, name: 'homepage' },
    { path: '/newpage', component: NewPage, name: 'newpage' },
    { path: '/Anne-de-Bretagne', component: AnneDeBretagne, name: 'Anne-de-Bretagne' },
    { path: '/Marguerite-de-Bretagne', component: MargueriteDeBretagne, name: 'Marguerite-de-Bretagne' },
    { path: '/Marguerite-de-Foix', component: MargueriteDeFoix, name: 'Marguerite-de-Foix' },
    { path: '/Jeanne-de-Flandre', component: JeannedeFlandre, name: 'Jeanne-de-Flandre' },
    { path: '/Jeanne-de-Penthievre', component: JeanneDePenthièvre, name: 'Jeanne-de-Penthievre' },
    { path: '/consigne', component: Consigne, name: 'Consigne' },
    { path: '/Bibliographie', component: BibliographieGeneral, name: 'BibliographieGeneral' },
    { path: '/Glossaire', component: GlossaireExpo, name: 'GlossaireExpo' }
];
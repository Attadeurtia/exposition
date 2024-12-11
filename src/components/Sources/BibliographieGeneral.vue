<template>
        <div class="biblio">
            <h1>Bibliographie</h1>
    

    <h2>Jeanne de Flandre</h2>
    <BibliographieJeanneDeFlandre />

    <h2>Marguerite de Bretagne</h2>
    <BibliographieMargueriteDeBretagne />

    <h2>Marguerite de Foix</h2>
    <BibliographieMargueriteDeFoix/>

    <h2>Anne de Bretagne</h2>
    <BibliographieAnneDeBretagne/>
</div>

<FlecheRetour/>
</template>

<script>
import FlecheRetour from '../FlecheRetour.vue';
import BibliographieAnneDeBretagne from './BibliographieAnneDeBretagne.vue';
import BibliographieJeanneDeFlandre from './BibliographieJeanneDeFlandre.vue';
import BibliographieMargueriteDeBretagne from './BibliographieMargueriteDeBretagne.vue';
import BibliographieMargueriteDeFoix from './BibliographieMargueriteDeFoix.vue';

export default {
    name: 'BibliographieGeneral',
    components: {
        BibliographieMargueriteDeBretagne,
        BibliographieJeanneDeFlandre,
        BibliographieAnneDeBretagne,
        BibliographieMargueriteDeFoix,
        FlecheRetour
    }
};
</script>

<style scoped>

.biblio{
    padding: 10%;
}

h2{
    margin-top: 12%;
    margin-bottom: 5%
}

</style>

<template>

<h1>Bibliographie</h1>
<h2>Marguerite de Bretagne</h2>
<BibliographieMargueriteDeBretagne />

<h2>Jeanne De Flandre</h2>
<BibliographieJeanneDeFlandre />



</template>

<script>
import BibliographieJeanneDeFlandre from './BibliographieJeanneDeFlandre.vue';
import BibliographieMargueriteDeBretagne from './BibliographieMargueriteDeBretagne.vue';

    export default {
        name: 'BibliographieGeneral',
        components: {
            BibliographieMargueriteDeBretagne,
            BibliographieJeanneDeFlandre
        }
    };
</script>

<style scoped>
.csl-bib-body{
    padding: 10%;
    text-align: start;
}


</style>

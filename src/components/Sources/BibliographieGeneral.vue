<template>
        <div class="biblio">
            <h1>Bibliographie</h1>
    <h2>Marguerite de Bretagne</h2>
    <BibliographieMargueriteDeBretagne />

    <h2>Jeanne De Flandre</h2>
    <BibliographieJeanneDeFlandre />
</div>
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

.biblio{
    padding: 10%;
}

h2{
    margin-top: 12%;
    margin-bottom: 5%
}

</style>

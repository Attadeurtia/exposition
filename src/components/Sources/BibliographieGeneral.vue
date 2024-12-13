<template>
        <div class="biblio">
            <h1>Bibliographie</h1>

            <h2>Ressource principale de l'exposition</h2>

            <div class="csl-bib-body" style="line-height: 1.35; ">
  <div class="csl-entry" style="clear: left; ">
    <div class="csl-left-margin" style="float: left; padding-right: 0.5em;text-align: right; width: 1em;"></div><div class="csl-right-inline" style="margin: 0 .4em 0 1.5em;">L. Moal, <i>Duchesses: histoire d’un pouvoir au féminin en Bretagne les duchesses de Bretagne de Roscille d’Anjou à Anne de Bretagne, Xe-XVIe siècle</i>. Rennes: Presses universitaires de Rennes, 2021.</div>
  </div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=urn%3Aisbn%3A978-2-7535-8077-0&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Duchesses%3A%20histoire%20d'un%20pouvoir%20au%20f%C3%A9minin%20en%20Bretagne%20les%20duchesses%20de%20Bretagne%20de%20Roscille%20d'Anjou%20%C3%A0%20Anne%20de%20Bretagne%2C%20Xe-XVIe%20si%C3%A8cle&amp;rft.place=Rennes&amp;rft.publisher=Presses%20universitaires%20de%20Rennes&amp;rft.aufirst=Laurence&amp;rft.aulast=Moal&amp;rft.au=Laurence%20Moal&amp;rft.date=2021&amp;rft.isbn=978-2-7535-8077-0&amp;rft.language=fre"></span>
</div>
    

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

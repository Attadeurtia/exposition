<template>
    <div class="group timeline">
        <p class="Maison Capetien">Maison Capetien</p>
        <p class="Maison Demontfort">Maison Demontfort</p>
        <p class="Maison DeValois">Maison De Valois</p>


        <div class="duchesses-container">
            <div v-for="duchess in duchesses" :key="duchess.id" :class="['duchess-card', `card-${duchess.id}`]">
                <router-link :to="'/' + duchess.id" class="card">
                    <h2>{{ duchess.name }}</h2>
                    <p v-if="duchess.period">{{ duchess.period }}</p>
                    <p>{{ duchess.author }}</p>
                </router-link>
            </div>
        </div>
        <div class="rect rectangle-0">
            <div class="rect rectangle-2-1"></div>
            <div class="rect rectangle-2-2"></div>
            <div class="rect rectangle-3-1"></div>
            <div class="rect rectangle-3-2"></div>
            <div class="rect rectangle-4-1"></div>
            <div class="rect rectangle-4-2"></div>
            <div class="rect rectangle-5-1"></div>
            <div class="rect rectangle-5-2"></div>
            <div class="rect rectangle-6-1"></div>
            <div class="rect rectangle-6-2"></div>
            <div class="rect rectangle-7-1"></div>
            <div class="rect rectangle-7-2"></div>
        </div>
    </div>
</template>

        <!--         <div v-for="(rectangle, index) in rectangles" 
             :key="index" 
             :class="['shape', 'rect', `rectangle-${rectangle}`]">
        </div> -->

        <!-- rect: Rectangle -->
        



<script>

export default {
    name: 'DucessesTimeline',
    data() {
        return {
            duchesses: [
                { id: 'Anne-de-Bretagne', name: 'Anne de Bretagne', period: '1488-1514', author: 'Nathan' },
                { id: 'Jeanne-de-Penthievre', name: 'Jeanne de Penthièvre', period: '1341-1365', author: 'Léocadie' },
                { id: 'Marguerite-de-Foix', name: 'Marguerite de Foix', period: '1458-1486', author: 'Julien' },
                { id: 'Marguerite-de-Bretagne', name: 'Marguerite de Bretagne', period: '1458-1469', author: 'Geoffrey' },
                { id: 'Jeanne-de-Flandre', name: 'Jeanne de Flandre', period: '1295-1374', author: 'Cathy' }

            ],
/*             rectangles: ['2c43b97b4548', '2c4f8b69fbc6', '2c4f8c4fba3f']
 */        }
    }
};
</script>




<style scoped>
.duchesses-container {
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    text-decoration: none;
}





.card-Anne-de-Bretagne {
    text-align: center;
    padding: 20px;

    position: absolute;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    width: 200px;

    /* Ajoutez cette ligne pour supprimer le soulignement */
    color: inherit;
    /* Pour garder la couleur du texte normale */

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 10;

    top: calc(307px + 222px + 2037px + 130px);
    left: -350px;

}

.card-Jeanne-de-Penthievre {
    text-align: center;
    padding: 20px;

    position: absolute;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    width: 200px;

    /* Ajoutez cette ligne pour supprimer le soulignement */
    color: inherit;
    /* Pour garder la couleur du texte normale */

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 10;

    top: 700px;
    left: -350px;

}

.card-Marguerite-de-Foix {
    text-align: center;
    padding: 20px;

    position: absolute;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    width: 200px;

    /* Ajoutez cette ligne pour supprimer le soulignement */
    color: inherit;
    /* Pour garder la couleur du texte normale */

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 10;

    top: calc(307px + 222px + 1520px + 200px);
    left: -350px;

}

.card-Marguerite-de-Bretagne {
    text-align: center;
    padding: 20px;

    position: absolute;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    width: 200px;

    /* Ajoutez cette ligne pour supprimer le soulignement */
    color: inherit;
    /* Pour garder la couleur du texte normale */

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 10;

    top: calc(307px + 222px + 1520px + 200px);
    left: 130px;

}

.card-Jeanne-de-Flandre {
    text-align: center;
    padding: 20px;

    position: absolute;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    width: 200px;

    /* Ajoutez cette ligne pour supprimer le soulignement */
    color: inherit;
    /* Pour garder la couleur du texte normale */

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 10;

    top: calc(307px + 1520px - 327px);
    left: 130px;

}



.card {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    width: 200px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    /* Ajoutez cette ligne pour supprimer le soulignement */
    color: inherit;
    /* Pour garder la couleur du texte normale */
    color: var(--text-color-grey);
    
}




.card img {
    width: 100%;

    border-radius: 8px;
}


/* Group */
.timeline {
    
    position: relative;
    left: 50%;

    
    height: 3300px;
    width: 50%;
}

@media (max-width: 480px) {
    .timeline {
        transform-origin: top left;
        transform: scale(0.5);
}
}



.rect {
    background: var(--text-color-light);
    border-radius: 12px;
    position: absolute;
    width: 20px;
}


.rectangle-0 {
    position: absolute;
    left: 0px;
    width: 20px;
    height: 3200px;
    border-radius: 12px;
}

/* changer la distance des rectangles :crt + f sur 307px */
.rectangle-1-1 {
    left: 115px;
    height: 300px;
    top: calc(307px);
    transform: rotate(-55deg);
}


.rectangle-1-2 {
    left: 232px;
    top: calc(307px + 222px);
    height: 320px;
}


.rectangle-2-1 {
    left: -115px;
    height: 300px;
    top: calc(307px);
    transform: rotate(55deg);
}


.rectangle-2-2 {
    left: -232px;
    top: calc(307px + 222px);
    height: 320px;
}

.rectangle-3-1 {
    left: 115px;
    height: 300px;
    top: calc(307px + 830px);
    transform: rotate(-55deg);
}


.rectangle-3-2 {
    left: 232px;
    top: calc(307px + 222px + 830px);
    height: 320px;
}


.rectangle-4-1 {
    left: -115px;
    height: 300px;
    top: calc(307px + 830px);
    transform: rotate(55deg);
}


.rectangle-4-2 {
    left: -232px;
    top: calc(307px + 222px + 830px);
    height: 320px;
}

.rectangle-5-1 {
    left: 115px;
    height: 300px;
    top: calc(307px + 1520px);
    transform: rotate(-55deg);
}


.rectangle-5-2 {
    left: 232px;
    top: calc(307px + 222px + 1520px);
    height: 320px;
}


.rectangle-6-1 {
    left: -115px;
    height: 300px;
    top: calc(307px + 1520px);
    transform: rotate(55deg);
}


.rectangle-6-2 {
    left: -232px;
    top: calc(307px + 222px + 1520px);
    height: 320px;
}

.rectangle-7-1 {
    left: -115px;
    height: 300px;
    top: calc(307px + 2037px);
    transform: rotate(55deg);
}


.rectangle-7-2 {
    left: -232px;
    top: calc(307px + 222px + 2037px);
    height: 320px;
}







h2 {
    color: var(--link-color);
}

.rectangle-1-2c4f8c4fba3f {
    position: inherit;
    left: 228px;
    top: 1048px;
    width: 20px;
    height: 1192.5px;
    background: #B1B2B5;
    border-radius: 12px;
}


.rectangle-1-2c4f8b69fbc6 {
    position: absolute;
    left: 112.12px;
    top: 809.08px;
    width: 20px;
    height: 300px;
    transform: matrix(-0.64, 0.77, -0.77, -0.64, -0.00, -0.00);
    background: #B1B2B5;
    border-radius: 8.08px;
}


.rectangle-1-2c43b97b4548 {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 1192.5px;
    background: #B1B2B5;
    border-radius: 12px;
}

.Maison {
    position: absolute;
    z-index: 10;
    left: -15rem;
    font-family: 'Inknut Antiqua';
    font-size: 3rem;
    font-weight: bold;
    color: var(--primary-color);
    background-color: var(--background-color);
    padding: 10px;
}

.Capetien {
    top: 0;
}

.Demontfort {
    top: 930px;
}

.DeValois {
    top: 3030px;
}
</style>
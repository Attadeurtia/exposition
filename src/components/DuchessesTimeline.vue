<template>
    <div class="group group-2c511b0c6507">
        <div class="duchesses-container">
            <div v-for="duchess in duchesses" :key="duchess.name" :class="'card-' + duchess.id">
                <router-link :to="'/' + duchess.id" class="card">
                    <h2>{{ duchess.name }}</h2>
                    <p v-if="duchess.period">{{ duchess.period }}</p>
                    <p>{{ duchess.author }}</p>
                </router-link>
            </div>
        </div>
        
        <div v-for="(rectangle, index) in rectangles" 
             :key="index" 
             :class="['shape', 'rect', `rectangle-${rectangle}`]">
        </div>
    </div>
</template>

<script>

export default {
    name: 'DucessesTimeline',
    data() {
        return {
            duchesses: [
                { id: 'Anne-de-Bretagne', name: 'Anne de Bretagne', period: '1488-1514', author: 'Nathan' },
                { id: 'Jeanne-de-Penthièvre', name: 'Jeanne de Penthièvre', period: '1341-1365', author: 'Léocadie' },
                { id: 'Françoise-d-Amboise', name: 'Françoise d\'Amboise', author: 'Julien' },
                { id: 'Marguerite-de-Bretagne', name: 'Marguerite de Bretagne', author: 'Geoffrey' },
                { id: 'Jeanne-de-Flandres', name: 'Jeanne de Flandres', author: 'Cathy' }
            ],
            rectangles: ['2c43b97b4548', '2c4f8b69fbc6', '2c4f8c4fba3f']
        }
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

    top: 200px;
    left: -100px;

}

.card-Jeanne-de-Penthièvre {
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

    top: 1400px;
    left: 100px;

}

.card-Françoise-d-Amboise {
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

    top: 500px;
    left: -100px;

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

    top: 1000px;
    left: -100px;

}

.card-Jeanne-de-Flandres {
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

    top: 1700px;
    left: 150px;

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
}

.card img {
    width: 100%;
    
    border-radius: 8px;
}


/* Group */
.group-2c511b0c6507 {
    position: relative;
    left: 49%;

    width: 248px;
    height: 2240.5px;
}

/* Rectangle */
.rectangle-2c4f8c4fba3f {
    position: absolute;
    left: 228px;
    top: 1048px;
    width: 20px;
    height: 1192.5px;
    background: #B1B2B5;
    border-radius: 12px;
}

/* Rectangle */
.rectangle-2c4f8b69fbc6 {
    position: absolute;
    left: 112.12px;
    top: 809.08px;
    width: 20px;
    height: 300px;
    transform: matrix(-0.64, 0.77, -0.77, -0.64, -0.00, -0.00);
    background: #B1B2B5;
    border-radius: 8.08px;
}

/* Rectangle */
.rectangle-2c43b97b4548 {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 1192.5px;
    background: #B1B2B5;
    border-radius: 12px;
}
</style>
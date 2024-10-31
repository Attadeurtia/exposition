<template>

    <!-- group: Group -->
    <div class="group group-2c511b0c6507">
        <!-- rect: Rectangle -->
        <div class="duchesses-container">


            <div class="card-anne-de-bretagne">
                <router-link to="/anne-de-bretagne" class="card">
                    <h2>Anne de Bretagne</h2>
                    <p>Nathan</p>

                </router-link>
            </div>
            <div class="card-Jeanne-de-Penthièvre">
                <router-link to="/Jeanne-de-Penthièvre" class="card">
                    <h2>Jeanne de Penthièvre</h2>
                    <p>Léocadie</p>

                </router-link>
            </div>


            <div class="card-Françoise-d-Amboise">
                <router-link to="/Françoise-d-Amboise" class="card">
                    <h2>Françoise d’Amboise</h2>
                    <p>Julien</p>

                </router-link>
            </div>

            <div class="card-Marguerite-de-Bretagne">
                <router-link to="/Marguerite-de-Bretagne" class="card">
                    <h2>Marguerite de Bretagne</h2>
                    <p>Geoffrey</p>

                </router-link>
            </div>

            <div class="card-Jeanne-de-Flandres">
                <router-link to="/Jeanne-de-Flandres" class="card">
                    <h2>Jeanne de Flandres</h2>
                    <p>Cathy</p>

                </router-link>
            </div>


        </div>
        <div class="shape rect rectangle-2c43b97b4548">
        </div>
        <!-- rect: Rectangle -->
        <div class="shape rect rectangle-2c4f8b69fbc6">
        </div>
        <!-- rect: Rectangle -->
        <div class="shape rect rectangle-2c4f8c4fba3f">
        </div>
    </div>

</template>

<script>
export default {
    name: 'DucessesTimeline',

};
</script>


<style scoped>
.duchesses-container {
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    text-decoration: none;
}

.card-anne-de-bretagne {
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
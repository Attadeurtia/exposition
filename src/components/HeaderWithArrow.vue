<template>
    <div class="section full-screen">
        <h1 class="title">Exposition : les Duchesses de Bretagne</h1>
        <h2 class="subtitle">Par : Nathan Trebert, Geoffrey Posé, Cathy Lebougre, Léocadie Prugné et Julien Foulon </h2>
        <p class="header-text">
            Bienvenue dans notre exposition virtuelle dédiée aux duchesses de Bretagne, figures emblématiques de
            l'histoire et de la culture bretonnes. À travers les siècles, ces femmes puissantes ont non seulement
            façonné le destin de leur région, mais ont également inspiré de nombreux artistes, qui ont immortalisé leur
            image et leur héritage dans des œuvres iconographiques variées.
            <br><br>

            Cette exposition vous invite à explorer la richesse des représentations artistiques des duchesses de
            Bretagne, allant des portraits royaux aux illustrations médiévales, en passant par les sculptures, les
            sceaux et lettres. Chaque œuvre témoigne de l'importance de ces femmes dans la société bretonne et
            française, tout en reflétant les styles artistiques de leur époque.
            <br><br>
            En parcourant cette exposition, vous découvrirez comment ces duchesses s'inscrivent dans l'histoire via
            leurs représentations. Nous espérons que cette immersion dans le patrimoine visuel breton vous inspirera et
            vous permettra d'apprécier le rôle de ces femmes de pouvoir dans notre héritage culturel.
            <br><br>
            Nous vous souhaitons une agréable visite !

        </p>
        <div class="arrow-down" @click="scrollToNextSection">&#x2193;</div>

    </div>
</template>

<script>
export default {
    name: 'HeaderWithArrow',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    },
    methods: {
        goToNewPage() {
            this.$router.push({ name: 'newpage' });
        },
        scrollToNextSection() {
            const nextSection = this.$el.nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;700&display=swap');




.section {
    font-family: 'Inknut Antiqua', serif;
    text-align: center;
    margin: 5rem;


}



.title {
    font-size: 3.3rem;
    font-family: 'Inknut Antiqua', serif;
    font-weight: bold;
    color: var(--primary-color);
    margin: 10rem;
}

.subtitle {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-color-light);
    padding: 0 10rem;



}

.header-text {
    font-size: 1.2rem;
    margin-top: 10rem;
    text-align: left;
    line-height: 1.5;
    margin-right: 15%;
    margin-left: 15%;
    font-weight: 700;


}




.arrow-down {
    font-size: 2rem;
    /* Taille de la flèche */
    margin-top: 1rem;
    /* Espace entre le corps de texte et la flèche */
    cursor: pointer;
    animation: bounce 2s infinite;
    margin-bottom: 18rem;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-10px);
    }

    60% {
        transform: translateY(-5px);
    }
}

@media screen and (max-width: 768px) {
    .section {
        margin: 20px;
    }

    .title {
        font-size: 3rem;
    }

    .subtitle {
        font-size: 1.2rem;
        padding: 0 7rem;
    }

    .header-text {
        font-size: 1rem;
    }

    .arrow-down {
        font-size: 1.5rem;
    }


}

@media screen and (max-width: 480px) {

    .section {
        margin: 20px;
    }

    .title {
        font-size: 2rem;
        margin: 2rem 0;
    }

    .subtitle {
        font-size: 1rem;
        margin-top: 3rem;
        padding: 0 0rem;
    }

    .header-text {
        font-size: 0.875rem;
        margin-top: 3rem;
        margin-left: 0%;
        margin-right: 0%;
    }

    .arrow-down {
        font-size: 1rem;
    }
}
</style>
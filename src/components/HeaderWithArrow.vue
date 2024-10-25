<template>
    <div class="section full-screen">
        <h1 class="title">Expo</h1>
        <h2 class="subtitle">Par : Nathan Trebert, Geoffrey posé, Cathy Lebougre, Leocadie Prugne, Julien Foulon et Leo Vincent </h2>
        <p class="header-text">
            Nous vous invitons à contempler ces images avec un regard curieux et émerveillé, à ressentir l'atmosphère
            mystique qu'elles dégagent et à réfléchir à leur signification dans le contexte historique et culturel du
            Moyen Âge. Que vous soyez passionné d'art, d'histoire ou simplement curieux, cette exposition est une
            occasion unique de redécouvrir un patrimoine souvent méconnu.<br><br>
            Laissez-vous transporter par la magie des vitraux et la lumière qu'ils diffusent, et rejoignez-nous pour
            célébrer l'héritage artistique de nos ancêtres.
            <br><br>
            Venez explorer, admirer et vous émerveiller devant ces Lumières du Moyen Âge !
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
        scrollToNextSection() {
            const nextSection = this.$el.nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;700&display=swap');


.section {
    font-family: 'Inknut Antiqua', serif;
    text-align: center;
    margin: 5rem;

}

.title {
    font-size: 5rem;
    font-family: 'Inknut Antiqua', serif;
    font-weight: bold;
}

.subtitle {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
}

.header-text {
    font-size: 1.2rem;
    margin-top: 2rem;
    text-align: left;
    line-height: 1.5;
}


.arrow-down {
    font-size: 2rem;
    /* Taille de la flèche */
    margin-top: 1rem;
    /* Espace entre le corps de texte et la flèche */
    cursor: pointer;
    animation: bounce 2s infinite;
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
    }

    .subtitle {
        font-size: 1rem;
    }

    .header-text {
        font-size: 0.875rem;
    }

    .arrow-down {
        font-size: 1rem;
    }
}
</style>
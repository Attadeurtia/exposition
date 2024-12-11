<template>

<button @click="goBack" class="back-button">←</button>





</template>

<script>
export default {
    name: 'FlecheRetour',

    methods: {
        goBack() {
            window.history.back();
        }
    }
}


</script>

<style>
.back-button {
  font-family: 'Inknut Antiqua', Arial, Helvetica, sans-serif;
  bottom: 10px;
  font-size: 4rem;
  cursor: pointer;
  color: var(--link-color);
  background: none;
  border: none;

}
</style>
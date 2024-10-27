<template>
  <div id="app">
  </div>
  <RouterLink :to="{name: 'homepage'}">Home</RouterLink>

  <RouterLink :to="{name: 'newpage'}">Go to new page</RouterLink>

  <RouterView/>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c3bec8;
}
</style>
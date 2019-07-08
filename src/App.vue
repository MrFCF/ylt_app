<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/common.css";
html, body, #app{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

</style>

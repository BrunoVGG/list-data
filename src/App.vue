<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "src/assets/css/patterns.scss";

body,
html {
  margin: 0 auto;
  padding: 0;
  background-color: $grey-50;

#app {
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: SemiBold;
    font-size: 16px;
    color: $font-color;
    font-family: 'Montserrat', sans-serif, Arial, Helvetica;
  }

}
</style>

<template>
  <div class="container">

    <AppHeader />
    <img alt="Vue logo" src="./assets/logo.png">
    <AddCources />
    <CourcesList />
  </div>
</template>

<script>

import AppHeader from "./components/Header";
import CourcesList from "./components/Cources";
import AddCources from "./components/AddCources";

export default {
  name: 'App',

  components: {
    AppHeader,
    CourcesList,
    AddCources,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

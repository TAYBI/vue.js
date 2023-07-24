<template>
  <div class="container">

    <AppHeader />
    <img alt="Vue logo" src="./assets/logo.png">
    <AddCources />
    <CoursesList />
  </div>

  <AppFooter />
</template>

<script>

import AppHeader from "./components/Header";
import CoursesList from "./components/Courses";
import AddCources from "./components/AddCources";
import AppFooter from "./components/Footer";

export default {
  name: 'App',

  components: {
    AppHeader,
    CoursesList,
    AddCources,
    AppFooter
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

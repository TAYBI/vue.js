<template>
  <div class="container">

    <AppHeader />
    <br>
    <CoursesList>
    </CoursesList>
  </div>

  <AppFooter />
</template>

<script>

import AppHeader from "./components/Header";
import CoursesList from "./components/Courses";
import AppFooter from "./components/Footer";

export default {
  name: 'App',

  components: {
    AppHeader,
    CoursesList,
    AppFooter
  },

  data() {
    return {
      displayAdd: false,
    }
  },

  methods: {

  }
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

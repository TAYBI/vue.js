<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{ message }}</h1>
  <input class="form-control" type="text" ref="input">
  <button class="btn btn-dark" @click="setFocus">set Focus</button>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      message: "Vue CLI app"
    }
  },

  methods: {
    setFocus() {
      this.$refs.input.focus();
    }
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
  margin-top: 60px;
}
</style>

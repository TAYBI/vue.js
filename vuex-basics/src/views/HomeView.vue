<template>
  <div class="home">
    <button @click="increance">x2</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',

  components: {
    HelloWorld
  },
  methods: {
    increance() {
      this.$store.dispatch({ type: 'counter/increment', data: 3 });
    }
  },
}
</script>

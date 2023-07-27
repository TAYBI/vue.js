<template>
  <div class="hello">
    <h1>{{ counter }}</h1>
    <button @click="increase({ data: 8 })">x8</button>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  computed: {
    // Option 1
    // ...mapGetters(['getCounterNormalize'])
    // Option 2
    ...mapGetters('counter', { 'counter': 'getCounterNormalize' })
    // counter() {
    //   return this.$store.getters.getCounterNormalize;
    // }
  },
  methods: {
    // Option 1
    // ...mapActions(['increment'])
    // Option 2
    ...mapActions('counter', { 'increase': 'increment' })
    // increance() {
    //   this.$store.dispatch({ type: 'increment', data: 3 });
    // }
  },
  props: {
    msg: String
  }
}
</script>

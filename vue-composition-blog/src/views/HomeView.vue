<template>
  <div class="home">
    <h1 ref="header">{{ text }}</h1>
    <button @click="saySalam">Salam</button>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    //data
    let text = ref("Home")

    let header = ref(null);


    //Methods
    const saySalam = () => {
      // header.value.textContent = 'changed'
      text.value = "second home"
      console.log(text);
    }
    return { text, saySalam, header }
  }
}
</script>

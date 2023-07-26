<template>
  <div class="home">
    <h1 ref="header">{{ text.text }}</h1>
    <button @click="saySalam">Salam</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    //data
    // let text = ref("Home")
    let text = reactive({ text: "Home" })
    let header = ref(null);


    //Methods
    const saySalam = () => {
      // header.value.textContent = 'changed'
      text.text = "second home"
      console.log(text);
    }
    return { text, saySalam, header }
  }
}
</script>

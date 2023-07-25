<template>
  <div class="home">
    <h1>Home - {{ text }}</h1>
    <button @click="saySalam">Salam</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  setup() {
    //data
    let text = "Home"

    //Methods

    const saySalam = () => {
      console.log('Bdina haja akhra');
    }
    return { text, saySalam }
  }
}
</script>

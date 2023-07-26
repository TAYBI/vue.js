<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/courses">Courses</router-link>
  </nav>

  <button @click="Prev">Prev</button>
  <button @click="Next">Next</button>
  <button @click="Home">Home</button>
  <router-view />
</template>

<script>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {

    const router = useRouter()


    onMounted(() => console.log(useRoute().params.id))

    const Prev = () => {
      router.go(-1)
    }
    const Next = () => {
      router.go(1)

    }
    const Home = () => {
      router.push('/')
    }

    return { Prev, Next, Home }
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

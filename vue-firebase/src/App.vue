<template>
  <v-layout class="rounded rounded-md">
    <SideBar />
    <AppBar />

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view />
    </v-main>
  </v-layout>
</template>
<script>

import SideBar from './components/SideBare.vue'
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    AppBar
  },
  data: () => ({
    //
  }),
}
</script>

<template lang="">
<nav class="navbar  bg-primary my-2 mb-3" data-bs-theme="dark">
  <div class="d-flex flex-row">
    <router-link class="navbar-brand px-3" to="/">Home</router-link>
      <ul class="navbar-nav me-auto d-flex flex-row">
        <li class="nav-item px-2">
          <router-link class="nav-link " :to="{name: 'home'}">Home
          </router-link>
        </li>
        <li class="nav-item px-2">
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item px-2">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
  </div>
</nav>
</template>
<script>
export default {

}
</script>
<style>
.router-link-active {
  font-weight: bolder !important;
  color: #41d7a7 !important;
}

.navbar-brand {
  text-decoration: none !important;
  font-weight: normal !important;
  color: white !important;
}
</style>
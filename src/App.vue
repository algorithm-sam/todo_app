<template>
  <div id="app" class="relative min-h-screen">
    <router-view />
  </div>
</template>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

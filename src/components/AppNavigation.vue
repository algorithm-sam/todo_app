<template>
  <div class="bg-white">
    <div class="container flex mx-auto justify-between p-4 items-center">
      <router-link :to="{ name: 'home' }" class="font-bold text-lg"
        >Logo</router-link
      >
      <div>
        <router-link
          class="nav-links text-black rounded-full"
          tag="a"
          :to="{ name: 'register' }"
          >Register</router-link
        >
        <router-link
          class="lg:nav-links text-white bg-purple-500 py-2 px-6 rounded-full mr-0"
          tag="a"
          :to="{ name: 'login' }"
          >Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-links {
  @apply mr-3;
}
</style>

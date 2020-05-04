<template>
  <div class="lg:w-2/3 lg:mx-auto lg:container md:w-screen">
    <MainNavigation />

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavigation from "@/components/MainNavigation.vue";

export default {
  name: "home",
  components: {
    MainNavigation
  }
};
</script>

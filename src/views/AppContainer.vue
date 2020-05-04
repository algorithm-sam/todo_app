<template>
  <div class="bg-gray-100 min-w-screen min-h-screen">
    <AppNavigation />
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavigation from "@/components/AppNavigation.vue";
export default {
  name: "home",
  components: {
    AppNavigation
  }
};
</script>

<style scoped>
.hero {
  height: 600px;
}
</style>

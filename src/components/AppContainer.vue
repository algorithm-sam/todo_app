<template>
  <div class="bg-gray-100 min-w-screen min-h-screen">
    <AppNavigation />
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavigation from "@/components/AppNavigation.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "home",
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style scoped>
.hero {
  height: 600px;
}
</style>

<template>
  <div>
    <div class="container mx-auto align-items mx-6 px-4 lg:px-0">
      <div class="nav-container">
        <div class="list-none">
          <router-link
            tag="a"
            :to="{ name: 'recent' }"
            class="menu-link menu-icon-only text-purple-600"
            ><i class="fa fa-list"></i
          ></router-link>
          <router-link
            tag="a"
            :to="{ name: 'calender' }"
            class="menu-link menu-icon-only"
            ><i class="fa fa-calendar"></i
          ></router-link>
          <router-link
            tag="a"
            :to="{ name: 'focus' }"
            class="menu-link menu-icon-only"
            ><i class="fa fa-star"></i
          ></router-link>
        </div>
        <div class="list-none">
          <a class="menu-link">Tasks</a>
          <a class="menu-link">Archives</a>
          <a class="menu-link"><i class="fa fa-search"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNavigaion",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-link {
  @apply .mr-4 .text-gray-600;
}
.menu-link:hover {
  @apply text-purple-600;
  cursor: pointer;
}

.nav-container {
  @apply .py-5 .flex .justify-between;
}

.menu-icon-only {
  @apply .mr-8;
}
</style>

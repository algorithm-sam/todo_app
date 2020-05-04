<template>
  <div class="todo-content">
    <div class="flex justify-between items-center">
      <div
        class="w-screen lg:w-4/5 inline-flex  items-center content-center justify-between lg:justify-start"
      >
        <div class="flex items-center">
          <i class="fa fa-calendar text-gray-400 mr-4"></i>
          <h3 class="text-gray-800 font-medium text-lg text-left">
            Take Kids to school
          </h3>
        </div>
        <p
          class="time pl-4 text-gray-500 font-normal text-sm text-right float-right"
        >
          8:00 - 8:30
        </p>
      </div>
      <div class="hidden lg:block text-right">
        <h2 class="text-gray-500 font-normal text-md">2hr 30min</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.todo-content {
  @apply .mb-4;
}
</style>

<template>
  <div class="container mx-auto py-5 px-4 lg:py-20 ">
    <h1 class=" text-2xl lg:text-3xl font-semibold lg:my-6 mb-6 text-gray-800">
      Focus on this now
    </h1>
    <div class=" flex items-center rounded-md bg-white p-10">
      <div class="w-4/5 inline-flex items-center">
        <i class="fa fa-home text-gray-700 mr-4"></i>
        <h2 class="font-semibold text-gray-700">Process Emails</h2>
        <h4 class="hidden lg:block lg:ml-6">8:30 - 9:30 AM</h4>
      </div>
      <div class="w-1/5 text-right text-gray-500 font-semibold">1h</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FocusTodo",
  data() {
    return {
      todo: ""
    };
  },

  created() {
    // get the todo to focus on at the moment
  }
};
</script>

<style scoped></style>

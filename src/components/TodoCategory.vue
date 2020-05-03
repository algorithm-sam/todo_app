<template>
  <div class="pt-10 px-4 lg:px-0">
    <div class="todo-category mb-10">
      <div class="heading flex items-center justify-between mb-6">
        <h1 class="capitalize text-2xl font-semibold text-black">
          {{ data.name }}
        </h1>
        <h1 class="text-sm font-semibold text-gray-800">7hr 12mins</h1>
      </div>

      <todo-item v-for="(content, index) in todos" :key="index"></todo-item>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "TodoCategory",
  components: {
    TodoItem
  },
  props: {
    data: Object
  },
  data() {
    return {
      todos: [1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    fetchData() {
      //perform some asynchronous request to the api endpoint and fetch the todos for that category
    }
  },

  created() {}
};
</script>

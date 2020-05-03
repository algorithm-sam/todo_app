<template>
  <div>
    <todo-category
      v-for="(category, index) in todos"
      :key="index"
      :data="category"
    ></todo-category>

    <AddTodo
      :class="{ hidden: showAddButton }"
      @closePanel="closeAddTodoPanel"
    />

    <button
      @click="showAddTodoPanel"
      class="rounded-full bg-purple-600 fixed px-4 py-3 text-white"
      :class="{ invisible: !showAddButton }"
      style="right:5%; bottom: 1%;"
    >
      <i class="fa fa-plus"></i>
    </button>
  </div>
</template>

<script>
import TodoCategory from "@/components/TodoCategory.vue";
import AddTodo from "@/components/AddTodo.vue";
export default {
  name: "RecentCategory",
  components: {
    AddTodo,
    TodoCategory
  },
  data() {
    return {
      showAddButton: true,
      todos: [
        {
          name: "Today",
          url: "some_url"
        },
        {
          name: "Tomorrow",
          url: "some_url"
        }
      ]
    };
  },
  methods: {
    showAddTodoPanel() {
      this.showAddButton = false;
    },
    closeAddTodoPanel() {
      this.showAddButton = true;
    }
  }
};
</script>

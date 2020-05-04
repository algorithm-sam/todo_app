<template>
  <div
    id="add_todo"
    class="fixed w-screen lg:w-3/12 top-0 right-0 bg-white border-l-2 border-purple-300 "
  >
    <button
      class="text-purple-500 text-3xl absolute"
      style="right:3%"
      @click="closeTodoPanel"
    >
      &times;
    </button>
    <div class="h-screen py-16 px-10">
      <h1 class="text-center text-lg uppercase">create a todo</h1>
      <!-- Name,Time,Date -->
      <div class="mt-10">
        <form ref="form" @submit.prevent="addTodo">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              class="py-2 outline-0 border-b-2 border-purple-300 focus:outline-0"
              placeholder="Enter Task Name ..."
              v-model="name"
            />
          </div>

          <div class="form-group">
            <label for="dueDate">Due Date</label>
            <input type="date" name="dueDate" v-model="date" />
          </div>

          <div class="form-group mt-10">
            <button class="bg-purple-500 text-white px-4 py-2">
              Save Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/Bus.js";
export default {
  name: "AddTodo",
  data() {
    return {
      name: "",
      date: ""
    };
  },
  methods: {
    closeTodoPanel() {
      // this.$refs['form'].clear();
      this.name = "";
      this.date = "";
      this.$emit("closePanel");
    },

    addTodo() {
      this.name = "";
      this.date = "";
      this.$emit("closePanel");
      eventBus.$emit("todoCreated", "todo-returned-from-api");
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
  width: 100%;
  position: relative;
}
.group-inline {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}
.group-inline label {
  flex-grow: 1;
  padding-right: 10px;
}

.group-inline input {
  flex-grow: 3;
  border: 0;
  outline: none;
}
.group-inline input:focus,
.form-group input:focus {
  outline: none;
}

.form-group input {
  width: 100%;
  border-bottom: 2px solid #d6bcfa;
}
</style>

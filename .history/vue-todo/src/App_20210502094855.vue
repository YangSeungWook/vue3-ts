<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <TodoInput
      :item="todoText"
      @inputUp="updateTodoText"
      @add="addTodoItem"
    ></TodoInput>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";

export default Vue.extend({
  components: { TodoInput },
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    updateTodoText(value: any) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      localStorage.setItem(this.todoText, this.todoText);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
  },
});
</script>

<style scoped></style>

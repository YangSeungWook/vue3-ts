<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input id="todo-input" :value="item" @input="handelInput" type="text" />
    <button @click="addTodo" type="button">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    item : {
      type : String,
      required : false
    }
  },
  methods: {
    handelInput(event:any) {
      this.$emit("inputUp", event.target.value);
    },
    addTodo() {
      this.$emit("add");
    },
  },
});
</script>

<style scoped></style>

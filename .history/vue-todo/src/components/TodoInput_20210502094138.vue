<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" :value="item" @input="handelInput" type="text">
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props : ["item"],
  methods : {
    handelInput(event) {
      this.$emit("inputUpload",event.target.value);
    },
    addTodo () {
      console.log('add');
    }
  }
})
</script>

<style scoped>

</style>
<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <TodoInput :item="todoText" @inputUp="updateTodoText"></TodoInput>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoInput from './components/TodoInput.vue'

export default Vue.extend({
  components: { TodoInput },
  data(){
    return {
      todoText : ""
    }
  },
  methods : {
    updateTodoText(value : any){
      this.todoText = value;
    }
  }
})
</script>

<style scoped>

</style>
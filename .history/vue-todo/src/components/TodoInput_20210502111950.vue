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
    item: {
      type: String,
      required: false,
    },
  },
  methods: {
    handelInput(event: InputEvent) {
      console.log(event);
      // if(!event.target){   //조건문으로 이벤트 타겟 보장
      //   return;
      // }
      const eventTarget = event.target as HTMLInputElement; // 이벤트 타겟 보장
      this.$emit("inputUp", eventTarget.value);
    },
    addTodo() {
      this.$emit("add");
    },
  },
});
</script>
d();

<style scoped></style>

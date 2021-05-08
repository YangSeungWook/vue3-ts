<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input id="todo-input" :value="item" @input="handelInput" type="text" />
    <button @click="addTodo" type="button">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VueEvent } from "@/types/index";

export default Vue.extend({
  props: {
    item: {
      type: String,
      required: false,
    },
  },
  methods: {
    // handelInput(event: InputEvent) {
    handelInput(event: VueEvent.Input<HTMLInputElement>) {
      //namespace 를 통한 이벤트 타입정의
      console.log(event.target.value);

      // if(!event.target){   //조건문으로 이벤트 타겟 보장
      //   return;
      // }
      //const eventTarget = event.target as HTMLInputElement; // 이벤트 타겟 보장  ( 사용할때마다 as 해야해서 불편)
      //this.$emit("inputUp", eventTarget.value);

      //함수 인자에 제네릭을 이용하여 타입정의했기때문에 아래처럼 event.target.value 사용 가능
      this.$emit("inputUp", event.target.value);
    },
    addTodo() {
      this.$emit("add");
    },
  },
});
</script>

<style scoped></style>

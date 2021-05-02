<template>
  <li>
    <span class="item" :class="todoItemClass" @click="toggleItem">{{
      todoItem.title
    }}</span>
    <button @click="removeItem">삭제</button>
  </li>
</template>

<script lang="ts">
import { Todo } from "../App.vue";
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    todoItem: Object as PropType<Todo>, // 인터페이스 Todo를 받아옴  Todo 치고 컨트롤 + 스페이스 누른 다음 엔터 치면 자동으로 Todo import됨
    index: Number,
  },
  computed: {
    todoItemClass(): string | null {
      // computed에서는 타입 필수로 넣어줘야함
      return this.todoItem.done ? "complete" : null;
    },
  },
  methods: {
    removeItem() {
      this.$emit("remove", this.index);
    },
    toggleItem() {
      this.$emit("toggle", this.todoItem, this.index); // 클릭한 아이템의 텍스트와 인덱스를 위로 올림
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>

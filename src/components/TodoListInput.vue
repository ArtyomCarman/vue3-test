<template>
  <div class="input-wrapper">
    <input type="text" v-model="title" class="input" @keyup.enter="addTodo" />
    <button @click="addTodo" class="input-action">Добавить</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/store/todos.store";

const { addTodoListItem } = useTodoStore();
const title = ref("");

const addTodo = () => {
  addTodoListItem(title.value);
  title.value = "";
};
</script>
<style scoped>
.input-wrapper {
  display: flex;
  gap: 10px;
}

.input-action {
  background-color: darkcyan;
  border: none;
  padding: 10px;
  border-radius: var(--font-size);
}

.input {
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: var(--font-size);
}
</style>

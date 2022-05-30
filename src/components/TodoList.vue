<template>
  <div>
    <todo-list-input />
    <h2 v-if="todoListStatus === 'PENDING'">Загрузка...</h2>
    <ul v-else class="list">
      <todo-list-item v-for="todo in todosList" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>
<script setup lang="ts">
import TodoListItem from "./TodoListItem.vue";
import TodoListInput from "./TodoListInput.vue";
import { useTodoStore } from "../store/todos.store";

const { todosList, todoListStatus, fetchTodoList } = useTodoStore();

fetchTodoList();
</script>
<style scoped>
.list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
}
</style>

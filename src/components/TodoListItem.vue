<template>
  <li class="list-item">
    {{ todo.title }}
    <div>
      <div class="list-item--completed">
        {{ completedText }}
      </div>

      <div class="list-item--actions">
        <button
          @click="editTodoListItem({ ...todo, completed: !todo.completed })"
        >
          {{ completedTextAction }}
        </button>
        <button @click="removeTodoListItem(todo.id)" class="list-item-delete">
          удалить
        </button>
      </div>
    </div>
  </li>
</template>
<script setup lang="ts">
import { useTodoStore } from "@/store/todos.store";
import type { Todo } from "@/types/todos.types";
import { computed } from "@vue/runtime-core";

const props = defineProps<{
  todo: Todo;
}>();

const { removeTodoListItem, editTodoListItem } = useTodoStore();

const completedText = computed(() =>
  props.todo.completed ? "сделано" : "не сделано"
);

const completedTextAction = computed(() =>
  props.todo.completed ? "Начать" : "Завершить"
);
</script>
<style scoped>
.list-item {
  background-color: coral;
  border-radius: var(--font-size);
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: black;
  justify-content: space-between;
}

.list-item--actions {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.list-item--completed {
  text-align: end;
}
.list-item-delete {
  background-color: brown;
}
</style>

import { computed, reactive } from "vue";
import type { TodosState, Todo } from "@/types/todos.types";
import { useTodosService } from "@/services/todos.service";

const initialTodosState: TodosState = {
  todoList: [],
  todoListStatus: "SUCCESS",
};

const todosState = reactive<TodosState>(initialTodosState);

export const useTodoStore = () => {
  const {
    getTodoList,
    deleteTodoListItem,
    postTodoListItem,
    patchTodoListItem,
  } = useTodosService();

  const fetchTodoList = async () => {
    todosState.todoListStatus = "PENDING";

    const todoList = await getTodoList();

    todosState.todoList = todoList;

    todosState.todoListStatus = "SUCCESS";
  };

  const addTodoListItem = (title: Todo["title"]) => {
    const item = {
      userId: 1,
      id: Math.random(),
      title,
      completed: false,
    };

    todosState.todoList.push(item);
    postTodoListItem(item);
  };

  const removeTodoListItem = (itemId: Todo["id"]) => {
    todosState.todoList = todosState.todoList.filter(({ id }) => id !== itemId);
    deleteTodoListItem(itemId);
  };

  const editTodoListItem = (newItem: Todo) => {
    todosState.todoList = todosState.todoList.map((item) =>
      item.id === newItem.id ? { ...item, ...newItem } : item
    );
    patchTodoListItem(newItem);
  };

  return {
    todosList: computed(() => todosState.todoList),
    todoListStatus: computed(() => todosState.todoListStatus),

    addTodoListItem,
    removeTodoListItem,
    editTodoListItem,
    fetchTodoList,
  };
};

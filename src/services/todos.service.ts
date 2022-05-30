import type { Todo } from "@/types/todos.types";

export const useTodosService = () => {
  const TODOS_URL = "https://jsonplaceholder.typicode.com/todos/";

  return {
    async getTodoList(): Promise<Todo[]> {
      const response = await fetch(TODOS_URL + "?_limit=10");
      const data = await response.json();

      return data;
    },

    async postTodoListItem(item: Todo) {
      const response = await fetch(TODOS_URL, {
        method: "POST",
        body: JSON.stringify(item),
      });
      const data = await response.json();

      return data;
    },

    async deleteTodoListItem(id: Todo["id"]) {
      const response = await fetch(TODOS_URL + id, {
        method: "DELETE",
      });
      const data = await response.json();

      return data;
    },

    async patchTodoListItem(item: Todo) {
      const response = await fetch(TODOS_URL + item.id, {
        method: "PATCH",
        body: JSON.stringify(item),
      });
      const data = await response.json();

      return data;
    },
  };
};

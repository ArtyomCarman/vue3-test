export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type TodoListStatus = "SUCCESS" | "PENDING" | "ERROR";

export interface TodosState {
  todoList: Todo[];
  todoListStatus: TodoListStatus;
}

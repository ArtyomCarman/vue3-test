import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "todo-list",
      component: () => import("../pages/TodoListPage.vue"),
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/reg",
    name: "register",
    meta: { layout: "main" },
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/event/profile",
    name: "event-profile",
    meta: { layout: "main" },
    component: () => import("../views/EventProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

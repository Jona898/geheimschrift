import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/GenerateEncoding",
  //   name: "GenerateEncoding",
  //   // route level code-splitting
  //   // this generates a separate chunk (GenerateEncoding.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import("../views/GenerateEncoding.vue"),
  // },
  {
    path: "/EncodeMessage",
    name: "EncodeMessage",
    component: () => import("../views/EnDecodeMessage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

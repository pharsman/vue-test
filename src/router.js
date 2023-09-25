// import { createRouter, createWebHistory } from "vue-router";

// const routes = [
//   {
//     path: "/",
//     name: "",
//     // component: () => import("@/views/HomeView.vue"),
//   },
//   {
//     path: "/About",
//     name: "About",
//     component: () => import("@/pages/about/About.vue"),
//   },
//   {
//     path: "/shop",
//     name: "shop",
//     component: () => import("@/pages/shop/views/ShopView.vue"),
//   },
// ];

// export const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/components/NotFound.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const moduleRoute = [
  {
    path: "/Shop",
    name: "Shop",
    component: () => import("./views/ShopView.vue"),
  },
  {
    path: "/Inner",
    name: "Inner",
    component: () => import("./views/Inner.vue"),
  },
];

export default moduleRoute;

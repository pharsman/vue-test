const moduleRoute = [
  {
    path: "/About",
    name: "About",
    component: () => import("./views/About.vue"),
  },
];

export default moduleRoute;

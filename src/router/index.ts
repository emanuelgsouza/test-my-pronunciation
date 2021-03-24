import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LayoutDefault from "@/layouts/default.vue";
import HomeComponent from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "LayoutDefault",
    component: LayoutDefault,
    children: [
      {
        path: "/",
        name: "HomePage",
        component: HomeComponent,
      },
      {
        path: "/about",
        name: "AboutPage",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LayoutDefault from "@/layouts/default.vue";
import HomeComponent from "@/views/Home/index.vue";

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
        path: "about",
        name: "AboutPage",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue"),
      },
      {
        path: "select",
        name: "SelectPage",
        component: () =>
          import(/* webpackChunkName: "select" */ "@/views/Select/index.vue"),
      },
      {
        path: "challenge/:uuid",
        name: "ChallengePage",
        component: () =>
          import(/* webpackChunkName: "challenge" */ "@/views/Challenge.vue"),
      },
      {
        path: "result/:uuid",
        name: "ResultPage",
        component: () =>
          import(/* webpackChunkName: "result" */ "@/views/Result.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { microApps } from "./qiankunRouter";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "BasicLayout",
    component: () => import("@/layouts/BasicLayout.vue"),
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home.vue"),
      },
      {
        path: "main",
        name: "MainDemo",
        component: () => import("@/views/main.vue"),
      },
    ],
  },
  // qiankun 微应用路由
  ...microApps.map((item) => {
    return {
      path: `/${item.name}`,
      name: `SubApp${item.name}`,
      meta: {
        name: item.name,
        isMicro: true,
      },
      component: () => import("@/layouts/BasicLayout.vue"),
    };
  }),
];

const history = createWebHistory(process.env.BASE_URL);

const router = createRouter({
  history,
  routes,
});

(window as any).router = router;

export default router;

export { history };

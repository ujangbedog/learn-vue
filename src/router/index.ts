import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

import Tugas1Routes from "./tugas-1-routes";
import Tugas2Routes from "./tugas-2-routes";
import Tugas3Routes from "./tugas-3-routes";
import Tugas4Routes from "./tugas-4-routes";
import Tugas5Routes from "./tugas-5-routes";
import Tugas6Routes from "./tugas-6-routes";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tugas",
    name: "tugas",
    children: [
      Tugas1Routes,
      Tugas2Routes,
      Tugas3Routes,
      Tugas4Routes,
      Tugas5Routes,
      Tugas6Routes,
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TugasSatu from "../views/tugas/TugasSatu.vue";
import NotFoundView from "../views/NotFoundView.vue";
import TugasDua from "@/views/tugas/TugasDua.vue";
import TugasTiga from "@/views/tugas/TugasTiga.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tugas/1",
      name: "tugas1",
      component: TugasSatu,
    },
    {
      path: "/tugas/2",
      name: "tugas2",
      component: TugasDua,
    },
    {
      path: "/tugas/3",
      name: "tugas3",
      component: TugasTiga,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;

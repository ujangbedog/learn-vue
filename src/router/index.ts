import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//TUGAS SATU (TS)
import TugasSatu from "../views/tugas/TugasSatu.vue";
import PraktikumSatuTS from "@/views/tugas/1/praktikum-satu.vue";
import PraktikumDuaTS from "@/views/tugas/1/praktikum-dua.vue";
import PraktikumTigaTS from "@/views/tugas/1/praktikum-tiga.vue";

//TUGAS DUA (TD)
import TugasDua from "@/views/tugas/TugasDua.vue";
import PraktikumSatuTD from "@/views/tugas/2/praktikum-satu.vue";
import PraktikumDuaTD from "@/views/tugas/2/praktikum-dua.vue";
import PraktikumTigaTD from "@/views/tugas/2/praktikum-tiga.vue";

//TUGAS TIGA (TT)
import TugasTiga from "@/views/tugas/TugasTiga.vue";
import PraktikumSatuTT from "@/views/tugas/3/praktikum-satu.vue";
import PraktikumDuaTT from "@/views/tugas/3/praktikum-dua.vue";
import PraktikumTigaTT from "@/views/tugas/3/praktikum-tiga.vue";

import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tugas",
      name: "tugas",
      children: [
        {
          path: "1",
          name: "tugas1",
          component: TugasSatu,
          children: [
            {
              path: "praktikum-satu",
              name: "tugas1-praktikum-satu",
              component: PraktikumSatuTS,
            },
            {
              path: "praktikum-dua",
              name: "tugas1-praktikum-dua",
              component: PraktikumDuaTS,
            },
            {
              path: "praktikum-tiga",
              name: "tugas1-praktikum-tiga",
              component: PraktikumTigaTS,
            },
          ],
        },
        {
          path: "2",
          name: "tugas2",
          component: TugasDua,
          children: [
            {
              path: "praktikum-satu",
              name: "tugas2-praktikum-satu",
              component: PraktikumSatuTD,
            },
            {
              path: "praktikum-dua",
              name: "tugas2-praktikum-dua",
              component: PraktikumDuaTD,
            },
            {
              path: "praktikum-tiga",
              name: "tugas2-praktikum-tiga",
              component: PraktikumTigaTD,
            },
          ],
        },
        {
          path: "3",
          name: "tugas3",
          component: TugasTiga,
          children: [
            {
              path: "praktikum-satu",
              name: "tugas3-praktikum-satu",
              component: PraktikumSatuTT,
            },
            {
              path: "praktikum-dua",
              name: "tugas3-praktikum-dua",
              component: PraktikumDuaTT,
            },
            {
              path: "praktikum-tiga",
              name: "tugas3-praktikum-tiga",
              component: PraktikumTigaTT,
            },
          ],
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;

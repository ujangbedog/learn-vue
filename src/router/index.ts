import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//TUGAS SATU (TS)
import TugasSatu from "../views/tugas/TugasSatu.vue";
import PraktikumSatuTS from "@/views/tugas/1/hello.vue";
import PraktikumDuaTS from "@/views/tugas/1/hello-vue.vue";
import PraktikumTigaTS from "@/views/tugas/1/latihan.vue";

//TUGAS DUA (TD)
import TugasDua from "@/views/tugas/TugasDua.vue";
import PraktikumSatuTD from "@/views/tugas/2/create.vue";
import PraktikumDuaTD from "@/views/tugas/2/mount.vue";
import PraktikumTigaTD from "@/views/tugas/2/update.vue";
import PraktikumEmpatTD from "@/views/tugas/2/destroy.vue";
import PraktikumLimaTD from "@/views/tugas/2/latihan.vue";

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
              path: "hello",
              name: "tugas1-praktikum-satu",
              component: PraktikumSatuTS,
            },
            {
              path: "hello-vue",
              name: "tugas1-praktikum-dua",
              component: PraktikumDuaTS,
            },
            {
              path: "latihan",
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
              path: "create",
              name: "tugas2-praktikum-satu",
              component: PraktikumSatuTD,
            },
            {
              path: "mount",
              name: "tugas2-praktikum-dua",
              component: PraktikumDuaTD,
            },
            {
              path: "update",
              name: "tugas2-praktikum-tiga",
              component: PraktikumTigaTD,
            },
            {
              path: "destroy",
              name: "tugas2-praktikum-empat",
              component: PraktikumEmpatTD,
            },
            {
              path: "latihan",
              name: "tugas2-praktikum-lima",
              component: PraktikumLimaTD,
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

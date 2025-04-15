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
import PraktikumSatuTT from "@/views/tugas/3/template-data-raw.vue";
import PraktikumDuaTT from "@/views/tugas/3/template-data-attribute.vue";
import PraktikumTigaTT from "@/views/tugas/3/properti-template.vue";
import PraktikumEmpatTT from "@/views/tugas/3/properti-methods.vue";
import PraktikumLimaTT from "@/views/tugas/3/properti-computed.vue";
import PraktikumEnamTT from "@/views/tugas/3/properti-filters.vue";
import PraktikumTujuhTT from "@/views/tugas/3/latihan-template.vue";
import PraktikumDelapanTT from "@/views/tugas/3/latihan-calculator.vue";

//TUGAS EMPAT (TE)
import TugasEmpat from "@/views/tugas/TugasEmpat.vue";
import PraktikumSatuTE from "@/views/tugas/4/directive-v-if.vue";
import PraktikumDuaTE from "@/views/tugas/4/directive-v-on.vue";
import PraktikumTigaTE from "@/views/tugas/4/directive-v-bind.vue";
import PraktikumEmpatTE from "@/views/tugas/4/list-data-array.vue";
import PraktikumLimaTE from "@/views/tugas/4/list-v-for-tag-template.vue";
import PraktikumEnamTE from "@/views/tugas/4/list-v-for-index.vue";
import PraktikumTujuhTE from "@/views/tugas/4/list-data-object.vue";
import PraktikumDelapanTE from "@/views/tugas/4/latihan-directive.vue";

//TUGAS LIMA (TL)
import TugasLima from "@/views/tugas/TugasLima.vue";
import PraktikumSatuTL from "@/views/tugas/5/list-data-collection.vue";
import PraktikumDuaTL from "@/views/tugas/5/list-atribut-key.vue";
import PraktikumTigaTL from "@/views/tugas/5/list-filter-v-for-using-v-if.vue";
import PraktikumEmpatTL from "@/views/tugas/5/list-data-array.vue";
import PraktikumLimaTL from "@/views/tugas/5/list-data-object.vue";
import PraktikumEnamTL from "@/views/tugas/5/latihan-collection-online-shop.vue";

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
              path: "template-data-raw",
              name: "tugas3-praktikum-satu",
              component: PraktikumSatuTT,
            },
            {
              path: "template-data-attribute",
              name: "tugas3-praktikum-dua",
              component: PraktikumDuaTT,
            },
            {
              path: "properti-template",
              name: "tugas3-praktikum-tiga",
              component: PraktikumTigaTT,
            },
            {
              path: "properti-methods",
              name: "tugas3-praktikum-empat",
              component: PraktikumEmpatTT,
            },
            {
              path: "properti-computed",
              name: "tugas3-praktikum-lima",
              component: PraktikumLimaTT,
            },
            {
              path: "properti-filters",
              name: "tugas3-praktikum-enam",
              component: PraktikumEnamTT,
            },
            {
              path: "latihan-template",
              name: "tugas3-praktikum-tujuh",
              component: PraktikumTujuhTT,
            },
            {
              path: "latihan-kalkulator",
              name: "tugas3-praktikum-delapan",
              component: PraktikumDelapanTT,
            },
          ],
        },
        {
          path: "4",
          name: "tugas4",
          component: TugasEmpat,
          children: [
            {
              path: "directive-v-if",
              name: "tugas4-praktikum-satu",
              component: PraktikumSatuTE,
            },
            {
              path: "directive-v-on",
              name: "tugas4-praktikum-dua",
              component: PraktikumDuaTE,
            },
            {
              path: "directive-v-bind",
              name: "tugas4-praktikum-tiga",
              component: PraktikumTigaTE,
            },
            {
              path: "list-data-array",
              name: "tugas4-praktikum-empat",
              component: PraktikumEmpatTE,
            },
            {
              path: "list-v-for-tag-template",
              name: "tugas4-praktikum-lima",
              component: PraktikumLimaTE,
            },
            {
              path: "list-v-for-index",
              name: "tugas4-praktikum-enam",
              component: PraktikumEnamTE,
            },
            {
              path: "list-data-object",
              name: "tugas4-praktikum-tujuh",
              component: PraktikumTujuhTE,
            },
            {
              path: "latihan-directive",
              name: "tugas4-praktikum-delapan",
              component: PraktikumDelapanTE,
            },
          ],
        },
        {
          path: "5",
          name: "tugas5",
          component: TugasLima,
          children: [
            {
              path: "data-collection",
              name: "tugas5-praktikum-satu",
              component: PraktikumSatuTL,
            },
            {
              path: "atribut-key",
              name: "tugas5-praktikum-dua",
              component: PraktikumDuaTL,
            },
            {
              path: "filter-v-for-using-v-if",
              name: "tugas5-praktikum-tiga",
              component: PraktikumTigaTL,
            },
            {
              path: "data-array",
              name: "tugas5-praktikum-empat",
              component: PraktikumEmpatTL,
            },
            {
              path: "data-object",
              name: "tugas5-praktikum-lima",
              component: PraktikumLimaTL,
            },
            {
              path: "latihan-collection-online-shop",
              name: "tugas5-praktikum-enam",
              component: PraktikumEnamTL,
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

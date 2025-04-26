import type { RouteRecordRaw } from "vue-router";
import TugasLima from "@/views/tugas/TugasLima.vue";
import PraktikumSatu from "@/views/tugas/5/list-data-collection.vue";
import PraktikumDua from "@/views/tugas/5/list-atribut-key.vue";
import PraktikumTiga from "@/views/tugas/5/list-filter-v-for-using-v-if.vue";
import PraktikumEmpat from "@/views/tugas/5/list-data-array.vue";
import PraktikumLima from "@/views/tugas/5/list-data-object.vue";
import PraktikumEnam from "@/views/tugas/5/latihan-collection-online-shop.vue";

const Tugas5Routes: RouteRecordRaw = {
  path: "5",
  name: "tugas5",
  component: TugasLima,
  children: [
    {
      path: "data-collection",
      name: "tugas5-praktikum-satu",
      component: PraktikumSatu,
    },
    {
      path: "atribut-key",
      name: "tugas5-praktikum-dua",
      component: PraktikumDua,
    },
    {
      path: "filter-v-for-using-v-if",
      name: "tugas5-praktikum-tiga",
      component: PraktikumTiga,
    },
    {
      path: "data-array",
      name: "tugas5-praktikum-empat",
      component: PraktikumEmpat,
    },
    {
      path: "data-object",
      name: "tugas5-praktikum-lima",
      component: PraktikumLima,
    },
    {
      path: "latihan-collection-online-shop",
      name: "tugas5-praktikum-enam",
      component: PraktikumEnam,
    },
  ],
};

export default Tugas5Routes;

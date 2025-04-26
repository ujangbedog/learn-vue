import type { RouteRecordRaw } from "vue-router";
import TugasEmpat from "@/views/tugas/TugasEmpat.vue";
import PraktikumSatu from "@/views/tugas/4/directive-v-if.vue";
import PraktikumDua from "@/views/tugas/4/directive-v-on.vue";
import PraktikumTiga from "@/views/tugas/4/directive-v-bind.vue";
import PraktikumEmpat from "@/views/tugas/4/list-data-array.vue";
import PraktikumLima from "@/views/tugas/4/list-v-for-tag-template.vue";
import PraktikumEnam from "@/views/tugas/4/list-v-for-index.vue";
import PraktikumTujuh from "@/views/tugas/4/list-data-object.vue";
import PraktikumDelapan from "@/views/tugas/4/latihan-directive.vue";

const Tugas4Routes: RouteRecordRaw = {
  path: "4",
  name: "tugas4",
  component: TugasEmpat,
  children: [
    {
      path: "directive-v-if",
      name: "tugas4-praktikum-satu",
      component: PraktikumSatu,
    },
    {
      path: "directive-v-on",
      name: "tugas4-praktikum-dua",
      component: PraktikumDua,
    },
    {
      path: "directive-v-bind",
      name: "tugas4-praktikum-tiga",
      component: PraktikumTiga,
    },
    {
      path: "list-data-array",
      name: "tugas4-praktikum-empat",
      component: PraktikumEmpat,
    },
    {
      path: "list-v-for-tag-template",
      name: "tugas4-praktikum-lima",
      component: PraktikumLima,
    },
    {
      path: "list-v-for-index",
      name: "tugas4-praktikum-enam",
      component: PraktikumEnam,
    },
    {
      path: "list-data-object",
      name: "tugas4-praktikum-tujuh",
      component: PraktikumTujuh,
    },
    {
      path: "latihan-directive",
      name: "tugas4-praktikum-delapan",
      component: PraktikumDelapan,
    },
  ],
};

export default Tugas4Routes;

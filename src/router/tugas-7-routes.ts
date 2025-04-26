import type { RouteRecordRaw } from "vue-router";
import TugasTujuh from "@/views/tugas/TugasTujuh.vue";
import PraktikumSatu from "@/views/tugas/7/basic-component.vue";
import PraktikumDua from "@/views/tugas/7/global-component.vue";
import PraktikumTiga from "@/views/tugas/7/local-component.vue";
import PraktikumEmpat from "@/views/tugas/7/passing-data-to-component.vue";
import PraktikumLima from "@/views/tugas/7/directive-in-component.vue";
import PraktikumEnam from "@/views/tugas/7/update-data-parent-from-component.vue";
import PraktikumTujuh from "@/views/tugas/7/single-file-component.vue";
import PraktikumDelapan from "@/views/tugas/7/dynamic-component-and-transition.vue";
import PraktikumSembilan from "@/views/tugas/7/mixins.vue";
import PraktikumSepuluh from "@/views/tugas/7/latihan-mixins.vue";

const Tugas7Routes: RouteRecordRaw = {
  path: "7",
  name: "tugas7",
  component: TugasTujuh,
  children: [
    {
      path: "basic-component",
      name: "tugas7-praktikum-satu",
      component: PraktikumSatu,
    },
    {
      path: "global-component",
      name: "tugas7-praktikum-dua",
      component: PraktikumDua,
    },
    {
      path: "local-component",
      name: "tugas7-praktikum-tiga",
      component: PraktikumTiga,
    },
    {
      path: "passing-data-to-component",
      name: "tugas7-praktikum-empat",
      component: PraktikumEmpat,
    },
    {
      path: "directive-in-component",
      name: "tugas7-praktikum-lima",
      component: PraktikumLima,
    },
    {
      path: "update-data-parent-from-component",
      name: "tugas7-praktikum-enam",
      component: PraktikumEnam,
    },
    {
      path: "single-file-component",
      name: "tugas7-praktikum-tujuh",
      component: PraktikumTujuh,
    },
    {
      path: "dynamic-component-and-transition",
      name: "tugas7-praktikum-delapan",
      component: PraktikumDelapan,
    },
    {
      path: "mixins",
      name: "tugas7-praktikum-sembilan",
      component: PraktikumSembilan,
    },
    {
      path: "latihan-mixins",
      name: "tugas7-praktikum-sepuluh",
      component: PraktikumSepuluh,
    },
  ],
};

export default Tugas7Routes;

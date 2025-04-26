import type { RouteRecordRaw } from "vue-router";
import TugasTiga from "@/views/tugas/TugasTiga.vue";
import PraktikumSatu from "@/views/tugas/3/template-data-raw.vue";
import PraktikumDua from "@/views/tugas/3/template-data-attribute.vue";
import PraktikumTiga from "@/views/tugas/3/properti-template.vue";
import PraktikumEmpat from "@/views/tugas/3/properti-methods.vue";
import PraktikumLima from "@/views/tugas/3/properti-computed.vue";
import PraktikumEnam from "@/views/tugas/3/properti-filters.vue";
import PraktikumTujuh from "@/views/tugas/3/latihan-template.vue";
import PraktikumDelapan from "@/views/tugas/3/latihan-calculator.vue";

const Tugas3Routes: RouteRecordRaw = {
  path: "3",
  name: "tugas3",
  component: TugasTiga,
  children: [
    {
      path: "template-data-raw",
      name: "tugas3-praktikum-satu",
      component: PraktikumSatu,
    },
    {
      path: "template-data-attribute",
      name: "tugas3-praktikum-dua",
      component: PraktikumDua,
    },
    {
      path: "properti-template",
      name: "tugas3-praktikum-tiga",
      component: PraktikumTiga,
    },
    {
      path: "properti-methods",
      name: "tugas3-praktikum-empat",
      component: PraktikumEmpat,
    },
    {
      path: "properti-computed",
      name: "tugas3-praktikum-lima",
      component: PraktikumLima,
    },
    {
      path: "properti-filters",
      name: "tugas3-praktikum-enam",
      component: PraktikumEnam,
    },
    {
      path: "latihan-template",
      name: "tugas3-praktikum-tujuh",
      component: PraktikumTujuh,
    },
    {
      path: "latihan-kalkulator",
      name: "tugas3-praktikum-delapan",
      component: PraktikumDelapan,
    },
  ],
};

export default Tugas3Routes;

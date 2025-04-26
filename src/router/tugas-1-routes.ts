import type { RouteRecordRaw } from "vue-router";
import TugasSatu from "@/views/tugas/TugasSatu.vue";
import PraktikumSatu from "@/views/tugas/1/hello.vue";
import PraktikumDua from "@/views/tugas/1/hello-vue.vue";
import PraktikumTiga from "@/views/tugas/1/latihan.vue";

const Tugas1Routes: RouteRecordRaw = {
  path: "1",
  name: "tugas1",
  component: TugasSatu,
  children: [
    {
      path: "hello",
      name: "tugas1-praktikum-satu",
      component: PraktikumSatu,
    },
    {
      path: "hello-vue",
      name: "tugas1-praktikum-dua",
      component: PraktikumDua,
    },
    {
      path: "latihan",
      name: "tugas1-praktikum-tiga",
      component: PraktikumTiga,
    },
  ],
};

export default Tugas1Routes;

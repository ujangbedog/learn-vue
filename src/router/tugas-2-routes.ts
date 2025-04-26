import type { RouteRecordRaw } from "vue-router";
import TugasDua from "@/views/tugas/TugasDua.vue";
import PraktikumSatu from "@/views/tugas/2/create.vue";
import PraktikumDua from "@/views/tugas/2/mount.vue";
import PraktikumTiga from "@/views/tugas/2/update.vue";
import PraktikumEmpat from "@/views/tugas/2/destroy.vue";
import PraktikumLima from "@/views/tugas/2/latihan.vue";

const Tugas2Routes: RouteRecordRaw = {
  path: "2",
  name: "tugas2",
  component: TugasDua,
  children: [
    {
      path: "create",
      name: "tugas2-praktikum-satu",
      component: PraktikumSatu,
    },
    {
      path: "mount",
      name: "tugas2-praktikum-dua",
      component: PraktikumDua,
    },
    {
      path: "update",
      name: "tugas2-praktikum-tiga",
      component: PraktikumTiga,
    },
    {
      path: "destroy",
      name: "tugas2-praktikum-empat",
      component: PraktikumEmpat,
    },
    {
      path: "latihan",
      name: "tugas2-praktikum-lima",
      component: PraktikumLima,
    },
  ],
};

export default Tugas2Routes;

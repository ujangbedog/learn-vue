import type { RouteRecordRaw } from "vue-router";
import TugasEnam from "@/views/tugas/TugasEnam.vue";
import PraktikumSatu from "@/views/tugas/6/input-binding.vue";
import PraktikumDua from "@/views/tugas/6/filtering-data-list.vue";
import PraktikumTiga from "@/views/tugas/6/handling-submit.vue";
import PraktikumTodo from "@/views/tugas/6/simple-todo.vue";
import PraktikumEmpat from "@/views/tugas/6/latihan-form.vue";

const Tugas6Routes: RouteRecordRaw = {
  path: "6",
  name: "tugas6",
  component: TugasEnam,
  children: [
    {
      path: "input-binding",
      name: "tugas6-praktikum-satu",
      component: PraktikumSatu,
    },
    {
      path: "filtering-data-list",
      name: "tugas6-praktikum-dua",
      component: PraktikumDua,
    },
    {
      path: "handling-submit",
      name: "tugas6-praktikum-tiga",
      component: PraktikumTiga,
    },
    {
      path: "simple-todo",
      name: "tugas6-praktikum-todo",
      component: PraktikumTodo,
    },
    {
      path: "latihan-form",
      name: "tugas6-praktikum-empat",
      component: PraktikumEmpat,
    },
  ],
};

export default Tugas6Routes;

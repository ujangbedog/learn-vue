<template>
  <v-col cols="12" md="3">
    <v-card class="sidebar-card">
      <v-list class="transparent-list">
        <v-list-item-title class="text-h6 text-white text-center my-4">
          Praktikum Tugas 1
        </v-list-item-title>
        <v-divider class="border-gray"></v-divider>
        <v-list-item
          v-for="item in praktikumList"
          :key="item.text"
          class="transparent-list-item"
          :class="{ 'active-menu-item': isActive(item.route) }"
          link
          @click="navigateTo(item.route)"
        >
          <v-list-item-title class="text-white">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-col>
  
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const praktikumList = ref([
  { text: "Praktikum 1A", route: "/tugas/1/praktikum-satu" },
  { text: "Praktikum 1B", route: "/tugas/1/praktikum-dua" },
  { text: "Praktikum 1C", route: "/tugas/1/praktikum-tiga" },
]);

const navigateTo = (route) => {
  router.push(route);
};

const isActive = (menuRoute) => {
  return route.path === menuRoute;
};
</script>

<style scoped>
.sidebar-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  padding: 16px;
}

.transparent-list {
  background: transparent !important;
}

.transparent-list-item {
  background: transparent !important;
  transition: background-color 0.3s ease;
}

.active-menu-item {
  background-color: rgba(81, 94, 92, 0.3) !important;
  border-radius: 4px;
}

.border-gray {
  border-color: #515151 !important;
}

.text-white {
  color: #ffffff !important;
}
</style>
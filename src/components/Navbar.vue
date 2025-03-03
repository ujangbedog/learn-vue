<template>
  <v-card color="primary">
    <v-card-title class="text-center justify-center py-6 text-white">
      <h1 class="font-weight-bold text-h2">
        Learn Vue
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" bg-color="transparent" color="white" grow>
      <v-tab v-for="item in items" :key="item.text" :to="item.route">
        {{ item.text }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const tab = ref(route.path);

const items = ref([
  { text: "Home", route: "/" },
  { text: "About", route: "/about" },
]);

watch(route, () => {
  tab.value = route.path;
});
</script>

<style scoped>
/* Sesuaikan warna agar lebih kontras */
.bg-basil {
  background-color: #1976d2 !important; /* Ganti dengan warna Vuetify */
}
.text-white {
  color: #fff !important;
}
</style>

<template>
  <v-card color="#0a0a0a" class="navbar-border">
    <v-card-title class="text-center justify-center py-2">
      <h3 class="font-weight-bold text-h3 text-grey-lighten-2">
        Learn Vue
      </h3>
    </v-card-title>

    <v-tabs 
      v-model="tab"
      class="font-weight-bold"
      bg-color="#0a0a0a"
      color="#515e5c"
      selected-class="active-tab"
    >
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
  { text: "Tugas 1", route: "/tugas/1" },
  { text: "Tugas 2", route: "/tugas/2" },
  { text: "Tugas 3", route: "/tugas/3" },
]);

watch(route, () => {
  tab.value = route.path;
});
</script>

<style scoped>
/* Warna tab saat tidak aktif */
.v-tab {
  color: #515e5c !important;
  transition: color 0.3s ease;
}

/* Warna tab saat aktif */
.active-tab {
  color: white !important;
}

.navbar-border {
  border-bottom: 2px solid #2b2a2b;
}
</style>

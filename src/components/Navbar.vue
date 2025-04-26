<template>
  <v-card color="#0a0a0a" class="navbar-border">
    <v-card-title class="text-center justify-center py-2">
      <h3 class="font-weight-bold text-h3 text-grey-lighten-2">
        Learn Vue
      </h3>
    </v-card-title>

    <v-tabs 
      v-model="activeTab"
      class="font-weight-bold"
      bg-color="#0a0a0a"
      color="#515e5c"
    >
      <v-tab 
        v-for="item in items" 
        :key="item.text" 
        :value="item.route"
        :to="item.route"
      >
        {{ item.text }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const activeTab = ref(route.path);

const items = ref([
  { text: "Home", route: "/" },
  { text: "Tugas 1", route: "/tugas/1" },
  { text: "Tugas 2", route: "/tugas/2" },
  { text: "Tugas 3", route: "/tugas/3" },
  { text: "Tugas 4", route: "/tugas/4" },
  { text: "Tugas 5", route: "/tugas/5" },
  { text: "Tugas 6", route: "/tugas/6" },
  { text: "Tugas 7", route: "/tugas/7" },
]);

// Watch for route changes and update activeTab
watch(() => route.path, (newPath) => {
  // Find the matching base route
  const matchingItem = items.value.find(item => 
    newPath.startsWith(item.route) && item.route !== '/'
  );
  
  activeTab.value = matchingItem ? matchingItem.route : newPath;
});
</script>

<style scoped>
.v-tab {
  color: #515e5c !important;
  transition: color 0.3s ease;
}

.v-tabs .v-tab--selected {
  color: white !important;
}

.navbar:hover {
  color: #fff;
}

.navbar-border {
  border-bottom: 2px solid #2b2a2b;
}
</style>
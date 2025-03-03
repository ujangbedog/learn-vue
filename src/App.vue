<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <v-app class="app-background">
    <Navbar />
    <v-container>
      <RouterView />
    </v-container>
  </v-app>
</template>

<style scoped>
/* Mengatur background agar berwarna #010100 */
.app-background {
  background-color: #010100 !important;
  min-height: 100vh; /* Pastikan background menutupi seluruh layar */
  color: #edecec;
}
</style>

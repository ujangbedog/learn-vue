<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <v-app class="app-background">
    <Navbar />
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.app-background {
  background-color: #010100 !important;
  min-height: 100vh;
  color: #edecec;
}

</style>
<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <v-app>
    <Navbar />
    <v-container>
      <RouterView />
    </v-container>
  </v-app>
</template>

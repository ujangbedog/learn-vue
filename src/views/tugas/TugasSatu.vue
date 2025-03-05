<template>
  <v-container fluid>
    <v-row>
      <!-- Sidebar untuk Tugas 1 -->
      <SidebarTugasSatu />

      <!-- Konten Utama -->
      <router-view></router-view> <!-- Tempat menampilkan konten praktikum -->
    </v-row>
  </v-container>
</template>

<script setup>
import SidebarTugasSatu from "@/components/sidebar/SidebarTugasSatu.vue";
</script>

<style scoped>
.content {
  background-color: #010100;
  min-height: 100vh;
  color: white;
}
</style>
<template>
  <v-container fluid>
    <v-row>
      <!-- Sidebar untuk Tugas 2 -->
      <Sidebar 
        title="Praktikum Tugas 2" 
        :praktikumNumber="2"
        :praktikumList="[
          { 
            name: 'Praktikum Satu', 
            route: '/tugas/2/praktikum-satu' 
          },
          { 
            name: 'Praktikum Dua', 
            route: '/tugas/2/praktikum-dua' 
          },
        ]"
      />

      <!-- Konten Utama -->
      <router-view></router-view> <!-- Tempat menampilkan konten praktikum -->
    </v-row>
  </v-container>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<style scoped>
.content {
  background-color: #010100;
  min-height: 100vh;
  color: white;
}
</style>
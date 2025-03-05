<template>
  <v-container fluid>
    <v-row>
      <!-- Sidebar untuk Tugas 1 -->
      <Sidebar 
        title="Praktikum Tugas 1" 
        :praktikumNumber="1"
        :praktikumList="[
          { 
            name: 'Praktikum Satu', 
            route: '/tugas/1/praktikum-satu' 
          },
          { 
            name: 'Praktikum Dua', 
            route: '/tugas/1/praktikum-dua' 
          },
          { 
            name: 'Praktikum Tiga', 
            route: '/tugas/1/praktikum-tiga' 
          }
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
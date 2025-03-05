<template>
  <v-container fluid>
    <v-row>
      <!-- Sidebar untuk Tugas 3 -->
      <Sidebar 
        title="Praktikum Tugas 3" 
        :praktikumNumber="3"
        :praktikumList="[
          { 
            name: 'Praktikum Satu', 
            route: '/tugas/3/praktikum-satu' 
          },
          { 
            name: 'Praktikum Dua', 
            route: '/tugas/3/praktikum-dua' 
          },
          { 
            name: 'Praktikum Tiga', 
            route: '/tugas/3/praktikum-tiga' 
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
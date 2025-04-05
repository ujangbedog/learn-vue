<template>
  <v-container fluid>
    <v-row>
      <!-- Sidebar untuk Tugas 1 -->
      <Sidebar 
        title="Praktikum Tugas 1" 
        :praktikumNumber="1"
        :praktikumList="[
          { 
            name: 'Hello', 
            route: '/tugas/1/hello' 
          },
          { 
            name: 'Hello Vue', 
            route: '/tugas/1/hello-vue' 
          },
          { 
            name: 'Latihan', 
            route: '/tugas/1/latihan' 
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
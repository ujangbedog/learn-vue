<template>
  <v-container fluid>
    <v-row>
      <!-- Sidebar untuk Tugas 3 -->
      <Sidebar 
        title="Praktikum Tugas 3" 
        :praktikumNumber="3"
        :praktikumList="[
          { 
            name: 'Template - Data Raw', 
            route: '/tugas/3/template-data-raw' 
          },
          { 
            name: 'Template - Data Attribute', 
            route: '/tugas/3/template-data-attribute' 
          },
          { 
            name: 'Properti Template', 
            route: '/tugas/3/properti-template' 
          },
          { 
            name: 'Properti Methods', 
            route: '/tugas/3/properti-methods' 
          },
          { 
            name: 'Properti Computed', 
            route: '/tugas/3/properti-computed' 
          },
          { 
            name: 'Properti Filters', 
            route: '/tugas/3/properti-filters' 
          },
          { 
            name: 'Latihan - Template', 
            route: '/tugas/3/latihan-template' 
          },
          { 
            name: 'Latihan - Kalkulator', 
            route: '/tugas/3/latihan-kalkulator' 
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
<template>
    <v-container fluid>
      <v-row>
        <Sidebar 
          title="Praktikum Tugas 5" 
          :praktikumNumber="4"
          :praktikumList="[
            { 
              name: 'List | Data Collection', 
              route: '/tugas/5/data-collection' 
            },
            { 
              name: 'List | Atribut Key', 
              route: '/tugas/5/atribut-key' 
            },
            { 
              name: 'List | Filter v-for using v-if', 
              route: '/tugas/5/filter-v-for-using-v-if' 
            },
            { 
              name: 'List | Data Array', 
              route: '/tugas/5/data-array' 
            },
            { 
              name: 'List | Data Object', 
              route: '/tugas/5/data-object' 
            },
            { 
              name: 'Latihan - Collection Online Shop', 
              route: '/tugas/5/latihan-collection-online-shop' 
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
<template>
    <v-container fluid>
      <v-row>
        <Sidebar 
          title="Praktikum Tugas 6" 
          :praktikumNumber="6"
          :praktikumList="[
            { 
              name: 'Input Binding', 
              route: '/tugas/6/input-binding' 
            },
            { 
              name: 'Filtering Data List', 
              route: '/tugas/6/filtering-data-list' 
            },
            { 
              name: 'Handling Submit Form dan Validation', 
              route: '/tugas/6/handling-submit' 
            },
            { 
              name: 'Learn: Simple Todo', 
              route: '/tugas/6/simple-todo' 
            },
            { 
              name: 'Latihan Form', 
              route: '/tugas/6/latihan-form' 
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
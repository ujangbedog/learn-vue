<template>
    <v-container fluid>
      <v-row>
        <!-- Sidebar untuk Tugas 4 -->
        <Sidebar 
          title="Praktikum Tugas 4" 
          :praktikumNumber="4"
          :praktikumList="[
            { 
              name: 'Directive | v-if', 
              route: '/tugas/4/directive-v-if' 
            },
            { 
              name: 'Directive | v-on', 
              route: '/tugas/4/directive-v-on' 
            },
            { 
              name: 'Directive | v-bind', 
              route: '/tugas/4/directive-v-bind' 
            },
            { 
              name: 'List | Data Array', 
              route: '/tugas/4/list-data-array' 
            },
            { 
              name: 'List | v-for tag template', 
              route: '/tugas/4/list-v-for-tag-template' 
            },
            { 
              name: 'List | v-for index', 
              route: '/tugas/4/list-v-for-index' 
            },
            { 
              name: 'List | data object', 
              route: '/tugas/4/list-data-object' 
            },
            { 
              name: 'Latihan - Directive', 
              route: '/tugas/4/latihan-directive' 
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
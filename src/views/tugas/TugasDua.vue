<template>
    <v-container fluid>
      <v-row>
        <!-- Sidebar untuk Tugas 2 -->
        <SidebarTugasDua />
  
        <!-- Konten Utama -->
        <v-main class="content">
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <!-- <h3 class="text-h4 font-weight-bold">Tugas 2</h3> -->
            </v-col>
          </v-row>
        </v-main>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import SidebarTugasDua from "@/components/sidebar/SidebarTugasDua.vue";
  </script>
  
  <style scoped>
  .content {
    background-color: #010100;
    min-height: 100vh;
    color: white;
  }
  </style>
  
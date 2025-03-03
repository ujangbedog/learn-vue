<template>
    <v-container fluid>
      <v-row>
        <!-- Sidebar untuk Tugas 1 -->
        <SidebarTugasSatu />
  
        <!-- Konten Utama -->
        <v-main class="content">
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
            </v-col>
          </v-row>
        </v-main>
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
  
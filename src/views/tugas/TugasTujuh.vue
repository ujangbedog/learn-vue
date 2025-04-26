<template>
    <v-container fluid>
      <v-row>
        <Sidebar 
          title="Praktikum Tugas 7" 
          :praktikumNumber="7"
          :praktikumList="[
            { 
              name: 'Basic Component', 
              route: '/tugas/7/basic-component' 
            },
            { 
              name: 'Global Component', 
              route: '/tugas/7/global-component' 
            },
            { 
              name: 'Local Component', 
              route: '/tugas/7/local-component' 
            },
            { 
              name: 'Passing Data to Component', 
              route: '/tugas/7/passing-data-to-component' 
            },
            { 
              name: 'Directive in Component', 
              route: '/tugas/7/directive-in-component' 
            },
            { 
              name: 'Update Data Parent from Component', 
              route: '/tugas/7/update-data-parent-from-component' 
            },
            { 
              name: 'Single File Component', 
              route: '/tugas/7/single-file-component' 
            },
            { 
              name: 'Dynamic Component and Transition', 
              route: '/tugas/7/dynamic-component-and-transition' 
            },
            { 
              name: 'Mixins', 
              route: '/tugas/7/mixins' 
            },
            { 
              name: 'Latihan: Mixins', 
              route: '/tugas/7/latihan-mixins' 
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
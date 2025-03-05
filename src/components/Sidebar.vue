<template>
    <v-col cols="12" md="3">
      <v-card class="sidebar-card">
        <v-list class="transparent-list">
          <v-list-item-title class="text-h6 text-white text-center my-4">
            {{ title }}
          </v-list-item-title>
          <v-divider class="border-gray"></v-divider>
          <v-list-item
            v-for="item in praktikumList"
            :key="item.name"
            class="transparent-list-item"
            :class="{ 'active-menu-item': isActive(item.route) }"
            link
            @click="navigateTo(item.route)"
          >
            <v-list-item-title class="text-white">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </template>
  
  <script setup>
  import { ref, defineProps, computed } from "vue";
  import { useRouter, useRoute } from "vue-router";
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    praktikumNumber: {
      type: Number,
      required: true
    },
    praktikumList: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(item => 
          item.name && typeof item.name === 'string' && 
          item.route && typeof item.route === 'string'
        )
      }
    }
  });
  
  const router = useRouter();
  const route = useRoute();
  
  const navigateTo = (route) => {
    router.push(route);
  };
  
  const isActive = (menuRoute) => {
    return route.path === menuRoute;
  };
  </script>
  
  <style scoped>
  .sidebar-card {
    background-color: rgba(26, 26, 26, 0.5) !important;
    border: 1px solid #2b2a2b;
    padding: 16px;
  }
  
  .transparent-list {
    background: transparent !important;
  }
  
  .transparent-list-item {
    background: transparent !important;
    transition: background-color 0.3s ease;
  }
  
  .active-menu-item {
    background-color: rgba(81, 94, 92, 0.3) !important;
    border-radius: 4px;
  }
  
  .border-gray {
    border-color: #515151 !important;
  }
  
  .text-white {
    color: #ffffff !important;
  }
  </style>
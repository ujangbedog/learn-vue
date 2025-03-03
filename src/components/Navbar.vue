<template>
    <nav class="navbar fixed top-0 left-0 w-full bg-green-500 shadow-md p-4 flex justify-center gap-5">
      <RouterLink to="/" class="nav-link text-white font-bold transition duration-300 hover:text-gray-900">Home</RouterLink>
      <RouterLink to="/about" class="nav-link text-white font-bold transition duration-300 hover:text-gray-900">About</RouterLink>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  </style>
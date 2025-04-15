<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center mb-4">Properti Methods</h3>
      <h1 class="text-white text-center">{{ counter }}</h1>
      <button class="modern-button mt-4" @click="increment">+</button>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

const increment = () => {
  counter.value++
}
</script>

<style scoped>
.content-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  padding: 32px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-white {
  color: #ffffff !important;
}

.modern-button {
  background-color: transparent;
  border: 1px solid #2b2a2b;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.modern-button:hover {
  background-color: #2b2a2b;
  color: #00ffcc;
}
</style>

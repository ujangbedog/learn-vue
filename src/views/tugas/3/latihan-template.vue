<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center mb-4">Latihan Template</h3>
      <p class="text-white text-center text-h5 mb-2">{{ message }}</p>
      <p
        :title="tooltip"
        :style="{ color: textColor, fontSize: fontSize + 'px' }"
        class="text-center"
      >
        Nama: {{ firstName }} {{ lastName }}
      </p>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Selamat Datang di Vue 3!')

const firstName = ref('Ilham')
const lastName = ref('Alfath')

const tooltip = ref('Ini adalah nama lengkap saya')
const textColor = ref('#00ffcc')
const fontSize = ref(20)
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
</style>

<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center">{{ message }}</h3>
      <br>
      <p class="text-white text-center">
  Untuk mengubah isi pesan lewat console, gunakan <br>
  <code>message.value = "teks baru"</code><br>
</p>

    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const message = ref("Hello World!")

window.message = message
</script>

<style scoped>
.content-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  padding: 32px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-white {
  color: #ffffff !important;
}
</style>

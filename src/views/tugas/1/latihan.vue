<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <div class="text-center" style="max-width: 500px; width: 100%;">
        <h3 class="text-h4 font-weight-bold text-white mb-6">Data Diri</h3>
        <p class="text-white text-body-1 mb-2"><strong>Nama:</strong> {{ nama }}</p>
        <p class="text-white text-body-1 mb-2"><strong>Prodi:</strong> {{ prodi }}</p>
        <p class="text-white text-body-1 mb-2"><strong>Tahun Angkatan:</strong> {{ angkatan }}</p>
        <p class="text-white text-body-1"><strong>Email:</strong> {{ email }}</p>
      </div>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const nama = ref('Ilham Alfath')
const prodi = ref('Teknik Informatika')
const angkatan = ref(2019)
const email = ref('ilham28alfath@gmail.com')

// Biar bisa diubah dari console
window.nama = nama
window.prodi = prodi
window.angkatan = angkatan
window.email = email
</script>

<style scoped>
.content-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  padding: 40px 24px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-white {
  color: #ffffff !important;
}
</style>

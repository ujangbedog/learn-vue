<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center mb-6">Latihan Kalkulator</h3>

      <input
        v-model.number="nilai1"
        type="number"
        placeholder="Masukkan Nilai 1"
        class="input-box mb-4"
      />

      <input
        v-model.number="nilai2"
        type="number"
        placeholder="Masukkan Nilai 2"
        class="input-box mb-6"
      />

      <div class="d-flex gap-4 mb-4">
        <button @click="hitung('tambah')" class="btn">+</button>
        <button @click="hitung('kurang')" class="btn">−</button>
        <button @click="hitung('kali')" class="btn">×</button>
        <button @click="hitung('bagi')" class="btn">÷</button>
      </div>

      <button @click="reset" class="btn btn-reset mb-6">Hapus</button>

      <p class="text-white text-h5 text-center">
        Hasil: {{ hasil !== null ? hasil : '-' }}
      </p>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const nilai1 = ref(0)
const nilai2 = ref(0)
const hasil = ref(null)

function hitung(operasi) {
  switch (operasi) {
    case 'tambah':
      hasil.value = nilai1.value + nilai2.value
      break
    case 'kurang':
      hasil.value = nilai1.value - nilai2.value
      break
    case 'kali':
      hasil.value = nilai1.value * nilai2.value
      break
    case 'bagi':
      hasil.value = nilai2.value !== 0 ? (nilai1.value / nilai2.value).toFixed(2) : '∞'
      break
  }
}

function reset() {
  nilai1.value = 0
  nilai2.value = 0
  hasil.value = null
}
</script>

<style scoped>
.content-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  padding: 32px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-white {
  color: #ffffff !important;
}

.input-box {
  width: 240px;
  padding: 10px 14px;
  background: transparent;
  color: white;
  border: 1px solid #2b2a2b;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

.input-box::placeholder {
  color: #aaa;
}

.btn {
  background: transparent;
  color: white;
  border: 1px solid #2b2a2b;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: #2b2a2b;
}

.btn-reset {
  font-size: 16px;
  padding: 6px 16px;
}
</style>

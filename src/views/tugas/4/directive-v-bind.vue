<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center mb-4">Directive v-bind</h3>
      
      <img :src="imageSrc" width="300" alt="Gambar Kucing">
    </v-card>
  </v-col>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const imageSrc = ref('/images/kucing_satu.jpg');

onMounted(() => {
  setTimeout(() => {
    imageSrc.value = '/images/kucing_dua.jpg';
  }, 3000);
});
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

img {
  transition: all 0.3s ease;
}
</style>

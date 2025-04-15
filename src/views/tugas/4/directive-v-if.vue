<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center">Directive v-if</h3>
      <div v-if="nilai === 'A'">
        <p class="text-white">Sempurna</p>
      </div>
      <div v-else-if="nilai === 'B'">
        <p class="text-white">Bagus</p>
      </div>
      <div v-else-if="nilai === 'C'">
        <p class="text-white">Cukup</p>
      </div>
      <div v-else>
        <p class="text-white">Kurang</p>
      </div>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue';

const nilai = ref('B');
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

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>

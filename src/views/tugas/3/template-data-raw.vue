<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h5 font-weight-bold text-white text-center">
        {{ message }}
      </h3>

      <div style="height: 16px;"></div>

      <h3 class="text-h5 font-weight-bold text-white text-center" v-html="message"></h3>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const message = ref(`<span style='color:blue'>Hello World!</span>`)
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
  flex-direction: column;
  gap: 12px;
}

.text-white {
  color: #ffffff !important;
}
</style>

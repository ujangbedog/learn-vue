<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 :class="classH1" class="text-h4 font-weight-bold text-center">
        {{ message }}
      </h3>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
const classH1 = ref('title')
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

.title {
  color: green;
}

.text-white {
  color: #ffffff !important;
}
</style>

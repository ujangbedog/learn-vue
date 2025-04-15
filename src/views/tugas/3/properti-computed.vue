<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center mb-4">Properti Computed</h3>
      <h1 class="text-white text-center">{{ fullName }}</h1>
    </v-card>
  </v-col>
</template>

<script setup>
import { computed, ref } from 'vue'

const firstName = ref('Ilham')
const lastName = ref('Alfath')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
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

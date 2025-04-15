<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center">List data object</h3>
      <ul class="book-list">
        <template v-for="(value, key, index) in book" :key="key">
          <li class="text-white book-item">{{ index+1 }}. {{ key }} : {{ value }}</li>
        </template>
      </ul>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const book = ref({
  id: 12,
  title: 'Belajar Matematika',
  description: 'Belajar berbagai macam rumus-rumus secara cepat',
  authors: 'John Doe',
  publish_year: 2019,
  price: 100000,
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

.book-list {
  list-style-type: disc;
  padding-left: 20px; 
  margin-top: 16px;
}

.book-item {
  color: white;
  margin-bottom: 12px;
  font-size: 18px;
}
</style>

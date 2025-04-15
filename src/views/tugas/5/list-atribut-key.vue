<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center mb-4">List atribut-key</h3>
      <ul class="book-list">
        <li v-for="(book, index) in books" :key="index">
          {{ index + 1 }}. {{ book }}
        </li>
      </ul>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const books = ref([
  'Belajar Matematika',
  'Belajar Bahasa Inggris',
  'Belajar Bahasa Indonesia'
])
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

.book-list {
  list-style-type: disc;
  padding-left: 20px;
  color: #ffffff;
  margin: 0;
}

.book-list li {
  margin-bottom: 10px;
}
</style>

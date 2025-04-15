<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center">List Data Array</h3>
      <ul class="book-list">
        <li v-for="(book, index) in books" :key="index" class="book-item">{{ book }}</li>
      </ul>

      <div class="instructions">
        <h4 class="text-h6 text-white">Menambah buku melalui console:</h4>
        <pre class="text-white">books.value.push('Belajar IPA')</pre>

        <h4 class="text-h6 text-white">Menghapus buku terakhir:</h4>
        <pre class="text-white">books.value.pop()</pre>

        <h4 class="text-h6 text-white">Menambah buku di awal:</h4>
        <pre class="text-white">books.value.unshift('Belajar Olahraga')</pre>

        <h4 class="text-h6 text-white">Menghapus buku pertama:</h4>
        <pre class="text-white">books.value.shift()</pre>

        <h4 class="text-h6 text-white">Menambahkan buku di index tertentu:</h4>
        <pre class="text-white">books.value.splice(2, 0, 'Belajar Fisika')</pre>
      </div>
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

window.books = books
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
  justify-content: start;
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

.instructions {
  padding: 10px;
  background-color: transparent;
  border: 1px solid #2b2a2b;
  border-radius: 8px;
  width: 100%;
}

.instructions pre {
  background-color: transparent;
  border: 1px solid #2b2a2b;
  padding: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
  margin: 5px 0;
  line-height: 1.5;
  height: auto;    
  min-height: 50px;
}
</style>

<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center mb-4">List Data Object</h3>
      
      <ul class="object-list">
        <li> {{ book.id }} </li>
        <li> {{ book.title }} </li>
        <li> {{ book.description }} </li>
        <li> {{ book.authors }} </li>
        <li> {{ book.publish_year }} </li>
        <li> {{ book.price.toLocaleString() }} </li>
      </ul>

      <div class="instructions mt-6">
        <h4 class="text-h6 text-white">Mengubah data pada satu field:</h4>
        <pre class="text-white">book.title = 'Judul Baru'</pre>

        <h4 class="text-h6 text-white mt-4">Property lebih dari satu:</h4>
        <pre class="text-white">Object.assign(book, {
  title: 'Judul Baru',
  price: 200000
})</pre>
      </div>
    </v-card>
  </v-col>
</template>

<script setup>
import { reactive } from 'vue'

const book = reactive({
  id: 1,
  title: 'The Coming Wave',
  description: 'Explores the challenges and opportunities of AI and other technologies.',
  authors: 'Mustafa Suleyman',
  publish_year: 2023,
  price: 150000,
  image: '/images/books/the_coming_wave.jpg',
})

window.book = book
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

.object-list {
  list-style-type: disc;
  padding-left: 0;
  margin-top: 16px;
}

.object-list li {
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
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
  border-radius: 4px;
  white-space: pre-wrap;
}
</style>

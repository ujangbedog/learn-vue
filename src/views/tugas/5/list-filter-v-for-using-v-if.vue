<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-start">
      <h3 class="text-h4 font-weight-bold text-white text-center mb-4">List Data Buku</h3>
      <p class="text-white mb-2">Jika harga buku lebih besar sama dengan 150000</p>
      
      <table class="book-table">
        <tr v-for="book in filteredBooks" :key="book.id">
          <td>
            <img width="100" :src="book.image" />
          </td>
          <td>
            <template v-for="(value, key) in book" :key="key">
              <div class="text-white">
                <strong>{{ key }}</strong>: 
                {{ key === 'price' ? 'Rp ' + value.toLocaleString() : value }}
              </div>
            </template>
          </td>
        </tr>
      </table>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref, computed } from 'vue'

const books = ref([
  {
    id: 1,
    title: 'The Coming Wave',
    description: 'Explores the challenges and opportunities of AI and other technologies.',
    authors: 'Mustafa Suleyman',
    publish_year: 2023,
    price: 150000,
    image: '/images/books/the_coming_wave.jpg',
  },
  {
    id: 2,
    title: 'The Death of Expertise',
    description: 'Investigates how the rejection of expert knowledge threatens democracy.',
    authors: 'Tom Nichols',
    publish_year: 2017,
    price: 125000,
    image: '/images/books/the_death_of_expertise.jpg',
  },
  {
    id: 3,
    title: 'The Shallows',
    description: 'Examines how the internet is changing the way we think and read.',
    authors: 'Nicholas Carr',
    publish_year: 2010,
    price: 135000,
    image: '/images/books/the_shallows.png',
  },
])

const priceFilter = ref(150000)

const filteredBooks = computed(() => {
  if (priceFilter.value === null) {
    return books.value
  }
  return books.value.filter(book => book.price >= priceFilter.value)
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
  justify-content: start;
}

.text-white {
  color: #ffffff !important;
}

.book-table {
  width: 100%;
  border-collapse: collapse;
  background-color: transparent;
  border: 1px solid #444;
}

.book-table tr {
  border-bottom: 1px solid #555;
}

.book-table td {
  padding: 16px;
  vertical-align: top;
}
</style>

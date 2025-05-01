<template>
  <v-col cols="12" md="9">
    <v-card class="content-card">
      <v-card-title class="text-h4 font-weight-bold text-white text-center">
        Filtering Data List
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="keyword"
          label="Ketikkan kata kunci"
          variant="outlined" 
          color="white"
          clearable
        ></v-text-field>
        <hr />
        <br>
        <v-list style="background-color: transparent;">
          <v-list-item-group>
            <v-list-item
              v-for="(book, index) in filterBooks"
              :key="index"
              class="list-item"
            >
              <v-list-item-content>
                <v-list-item-title class="text-white">{{ book }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref, computed } from 'vue';

const keyword = ref('');
const books = ref([
  'Belajar Matematika',
  'Belajar Kimia',
  'Belajar Fisika',
  'Belajar Bahasa Inggris'
]);

const filterBooks = computed(() => {
  return books.value.filter(book => book.toLowerCase().includes(keyword.value.toLowerCase()));
});
</script>

<style scoped>
.content-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  padding: 16px;
  border-radius: 8px;
}

.input-field {
  background-color: rgba(26, 26, 26, 0.5) !important;
  color: white !important;
}

.list-item {
  background-color: rgba(26, 26, 26, 0.8) !important;
  border: 1px solid #2b2a2b;
  border-radius: 4px; 
  margin-bottom: 8px; 
}

.text-white {
  color: #ffffff !important;
}
</style>
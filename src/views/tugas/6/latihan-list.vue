<template>
    <v-col cols="12" md="9">
      <v-card class="content-card">
        <v-card-title class="text-h4 font-weight-bold text-white mb-4 text-center">
          Daftar Produk Online Shop
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-select
                v-model="selectedCategory"
                :items="categories"
                label="Pilih Kategori"
                variant="outlined"
                color="white"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="keyword"
                label="Ketikkan kata kunci"
                variant="outlined" 
                color="white"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
  
          <hr />
          <br>
          <v-table>
            <thead>
              <tr>
                <th>Gambar</th>
                <th>Nama Produk</th>
                <th>Kategori</th>
                <th>Harga</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in paginatedProducts" :key="index">
                <td>
                  <v-img :src="product.image" max-width="100" />
                </td>
                <td class="text-white">{{ product.title }}</td>
                <td class="text-white">{{ product.category }}</td>
                <td class="text-white">{{ product.price | currency }}</td>
                <td class="text-white">{{ product.rating.rate }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-pagination
            v-model="page"
            :length="pageCount"
            class="mt-4"
            color="primary"
          ></v-pagination>
        </v-card-text>
      </v-card>
    </v-col>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';
  
  const keyword = ref('');
  const selectedCategory = ref(null);
  const products = ref([]);
  const categories = ref(['Semua Kategori']);
  const page = ref(1);
  const itemsPerPage = 5;
  
  onMounted(async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    products.value = response.data;
    const uniqueCategories = [...new Set(products.value.map(product => product.category))];
    categories.value.push(...uniqueCategories);
  });
  
  const filteredProducts = computed(() => {
    return products.value.filter(product => {
      const matchesKeyword = product.title.toLowerCase().includes(keyword.value.toLowerCase());
      const matchesCategory = selectedCategory.value && selectedCategory.value !== 'Semua Kategori'
        ? product.category === selectedCategory.value
        : true;
      return matchesKeyword && matchesCategory;
    });
  });
  
  const paginatedProducts = computed(() => {
    const start = (page.value - 1) * itemsPerPage;
    return filteredProducts.value.slice(start, start + itemsPerPage);
  });
  
  const pageCount = computed(() => {
    return Math.ceil(filteredProducts.value.length / itemsPerPage);
  });
  </script>
  
  <style scoped>
  .content-card {
    background-color: rgba(26, 26, 26, 0.5) !important;
    border: 1px solid #2b2a2b;
    padding: 16px;
    border-radius: 8px;
  }
  
  .text-white {
    color: #ffffff !important;
  }
  
  .v-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .v-table th, .v-table td {
    padding: 8px;
    text-align: left;
  }
  
  .v-table th {
    background-color: rgba(26, 26, 26, 0.8);
    color: white;
  }
  
  .v-table td {
    background-color: rgba(26, 26, 26, 0.6);
    color: white;
  }
  
  .mt-4 {
    margin-top: 16px;
  }
  </style>
  
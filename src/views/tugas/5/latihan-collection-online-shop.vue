<template>
  <v-col cols="12" md="9">
    <v-card class="content-card">
      <h3 class="text-h4 font-weight-bold text-white text-center mb-6">
        Katalog Produk Online Shop
      </h3>

      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="product-card">
            <v-img
              :src="product.image"
              height="200px"
              class="product-image"
              cover
            ></v-img>
            <v-card-title class="text-white">{{ product.name }}</v-card-title>
            <v-card-subtitle class="text-grey-lighten-1 text-body-2 px-4">
              {{ product.description }}
            </v-card-subtitle>
            <v-card-text class="text-white font-weight-bold px-4">
              Rp{{ product.price.toLocaleString() }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Suara jernih dan nyaman dipakai seharian.',
    price: 250000,
    image: '/images/products/headset.jpg',
  },
  {
    id: 2,
    name: 'Smartwatch Elegan',
    description: 'Pantau kesehatan dan aktivitasmu setiap hari.',
    price: 499000,
    image: '/images/products/smartwatch.jpg',
  },
  {
    id: 3,
    name: 'Tas Ransel Kulit',
    description: 'Cocok untuk kerja maupun kuliah, bahan premium.',
    price: 350000,
    image: '/images/products/backpack.jpg',
  },
  {
    id: 4,
    name: 'Kacamata Stylish',
    description: 'Tampil trendi dan melindungi dari sinar UV.',
    price: 179000,
    image: '/images/products/sunglasses.jpg',
  },
  {
    id: 5,
    name: 'Sepatu Sneakers',
    description: 'Nyaman untuk jalan-jalan dan olahraga.',
    price: 420000,
    image: '/images/products/sneakers.jpg'
  },
  {
    id: 6,
    name: 'Hoodie Gaul',
    description: 'Tampil menarik menjadi anak  gaul.',
    price: 420000,
    image: '/images/products/hoodie.png'
  },
])
</script>

<style scoped>
.content-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  padding: 32px;
  min-height: 400px;
}

.text-white {
  color: #ffffff !important;
}

.product-card {
  background-color: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.1);
}

.product-image {
  object-fit: cover;
}
</style>

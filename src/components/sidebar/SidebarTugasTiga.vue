<template>
  <v-row>
  <!-- Sidebar Praktikum -->
      <v-col cols="12" md="3">
      <v-card class="sidebar-card">
      <v-list class="transparent-list">
          <v-list-item-title class="text-h6 text-white text-center my-4">
          Praktikum Tugas 3
          </v-list-item-title>
          <v-divider class="border-gray"></v-divider>
          <v-list-item 
          v-for="item in praktikumList" 
          :key="item.text" 
          class="transparent-list-item"
          link
          >
          <v-list-item-title class="text-white">
              {{ item.text }}
          </v-list-item-title>
          </v-list-item>
      </v-list>
      </v-card>
  </v-col>

  <!-- Konten Utama -->
  <v-col cols="12" md="9">
      <v-card class="content-card">
      <h3 class="text-h4 font-weight-bold text-white">Tugas 3</h3>
      <p class="text-white">Ini adalah konten utama untuk Tugas 3.</p>
      </v-card>
  </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

const praktikumList = ref([
  { text: "Praktikum 3A" },
  { text: "Praktikum 3B" },
  { text: "Praktikum 3C" },
]);
</script>

<style scoped>
/* Sidebar dan Konten Transparan */
.sidebar-card, .content-card {
  background-color: rgba(26, 26, 26, 0.5) !important; /* Transparan */
  border: 1px solid #2b2a2b; /* Border abu-abu */
  padding: 16px;
}

/* Menghapus background putih bawaan Vuetify */
.transparent-list {
  background: transparent !important;
}
.transparent-list-item {
  background: transparent !important;
}

/* Divider Warna Abu-Abu */
.border-gray {
  border-color: #515151 !important;
}

/* Warna teks putih */
.text-white {
  color: #ffffff !important;
}
</style>

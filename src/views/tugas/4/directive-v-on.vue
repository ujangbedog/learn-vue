<template>
  <v-col cols="12" md="9">
    <v-card class="content-card d-flex flex-column align-center justify-center">
      <h3 class="text-h4 font-weight-bold text-white text-center">Directive v-on</h3>
      <v-btn 
        @click="counter += 1" 
        class="btn my-3">
        Counter
      </v-btn>

      <p class="text-white">
        Button di atas telah diklik sebanyak {{ counter }} kali.
      </p>

      <v-btn 
        @click="info('Selamat Pagi')" 
        class="btn my-3">
        Informasi
      </v-btn>

      <a 
        href="https://google.com" 
        @click.prevent="link()" 
        class="text-white"
        style="text-decoration: none;">
        Link to Google
      </a>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);

function info(text) {
  alert(text);
}

function link() {
  alert('Go to link');
}
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

.my-3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.btn {
  background: transparent;
  color: white;
  border: 1px solid #2b2a2b;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: #2b2a2b;
}

</style>

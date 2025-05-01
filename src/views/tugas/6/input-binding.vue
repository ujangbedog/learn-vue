<template>
  <v-col cols="12" md="9">
    <v-card class="styled-card pa-4">
      <h3 class="text-h4 font-weight-bold text-white text-center mb-6">Input Binding</h3>

      <v-text-field
        v-model="title"
        outlined
        variant="outlined" 
        color="white"
        label="Judul"
      />
      <p class="text-white">Judul: {{ title }}</p>
      <hr class="divider" />

      <v-text-field
        v-model.number="price"
        type="number"
        variant="outlined" 
        color="white"
        label="Harga"
      />
      <p class="text-white">Harga: {{ price }}</p>
      <hr class="divider" />

      <v-radio-group v-model="paket" row class="styled-radio mb-2">
        <v-radio label="Buku Laravel" value="A" color="grey lighten-1" />
        <v-radio label="Buku Vue" value="B" color="grey lighten-1" />
        <v-radio label="Buku Laravel + Vue" value="AB" color="grey lighten-1" />
      </v-radio-group>
      <p class="text-white">Pilihan Paket: {{ paket }}</p>
      <hr class="divider" />

      <v-select
        v-model="category"
        :items="categoriesOptions"
        item-title="text"
        item-value="value"
        label="Pilih Kategori"
        variant="outlined"
        color="white"
      ></v-select>
      <p class="text-white">Kategori: {{ category }}</p>
      <hr class="divider" />

      <label class="text-white font-weight-bold">Hobi</label>
      <v-checkbox
        v-for="hobby in hobbyOptions"
        :key="hobby"
        :label="hobby"
        :value="hobby"
        v-model="hobbies"
        class="styled-checkbox"
        color="grey lighten-1"
        hide-details
      />
      <p class="text-white">Hobi: {{ hobbies.join(', ') }}</p>
      <hr class="divider" />

      <v-select
        v-model="selectedCategories"
        :items="categoriesOptions"
        item-title="text"
        item-value="value"
        multiple
        label="Pilih Kategori"
        variant="outlined"
        color="white"
      />
      <p class="text-white">Kategori Terpilih: {{ selectedCategories }}</p>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const price = ref(null)
const paket = ref('')
const category = ref(null)
const hobbies = ref([])
const selectedCategories = ref(null)

const categoriesOptions = [
  { text: 'Belajar Matematika', value: '01' },
  { text: 'Belajar Fisika', value: '02' },
  { text: 'Belajar Kimia', value: '03' }
]

const hobbyOptions = ['Nonton', 'Jalan', 'Makan']
</script>

<style scoped>
.styled-card {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  border-radius: 12px;
}

.styled-input >>> .v-input__control {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 1px solid #2b2a2b;
  color: white;
}
.styled-input >>> .v-label {
  color: #ccc !important;
}
.styled-input >>> input {
  color: white !important;
}
.styled-input >>> .v-select__selection {
  color: white !important;
}
.styled-input >>> .v-chip {
  background-color: #444 !important;
  color: white !important;
  border: 1px solid #2b2a2b;
}

.styled-checkbox >>> .v-selection-control {
  min-height: 0;
  margin-bottom: 4px;
}

.styled-checkbox >>> .v-selection-control__input {
  width: 20px;
  height: 20px;
  border: 2px solid white !important; /* Border putih */
  background-color: rgba(26, 26, 26, 0.5) !important;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styled-checkbox >>> .v-selection-control--dirty .v-selection-control__input {
  background-color: #fff !important; /* Warna saat dicentang */
  border-color: #fff !important;
}

.styled-checkbox >>> .v-selection-control--dirty .v-selection-control__input::after {
  content: "✓"; /* Tanda centang */
  color: #000;
  font-size: 14px;
  position: absolute;
}

.styled-checkbox >>> .v-label {
  color: #ccc !important;
  margin-left: 8px;
}

.divider {
  border: none;
  border-top: 1px solid #2b2a2b;
  margin: 16px 0;
}

.styled-radio >>> .v-selection-control__input {
  background-color: rgba(26, 26, 26, 0.5) !important;
  border: 2px solid #2b2a2b !important;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: relative;
}

.styled-radio >>> .v-selection-control--dirty .v-selection-control__input {
  background-color: white !important;
  border: 2px solid white !important;
}

.styled-radio >>> input:checked ~ .v-selection-control__input::after {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  display: block;
}

.styled-radio >>> .v-label {
  color: #ccc !important;
}
</style>

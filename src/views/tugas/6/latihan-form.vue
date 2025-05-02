<template>
  <v-col cols="12" md="9">
    <v-card class="content-card">
      <v-container>
        <h3 class="text-h4 font-weight-bold text-white text-center mb-4">Form Input Penjualan</h3>
        <v-form @submit.prevent="submitForm" v-model="valid">
          <v-text-field
            label="Nama Produk"
            v-model="form.namaProduk"
            :rules="[rules.required]"
            variant="outlined"
            color="white"
            class="mb-4 text-white"
          ></v-text-field>

          <v-textarea
            label="Deskripsi Produk"
            v-model="form.deskripsi"
            variant="outlined"
            color="white"
            class="mb-4 text-white"
          ></v-textarea>

          <v-select
            :items="['Elektronik', 'Pakaian', 'Makanan', 'Aksesoris']"
            label="Kategori"
            v-model="form.kategori"
            :rules="[rules.required]"
            variant="outlined"
            color="white"
            class="mb-4 text-white"
          ></v-select>

          <v-radio-group v-model="form.metodePembayaran" row class="styled-radio mb-4">
            <label class="text-white mb-2">Metode Pembayaran</label>
            <v-radio label="Transfer Bank" value="bank"></v-radio>
            <v-radio label="E-Wallet" value="ewallet"></v-radio>
            <v-radio label="COD" value="cod"></v-radio>
          </v-radio-group>

          <v-text-field
            label="Harga (Rp)"
            type=" number"
            v-model="form.harga"
            variant="outlined"
            color="white"
            class="mb-4 text-white"
          ></v-text-field>

          <v-date-picker
            v-model="form.tanggal"
            :max="new Date().toISOString().substr(0, 10)"
            color="deep-gray accent-4"
            header-color="deep-gray"
            variant="outlined"
            class="mb-4 text-white"
          ></v-date-picker>

          <v-btn type="submit" class="btn" :disabled="isSubmitting">
            <span v-if="isSubmitting">
              <v-progress-circular indeterminate color="white" size="24"></v-progress-circular> 
              Submitting...
            </span>
            <span v-else>Submit</span>
          </v-btn>
        </v-form>

        <v-divider class="my-4"></v-divider>

        <div v-if="submittedData">
          <div class="result-box">
            <b>Output:</b>
            <pre>{{ submittedData }}</pre>
          </div>
        </div>
      </v-container>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const isSubmitting = ref(false);
const valid = ref(false);
const form = ref({
  namaProduk: '',
  deskripsi: '',
  kategori: '',
  metodePembayaran: '',
  harga: null,
  tanggal: null,
});
const rules = {
  required: (v) => !!v || 'Harus diisi',
};
const submittedData = ref(null);

const submitForm = async () => {
  if (valid.value) {
    isSubmitting.value = true;
    try {
      const API_URL = import.meta.env.VITE_API_URL.replace(/\/+$/, '');
      const res = await axios.post(`${API_URL}/orders`, form.value);
      submittedData.value = res.data;
      clearForm();
    } catch (err) {
      console.error(err);
    }

    isSubmitting.value = false;
  } else {
    alert('Form belum valid!');
  }
};

const clearForm = () => {
  form.value = {
    namaProduk: '',
    deskripsi: '',
    kategori: '',
    metodePembayaran: '',
    harga: null,
    tanggal: null,
  };
};
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

.btn {
  background: transparent;
  border: 1px solid #2b2a2b;
  border-radius: 8px;
  transition: all 0.2s ease;
  }

  .btn:hover {
  background-color: #2b2a2b;
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

.result-box {
  margin-top: 20px;
  background: #1e1e1e;
  padding: 16px;
  border: 1px solid #2b2a2b;
  border-radius: 8px;
  color: #cfcfcf;
  font-family: monospace;
  white-space: pre-wrap;
}
</style>

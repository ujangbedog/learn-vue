// Collection Component
export default {
  props: ['products'],
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    filteredProducts() {
      if (!this.searchQuery) return this.products;
      const query = this.searchQuery.toLowerCase();
      return this.products.filter(product => 
        product.name.toLowerCase().includes(query)
      );
    }
  },
  template: `
    <div>
      <div class="collection-header">
        <div class="container">
          <h2 class="text-center">Koleksi Lego</h2>
          <p class="text-center">Temukan set Lego favorit Anda</p>
        </div>
      </div>
      
      <div class="container">
        <div class="filter-bar">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div class="input-group">
                <span class="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </span>
                <input type="text" class="form-control" v-model="searchQuery" placeholder="Cari produk...">
              </div>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(product, index) in filteredProducts" :key="index">
            <div class="card h-100">
              <img :src="product.image" :alt="product.name" class="card-img-top product-image">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text fw-bold">Rp {{ product.price.toLocaleString('id-ID') }}</p>
                <button class="btn btn-primary" @click="$emit('buy-product', product)">Beli</button>
              </div>
            </div>
          </div>
          
          <div v-if="filteredProducts.length === 0" class="col-12 text-center py-5">
            <h4>Tidak ada produk yang ditemukan</h4>
            <p>Coba kata kunci pencarian lain</p>
          </div>
        </div>
      </div>
    </div>
  `
}; 
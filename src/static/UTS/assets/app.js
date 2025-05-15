// Import dependencies and components
import Home from './Home.js';
import Brand from './Brand.js';
import Collection from './Collection.js';
import { brands, products } from './data.js';

// Main Vue App
export const createApp = () => {
  return Vue.createApp({
    components: {
      'component-home': Home,
      'component-brand': Brand,
      'component-collection': Collection
    },
    data() {
      return {
        currentPage: 'home',
        brands,
        products,
        selectedProduct: {},
        orderQuantity: 1,
        showOrderSummary: false,
        purchaseModal: null
      }
    },
    mounted() {
      this.purchaseModal = new bootstrap.Modal(document.getElementById('purchaseModal'));
    },
    methods: {
      openPurchaseModal(product) {
        this.selectedProduct = product;
        this.orderQuantity = 1;
        this.showOrderSummary = false;
        this.purchaseModal.show();
      },
      processOrder() {
        this.showOrderSummary = true;
      }
    }
  });
}; 
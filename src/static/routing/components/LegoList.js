import { products } from '../data.js'

export default {
    data() {
        return {
            legos: products
        }
    },
    template: `
        <div>
            <h2>LEGO Collection</h2>
            <div class="lego-grid">
                <div v-for="lego in legos" :key="lego.id" class="lego-item">
                    <router-link :to="'/lego/' + lego.id">
                        <img :src="lego.image" :alt="lego.name">
                        <h3>{{ lego.name }}</h3>
                        <p>Rp {{ lego.price.toLocaleString() }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    `
} 
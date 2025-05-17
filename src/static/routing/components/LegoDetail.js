import { products } from '../data.js'

export default {
    data() {
        return {
            lego: null
        }
    },
    created() {
        const legoId = parseInt(this.$route.params.id)
        this.lego = products.find(p => p.id === legoId)
    },
    template: `
        <div v-if="lego" class="lego-detail">
            <h2>{{ lego.name }}</h2>
            <img :src="lego.image" :alt="lego.name">
            <p class="price">Rp {{ lego.price.toLocaleString() }}</p>
            <router-link to="/legos" class="back-link">← Back to LEGO Collection</router-link>
        </div>
        <div v-else>
            <h2>LEGO not found</h2>
            <router-link to="/legos">Back to LEGO Collection</router-link>
        </div>
    `
} 
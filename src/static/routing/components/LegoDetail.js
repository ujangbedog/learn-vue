import { products } from '../data.js'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            lego: null
        }
    },
    created() {
        const legoId = parseInt(this.id)
        this.lego = products.find(p => p.id === legoId)
    },
    beforeRouteLeave(to, from, next) {
        const confirmed = window.confirm('Apakah Anda yakin ingin meninggalkan halaman LEGO?');
        if (confirmed) {
            next();
        } else {
            next(false);
        }
    },
    template: `
        <div v-if="lego" class="lego-detail">
            <h2>{{ lego.name }}</h2>
            <img :src="lego.image" :alt="lego.name">
            <p class="price">Rp {{ lego.price.toLocaleString() }}</p>
            <router-link to="/legos" class="back-link">Kembali ke daftar LEGO</router-link>
        </div>
        <div v-else>
            <h2>LEGO tidak ditemukan</h2>
            <router-link to="/legos">Kembali ke daftar LEGO</router-link>
        </div>
    `
}
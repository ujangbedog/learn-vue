// Home Component
export default {
  template: `
    <div>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h1>Selamat Datang di Lego Shop Online</h1>
              <p class="lead">Temukan berbagai set Lego terbaik untuk semua usia dan minat!</p>
              <button class="btn btn-warning btn-lg" @click="$emit('navigate', 'collection')">Lihat Koleksi</button>
            </div>
            <div class="col-lg-6">
              <img src="../assets/images/HERO.jpg" alt="Lego Hero Image" class="img-fluid rounded">
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-5">
        <div class="container">
          <h2 class="text-center mb-5">Mengapa Memilih Kami?</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card h-100 text-center p-4">
                <div class="card-body">
                  <img src="../assets/images/original.png" alt="Original" class="mb-3" width="80">
                  <h5>Produk Original</h5>
                  <p>Semua produk Lego kami dijamin 100% original dan resmi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100 text-center p-4">
                <div class="card-body">
                  <img src="../assets/images/delivery.png" alt="Delivery" class="mb-3" width="80">
                  <h5>Pengiriman Cepat</h5>
                  <p>Nikmati pengiriman cepat ke seluruh Indonesia dalam 2-3 hari kerja.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100 text-center p-4">
                <div class="card-body">
                  <img src="../assets/images/customer-service.png" alt="Service" class="mb-3" width="80">
                  <h5>Layanan Pelanggan</h5>
                  <p>Tim layanan pelanggan kami siap membantu 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- New Arrivals -->
      <section class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-5">Produk Terbaru</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="../assets/images/LEGO-Star-Wars-X-Wing-Starfighter.png" alt="New Arrival 1" class="card-img-top product-image">
                <div class="card-body">
                  <h5 class="card-title">LEGO Star Wars X-Wing Starfighter™</h5>
                  <p class="card-text">Rp 4.599.000</p>
                  <button class="btn btn-primary">Lihat Detail</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="../assets/images/LEGO-City-Central-Train-Station.png" alt="New Arrival 2" class="card-img-top product-image">
                <div class="card-body">
                  <h5 class="card-title">LEGO City Train Station</h5>
                  <p class="card-text">Rp 1.699.000</p>
                  <button class="btn btn-primary">Lihat Detail</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="../assets/images/LEGO-Technic-McLaren-P1.png" alt="New Arrival 3" class="card-img-top product-image">
                <div class="card-body">
                  <h5 class="card-title">LEGO Technic McLaren P1™</h5>
                  <p class="card-text">Rp 8.699.000</p>
                  <button class="btn btn-primary">Lihat Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
}; 
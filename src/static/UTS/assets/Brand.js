// Brand Component
export default {
  props: ['brands'],
  template: `
    <div>
      <div class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-5">Brand Partners</h2>
          <div class="row">
            <div class="col-md-4 mb-4" v-for="(brand, index) in brands" :key="index">
              <div class="card h-100">
                <img :src="brand.image" :alt="brand.name" class="card-img-top brand-logo p-3">
                <div class="card-body">
                  <h5 class="card-title">{{ brand.name }}</h5>
                  <p class="card-text">{{ brand.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}; 
export const Counter = {
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  template: `
    <div>
      <h3>Counter Component</h3>
      <p>Count: {{ counter }}</p>
      <button @click="increment">+</button>
    </div>
  `,
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}; 
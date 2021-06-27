export default {
  state: {
    kafe: localStorage.getItem('kafe') || '',
    category: localStorage.getItem('category') || ''
  },
  mutations: {
    // setKafe(state, kafe) {
    //   state.kafe = kafe
    //   localStorage.setItem('kafe', kafe)
    // },
    // setCategory(state, category) {
    //   state.category = category
    //   localStorage.setItem('category', category)
    // },
    // setProduct(state, product) {
    //   state.product = product
    //   localStorage.setItem('product', product)
    // },
    setValue(state, { type, alias }) {
      state[type] = alias
      localStorage.setItem(type, alias)
    }
  },
  actions: {},
  getters: {
    kafe: state => state.kafe,
    category: state => state.category
  }
}
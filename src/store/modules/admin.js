export default {
  state: {
    kafeId: localStorage.getItem('kafeId') || '',
    categoryId: localStorage.getItem('categoryId') || ''
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
    setValue(state, { type, id }) {
      state[type] = id
      localStorage.setItem(type, id)
    }
  },
  actions: {},
  getters: {
    kafeId: state => state.kafeId,
    categoryId: state => state.categoryId
  }
}
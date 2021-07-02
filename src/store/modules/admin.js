export default {
  state: {
    kafeId: localStorage.getItem('kafeId') || '',
    categoryId: localStorage.getItem('categoryId') || '',
    productId: localStorage.getItem('productId') || '',
    basket: JSON.parse(localStorage.getItem('basket')) || [],
  },
  mutations: {
    setValue(state, { type, id }) {
      state[type] = id
      localStorage.setItem(type, id)
    },
    addToBasket(state, product) {
      state.basket.push(product)
      localStorage.setItem('basket', JSON.stringify(state.basket))
    }
  },
  actions: {},
  getters: {
    kafeId: state => state.kafeId,
    categoryId: state => state.categoryId,
    productId: state => state.productId,
    basket: state => state.basket
  }
}
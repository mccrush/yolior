export default {
  state: {
    kafeId: localStorage.getItem('kafeId') || '',
    categoryId: localStorage.getItem('categoryId') || '',
    productId: localStorage.getItem('productId') || '',
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    showBasket: localStorage.getItem('showBasket') || '',
  },
  mutations: {
    setValue(state, { type, id }) {
      state[type] = id
      localStorage.setItem(type, id)
    },
    addToBasket(state, product) {
      state.basket.push(product)
      localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    removeProductFromBasket(state, id) {
      state.basket = state.basket.filter(item => item.id !== id)
      localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    removeAllProductsInKafe(state, id) {
      state.basket = state.basket.filter(item => item.kafeId !== id)
      localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    setShowBasket(state, value) {
      state.showBasket = value
      localStorage.setItem('showBasket', value)
    }
  },
  actions: {},
  getters: {
    kafeId: state => state.kafeId,
    categoryId: state => state.categoryId,
    productId: state => state.productId,
    basket: state => state.basket,
    showBasket: state => state.showBasket
  }
}
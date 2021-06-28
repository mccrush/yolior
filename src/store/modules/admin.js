export default {
  state: {
    kafeId: localStorage.getItem('kafeId') || '',
    categoryId: localStorage.getItem('categoryId') || ''
  },
  mutations: {
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
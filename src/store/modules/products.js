import { db } from '@/firebase'

export default {
  state: {
    products: [],
    loadingProducts: false
  },
  mutations: {
    getProducts(state, products) {
      state.products = products
    },
    addProduct(state, item) {
      state.products.push(item)
    },
    removeProduct(state, id) {
      state.products = state.products.filter(item => item.id !== id)
    },
    changeLoadingP(state, value) {
      state.loadingProducts = value
    },
  },
  actions: {
    async getProducts({ commit }, { kafeId, categoryId }) {
      commit('changeLoadingP', true)
      let products = []
      const ref = db.collection('kafes').doc(kafeId).collection('categorys').doc(categoryId).collection('products')
      const snapshot = await ref.get()
      snapshot.forEach(doc => {
        products.push(doc.data())
      })

      commit('getProducts', products)
      commit('changeLoadingP', false)
    },
    async addProduct({ commit }, { item, kafeId, categoryId }) {
      try {
        const ref = db.collection('kafes').doc(kafeId).collection('categorys').doc(categoryId).collection('products')
        await ref.doc(item.id).set(item)
        return true
      } catch (error) {
        console.log('Error products.js, action addProduct(): ', error)
      }
    },
    async updateProduct({ commit, state }, { id, kafeId, categoryId }) {
      try {
        const item = state.products.find(item => item.id === id)
        const ref = db.collection('kafes').doc(kafeId).collection('categorys').doc(categoryId).collection('products')
        await ref.doc(id).update(item)
        return true
      } catch (error) {
        console.log('Error products.js, action updateProduct(): ', error)
      }
    },
    async removeProduct({ commit }, { id, kafeId, categoryId }) {
      try {
        const ref = db.collection('kafes').doc(kafeId).collection('categorys').doc(categoryId).collection('products')
        await ref.doc(id).delete()
        return true
      } catch (error) {
        console.log('Error products.js, action removeProduct(): ', error)
      }
    }
  },
  getters: {
    products: state => state.products,
    loadingProducts: state => state.loadingProducts
  }
}
import { db } from '@/firebase'

export default {
  state: {
    categorys: []
  },
  mutations: {
    getCategorys(state, categorys) {
      state.categorys = categorys
    },
    addKafe(state, item) {
      state.categorys.push(item)
    },
    removeKafe(state, id) {
      state.categorys = state.categorys.filter(item => item.id !== id)
    }
  },
  actions: {
    async getCategorys({ commit }) {
      let categorys = []
      const ref = db.collection('categorys')
      const snapshot = await ref.get()
      snapshot.forEach(doc => {
        categorys.push(doc.data())
      })

      commit('getcategorys', categorys)
    },
    async addCategory({ commit }, item) {
      try {
        const ref = db.collection('categorys')
        await ref.doc(item.id).set(item)
        return true
      } catch (error) {
        console.log('Error categorys.js, action addCategory(): ', error)
      }
    },
    async updateCategory({ commit, state }, id) {
      try {
        const item = state.categorys.find(item => item.id === id)
        const ref = db.collection('categorys')
        await ref.doc(id).update(item)
        return true
      } catch (error) {
        console.log('Error categorys.js, action updateCategory(): ', error)
      }
    },
    async removeCategory({ commit }, id) {
      try {
        const ref = db.collection('categorys')
        await ref.doc(id).delete()
        return true
      } catch (error) {
        console.log('Error categorys.js, action removeCategory(): ', error)
      }
    }
  },
  getters: {
    categorys: state => state.categorys,

  }
}
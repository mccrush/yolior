import { db } from '@/firebase'

export default {
  state: {
    kafes: [],
    loadingKafes: false
  },
  mutations: {
    getKafes(state, kafes) {
      state.kafes = kafes
    },
    addKafe(state, item) {
      state.kafes.push(item)
    },
    removeKafe(state, id) {
      state.kafes = state.kafes.filter(item => item.id !== id)
    },
    changeLoading(state, value) {
      state.loadingKafes = value
    },
  },
  actions: {
    async getKafes({ commit }) {
      commit('changeLoading', true)
      let kafes = []
      const ref = db.collection('kafes')
      const snapshot = await ref.get()
      snapshot.forEach(doc => {
        kafes.push(doc.data())
      })

      commit('getKafes', kafes)
      commit('changeLoading', false)
    },
    async addKafe({ commit }, item) {
      try {
        const ref = db.collection('kafes')
        await ref.doc(item.id).set(item)
        return true
      } catch (error) {
        console.log('Error kafes.js, action addKafe(): ', error)
      }
    },
    async updateKafe({ commit, state }, id) {
      try {
        const item = state.kafes.find(item => item.id === id)
        const ref = db.collection('kafes')
        await ref.doc(id).update(item)
        return true
      } catch (error) {
        console.log('Error kafes.js, action updateKafe(): ', error)
      }
    },
    async removeKafe({ commit }, id) {
      try {
        const ref = db.collection('kafes')
        await ref.doc(id).delete()
        return true
      } catch (error) {
        console.log('Error kafes.js, action removeKafe(): ', error)
      }
    }
  },
  getters: {
    kafes: state => state.kafes,
    loadingKafes: state => state.loadingKafes,
  }
}
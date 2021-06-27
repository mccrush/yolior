import { db } from '@/firebase'

export default {
  state: {
    kafes: []
  },
  mutations: {
    getKafes(state, kafes) {
      state.kafes = kafes
    },
    addKafe(state, item) {
      state.kafes.push(item)
    },
  },
  actions: {
    async getKafes({ commit }) {
      let kafes = []
      const ref = db.collection('kafes')
      const snapshot = await ref.get()
      snapshot.forEach(doc => {
        kafes.push(doc.data())
      })

      commit('getKafes', kafes)
    },
    async addKafe({ commit }, item) {
      try {
        const ref = db.collection('kafes')
        await ref.doc(item.id).set(item)
        return true
      } catch (error) {
        console.log('Error kafe.js, action addKafe(): ', error);
      }
    },
  },
  getters: {
    kafes: state => state.kafes,

  }
}
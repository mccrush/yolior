import { db } from '@/firebase'

export default {
  state: {
    kafes: []
  },
  mutations: {
    getKafes(state, kafes) {
      state.kafes = kafes
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
    }
  },
  getters: {
    kafes: state => state.kafes,

  }
}
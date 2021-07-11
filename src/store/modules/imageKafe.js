import { storage } from '@/firebase'

export default {
  state: {
    loadingKafesImage: false
  },
  mutations: {
    changeLoadingKafesImage(state, value) {
      state.loadingKafesImage = value
    },
  },
  actions: {
    async uploadKafeImage({ commit, state }, { kafeId }) {
      const storageRef = storage.ref()
      const kafeFolderRef = storageRef.child('kafes')
      const mountainImagesRef = kafeFolderRef.child(kafeId + '/' + kafeId + '.jpg')
    }
  },
  getters: {
    loadingKafesImage: state => state.loadingKafesImage,
  }
}
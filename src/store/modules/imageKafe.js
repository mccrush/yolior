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
    async uploadKafeImage({ commit, state }, { kafeId, file }) {
      try {
        const storageRef = storage.ref()
        const kafeFolderRef = storageRef.child('kafes')
        const fileName = kafeId + '.' + file.type.split('/')[1]
        const mountainImagesRef = kafeFolderRef.child(kafeId + '/' + fileName)

        const res = await mountainImagesRef.put(file)
        const resImageUrl = await res.ref.getDownloadURL()
        return resImageUrl
      } catch (error) {
        console.log('Error imageKafe.js, action uploadKafeImage(): ', error)
      }
    },
    async uploadCategoryImage({ commit, state }, { categoryId, kafeId, file }) {
      try {
        const storageRef = storage.ref()
        const kafeFolderRef = storageRef.child('kafes').child(kafeId).child('categorys')
        const fileName = categoryId + '.' + file.type.split('/')[1]
        const mountainImagesRef = kafeFolderRef.child(categoryId + '/' + fileName)

        const res = await mountainImagesRef.put(file)
        const resImageUrl = await res.ref.getDownloadURL()
        return resImageUrl
      } catch (error) {
        console.log('Error imageKafe.js, action uploadCategoryImage(): ', error)
      }
    }
  },
  getters: {
    loadingKafesImage: state => state.loadingKafesImage,
  }
}
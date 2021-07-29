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
    async deleteKafeImage({ commit }, { kafeId }) {
      try {
        const storageRef = storage.ref()
        const kafeFolderRef = storageRef.child('kafes')
        const mountainImagesRef = kafeFolderRef.child(kafeId + '/' + kafeId + '.jpeg')

        await mountainImagesRef.delete()
        return true
      } catch (error) {
        console.log('Error imageKafe.js, action deleteKafeImage(): ', error)
      }
    },
    async deleteCategoryImage({ commit }, { categoryId, kafeId }) {
      try {
        const storageRef = storage.ref()
        const kafeFolderRef = storageRef.child('kafes').child(kafeId).child('categorys')
        const mountainImagesRef = kafeFolderRef.child(categoryId + '/' + categoryId + '.jpeg')

        await mountainImagesRef.delete()
        return true
      } catch (error) {
        console.log('Error imageKafe.js, action deleteCategoryImage(): ', error)
      }
    },
    async deleteProductImage({ commit }, { productId, categoryId, kafeId }) {
      try {
        const storageRef = storage.ref()
        const kafeFolderRef = storageRef.child('kafes').child(kafeId).child('categorys').child(categoryId).child('products')
        const mountainImagesRef = kafeFolderRef.child(productId + '/' + productId + '.jpeg')

        await mountainImagesRef.delete()
        return true
      } catch (error) {
        console.log('Error imageKafe.js, action deleteProductImage(): ', error)
      }
    },
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
    },
    async uploadProductImage({ commit, state }, { productId, categoryId, kafeId, file }) {
      try {
        const storageRef = storage.ref()
        const kafeFolderRef = storageRef.child('kafes').child(kafeId).child('categorys').child(categoryId).child('products')
        const fileName = productId + '.' + file.type.split('/')[1]
        const mountainImagesRef = kafeFolderRef.child(productId + '/' + fileName)

        const res = await mountainImagesRef.put(file)
        const resImageUrl = await res.ref.getDownloadURL()
        return resImageUrl
      } catch (error) {
        console.log('Error imageKafe.js, action uploadProductImage(): ', error)
      }
    }
  },
  getters: {
    loadingKafesImage: state => state.loadingKafesImage,
  }
}
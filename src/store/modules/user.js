import { auth } from '@/firebase'

export default {
  state: {
    userId: null
  },
  mutations: {
    setUserId(state, value) {
      state.userId = value
    }
  },
  actions: {
    async logIn({ commit }, { email, password }) {
      try {
        await auth.signInWithEmailAndPassword(email, password)
        //console.log('user.js logIn(): Авторизация прошла успешно');
      } catch (err) {
        throw err
      }
    },
    async logOut({ commit }) {
      try {
        await auth.signOut()
        //console.log('user.js logOut(): Пользователь вышел из системы');
      } catch (error) {
        console.log('user.js logOut(): Ошибка при выходе из системы, err:', error)
      }
    }
  },
  getters: {
    userId: state => state.userId
  }
}
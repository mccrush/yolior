import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'

let app

auth.onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App).use(router).use(store).mount('#app')
    store.dispatch('getKafes')

    if (user) {
      store.commit('setUserId', user.uid)
    } else {
      store.commit('setUserId', '')
      console.log('main.js: user not signed: ', user)
    }
  }
})
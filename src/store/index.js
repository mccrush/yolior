import { createStore } from 'vuex'
import kafes from './modules/kafes'
import user from './modules/user'

export default createStore({
  modules: {
    kafes,
    user,
  }
})

import { createStore } from 'vuex'
import kafes from './modules/kafes'
import user from './modules/user'
import message from './modules/message'

export default createStore({
  modules: {
    kafes,
    user,
    message
  }
})

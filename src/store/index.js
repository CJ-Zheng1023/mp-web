import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'
import search from './modules/search'
import mark from './modules/mark'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    userModule: user,
    searchModule: search,
    markModule: mark
  }
})

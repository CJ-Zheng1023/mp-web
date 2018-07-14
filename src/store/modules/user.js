import axios from '../../config/axios'
const MODULE_CONTEXT = '/user'
export default {
  namespaced: true,
  state: {
    data () {
      return {
        loginCode: '',
        user: '',
        token: '',
        registerCode: ''
      }
    }
  },
  mutations: {
    login (state, data) {
      state.loginCode = data.code
      state.user = data.user
      state.token = data.token
    },
    register (state, data) {
      state.registerCode = data.code
    }
  },
  actions: {
    login: ({commit}, {username, password}) => {
      return new Promise((resolve, reject) => {
        axios({
          url: MODULE_CONTEXT + '/login',
          method: 'get'
          /* params: {
            username,
            password
          } */
        }).then(response => {
          commit('login', response.data)
          resolve()
        }).catch(e => {
          console.log(e)
          reject(e)
        })
      })
    },
    register ({commit}, {username, password}) {
      return new Promise((resolve, reject) => {
        axios({
          url: MODULE_CONTEXT + '/add',
          method: 'get'
          /* params: {
            username,
            password
          } */
        }).then(response => {
          commit('register', response.data)
          resolve()
        }).catch(e => {
          console.log(e)
          reject(e)
        })
      })
    }
  }
}

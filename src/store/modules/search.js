import axios from '../../config/axios'
const MODULE_CONTEXT = '/search'
export default {
  namespaced: true,
  state: {
    data () {
      return {
        ipcResult: '',
        patentList: '',
        pagination: ''
      }
    }
  },
  mutations: {
    searchIpc (state, data) {
      state.ipcResult = data.ipcResult
    }
  },
  actions: {
    searchIpc ({commit}, ipc) {
      return new Promise((resolve, reject) => {
        axios.get(MODULE_CONTEXT + `/ipc/${ipc}?token=${window.localStorage.getItem('token')}`).then(response => {
          commit('searchIpc', response.data)
          resolve()
        }).catch(e => {
          console.log(e)
          reject(e)
        })
      })
    }
  }
}

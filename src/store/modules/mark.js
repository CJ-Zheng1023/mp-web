import axios from '../../config/axios'
import Vue from 'vue'
const MODULE_CONTEXT = '/mark'
export default {
  namespaced: true,
  state () {
    return {
      addFlag: '',
      deleteFlag: '',
      markList: ''
    }
  },
  mutations: {
    showMarkList (state, data) {
      Vue.set(state, 'markList', data.markList)
    }
  },
  actions: {
    showMarkList ({commit}, an) {
      return new Promise((resolve, reject) => {
        axios.get(MODULE_CONTEXT + `/list/${an}?token=${window.localStorage.getItem('token')}`).then(response => {
          commit('showMarkList', response.data)
          resolve()
        }).catch(e => {
          console.log(e)
          reject(e)
        })
      })
    }
  }
}

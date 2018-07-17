import axios from 'axios'
import GLOBAL from './global'
import router from '../router/index'
axios.defaults.timeout = 15000
axios.defaults.baseURL = GLOBAL.BACK_END_URL
axios.interceptors.response.use(
  response => {
    let errorCode = response.data['error']
    if (errorCode) {
      switch (errorCode) {
        case '1':
          router.replace({path: '/'})
          break
        default:
          router.replace({path: '/'})
      }
    }
    return response
  },
  error => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('username')
    router.replace({path: '/'})
    return Promise.reject(error)
  }
)
export default axios

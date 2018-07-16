import axios from 'axios'
import GLOBAL from './global'
axios.defaults.timeout = 5000
axios.defaults.baseURL = GLOBAL.BACK_END_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default axios

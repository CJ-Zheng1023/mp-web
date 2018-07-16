import axios from 'axios'
import GLOBAL from './global'
axios.defaults.timeout = 15000
axios.defaults.baseURL = GLOBAL.BACK_END_URL
export default axios

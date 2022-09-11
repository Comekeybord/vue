import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import './assets/css/bootstrap.css'
import './index.css'

const app = createApp(App)

//配置全局axios
axios.defaults.baseURL = 'https://www.escook.cn'
app.config.globalProperties.$http = axios
app.mount('#app')

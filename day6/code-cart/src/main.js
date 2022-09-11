import { createApp } from 'vue'
import App from './App.vue'
//导入bootstrap
import './assets/css/bootstrap.css'
import './index.css'

//导入axios
import axios from 'axios'


const app = createApp(App)
//配置基础url
axios.defaults.baseURL = 'https://escook.cn'
//全局配置axios
app.config.globalProperties.$http = axios


app.mount('#app')

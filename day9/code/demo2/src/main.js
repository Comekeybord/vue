import Vue from 'vue'
// 引入elementui模块
import './element-ui/index'
import App from './App.vue'
import router from '@/router/index'
import { Loading } from 'element-ui'
// 导入axios
import axios from 'axios'
// 配置域名
// axios.defaults.baseURL = 'https://www.escook.cn'
axios.defaults.baseURL = 'http://localhost:8080'
// 声明loading加载器变量
let loadingInstans = null
// 配置请求拦截器
axios.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearea xxx'
  console.log(config);
  // 实例化loading效果
  loadingInstans = Loading.service({ fullscreen: true })
  return config//这是固定写法 不写返回就发不出去数据
})

// 配置响应拦截器
axios.interceptors.response.use(response => {
  // 关闭loading效果
  loadingInstans.close()
  return response
})
// 全局挂载axios
Vue.prototype.$http = axios

Vue.config.productionTip = false


const app = new Vue({
  render: h => h(App),
  // 挂载路由模块
  // router: router
  router
})


app.$mount('#app')
